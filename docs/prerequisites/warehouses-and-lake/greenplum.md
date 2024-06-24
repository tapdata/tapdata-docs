# Greenplum

import Content from '../../reuse-content/_enterprise-and-cloud-features.md';

<Content />

Greenplum Database is a massively parallel processing (MPP) database server with an architecture specially designed to manage large-scale analytic data warehouses and business intelligence workloads.

This article provides detailed instructions on adding a Greenplum database to TapData Cloud, facilitating seamless integration and data flow in your pipelines.

## Connect to Greenplum

1. [Log in to TapData Platform](../../user-guide/log-in.md).

2. In the left navigation panel, click **Connections**.

3. On the right side of the page, click **Create connection**.

4. In the pop-up dialog, select **Greenplum**.

5. On the page that you are redirected to, follow the instructions below to fill in the connection information for Greenplum.

   * Connection Information Settings

      * **Connection name**: Fill in a unique name that has business significance.
      * **Connection type**: Supports Greenplum as a source or target database.
      * **Host**: The database connection address.
      * **Port**: The service port of database.
      * **Database**: database name, a connection corresponding to a database, if there are multiple databases, you need to create multiple connections.
      * **Schema**: Schema name.
      * **extParams**: Additional connection parameters, default empty.
      * **User**: The database username.
      * **Password**: The database password.
      * **Log plugin name**: To read the data changes of Greenplum and achieve incremental data synchronization, you need to complete the installation of the plugin.
   * Advanced settings

      * **Timezone**: Defaults to the time zone used by the database, which you can also manually specify according to your business needs.
      * **Contain table**: The default option is **All**, which includes all tables. Alternatively, you can select **Custom** and manually specify the desired tables by separating their names with commas (,).
      * **Exclude tables**: Once the switch is enabled, you have the option to specify tables to be excluded. You can do this by listing the table names separated by commas (,) in case there are multiple tables to be excluded.
      * **Agent settings**: Defaults to **Platform automatic allocation**, you can also manually specify an agent.
      * **Model load time**: If there are less than 10,000 models in the data source, their information will be updated every hour. But if the number of models exceeds 10,000, the refresh will take place daily at the time you have specified.

6. Click **Connection Test**, and when passed, click **Save**.

   :::tip

   If the connection test fails, follow the prompts on the page to fix it.

   :::
