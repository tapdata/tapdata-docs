# KingbaseES-R6

import Content1 from '../../reuse-content/_enterprise-and-cloud-features.md';

<Content1 />

[KingbaseES](https://www.kingbase.com.cn/en/kingbasees1/index.htm) is a commercial relational database management system (RDBMS) developed by Beijing Kingbase Technology Inc. KingbaseES-R6 is compatible with most features of PostgreSQL 9.6. This document will guide you on how to add KingbaseES-R6 as a data source in TapData and use it as either a source or target database to build data pipelines.

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## Supported Versions and Architecture

KingbaseES R6 V8 to V9 in single-node architecture

:::tip

KingbaseES-R6 supports database modes for Oracle, PostgreSQL, and MySQL. Note that in Oracle mode, object names are in lowercase by default. For more information, see the [Kingbase ES official documentation](https://help.kingbase.com.cn/v8/index.html).

:::

## Supported Data Types

| **Category**            | **Data Types**                                               |
| ----------------------- | ------------------------------------------------------------ |
| String and Text         | character, character varying, text                           |
| Numeric Types           | smallint, integer, bigint, numeric, real, double precision   |
| Date and Time           | date, timestamp (without time zone), timestamp with time zone, time (without time zone), time with time zone, interval |
| Binary and Bit Types    | bytea, bit, bit varying                                      |
| Boolean Type            | boolean                                                      |
| Network and Identifiers | cidr, inet, macaddr, uuid                                    |
| Geometric Data Types    | point, line, lseg, box, path, polygon, circle                |
| XML and JSON            | xml, json                                                    |
| Array Type              | array (not supported when using the Walminer plugin for incremental data capture) |

## Supported Operations for Sync

**INSERT**, **UPDATE**, **DELETE**

:::tip

When KingbaseES-R6 is used as a target, you can choose write strategies through the advanced configuration of task nodes, such as updating or discarding on insert conflicts and inserting or just logging on update failures. You can also apply and execute source-database parsed operations like ADD COLUMN, CHANGE COLUMN, DROP COLUMN, and RENAME COLUMN.

:::

## Limitations

- When KingbaseES-R6 is used as a source database, capturing its DDL (like adding fields) is not supported, nor is specifying a time for incremental data capture.
- KingbaseES-R6 does not support storing `\0` in string types; TapData will automatically filter it to avoid exceptions.
- The Walminer plugin currently only supports connecting and merging shared mining.

## Considerations

- When using log-based plugins that rely on replication slots (e.g., **wal2json**), too many shared mining processes may cause WAL log accumulation, increasing disk pressure. It's recommended to reduce the number of mining processes or promptly delete unnecessary CDC tasks and replication slots.
- Plugins based on WAL logs (e.g., **walminer**) will frequently read and write to the `walminer_contents` table during shared mining, generating some load. However, since only single-task mining is currently supported, the impact is relatively small.

## Prerequisites

### As a Source Database

1. Log in to the KingbaseES-R6 database as an administrator.

2. Run the following command to create a user for data synchronization/development tasks.

   ```sql
   CREATE USER username WITH PASSWORD 'password';
   ```

   * **username**: The username.
   * **password**: The password.

3. Grant the necessary permissions to the newly created account based on your business requirements.

   ```mdx-code-block
   <Tabs className="unique-tabs">
   <TabItem value="Read Full Data Only">
   ```

   ```sql
   -- Connect to the database
   \c database_name
   
   -- Grant SELECT privileges on all tables in the target Schema
   GRANT SELECT ON ALL TABLES IN SCHEMA schema_name TO username;
   
   -- Grant USAGE privilege on the target Schema
   GRANT USAGE ON SCHEMA schema_name TO username;
   ```

   </TabItem>

   <TabItem value="Read Full and Incremental Data">

   ```sql
   -- Connect to the database
   \c database_name
   
   -- Grant SELECT privileges on all tables in the target Schema
   GRANT SELECT ON ALL TABLES IN SCHEMA schema_name TO username;
   
   -- Grant USAGE privilege on the target Schema
   GRANT USAGE ON SCHEMA schema_name TO username;
   
   -- Grant replication privilege
   ALTER USER username REPLICATION;
   ```

   </TabItem>
   </Tabs>

   * **database_name**: The database name.
   * **schema_name**: The Schema name.
   * **username**: The username.

4. To capture incremental data from the source, follow these additional steps:

   1. Modify the replication identity to **FULL** (logging the entire row for UPDATE/DELETE operations):

      ```sql
      ALTER TABLE schema_name.table_name REPLICA IDENTITY FULL;
      ```

      * **schema_name**: The Schema name.
      * **table_name**: The table name.

   2. Edit the `kingbase.conf` file, set `wal_level` to `logical`, and increase the `max_replication_slots` value as shown below:

      ```bash
      wal_level = logical
      # Set max_replication_slots to at least the number of tasks mining this source
      max_replication_slots = 30
      ```

   3. Update the `sys_hba.conf` file to grant access permissions for the newly created user.

      ```bash
      # Replace username with the created user
      local   replication     username                     trust
      host    replication     username  0.0.0.0/32         md5
      host    replication     username  ::1/128            trust
      ```

   4. Install the log plugin:

      * **wal2json**: Contact [technical support](../../support.md) to obtain the plugin and install it on the KingbaseES-R6 server.
      * **walminer**: Available in versions V87B and above. For usage details, see the [WalMiner Example](https://help.kingbase.com.cn/v8/admin/reference/walminer/walminer-4.html). This method does not rely on logical replication, does not require setting `wal_level` to `logical`, nor adjusting replication slots, but requires superuser privileges.

### As a Target Database

1. Log in to the KingbaseES-R6 database as an administrator.

2. Run the following command to create a user for data synchronization/development tasks.

   ```sql
   CREATE USER username WITH PASSWORD 'password';
   ```

   * **username**: The username.
   * **password**: The password.

3. Grant the necessary permissions based on your business needs.

   ```sql
   -- Connect to the database
   \c database_name;
   
   -- Grant USAGE and CREATE privileges on the target Schema
   GRANT CREATE, USAGE ON SCHEMA schema_name TO username;
   
   -- Grant read and write privileges on all tables in the target Schema
   GRANT SELECT, INSERT, UPDATE, DELETE, TRUNCATE ON ALL TABLES IN SCHEMA schema_name TO username;
   ```

   * **database_name**: The database name.
   * **schema_name**: The Schema name.
   * **username**: The username.

## Connect to KingbaseES-R6

1. [Log in to the TapData platform](../../user-guide/log-in.md).

2. In the left-hand navigation bar, click **Connections**.

3. On the right side of the page, click **Create**.

4. In the pop-up dialog, search for and select **KingbaseES-R6**.

5. On the next page, fill in the KingbaseES-R6 connection information as described below.

   ![KingbaseES-R6 Connection Example](../../images/kingbasees_r6_connection.png)

   * **Connection Settings**:
     * **Name**: Enter a unique name with business relevance.
     * **Type**: Select KingbaseES-R6 as the source or target database.
     * **Host**: The database connection address.
     * **Port**: The database service port, default is 54321.
     * **Database**: The database name, each connection corresponds to one database; if you have multiple databases, create multiple connections.
     * **Schema**: The Schema name.
     * **Extra Parameters**: Additional connection parameters, defaults to empty.
     * **Username**: The database username.
     * **Password**: The password for the database user.
     * **logPluginName**: To capture incremental data from KingbaseES-R6, follow the [Prerequisites](#prerequisites) to install the required plugin.
   * **Advanced Settings**:
     * **Timezone**: Default is UTC (0 timezone). Changing to another timezone may affect data synchronization timing. Affected fields include those without timezone information, such as `timestamp (without time zone)` and `time (without time zone)`. Fields with timezone information (e.g., `timestamp with time zone`, `time with time zone`) and `date` types are not affected.
     * **CDC Log Caching**: [Mining the source database's](../../user-guide/advanced-settings/share-mining.md) incremental logs, this feature allows multiple tasks to share incremental logs from the source database, avoiding redundant reads and thus significantly reducing the load on the source database during incremental synchronization. Upon enabling this feature, an external storage should be selected to store the incremental log.
     * **Contain Table**: The default option is **All**, which includes all tables. Alternatively, you can select **Custom** and manually specify the desired tables by separating their names with commas (,).
     * **Exclude Tables**: Once the switch is enabled, you have the option to specify tables to be excluded. You can do this by listing the table names separated by commas (,) in case there are multiple tables to be excluded.
     * **Agent Settings**: Defaults to **Platform automatic allocation**, you can also manually specify an agent.
     * **Model Load Time**: If there are less than 10,000 models in the data source, their schema will be updated every hour. But if the number of models exceeds 10,000, the refresh will take place daily at the time you have specified.
     * **Enable Heartbeat Table**: When the connection type is set to source or target, this option can be enabled. TapData will create a heartbeat table in the source database (_tapdata_heartbeat_table) and update it every 10 seconds (the database user must have the required permissions). Once the data replication/development task starts, the heartbeat task will automatically start. You can view the heartbeat task in the data source edit page.

6. Click **Test**, and after it passes, click **Save**.

   :::tip

   If the connection test fails, follow the on-screen prompts to resolve the issue.

   :::

## Node Advanced Features

When configuring data synchronization/transformation tasks with KingbaseES-R6 as the target node, you can enable or disable the **Ignore NotNull** option (disabled by default), which allows you to ignore NOT NULL constraints when creating tables in the target database.

![Node Advanced Features](../../images/kingbase-r6_advanced_settings.png)
