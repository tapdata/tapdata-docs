# Db2

IBM Db2, a relational database, offers high performance, scalability, and reliability for structured data storage and management. Tapdata supports Db2 as both a source and target database, aiding in rapid data linkage construction. This guide introduces connecting a Db2 data source on Tapdata.

## Supported Versions

Db2 versions 9.7 to 11.5, deployed on LUW (Linux, Unix, Windows) platforms

import Content1 from '../../../reuse-content/_beta.md';

<Content1 />

## Limitations

XML data types are not currently supported.

## Prerequisites

Before establishing the connection, it is essential to follow the necessary preparations outlined in the article. These preparations may include authorizing an account and performing other relevant steps to ensure a smooth and secure connection.
This article describes the steps to prepare for creating a Db2 data source connection. 

### As a Source Database

1. Execute the following commands in sequence to create a user for data replication/transformation tasks.
   On Linux, log in and execute the following commands to create a Db2 database user and set a password:

   ```bash
   -- Replace user_name with the desired username
   sudo useradd user_name
   sudo passwd user_name
   ```

2. Grant permissions to the newly created account. 
   - Log in to Db2 as a user with DBA privileges.
   - Execute the following commands to grant object management and data read/write permissions to a specific Schema:

     ```sql
     -- Replace user_name and schema_name with your desired username and Schema name
     GRANT ON SCHEMA schema_name TO USER user_name;
     ```

     :::tip

     Customize more granular permissions based on business needs. More details at [GRANT TABLE](https://www.ibm.com/docs/en/db2/11.1?topic=statements-grant-table-view-nickname-privileges).

     :::

3. Enable Incremental Data Collection for Tables.

   ```sql
   ALTER TABLE "schema_name"."table_name" DATA CAPTURE CHANGES;
   ```

   - **schema_name**: Enter Schema name.
   - **table_name**: Enter table name.

4. **Contact the Tapdata Team** for raw log collection components to capture Db2 incremental data.

5. **(Optional)** If the source table undergoes structural changes (e.g., field deletion, attribute modification), execute the following procedure in Db2 to ensure normal data reading:

   ```sql
   CALL SYSPROC.ADMIN_CMD('REORG TABLE schema_name.table_name')
   ```

   - **schema_name**: Enter Schema name.
   - **table_name**: Enter table name.

### As a Target Database

1. Execute the following commands in sequence to create a user for data replication/transformation tasks.
   On Linux, log in and execute the following commands to create a Db2 database user and set a password:

   ```bash
   -- Replace user_name with the desired username
   sudo useradd user_name
   sudo passwd user_name
   ```

2. Grant permissions to the newly created account. 
   - Log in to Db2 as a user with DBA privileges.
   - Execute the following commands to grant object management and data read/write permissions to a specific Schema:

     ```sql
     -- Replace schema_name and user_name with your desired Schema name and username
     GRANT CREATEIN, ALTERIN, DROPIN ON SCHEMA schema_name TO USER user_name;
     ```

     :::tip

     Customize more granular permissions based on business needs. More details at [GRANT TABLE](https://www.ibm.com/docs/en/db2/11.1?topic=statements-grant-table-view-nickname-privileges).

     :::

## Adding a Data Source

1. Log in to Tapdata Platform.

2. In the left navigation bar, click **Connections**.

3. Click **Create** on the right side of the page.

4. In the pop-up dialog box, search and select **Db2**.

5. On the redirected page, fill in the Db2 connection information as per the instructions below.

   ![Db2 Connection Example](../../images/db2_connection.png)

   * **Connection Settings**
     - **Connection Name**: Enter a unique name with business significance.
     - **Connection Type**: Supports Db2 as a source or target database.
     - **Database Address**: The database connection address.
     - **Port**: The database service port.
     - **Service Name**: The database name.
     - **Schema**: Schema name, one connection per Schema. For multiple Schemas, create multiple data connections.
     - **Connection String Parameters**: Extra connection parameters, default is empty.
     - **User**, **Password**: The database username and corresponding password.
     - **Grpc Server Host**, **Grpc Server Port**: Contact the [Tapdata Team](../../support.md) for raw log collection components to capture Db2 incremental data, default service port is **1031**.

   * **Advanced Settings**
     - **Contain table**: The default option is **All**, which includes all tables. Alternatively, you can select **Custom** and manually specify the desired tables by separating their names with commas (,).
     - **Exclude Tables**: Turn on this switch to set tables to exclude, separated by commas (,).
     - **Agent settings**: Defaults to **Platform Automatic Allocation**, you can also manually specify an agent.
     - **Model load time**: If there are less than 10,000 models in the data source, their information will be updated every hour. But if the number of models exceeds 10,000, the refresh will take place daily at the time you have specified.
     - **Enable heartbeat table**: This switch is supported when the connection type is set as the **Source&Target** or **Source**. Tapdata will generate a table named **tapdata_heartbeat_table** in the source database, which is used to monitor the source database connection and task health.
       :::tip
       After referencing and starting the data replication/development task, the heartbeat task will be activated. At this point, you can click **View heartbeat task** to monitor the task.
       :::

6. Click **Test**. After the test passes, click **Save**.

   :::tip

   If the connection test fails, follow the prompts on the page to fix it.

   :::