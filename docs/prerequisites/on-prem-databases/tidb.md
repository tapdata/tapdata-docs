# TiDB

import Content from '../../reuse-content/_enterprise-and-cloud-features.md';

<Content />

TiDB is an open-source distributed relational database designed and developed by PingCAP. It is a distributed database product that supports both online transaction processing and online analytical processing. After completing the Agent deployment, you can follow this tutorial to add a TiDB data source in TapData and use it as a source or target database to build data pipelines.

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::tip

To further simplify the usage process, TapData's TiDB connector integrates TiCDC, which parses data change logs into ordered row-level change data. For more principles and concept introductions, see [TiCDC Overview](https://docs.pingcap.com/zh/tidb/stable/ticdc-overview).

:::

## Supported Versions

TiDB 6.0.0 and above

## Precautions

* To ensure proper data synchronization, the TiDB cluster and the TapData engine (Agent) must be on the same intranet and able to communicate properly.

* When using TiDB as a source for incremental data synchronization, you need to check the following:

  * The tables to be synchronized must have a primary key or unique index, where the columns in the unique index cannot be NULL and cannot be virtual columns.

  * To avoid TiCDC garbage collection affecting transaction or incremental data extraction, it is recommended to set `SET GLOBAL tidb_gc_life_time= '24h'` to 24 hours.

  * Due to communication restrictions between TiDB components, when using Tapdata Cloud, the deployed Agent must be a [semi-managed instance](../../faq/agent-installation#semi-and-full-agent). 

## <span id="prerequisite">Preparation</span>

1. Log in to the TiDB database and execute the following command to create an account for data synchronization/development tasks.

   ```sql
   CREATE USER 'username'@'host' IDENTIFIED BY 'password';
   ```

   * **username**: The username.
   * **host**: The host that the account is allowed to log in from, a percentage sign (%) indicates any host.
   * **password**: The password.

   Example: Create an account named tapdata, allowing login from any host.

   ```sql
   CREATE USER 'tapdata'@'%' IDENTIFIED BY 'your_passwd';
   ```

2. Grant permissions to the newly created account.

```mdx-code-block
<Tabs className="unique-tabs">
<TabItem value="As Source Database">
```

```sql
-- Permissions required for full + incremental synchronization
GRANT SELECT ON *.* TO 'username' IDENTIFIED BY 'password';
```
</TabItem>

<TabItem value="As Target Database">

```sql
-- Grant permissions for a specific database
GRANT SELECT, INSERT, UPDATE, DELETE, ALTER, CREATE, CREATE ROUTINE, CREATE TEMPORARY TABLES, DROP ON database_name.* TO 'username';

-- Grant permissions for all databases
GRANT SELECT, INSERT, UPDATE, DELETE, ALTER, CREATE, CREATE ROUTINE, CREATE TEMPORARY TABLES, DROP ON *.* TO 'username';
```
</TabItem>
</Tabs>

* **database_name**: The name of the <span id="ticdc">database</span>.
* **username**: The username.

## Connect to TiDB

1. [Log in to TapData Platform](../../user-guide/log-in.md).

2. In the left navigation panel, click **Connections**.

3. On the right side of the page, click **Create**.

4. In the pop-up dialog, search and select **TiDB**.

5. On the page that you are redirected to, follow the instructions below to fill in the connection information for TiDB.

   ![TiDB Connection Example](../../images/tidb_connection_setting.png)

   * **Connection Information**:
      * **Name**: Enter a unique name that is meaningful for your business.
      * **Type**: Support using TiDB database as either a source or target.
      * **PD Server Address**: Enter the connection address and port of the PD Server. The default port number is **2379**. This parameter is required only when used as a source database.
      * **DB Address**: Enter the database connection address.
      * **Port**: The service port of the database.
      * **DB Name**: The name of the database, where each connection corresponds to one database. If you have multiple databases, you need to create multiple data connections.
      * **Username** and **Password**: The account and password for the database. For account creation and authorization methods, refer to the [Prerequisites](#prerequisite).
   * **Advanced Settings**:
      * **Other Connection String Parameters**: Additional connection parameters, which are empty by default.
      * **Timezone for Time Types**: Default to the timezone used by the database. You can also manually specify it based on your business requirements.
      * **CDC Log Caching**: [Mining the source database's](../../user-guide/advanced-settings/share-mining.md) incremental logs, this feature allows multiple tasks to share incremental logs from the source database, avoiding redundant reads and thus significantly reducing the load on the source database during incremental synchronization. Upon enabling this feature, an external storage should be selected to store the incremental log. This parameter is required only when used as a source database.
      * **Contain Tables**: Default to **All**, and you can also customize and list the tables to include, separated by commas (,).
      * **Exclude Tables**: When enabled, you can specify tables to exclude, separated by commas (,).
      * **Agent Setting**: Default to **Platform Auto Allocation**, but you can also specify it manually.
      * **Model Load Time**: If there are less than 10,000 models in the data source, their information will be updated every hour. But if the number of models exceeds 10,000, the refresh will take place daily at the time you have specified.
      * **Enable Heartbeat Table**: This switch is supported when the connection type is set as the **Source&Target** or **Source**. TapData Cloud will generate a table named **tapdata_heartbeat_table** in the source database, which is used to monitor the source database connection and task health.
   * **SSL Settings**: Choose whether to enable SSL connections to the data source to further enhance data security. After turn on this button, you will also need to upload a CA file, client certificate, and key, as well as fill in the client password. For more information, see [Generate Self-Signed Certificates](https://docs.pingcap.com/tidb/stable/generate-self-signed-certificates).

6. Click on **Test**, and after successful testing, click **Save**.

   :::tip

   If the connection test fails, follow the on-screen instructions to troubleshoot.

   :::
