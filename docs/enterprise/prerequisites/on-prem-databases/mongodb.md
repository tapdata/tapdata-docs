# MongoDB

After installing the Agent, the next step is to establish a connection between the Agent and MongoDB through Tapdata. This connection is crucial as it allows you to utilize the MongoDB data source for various data replication or development tasks.

Tapdata supports the integration of MongoDB as both the source and target database for building data pipelines. This article provides a comprehensive guide on how to add MongoDB to Tapdata, enabling you to leverage its scalability, flexibility, querying, and indexing capabilities for your data processing needs.

## Supported Versions

MongoDB 3.2, 3.4, 3.6, 4.0, 4.2

:::tip

You should use 4.0 or higher versions of the source and target databases since the data reading mechanism relies on MongoDB's Change Stream.

:::

## Preparations

import Content from '../../../reuse-content/_preparations.md';

<Content />


### As a Source Database

1. Make sure that the schema of the source database is a replica set or a sharding cluster. If it is standalone, you can configure it as a single-member replica set to open Oplog.
   For more information, see [Convert a Standalone to a Replica Set](https://docs.mongodb.com/manual/tutorial/convert-standalone-to-replica-set/).

2. To ensure sufficient storage space for the Oplog, it is important to configure it to accommodate at least 24 hours' worth of data. For detailed instructions, see [Change the Size of the Oplog](https://docs.mongodb.com/manual/tutorial/change-oplog-size/).

3. To create an account and grant permissions according to permission management requirements, follow the necessary steps.

   :::tip

   In shard cluster architectures, the shard server is unable to retrieve user permissions from the config database. Therefore, it is necessary to create corresponding users and grant permissions on the master nodes of each shard.

   :::

   * Grant read role to specified database (e.g. demodata)

      ```bash
      use admin
      db.createUser({
          "user" : "tapdata",
          "pwd"  : "my_password",
          "roles" : [
              {
                  "role" : "clusterMonitor",
                  "db" : "admin"
              },
              {
                  "role" : "read",
                  "db" : "demodata"
              }，
              {
                  "role" : "read",
                  "db" : "local"
              },
              {
                  "role" : "read",
                  "db" : "config"
              }
          ]
      }
      ```
      > Only when using MongoDB version 3.2, it is necessary to grant the **read** role to the local database.

   * Grant read role to all databases.

      ```bash
      use admin
       db.createUser({
          "user" : "tapdata",
          "pwd"  : "my_password",
          "roles" : [
              {
                  "role" : "clusterMonitor",
                  "db" : "admin"
              },
              {
                  "role" : "readAnyDatabase",
                  "db" : "admin"
              }
          ]
      }
      ```

4. When configuring the MongoDB URI, it is advisable to set the write concern to **majority** (`w=majority`) to mitigate the risk of data loss in the event of a primary node downtime.

5. When the source database is a cluster, in order to improve data synchronization performance, Tapdata will create a thread for each shard and read the data. Before configuring data synchronization/development tasks, you also need to perform the following operations.

   * Turn off the Balancer to avoid the impact of chunk migration on data consistency. For more information, see [Stop the Balancer](https://docs.mongodb.com/manual/reference/method/sh.stopBalancer/).
   * Clears the orphaned documents due to failed chunk migration to avoid _id conflicts. For more information, see [Clean Up Orphaned Documents](https://docs.mongodb.com/manual/reference/command/cleanupOrphaned/).



### As a Target Database

Grant write role to specified database (e.g. demodata) and **clusterMonitor** role for data validation, e.g.:

```bash
use admin
db.createUser({
  "user" : "tapdata",
  "pwd"  : "my_password",
  "roles" : [
      {
          "role" : "clusterMonitor",
          "db" : "admin"
      },
      {
          "role" : "readWrite",
          "db" : "demodata"
      },
      {
          "role" : "read",
          "db" : "local"
      }
  ]
}
```

:::tip

Only when using MongoDB version 3.2, it is necessary to grant the read role to the local database.

:::



## Connect to MongoDB

1. Log in to Tapdata Platform.

2. In the left navigation panel, click **Connections**.

3. On the right side of the page, click **Create connection**.

4. In the pop-up dialog, select **MongoDB**.

5. Fill in the connection information for MongoDB on the redirected page, following the instructions provided below.

   ![MongoDB Connection Example](../../images/mongodb_connection.png)

    * Connection Information Settings

        * **Connection name**: Fill in a unique name that has business significance.

        * **Connection type**: Supports MongoDB as a source or target database.

        * **Connection method**: Choose how you want to connect:
            * **URI mode**: After selecting this mode, you will be required to provide the necessary information for the database URI connection. The connection string should include the username and password, which are concatenated in the format.

              For example, the connection string may look like: ` mongodb://admin:password@192.168.0.100:27017/mydb?replicaSet=xxx&authSource=admin`.

            * **Standard mode**: After selecting this mode, you need to fill in the database address, name, account number, password and other connection string parameters.

    * Advanced settings

        * **Connect using TLS/SSL**: Choose how you want to connect:
          * **TSL/SSL connection:** In cases where your database is located in an inaccessible subnet, Tapdata offers the option to establish a connection through a separate server within the network. This server acts as a TSL/SSL channel to facilitate the connection to the database. This method enables connectivity to the database even when it is in a subnet that would otherwise be inaccessible.
          * **Direct connection**: Tapdata will connect directly to the database and you need to set up security rules to allow access.
        * **CDC Log Caching**: [Mining the source database's](../../user-guide/advanced-settings/share-mining.md) incremental logs, this feature allows multiple tasks to share incremental logs from the source database, avoiding redundant reads and thus significantly reducing the load on the source database during incremental synchronization. Upon enabling this feature, an external storage should be selected to store the incremental log.
        * **Contain table**: The default option is **All**, which includes all tables. Alternatively, you can select **Custom** and manually specify the desired tables by separating their names with commas (,).
        * **Exclude tables**: Once the switch is enabled, you have the option to specify tables to be excluded. You can do this by listing the table names separated by commas (,) in case there are multiple tables to be excluded.
        * **Agent settings**: Defaults to **Platform automatic allocation**, you can also manually specify an agent.
        * **Model load time**: If there are less than 10,000 models in the data source, their information will be updated every hour. But if the number of models exceeds 10,000, the refresh will take place daily at the time you have specified.

6. Click **Connection Test**, and when passed, click **Save**.

   :::tip

   If the connection test fails, follow the prompts on the page to fix it.

   :::
