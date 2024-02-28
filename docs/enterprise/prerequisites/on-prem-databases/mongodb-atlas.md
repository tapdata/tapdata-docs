# MongoDB Atlas

MongoDB Atlas is a multi-cloud application data platform provided by MongoDB. Tapdata supports building data pipelines with MongoDB Atlas as the source or target database.

This article describes how to add MongoDB Atlas to Tapdata.


## Supported Versions

MongoDB Atlas 5.0.15

:::tip

When synchronrizing data between MongoDB, it is recommended source/target database are 5.0 and above for ensure data compatibility.

:::

## Preparations

Before establishing the connection, it is essential to complete the necessary preparations outlined in the provided article. These preparations may include authorizing an account and performing other relevant steps to ensure a smooth and secure connection.

1. Log in to [MongoDB Atlas](https://cloud.mongodb.com/v2).

2. Set up network access control to ensure network connectivity.

   1. In the left navigation panel, click **Network Access**.

   2. On the right, click **ADD IP ADDRESS**.

   3. In the pop-up dialog, fill in the public address of the Tapdata Agent (CIDR format) and click **Confirm**.

      ![Set Network Whitelist](../../images/atlas_add_ip_address.png)

3. Create an account and grant permissions for database connectivity.

   1. In the left navigation panel, click **Database Access**.

   2. On the right side of the page, click **ADD NEW DATABASE USER**.

   3. In the pop-up dialog, select the authentication method and grant permissions.

      ![Create an account and authorize](../../images/atlas_create_user.png)

      In this case, we will use password authentication as an example to demonstrate the operation process. The permission selection instructions are as follows.

      * **As a Source Database**: Select **Built-in Role** as **Only read any database**.

      * **As a Target Database**: Select **Built-in Role** for **Read and Write to any Database**.

   4. Click **Add User**.

4. Gets database connection information.

   1. In the left navigation panel, click **Database**.

   2. Locate the target database and click **Connect**.

   3. In the pop-up dialog, select **Connect to your application** to get connection information, which will be used when connecting to the database.

      ![Get Connection Information](../../images/atlas_obtain_connection.png)

## Connect to MongoDB Atlas

1. Log in to Tapdata Platform.

2. In the left navigation panel, click **Connections**.

3. On the right side of the page, click **Create**.

4. In the pop-up **dialog**, select **MongoDB Atlas**.

5. Fill in the connection information for MongoDB Atlas on the redirected page, following the instructions provided below.

   ![MongoDB Connection Example](../../images/mongodb_atlas_connection_setting.png)

   * Connection Information Settings

      * **Connection name**: Fill in a unique name that has business significance.

      * **Connection type**: Supports MongoDB Atlas as a source or target database.

      * **Connection method**: Fixed in **URI Mode**.

      * **Database URI**: Fill in the Database URI connection information, and URI should include the username and password, which are concatenated in the format.

        For example, the connection string may look like: ` mongodb+srv://tapdata:Tap123456@cluster****.mongodb.net/demodata?retryWrites=true&w=majority`
        :::tip
        Be sure to set the database you want to connect in the connection string, for example, in the above example set to **demodata**, otherwise, it will cause the connection to fail and prompt for an error: 'datbaseName can not be null'.
        :::

      * **Connect using TLS/SSL**: Choose how you want to connect:

         * **TSL/SSL connection:** In cases where your database is located in an inaccessible subnet, Tapdata offers the option to establish a connection through a separate server within the network. This server acts as a TSL/SSL channel to facilitate the connection to the database. This method enables connectivity to the database even when it is in a subnet that would otherwise be inaccessible.
         * **Direct connection**: Tapdata will connect directly to the database and you need to set up security rules to allow access.

   * Advanced settings
      * **Contain table**: The default option is **All**, which includes all tables. Alternatively, you can select **Custom** and manually specify the desired tables by separating their names with commas (,).
      * **Exclude tables**: Once the switch is enabled, you have the option to specify tables to be excluded. You can do this by listing the table names separated by commas (,) in case there are multiple tables to be excluded.
      * **Agent settings**: Defaults to **Platform automatic allocation**, you can also manually specify an agent.
      * **Model load time**: If there are less than 10,000 models in the data source, their information will be updated every hour. But if the number of models exceeds 10,000, the refresh will take place daily at the time you have specified.
      * **Enable heartbeat table**: This switch is supported when the connection type is set as the **Source&Target** or **Source**. Tapdata will generate a table named **tapdata_heartbeat_table** in the source database, which is used to monitor the source database connection and task health.
        :::tip
        After referencing and starting the data replication/development task, the heartbeat task will be activated. At this point, you can click **View heartbeat task** to monitor the task.
        :::

6. Click **Test Connection**, and when passed, click **Save**.

   :::tip

   If the connection test fails, follow the prompts on the page to fix it.

   :::
