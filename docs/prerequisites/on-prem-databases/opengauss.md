# openGauss

import Content from '../../reuse-content/_all-features.md';

<Content />

Please follow the instructions below to successfully add and use openGauss databases in TapData Cloud.

## Supported Versions

openGauss 3.0.0 and above

## Supported Field Types
<details>
<summary><b>Click to expand and view the detailed list</b></summary>

- smallint
- integer
- bigint
- numeric
- real
- double precision
- character
- character varying
- text
- bytea
- bit
- bit varying
- boolean
- date
- interval
- timestamp
- timestamp with time zone
- point
- line
- lseg
- box
- path
- polygon
- circle
- cidr
- inet
- macaddr
- uuid
- xml
- json
- tsvector
- tsquery
- oid
- regproc
- regprocedure
- regoper
- regoperator
- regclass
- regtype
- regconfig
- regdictionary

</details>

## <span id="prerequisite">Prerequisites</span>

1. Log in to the openGauss database and execute the following command to create an account for data synchronization/development tasks.

   ```sql
   CREATE USER username PASSWORD 'password';
   ```

   * **username**: The username.
   * **password**: The password.

2. Grant permissions to the newly created account. Here is a simple example, but it's recommended to set more fine-grained permissions based on your business needs.

   For granting permissions as a source:

   ```sql
   GRANT SELECT ON ALL TABLES IN SCHEMA schemaname TO username;
   ```

   For granting permissions as a target:

   ```sql
   GRANT INSERT, UPDATE, DELETE, TRUNCATE ON ALL TABLES IN SCHEMA schemaname TO username;
   ```

      * **schemaname**: The schema name that the target table belongs to.
      * **username**: The username.
## Add Data Source
1. Log in to the [TapData Cloud](https://cloud.tapdata.net/console/v3/).

2. In the left navigation pane, click on **Connection Management**.

3. Click on **Create Connection** on the right side of the page.

4. In the pop-up dialog, click on **Alpha Data Sources** and then select **openGauss**.

5. Complete the data source configuration according to the instructions below.

   * Connection Information

      * **Connection Name**: Provide a unique name with business significance.
      * **Connection Type**: You can choose to use openGauss database as a source or a target.
      * **Host**: The database connection address.
      * **Port**: The service port of the database.
      * **Database**: The database name, each connection corresponds to one database. If you have multiple databases, you need to create multiple data connections.
      * **Schema**: The schema name of the database.
      * **Additional Parameters**: Additional connection parameters, leave it empty by default.
      * **Username** and **Password**: The account and password of the database. Account creation and authorization method can be found in the [Prerequisites](#Prerequisites) section.
   
   * Advanced Settings
      * **Log Plugin**: Keep the default value as **PGOUTPUT**.
      * **Time Zone**: By default, it uses the time zone of the database. You can also manually specify it based on your business needs.
      * **Included Tables**: By default, it's set to **All**, but you can customize and enter the tables you want to include, separated by commas.
      * **Excluded Tables**: You can choose to exclude certain tables by turning on this switch and entering the table names, separated by commas.
      * **Agent Settings**: By default, it's set to **Platform Auto-Allocation**, but you can also specify it manually.
      * **Model Loading Frequency**: When the number of models in the data source is greater than 10,000, TapData will periodically refresh the models based on this parameter.
   
6. Click on **Test Connection**. If the test is successful, click on **Save**.

   :::tip

   If you encounter a connection test failure, please follow the on-screen instructions to fix it.

   :::

