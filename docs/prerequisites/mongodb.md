# MongoDB
import Content from '../reuse-content/_all-features.md';

<Content />

[MongoDB](https://www.mongodb.com/) is a popular open-source NoSQL database that stores and retrieves data in a flexible and scalable manner

This article provides a comprehensive guide on how to add MongoDB to Atlas-View, enabling you to leverage its scalability, flexibility, querying, and indexing capabilities for your data processing needs.

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## Supported Versions and Architectures

| Category     | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| Version      | MongoDB 3.6 and above. For MongoDB 3.4 and below, please choose the data source named **MongoDB Below 3.4**. |
| Architecture | Supports replica set and sharded cluster architectures. Additionally, full and incremental data synchronization can be performed from the secondary nodes of a sharded cluster |

## Supported Data Types

| Category            | Data Types                       |
| ------------------- | -------------------------------- |
| Strings and Code    | String, JavaScript, Symbol       |
| Numeric Types       | Double, Int32, Int64, Decimal128 |
| Document and Array  | Document, Array                  |
| Binary and ObjectId | Binary, ObjectId                 |
| Boolean Type        | Boolean                          |
| Date and Timestamp  | Date, Timestamp                  |
| Special Types       | Min Key, Max Key, Null           |

## Prerequisites
1. Make sure that the schema of the source database is a replica set or a sharding cluster. If it is standalone, you can configure it as a single-member replica set to open Oplog. For more information, see [Convert a Standalone to a Replica Set](https://docs.mongodb.com/manual/tutorial/convert-standalone-to-replica-set/).

2. To ensure sufficient storage space for the Oplog, it is important to configure it to accommodate at least 24 hours' worth of data. For detailed instructions, see [Change the Size of the Oplog](https://docs.mongodb.com/manual/tutorial/change-oplog-size/).

3. To create an account and grant permissions according to permission management requirements, follow the necessary steps.

   ```mdx-code-block
   <Tabs className="unique-tabs">
   <TabItem value="Grant Read Access to Specific Databases">
   ```
   ```sql
   use admin
   db.createUser(
     {
       user: "Atlas-View",
       pwd: "my_password",
       roles: [
          { role: "read", db: "database_name" },
          { role: "read", db: "local" },
          { role: "read", db: "config" },
          { role: "clusterMonitor", db: "admin" },
       ]
     }
   )
   ```
   </TabItem>

   <TabItem value="Grant Read Access to All Databases">

   ```sql
   use admin
   db.createUser(
     {
       user: "Atlas-View",
       pwd: "my_password",
       roles: [
          { role: "readAnyDatabase", db: "admin" },
          { role: "clusterMonitor", db: "admin" },
       ]
     }
   )
   ```
   </TabItem>
   </Tabs>

   :::tip

   In shard cluster architectures, the shard server is unable to retrieve user permissions from the config database. Therefore, it is necessary to create corresponding users and grant permissions on the master nodes of each shard.

   :::

4. When the source database is a cluster, in order to improve data synchronization performance, Atlas-View Cloud will create a thread for each shard and read the data. Before configuring data synchronization/development tasks, you also need to perform the following operations.

5. For sharded cluster architectures, to improve data synchronization performance, Atlas-View will create a thread for each shard to read data. Before configuring data synchronization/development tasks, you also need to perform the following operations:

   1. [Stop the Balancer](https://www.mongodb.com/docs/manual/reference/method/sh.stopBalancer/) to avoid data inconsistency caused by chunk migrations.
   2. [Clean up orphaned documents](https://www.mongodb.com/docs/manual/reference/command/cleanupOrphaned/) to avoid _id conflicts.


## Add MongoDB Data Source

1. [Log in to Atlas-View platform](../user-guide/log-in.md).

2. In the left navigation bar, click **Connections**.

3. Click **Create** on the right side of the page.

4. In the pop-up dialog, search and select **MongoDB**.

5. On the redirected page, fill in the MongoDB connection information as described below.

   ![MongoDB Connection Example](../images/connect_mongodb.jpg)

   * **Connection Settings**
      * **Name**: Fill in a unique name that has business significance.
      * **Type**: Supports MongoDB as a source or target database.
      * **Connection Mode**: Choose how you want to connect:
         * **URI Mode**: After selecting this mode, you will be required to provide the necessary information for the database URI connection. The connection string should include the username and password, which are concatenated in the format. For example, the connection string may look like: `mongodb://admin:password@192.168.0.100:27017/mydb?replicaSet=xxx&authSource=admin`.
         * **Standard mode**: After selecting this mode, you need to fill in the database address, name, account number, password and other connection string parameters.
   * **Advanced Settings**
      * **Use TLS/SSL Connection**: Choose according to your business needs:
        * **TLS/SSL Connection**: Atlas-View will connect to a separate server in the network that provides a [TLS/SSL channel](https://www.mongodb.com/docs/manual/core/security-transport-encryption/) to the database. If your database is located in an inaccessible subnet, try this method and upload the client private key file, provide the private key password, and choose whether to validate the server certificate.
        * **Direct Connection**: Atlas-View Cloud will connect directly to the database and you need to set up security rules to allow access.
      * **Number of Sampling Records for Loading Model**: Specifies the number of records to sample when loading the schema to ensure that the generated schema structure matches the source data. Default is **1000**.
      * **Fields Load Limit For Each Collection**: Limits the maximum number of fields loaded per collection to avoid slow schema generation due to excessive fields. Default is **1024**.
      * **CDC Log Caching**: [Mining the source database's](../user-guide/advanced-settings/share-mining.md) incremental logs, this feature allows multiple tasks to share incremental logs from the source database, avoiding redundant reads and thus significantly reducing the load on the source database during incremental synchronization. Upon enabling this feature, an external storage should be selected to store the incremental log.
      * **Contain Table**: The default option is All, which includes all tables. Alternatively, you can select Custom and manually specify the desired tables by separating their names with commas (,).
      * **Exclude Tables**: Once the switch is enabled, you have the option to specify tables to be excluded. You can do this by listing the table names separated by commas (,) in case there are multiple tables to be excluded.
      * **Agent Settings**: Defaults to Platform automatic allocation, you can also manually specify an agent.
      * **Model Load Time**: If there are less than 10,000 models in the data source, their schema will be updated every hour. But if the number of models exceeds 10,000, the refresh will take place daily at the time you have specified.
      * **Enable Heartbeat Table**: Atlas-View will create a _atlas_view_heartbeat_table heartbeat table in the source database and update it every 10 seconds (requires appropriate permissions) to monitor the health of the data source connection and tasks. The heartbeat task starts automatically after the data replication/development task starts, and you can view the [heartbeat task](../case-practices/best-practice/heart-beat-task.md) in the data source editing page.
   
6. Click **Test**. Once it passes, click **Save**.

   :::tip

   If the connection test fails, please follow the prompts on the page to troubleshoot and resolve the issue.

   :::
