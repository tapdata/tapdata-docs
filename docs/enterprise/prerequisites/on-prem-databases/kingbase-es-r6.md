# KingbaseES-R6

The Kingbase Database Management System (KingbaseES) is a commercial relational database management system developed independently by Beijing Kingbase Technology Inc, with proprietary intellectual property rights. KingbaseES-R6 is compatible with most features of Postgres 9.6 version. This article will introduce how to add KingbaseES-R6 data source in Tapdata, which can then be used as a source or target database to build data pipelines.

## Supported Versions

KingBaseES-V8R6

:::tip

The database modes supported by KingbaseES-R6 are Oracle, PostgreSQL, and MySQL. It should be noted that in Oracle mode, objects are lowercase by default. For more information, see [Kingbase ES Official Documentation](https://help.kingbase.com.cn/v8/index.html).

:::

import Content from '../../../reuse-content/_beta.md';

<Content />

## Incremental Data Sync Principle

By logical decoding function, Tapdata can extract the changes made to the transaction log and handle the changes in a user-friendly manner. Supported Change Data Capture (CDC) is as follows:

- Logical Decoding: Used to parse logical change events from Wal logs.
- Replication Protocol: Provides a mechanism for consumers to subscribe the database changes in real time.
- Export Snapshot: Allow export of consistent snapshots of the database (pg_export_snapshot)
- Replication Slot: Used to save consumer offsets and track subscriber progress.

## Preparations

### As a Source Database

1. Log in to KingbaseES-R6 database as an administrator.

2. Create a user and grant permissions.

   1. Execute the command in the following format to create an account for data synchronization/development tasks.

      ```sql
      CREATE USER username WITH PASSWORD 'password';
      ```

      * **username**: Username.
      * **password**: Password.

   2. Execute the command in the following format to grant permissions to the account.

      ```sql
      -- Enter the database to be authorized
      \c database_name
      
      -- Grant read permission on tables of the target schema
      GRANT SELECT ON ALL TABLES IN SCHEMA schema_name TO username;
      
      -- Grant USAGE permission on target schema
      GRANT USAGE ON SCHEMA schema_name TO username;
      
      -- Grant replication permission, not needed if only full data of the database is required
      ALTER USER username REPLICATION;
      ```

      * **database_name**: Database name.
      * **schema_name**: Schema name.
      * **username**: Username.
      
      :::tip
      
      If you only need to read the full data from KingbaseES-R6 (not including incremental changes), you do not need to proceed with the following steps.
      
      :::

3. Execute the command in the following format to change the replication identifier to **FULL** (using the entire row as the identifier). This attribute determines the fields logged when data is updated or deleted.

   ```sql
   ALTER TABLE schema_name.table_name REPLICA IDENTITY FULL;   
   ```

   * **schema_name**: Schema name.
   * **table_name**: Table name.

4. Log in to the server where KingbaseES-R6 is hosted, and choose the decoding plugin to install based on your business needs and version:

   - [Wal2json](https://github.com/eulerto/wal2json/blob/master/README.md) (Source table must have a primary key; otherwise, delete operations cannot be synchronized)

   - [Decoderbufs](https://github.com/debezium/postgres-decoderbufs)

   - [Pgoutput](https://www.postgresql.org/docs/15/sql-createsubscription.html)

   Next, we will demonstrate the installation process using **Wal2json** as an example.

   :::tip

   In this case, KingbaseES-R6 is deployed on the Docker platform (based on CentOS 7.9). If your environment differs from this case, you will need to adjust the versions of development packages, file paths, etc., mentioned in the following steps.

   :::

   1. As `root`, enter Docker and execute the following command to install environment dependencies, including llvm, clang, gcc, etc. Then, complete file copying to ensure that related files can be found during compilation.

      ```bash
      # Install dependencies
      yum install -y devtoolset-7-llvm centos-release-scl devtoolset-7-gcc* llvm5.0 make gcc git
      
      # Copy files
      mkdir -p /home/kingbase/Server/include/server
      cp -a /home/kingbase/Server/lib/plc/.server/* /home/kingbase/Server/include/server/
      ```

   5. As `kingbase` user, enter Docker and execute the following commands to install the plugin.

      ```bash
      # Clone and enter directory
      git clone https://github.com/eulerto/wal2json.git && cd wal2json
      
      # Compile and install
      make 
      
      # Copy the generated wal2json.so to the Kingbase package directory
      cp wal2json.so /home/kingbase/Server/lib/
      ```

   6. Execute the command `vim /home/kingbase/data/kingbase.conf` to modify the configuration file, changing the value of `wal_level` to `logical`.

   7. Restart KingbaseES-R6 during a low-traffic period.

5. (Optional) Test the log plugin.

   1. Connect to the KingbaseES-R6 database, switch to the database that needs to be synchronized, and create a test table.

      ```sql
      -- Suppose the database to be synchronized is demodata and the schema is public
      \c demodata
      
      CREATE TABLE public.test_decode
      (
        uid    integer not null
            constraint users_pk
                primary key,
        name   varchar(50),
        age    integer,
        score  decimal
      );
      ```

   2. Create a slot connection, using the wal2json plugin as an example.

      ```sql
      SELECT * FROM pg_create_logical_replication_slot('slot_test', 'wal2json');
      ```

   3. Insert a record into the test table.

      ```sql
      INSERT INTO public.test_decode (uid, name, age, score)
      VALUES (1, 'Jack', 18, 89);
      ```

   4. Check the logs to see the results of the operation that was just inserted.

      ```sql
      SELECT * FROM pg_logical_slot_peek_changes('slot_test', null, null);
      ```

      Returns the following example (vertical display):

      ```sql
      lsn  | 0/3E38E60
      xid  | 610
      data | {"change":[{"kind":"insert","schema":"public","table":"test_decode","columnnames":["uid","name","age","score"],"columntypes":["integer","character varying(50)","integer","numeric"],"columnvalues":[1,"Jack",18,89]}]}
      ```

   5. Once the slot connection and test table have been confirmed to be working, you can delete them.

      ```sql
      SELECT * FROM pg_drop_replication_slot('slot_test');
      DROP TABLE public.test_decode;
      ```

6. (Optional) To perform incremental synchronization using the last updated timestamp, you need to perform the following steps.

   1. In the source database, execute the following command to create a public function, which needs to replace the schema name.

      ```sql
      CREATE OR REPLACE FUNCTION schema_name.update_lastmodified_column()
        RETURNS TRIGGER LANGUAGE plpgsql AS $$
        BEGIN
            NEW.last_update = now();
            RETURN NEW;
        END;
      $$;
      ```

   2. Create fields and triggers, each table needs to be executed once, such as the table name **mytable**.

      ```sql
      // Add last_update column into table
      ALTER TABLE schema_name.mytable ADD COLUMN last_update timestamp DEFAULT now();
      
      // Create trigger
      CREATE TRIGGER trg_uptime BEFORE UPDATE ON schema_name.mytable FOR EACH ROW EXECUTE PROCEDURE
        update_lastmodified_column();
      ```

### As a Target Database

1. Log in to the KingbaseES-R6 database as an administrator.

2. Execute the following commands to create an account for data synchronization/development tasks.

   ```sql
   CREATE USER username WITH PASSWORD 'password';
   ```

   * **username**: The user name.
   * **password**: The password.

3. Execute the following command to grant permissions to the database user.

   ```sql
   -- Enter the database you want to authorize
   \c database_name;
   
   -- Grant USAGE and CREATE permissions to schema
   GRANT CREATE,USAGE ON SCHEMA schemaname TO username;
   
   -- Grant table read and write permissions to schema
   GRANT SELECT,INSERT,UPDATE,DELETE,TRUNCATE ON ALL TABLES IN SCHEMA schemaname TO username;
   ```

   * **database_name**: The database name.
   * **Schema**: Schema name.
   * **username**: The user name.


## Connect to KingbaseES-R6

1. Log in to Tapdata Platform.

2. In the left navigation panel, click **Connections**.

3. On the right side of the page, click **Create connection**.

4. In the pop-up dialog, select **KingbaseES-R6**.

5. On the page that you are redirected to, follow the instructions below to fill in the connection information for KingbaseES-R6.

   ![KingbaseES-R6 Connection Example](../../images/kingbasees_r6_connection.png)

   * **Connection Information Settings**
     * **Name**: Fill in a unique name that has business significance.
     * **Type**: Supports KingbaseES-R6 as a source or target database.
     * **Host**: The database connection address.
     * **Port**: The service port of database.
     * **Database**: Database name, a connection corresponding to a database, if there are multiple databases, you need to create multiple connections.
     * **Schema**: Schema name.
     * **ExtParams**: Additional connection parameters, default empty.
     * **User**: The database username.
     * **Password**: The database password.
     * **Log Plugin Name**: To read the data changes of KingbaseES-R6 and achieve incremental data synchronization, you need to complete the installation of the plugin according to the guidance of the [preparations](#Preparations).
   * **Advanced Settings**
     * **Timezone**: Defaults to the time zone used by the database, which you can also manually specify according to your business needs.
     * **CDC Log Caching**: [Mining the source database's](../../user-guide/advanced-settings/share-mining.md) incremental logs, this feature allows multiple tasks to share incremental logs from the source database, avoiding redundant reads and thus significantly reducing the load on the source database during incremental synchronization. Upon enabling this feature, an external storage should be selected to store the incremental log.
     * **Contain Table**: The default option is **All**, which includes all tables. Alternatively, you can select **Custom** and manually specify the desired tables by separating their names with commas (,).
     * **Exclude Tables**: Once the switch is enabled, you have the option to specify tables to be excluded. You can do this by listing the table names separated by commas (,) in case there are multiple tables to be excluded.
     * **Agent Settings**: Defaults to **Platform automatic allocation**, you can also manually specify an agent.
     * **Model Load Time**: If there are less than 10,000 models in the data source, their information will be updated every hour. But if the number of models exceeds 10,000, the refresh will take place daily at the time you have specified.
     * **Enable Heartbeat Table**: When the connection type is selected as **Source and Target** or **Source**, you can enable this option to create a heartbeat table named **_tapdata_heartbeat_table** in the source database. It will be updated every 10 seconds by Tapdata (requires relevant permissions) and used for monitoring the health of the data source connection and tasks.

6. Click **Connection Test**, and when passed, click **Save**.

   :::tip

   If the connection test fails, follow the prompts on the page to fix it.

   :::

