# Oracle to Kafka Real-Time Sync

In the era of big data, an increasing number of enterprises are required to synchronize data from traditional relational databases to big data processing platforms in real-time. This is done to support scenarios such as real-time data processing, data lake construction, data warehouse substitution, and more. As Oracle is a relational database system widely used in enterprise-level applications, the demand for its data to be synchronized to big data platforms is also on the rise.

This article introduces how to synchronize data from Oracle to Kafka with just a few drag-and-drop actions via Tapdata, meeting the requirements in big data supply scenarios.

## Scenario

As businesses grow, so does their data. Traditional relational databases face challenges in performance, scalability, and costs when handling big data. In contrast, big data processing platforms (e.g., Flink) offer capabilities for real-time data processing and complex data analysis tasks.

Therefore, synchronizing data from Oracle databases to big data platforms in real-time has become a significant requirement for many enterprises in big data supply scenarios. Typically, it offers the following benefits:

* **Real-time Data Synchronization**: Allows for the swift acquisition of the latest data, enabling real-time data processing and analysis. This leads to timely decision-making, identification of business opportunities, or real-time monitoring.
* **Reduce Load on the Source Database**: As Oracle is central to enterprise data storage, it might face high concurrent data write and read requests. By synchronizing data to Kafka, asynchronous processing can be achieved through the message queue, relieving the database of read stress and avoiding significant data extractions that might affect the source database operations using the T+1 sync method.
* **Unified Data Distribution**: Publishing data to the Kafka message queue ensures unified data distribution. Downstream applications can then consume the data they need, catering to diverse data consumption and processing requirements.
* **Decrease Business Dependency**: Interdependencies between different systems are decoupled, allowing each system to evolve independently. This reduces system interdependency, enhancing flexibility and maintainability.

![Real-time Synchronization from Oracle to Kafka](../images/oracl_to_kafka_architecture.png)

Tapdata, an efficient, reliable, and secure real-time data platform, offers an easy-to-use, feature-rich data transfer service. It aids in enhancing data development efficiency, allowing you to focus on your core business. Moreover, in large-scale data processing scenarios, you can achieve horizontal scaling by adding nodes or adjusting configurations.

In this case, we aim to read real-time data from the auto insurance claim table (**AUTO_CLAIM_Demo**) in the source Oracle database. We also process the incoming data to help us capture data changes. The processed data is then written to the Kafka data source in real-time. Downstream business applications can freely subscribe to and consume data from Kafka, setting up a real-time data synchronization pipeline.

## Precautions

* Ensure that the data size of a single Oracle record doesn't exceed the Kafka message limit (default is 1 MB) to prevent data write failures. If you encounter size issues, you can filter out large fields by adding an **Add/Delete Field** node between the Oracle and Kafka nodes during data transformation task configuration. Alternatively, you can modify Kafka's maximum message limit settings.
* Tapdata parses Oracle logs at an approximate speed of 10,000 QPS. If the incremental event rate exceeds this speed, it might lead to increased data processing delays.
* The raw log feature is currently not supported on the RAC-ASM deployment architecture and can't retrieve raw logs from non-primary nodes in the DG architecture.

## Preparations

Before creating a data transformation task, ensure that you have appropriately configured the relevant data sources:

1. [Configure Oracle Connection](../prerequisites/on-prem-databases/oracle.md)
2. [Configure Kafka Connection](../prerequisites/mq-and-middleware/kafka.md)



## Procedure

1. Log in to the Tapdata platform.

2. On the left navigation bar, select **Data Pipelines** > **Transforms**.

3. Click **Create** on the right side of the page.

4. On the left side of the page, drag and drop both Oracle and Kafka data sources to the canvas on the right, then connect them.

5. Click the Oracle data source and configure the panel on the right as follows:

   ![Oracle Node Basic Settings](../images/oracle_to_kafka_source_basic_settings.png)

   * **Basic Settings**      
     * **Node Name**: By default, it's the connection name. You can also set a meaningful name related to your business.
     * **Table**: Choose the source table to operate on. The structure of the table, including column names and types, will be displayed below. In this example, we are creating a data transformation task for single-table processing. If you need to handle multiple tables simultaneously, you can create a data replication task with a configuration process similar to this example.   
   * **Advanced Settings**      
     * **DDL Synchronization**      
       Decide whether to enable **DDL Event Collection**. When this switch is on, Tapdata will automatically collect DDL events (like adding new fields) from the source. If the target supports DDL writing, synchronization of DDL statements can be achieved.      
     * **Incremental Mode**      
       Choose between **Log CDC** and **Polling**.
       * **Log CDC** uses transaction logs from the data source for parsing and syncing incremental events.
       * **Polling** syncs incremental events by polling a field, usually unable to sync delete events. If you choose **Polling**, you need to specify the polling field, interval, and the number of rows read each time.
     * **Data Filter**      
       * **Fully Customizable Query**: By activating this, you can enter an SQL query statement to execute during the full data synchronization phase (not effective during the incremental phase). This allows for custom data extraction (e.g., data filtering, Join). For instance, you can enter `SELECT id, name, address FROM customer;`.
         :::tip
         Using this feature requires the target node to be a weak Scheme type data source (such as MongoDB/Kafka).
         ::: 
       * **Filter Settings**: Off by default. When turned on, you'll need to specify the data filtering conditions.      
     * **Batch Read Number**: During full synchronization, the number of records read per batch. The default is **100**.
     * **Data Source**
       * **Continuous Miner**: To reduce the latency of obtaining incremental data, turn this on when the Oracle version is below 19c. Turn it off for versions 19c and above.
       * **Fetch Size**: Only effective for continuous mining. If the source database update rate is low, choose a lower value to reduce latency. For a higher update rate, choose a higher value to improve throughput. The typical calculation formula is: `source data change QPS divided by 10`. Recommended values range from 1 to 1000.
       * **Large Transaction Event Boundar**: Transactions exceeding this duration enter a large transaction logic. Setting this too high might affect memory. After a large transaction, local disk caching occurs. Ensure disk cleaning when task anomalies arise.
       * **Associated Key Update**: Turning this off can enhance performance, but updates to associated keys will be ignored.
       * **Enable Sync LOB Type**: Turning this off can enhance performance, but LOB type (include BLOB/CLOB/NCLOB) parsing will be unreliable.
       * **Uncommitted Transaction Lifetime (minutes)**: Long uncommitted transactions may cause every task startup to start mining from that transaction. To avoid affecting the source database and incremental synchronization performance, Tapdata will clear transactions exceeding this duration. Adjust this duration according to business needs to avoid data inconsistency.
   * **Alert Settings**   
     By default, if the node's average processing time is continuously 1 minute or longer than 5 seconds, system notifications and email alerts will be sent. Adjust the rules or turn off alerts based on your business needs.

6. To display detailed information about data changes before and after, facilitating downstream business integration, insert a standard JS node between the Oracle and Kafka nodes.

   1. Point your cursor to the line between Oracle and Kafka, click the **+** icon, and select **Standard JS**.

      ![Add Standard JS Node](../images/oracle_to_kafka_add_js_node.png)

   2. Click the node, and on the right panel, input the following code. This creates a custom message body, including properties like `before`, `after`, `createTime`, and `tableName`, helping us acquire data changes before and after the increment.

      ```js
      var ret = {}
      ret.before = context.event.before;
      ret.after = record;
      ret.createTime = new Date();
      ret.tableName = context.tableName;
      return ret;
      ```

      :::tip

      For more on the JS node's functions and usage, see [Processing Node](../user-guide/data-pipeline/data-development/process-node.md).

      :::

   3. After setting, click **Test Run** at the bottom right. Click on the right to compare input and output data samples. If everything looks fine, click **Exit Full Screen** at the top right.

      ![Test Run](../images/oracle_to_kafka_dry_run.png)

7. Click the Kafka data source and configure the right-side panel as follows:

   ![Kafka Node Basic Settings](../images/oracle_to_kafka_target_basic_settings.png)

   * **Basic Settings**      
     * **Node Name**: Defaults to the connection name. You can also assign a meaningful name based on your business.
     * **Table**: Refers to the target Topic in Kafka. For this example, choose **kafka_demo_topic**. The platform will create the Topic automatically if it doesn't exist.
     * **Update Condition Field**: Choose the field determining data updates. In this case, choose **createTime**.
     * **Existing Data Handling**: Based on your business needs, if the target table doesn't have data or its structure doesn't match the source table, you can opt to **Clear the existing table structure and data of the target table**.
     * **Number of Writes Per Batch**: The number of items written per batch during full synchronization.
     * **Write the Maximum Waiting Time for Each Batch**: Evaluate based on the performance of the target database and network latency and set the maximum wait time in milliseconds.      
     * **Full Multi-Thread Writing**: The number of concurrent threads for full data writing. By default, it's **8**. Adjust based on the writing performance of the target end.      
     * **Incremental Multi-Thread Writing**: The number of concurrent threads for incremental data writing. It's off by default. Turn it on and adjust based on the writing performance of the target end.      
     * **Schema**: Displays the topic structure information, including field names and field types.         
   * **Advanced Settings** 
     Choose a data writing mode based on your business needs:
     * **Process by Event Type**: After selecting this, you'll also need to decide on data writing strategies for insert, update, and delete events.
     * **Append Write**: Only handle insert events, discarding updates and delete ions. Useful when only the latest data is valuable.
     * **Statistic Overwrite**: Delete all data in the target table and overwrite with source data. Suitable when the source and target data are kept in sync at all times.

8. After configuring all nodes, click **Save** to perform a dry run and ensure the data pipeline functions correctly.

9. Finally, click **Start** at the bottom right of the page.

   Your Oracle to Kafka data transformation task is now set up and ready to run. Make sure to monitor and manage tasks regularly, ensuring efficient and error-free data transmission.

## Result Verification

Based on the task settings described above, Tapdata will synchronize the **AUTO_CLAIM_DEMO** table from Oracle to Kafka. If data changes occur in the source table, the changes before and after the update will be written into the Kafka node through the JS node.

After waiting for the task to enter the incremental data replication phase, we first counted the number of messages in Kafka. It was found that the number of messages in the Topic matched the number of entries in the source table exactly, both being **95,877**.

```bash
# Count the number of messages in the Topic
kafka-run-class.sh kafka.tools.GetOffsetShell --broker-list 192.168.1.18:9092 --topic kafka_demo_topic 

# Return results, with the sum being 95,877
kafka_demo_topic:0:317747
kafka_demo_topic:1:320986
kafka_demo_topic:2:320044
```

We extracted one of the earliest written data and displayed the message result in JSON format for easier reading. The data sample synchronized during the full volume phase is as follows:

```json
// View the very first data
kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic kafka_demo_topic --max-messages 1 --from-beginning | jq .

// Sample returned result
{
  "createTime": "2023-04-16 04:05:26.587000",
  "after": {
    "SETTLED_DATE": "2023-03-06T12:31:02Z",
    "SETTLED_AMOUNT": 2800,
    "claim_id": "CID_02dyzrhu",
    "CLAIM_REASON": "WATER/HEATING/AC",
    "CLAIM_TYPE": "BUIDLING",
    "POLICY_ID": "PID_Dw6ypOhC",
    "CLAIM_DATE": "2023-03-06T12:31:02Z",
    "LAST_CHANGE": "2023-03-06T12:31:01.964589Z",
    "CLAIM_AMOUNT": 2800
  },
  "tableName": "AUTO_CLAIM_DEMO"
}
```

Next, we ran the following command on the Kafka node to start monitoring messages, and similarly, we displayed the message results in **JSON format**.

```bash
kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic kafka_demo_topic --max-messages 1 | jq .
```

We then performed a data change operation on the source table, adjusting the value of **SETTLED_AMOUNT** from **1000** to **1200**:

![Update source table data](../images/oracle_update_data.png)

After waiting for a while, on the Tapdata task monitoring page, we could see that Tapdata had synchronized this data update to Kafka.

Returning to our Kafka command line monitor, we also saw the latest data change message. Here, you can see the detailed data before and after the change, making it easy to integrate into downstream applications (like Flink, etc.).

```json
{
  "before": {
    "SETTLED_DATE": {
      "tapType": {
        "fraction": 3,
        "type": 1
      },
      "value": "2023-03-31T21:47:40Z"
    },
    "SETTLED_AMOUNT": 1000,
    "claim_id": "CID_01scxEy7",
    "CLAIM_REASON": "WATER/HEATING/AC",
    "CLAIM_TYPE": "BUIDLING",
    "POLICY_ID": "PID_tXePZRIG",
    "CLAIM_DATE": {
      "tapType": {
        "fraction": 3,
        "type": 1
      },
      "value": "2023-03-31T21:47:40Z"
    },
    "LAST_CHANGE": {
      "tapType": {
        "fraction": 3,
        "type": 1
      },
      "value": "2023-03-31T21:47:40.019518Z"
    },
    "CLAIM_AMOUNT": 1399
  },
  "createTime": "2023-04-16 04:23:57.559000",
  "after": {
    "SETTLED_DATE": "2023-03-31T21:47:40Z",
    "SETTLED_AMOUNT": 1200,
    "claim_id": "CID_01scxEy7",
    "CLAIM_REASON": "WATER/HEATING/AC",
    "CLAIM_TYPE": "BUIDLING",
    "POLICY_ID": "PID_tXePZRIG",
    "CLAIM_DATE": "2023-03-31T21:47:40Z",
    "LAST_CHANGE": "2023-03-31T21:47:40.019518Z",
    "CLAIM_AMOUNT": 1399
  },
  "tableName": "AUTO_CLAIM_DEMO"
}
Processed a total of 1 messages
```

## Task Management

On the task list page, you can also start/stop, monitor, edit, copy, reset, delete, and perform other operations on the task.

For

 specific operations, see [Managing Tasks](../user-guide/data-pipeline/data-development/monitor-task.md).
