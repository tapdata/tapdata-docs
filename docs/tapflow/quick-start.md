# Getting Started

TapFlow is a real-time data processing programming framework provided by TapData. It offers a range of APIs and command-line tools, allowing you to efficiently implement real-time data processing across homogeneous or heterogeneous data sources through programming. TapFlow can be used for quick implementations of data synchronization, real-time materialized views, real-time wide tables, multi-table processing, and other scenarios.

This guide will demonstrate how to build a real-time replication task using TapData Shell, helping you quickly manage data replication and streaming processes.

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## Step 1: Install TapData Shell

1. [Download and install Python 3](https://www.python.org/downloads/), version 3.6 or higher.

2. Run the following command to create a virtual environment. This isolates dependencies and avoids conflicts with the system Python environment.

   ```bash
   python3 -m venv tapcli_env
   ```

2. Activate the virtual environment by running:

   ```bash
   source tapcli_env/bin/activate
   ```

3. Install TapData Shell and its dependencies with the following command:

   ```bash
   pip3 install tapcli
   # or
   pip install tapcli
   ```

   Installation is now complete. To use TapData Shell after exiting the command line, you will need to activate the virtual environment again.
   
5. Type `tap` to launch TapData Shell.

6. Select your deployment type and configure the required authentication information. For this example, we’ll connect to TapData Cloud:

   ```bash
   Tap Flow requires TapData Live Data Platform (LDP) cluster to run. 
   If you would like to use with TapData Enterprise or TapData Community, type L to continue. 
   If you would like to use TapData Cloud, or you are new to TapData, type C or press ENTER to continue. 
   
   (if selected L)
   Please enter server:port of TapData LDP server: 
   Please enter access code
   
   (if pressed enter/C)
   # You may obtain the keys by logging onto TapFlow Cloud, and clicking: "User Center" on the top right, then copying & pasting the access key and secret key pair.
   # You can sign up for a new account from: https://cloud.tapdata.io if you don't have one
   Enter AK:   xxxxxxxxxxxxxxx
   Enter SK:   xxxxxxxxxxxxxxx
   ```

   * Press `C` or Enter to connect to TapData Cloud, then input your Access Key and Secret Key.
   * Press `L` to connect to a locally deployed TapData Enterprise platform, then input the server address and access code.

   <details>
   <summary>How to obtain access keys?</summary>

   <Tabs className="unique-tabs">
   <TabItem value="TapData Cloud Platform">

   Register and log in to [TapData Cloud](https://cloud.tapdata.net/). Click your username in the upper-right corner and select **User Center** to obtain the Access Key and Secret Key.

   ![Obtain TapData Cloud AK](../images/obtain_cloud_ak.png)

   </TabItem>

   <TabItem value="TapData Enterprise Platform">

   Contact your administrator for the TapData Enterprise login address. After logging in, click your username in the upper-right corner and select **Personal Settings** to get the access code.

   ![Obtain TapData Enterprise Access Code](../images/obtain_enterprise_ak.png)

   </TabItem>
   </Tabs>     

   </details>

Once authentication is verified, the command line will print a welcome message and display Agent information, indicating a successful connection. You can view help options with the `h` command.

```bash
Mon Oct 21 15:53:50 CST 2024 connecting remote server: https://cloud.tapdata.net ...
Mon Oct 21 15:53:50 CST 2024 Welcome to TapData Live Data Platform, Enjoy Your Data Trip!
========================================================================================================================
TapData Cloud Service Running Agent: 1
Agent name: agent-192*****67, ip: 172.17.0.3, cpu usage: 16%
```

## Step 2: Conect to Data Sources

Next, configure your data sources via TapData Shell. In this example, we’ll use MySQL as the source database and MongoDB as the target.

1. Run the following command to add a MySQL data source named `MySQL_ECommerce`.

   ```python
   # Define a dictionary variable mysql_json_config to store MySQL connection configuration
   mysql_json_config = {
       'database': 'ECommerceData',  # Database name
       'port': 3306,                 # MySQL port, typically 3306
       'host': '192.168.1.18',       # MySQL host address
       'username': 'your_username',  # Database username
       'password': 'your_passwd'     # Database password
   }
   
   # Create a data source connection object mysql_conn, referencing mysql_json_config configuration and saving as source
   mysql_conn = DataSource('mysql', 'MySQL_ECommerce', mysql_json_config).type('source').save()
   ```

   Once configured, the connection information is saved to the TapData platform, which will automatically test the connection and load its schema. Example output:

   ```python
   datasource MySQL_ECommerce creating, please wait...                                
   save datasource MySQL_ECommerce success, will load schema, please wait...          
   load schema status: finished
   ```

2. Use the following command to add MongoDB as the target database, saved as `MongoDB_ECommerce`.

   ```python
   # Define a dictionary variable mongodb_json_config to store MongoDB URI connection information
   mongodb_json_config = {
       "uri": "mongodb://your_username:your_passwd@192.168.1.18:27017/ecommerce?authSource=admin"
   }
   
   # Create a data source connection object mongodb_conn, referencing mongodb_json_config configuration and saving as target
   mongodb_conn = DataSource("mongodb", "MongoDB_ECommerce", mongodb_json_config).type("target").save()
   ```

:::tip

- TapData Shell supports [many popular data sources](../prerequisites/supported-databases.md), with slight configuration differences depending on the source. For more on permissions and parameters, see [Connecting Data Sources](../prerequisites/README.md).
- If you receive a “**load schema status: error**” error, it’s typically a permission or configuration issue. Retrying with the same name will overwrite the previous configuration with “**database MongoDB_ECommerce exists, will update its config**.”

:::

## Step 3: Create a Real-Time Sync Task

After configuring data sources, we can use TapData Shell to create a real-time sync task that replicates MySQL data to MongoDB.

1. Create a data flow task named **MySQL_to_MongoDB_Order_Sync** to synchronize order data from MySQL to MongoDB.

   ```python
   # Create a data synchronization task object and specify the source and target tables
   myflow = Flow("MySQL_to_MongoDB_Order") \
          .read_from("MySQL_ECommerce.ecom_orders") \
          .write_to("MongoDB_ECommerce.orders_collection") \
          .save()
   ```

   In this example, `read_from` specifies MySQL’s `ecom_orders` table as the data source, while `write_to` sets MongoDB’s `orders_collection` as the target. The task is saved in a pending state with the following prompt:

   ```python
   Flow updated: source added
   Flow updated: sink added
   ```

2. Start the sync task. TapData will automatically perform a full sync, then transition to incremental sync, capturing real-time changes in the source table and syncing to the target.

   ```python
   myflow.start()
   ```

   The system will confirm task status, e.g.:

   ```python
   Task start succeed
   ```

3. During task operation, you can check the status and statistics with the command:

   ```python
   stats MySQL_to_MongoDB_Order
   ```

   Example output:

   ```bash
   job current status is: running, qps is: 0.0, total rows: 198881, delay is: 253ms
   ```

   Additionally, you can monitor progress or debug with `logs <flow name/id>`.

4. (Optional) To stop the sync task, use `stop <flow name/id>`.

## See also

* [TapData Shell Reference](tapcli-reference/README.md)
* [Builde Real-Time Wide Tables](tapflow-tutorial/build-real-time-wide-table.md)
