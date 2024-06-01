# KingbaseES-R3

import Content from '../../reuse-content/_all-features.md';

<Content />

The Kingbase Database Management System (KingbaseES) is a commercial relational database management system developed independently by Beijing Kingbase Technology Inc, with proprietary intellectual property rights. This article will introduce how to add KingbaseES-R3 data source in TapData Cloud, which can then be used as a source or target database to build data pipelines.

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## Supported Versions

KingBaseES-V8R3

import Content1 from '../../reuse-content/_alpha.md';

<Content1 />

## Prerequisites

1. Log in to the KingbaseES-R3 database as an administrator.

2. Execute the following commands to create an account for data synchronization/development tasks.

   ```sql
   CREATE USER username WITH PASSWORD 'password';
   ```

   * **username**: Username.
   * **password**: Password.

3. Grant permissions to the newly created account as required or customize permission control based on business needs.

```mdx-code-block
<Tabs className="unique-tabs">
<TabItem value="As Source">
```

```sql
-- Enter the database for which you want to grant permissions
\c database_name

-- Grant SELECT permission on all tables in the source schema
GRANT SELECT ON ALL TABLES IN SCHEMA schema_name TO username;

-- Grant USAGE permission on the source schema
GRANT USAGE ON SCHEMA schema_name TO username;
```

</TabItem>

<TabItem value="As Target">

```sql
-- Enter the database for which you want to grant permissions
\c database_name;

-- Grant CREATE and USAGE permissions on the target schema
GRANT CREATE, USAGE ON SCHEMA schema_name TO username;

-- Grant READ and WRITE permissions on all tables in the target schema
GRANT SELECT, INSERT, UPDATE, DELETE, TRUNCATE ON ALL TABLES IN SCHEMA schema_name TO username;
```
</TabItem>
</Tabs>

* **database_name**: Database name.
* **schema_name**: Schema name.
* **username**: Username.


## Connect to KingbaseES-R3

1. [Log in to TapData Platform](../../user-guide/log-in.md).

2. In the left navigation panel, click **Connections**.

3. On the right side of the page, click **Create**.

4. In the pop-up dialog box, search for and select **KingbaseES-R3**.

5. On the redirected page, fill in the connection information for KingbaseES-R3 as described below.

   ![KingbaseES-R3 Connection Example](../../images/kingbasees_r3_connection.png)

   * **Connection Information Settings**
     * **Name**: Fill in a unique name that has business significance.
     * **Type**: Supports KingbaseES-R3 as a source or target database. As a source, incremental data synchronization is not supported.
     * **Host**: The database connection address.
     * **Port**: The service port of database.
     * **Database**: Database name, a connection corresponding to a database, if there are multiple databases, you need to create multiple connections.
     * **Schema**: Schema name.
     * **ExtParams**: Additional connection parameters, default empty.
     * **User**: The database username.
     * **Password**: The database password.
   * **Advanced Settings**
     * **Contain Table**: The default option is **All**, which includes all tables. Alternatively, you can select **Custom** and manually specify the desired tables by separating their names with commas (,).
     * **Exclude Tables**: Once the switch is enabled, you have the option to specify tables to be excluded. You can do this by listing the table names separated by commas (,) in case there are multiple tables to be excluded.
     * **Agent Settings**: Defaults to **Platform automatic allocation**, you can also manually specify an agent.
     * **Model Load Time**: If there are less than 10,000 models in the data source, their information will be updated every hour. But if the number of models exceeds 10,000, the refresh will take place daily at the time you have specified.
   
6. Click **Test**. Once the test is successful, click **Save**.

   :::tip

   If the connection test fails, follow the prompts on the page to fix it.

   :::