# Dameng

import Content from '../../reuse-content/_all-features.md';

<Content />

Dameng Database Management System (DM) is a new generation of large-scale general-purpose relational databases, providing comprehensive support for SQL standards and mainstream programming language interfaces/development frameworks. It adopts row-column hybrid storage technology, achieving a balance between OLAP and OLTP, and satisfying the needs of HTAP hybrid application scenarios.

After completing the Agent deployment, you can follow this tutorial to add a Dameng data source in TapData Cloud, and subsequently use it as either a source or a target database to build data pipelines.

## Supported Versions

DM 7.x, 8.x

import Content1 from '../../reuse-content/_beta.md';

<Content1 />

## Prerequisites

Before connecting to the Dameng database, you need to complete some preparatory work regarding database account authorization:

* [As a source database](#source)
* [As a target database](#target)

### <span id="source">As a Source Database</span>

1. Log in to the Dameng database with an account that has DBA privileges.

2. Execute the following commands in sequence to create a user for data replication/transformation tasks.

   ```sql
   CREATE USER username IDENTIFIED BY "password" DEFAULT TABLESPACE table_space_name;
   ```
   
   * **username**: The username.
   * **password**: The password.
   * **table_space_name**: The tablespace name.
   
3. Grant permissions to the newly created account. You can also customize permission control based on your business needs.

   ```sql
   -- Replace the username in the following command with the actual username
   GRANT dba TO username;
   
   -- Or use the following more fine-grained authorization
   GRANT SELECT TABLE, SELECT VIEW TO username;
   GRANT SELECT ON "SYS"."V$RLOG" TO username;
   GRANT SELECT ON "SYS"."V$ARCHIVED_LOG" TO username;
   ```
   
4. To capture data changes in the source database for incremental synchronization, you need to enable the database archiving function and archived logs by following these steps:

   :::tip

   You can also execute the `SELECT para_name, para_value FROM v$dm_ini WHERE para_name IN ('ARCH_INI','RLOG_APPEND_LOGIC');` command to check if this function is already enabled. If the value in the **PARA_VALUE** column is **1**, it means the function is enabled, and you can skip this step.

   :::

   ```sql
   -- Change the database status to MOUNT
   ALTER DATABASE MOUNT;
   
   -- Configure local archiving; the specified directory will be created automatically if it does not exist
   -- FILE_SIZE represents the archive file size, space_limit represents the space size limit
   ALTER DATABASE ADD ARCHIVELOG 'DEST = /bak/dmdata/dameng, TYPE = local, FILE_SIZE = 1024, SPACE_LIMIT = 0';
   
   -- Enable archiving mode
   ALTER DATABASE ARCHIVELOG;
   
   -- Enable supplemental logging; if there are primary key columns, only the primary key column information will be recorded when UPDATE/DELETE is performed
   ALTER SYSTEM SET 'RLOG_APPEND_LOGIC'=1 MEMORY;
   
   -- Change the database status to OPEN
   ALTER DATABASE OPEN;
   ```

### <span id="target">As a Target Database</span>

1. Log in to the Dameng database with an account that has DBA privileges.

2. Execute the following commands in sequence to create a user for data replication/transformation tasks.

   ```sql
   CREATE USER username IDENTIFIED BY "password" DEFAULT TABLESPACE table_space_name;
   ```

   * **username**: The username.
   * **password**: The password.
   * **table_space_name**: The tablespace name.

3. Grant permissions to the newly created account. You can also customize permission control based on your business needs.

   ```sql
   -- Replace the username in the following command with the actual username
   GRANT CREATE TABLE, DELETE TABLE, INSERT TABLE, SELECT TABLE, UPDATE TABLE, CREATE INDEX TO username;
   ```

## Adding a Data Source

1. [Log in to TapData Platform](../../user-guide/log-in.md).

2. In the left navigation bar, click **Connections**.

3. Click **Create** on the right side of the page.

4. In the pop-up dialog box, search and select **Dameng**.

5. On the redirected page, fill in the connection information for the Dameng database according to the following instructions:

   * **Connection Basic Settings**
     * **Connection Name**: Fill in a unique name that has business significance.
     * **Connection Type**: Supports Dameng as a source or target database.
     * **Host**: The database connection address.
     * **Port**: The service port of the database.
     * **Database**: Database name, a connection corresponding to a database, if there are multiple databases, you need to create multiple connections.
     * **Schema**: The schema name. When creating a database user, Dameng database will automatically create a schema with the same name as the username (in uppercase). If you need to connect to multiple schemas, you need to create multiple data connections.
     * **username**: The database username.
     * **Password**: The database password.
     * **Connection Parameters**: Additional connection parameters, default is empty.
     * **Time Zone**: Defaults to the time zone used by the database, but you can also manually specify it based on business needs.
   * **Advanced Settings**
     * **Include Tables**: Defaults to **All**. You can also choose to customize and enter the tables to include, separated by commas (,).
     * **Exclude Tables**: Turn on this switch to set tables to exclude, separated by commas (,).
     * **Agent settings**: Defaults to **Platform Automatic Allocation**, you can also manually specify an agent.
     * **Model load time**: If there are less than 10,000 models in the data source, their information will be updated every hour. But if the number of models exceeds 10,000, the refresh will take place daily at the time you have specified.
     * **Enable heartbeat table**: This switch is supported when the connection type is set as the **Source&Target** or **Source**. TapData Cloud will generate a table named **tapdata_heartbeat_table** in the source database, which is used to monitor the source database connection and task health.
       :::tip
       After referencing and starting the data replication/development task, the heartbeat task will be activated. At this point, you can click **View heartbeat task** to monitor the task.
       :::

6. Click **Test**. After the test passes, click **Save**.

   :::tip

   If the connection test fails, follow the prompts on the page to fix it.

   :::
