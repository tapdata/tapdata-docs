# TiDB

TiDB is an open-source distributed relational database designed and developed by PingCAP. It is a versatile distributed database product that supports both online transaction processing (OLTP) and online analytical processing (OLAP). Once you have completed the deployment of the Agent, you can follow this tutorial to add a TiDB data source to Tapdata. This will enable you to use TiDB as either a source or target database to build data pipelines.

## Supported Versions

TiDB 5.4 and above.

## <span id="prerequisite">Prerequisites</span>

### As a Source Database

1. Log in to your TiDB database and execute the following command to create an account for data synchronization/development tasks.

   ```sql
   CREATE USER 'username'@'host' IDENTIFIED BY 'password';
   ```

   * **username**: The username.
   * **host**: The host allowed for this account to log in. The percent sign (%) indicates allowing any host.
   * **password**: The password.

   Example: Create an account named 'tapdata' that allows logins from any host.

   ```sql
   CREATE USER 'tapdata'@'%' IDENTIFIED BY 'Tap@123456';
   ```

2. Grant privileges to the newly created account.

```sql
GRANT SELECT, SHOW VIEW, CREATE ROUTINE, LOCK TABLES ON database_name.table_name TO 'username' IDENTIFIED BY 'password';
```

* **database_name.table_name**: The database and table to grant privileges to, separated by a dot (.), for example, demodata.customer.
* **username**: The username.
* **password**: The password.

:::tip

If you wish to synchronize TiDB data to a target database in real-time, you can configure polling fields for the source TiDB node when setting up data transformation tasks.

:::

### As a Target Database

1. Log in to your TiDB database and execute the following command to create an account for data synchronization/development tasks.

   ```sql
   CREATE USER 'username'@'host' IDENTIFIED BY 'password';
   ```

   * **username**: The username.
   * **password**: The password.
   * **host**: The host allowed for this account to log in. The percent sign (%) indicates allowing any host.

   Example: Create an account named 'tapdata'.

   ```sql
   CREATE USER 'tapdata'@'%' IDENTIFIED BY 'Tap@123456';
   ```

2. Grant privileges to the newly created account.

```sql
GRANT SELECT, SHOW VIEW, CREATE ROUTINE, LOCK TABLES ON database_name.table_name TO 'username' IDENTIFIED BY 'password';
```

* **database_name.table_name**: The database and table to grant privileges to, separated by a dot (.), for example, demodata.customer.
* **username**: The username.
* **password**: The password.

## Connect to TiDB

1. Log in to the [Tapdata platform](https://cloud.tapdata.net/console/v3/).

2. Click on **Connection Management** in the left navigation bar.

3. On the right side of the page, click on **Create Connection**.

4. On the redirected page, click on the **Beta Data Sources** tab, and then select **TiDB**.

5. Follow the instructions below to complete the data source configuration.

   * **Connection Information**:
      * **Name**: Enter a unique name that is meaningful for your business.
      * **Type**: Support using TiDB database as either a source or target.
      * **PDServer Address**: Enter the link address of the PDServer.
      * **DB Address**: Enter the database connection address.
      * **Port**: The service port of the database.
      * **DB Name**: The name of the database, where each connection corresponds to one database. If you have multiple databases, you need to create multiple data connections.
      * **Username** and **Password**: The account and password for the database. For account creation and authorization methods, refer to the [Prerequisites](#prerequisite).
      * **Other Connection String Parameters**: Additional connection parameters, which are empty by default.
   * **Advanced Settings**:
      * **Timezone for Time Types**: Default to the timezone used by the database. You can also manually specify it based on your business requirements.
      * **Enable Increment**: No need to configure. If you want to synchronize TiDB data to a target database in real-time, you can configure polling fields for the source TiDB node.
      * **Contain Tables**: Default to **All**, and you can also customize and list the tables to include, separated by commas (,).
      * **Exclude Tables**: When enabled, you can specify tables to exclude, separated by commas (,).
      * **Agent Setting**: Default to **Platform Auto Allocation**, but you can also specify it manually.
      * **Model Load Time**: When the number of models in the data source is greater than 10,000, Tapdata will periodically refresh the model according to this parameter setting.
   * **SSL Settings**: Choose whether to enable SSL connections to the data source to further enhance data security. After turn on this button, you will also need to upload a CA file, client certificate, and key, as well as fill in the client password.
   
6. Click on **Test Connection**, and after successful testing, click **Save**.

   :::tip

   If the connection test fails, follow the on-screen instructions to troubleshoot.

   :::
