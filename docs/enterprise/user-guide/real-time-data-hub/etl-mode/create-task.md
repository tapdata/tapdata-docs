# Generate Data Pipeline with One Click

In the Data Integration Mode, you can simply drag the source table to the target database to generate a data pipeline with one click, greatly simplifying the task configuration process and real-time synchronization of source data. This article introduce how to generate a data pipeline.

## Procedure

1. Log in to Tapdata.

2. In the left navigation panel, click **Real-Time Data Hub**.

3. On this page, you can conveniently view the data source information you have entered. The page is divided into two columns labeled **Sources** and **Targets & Services** by Tapdata Cloud. This helps you distinguish between the source and target data sources and provides a clear overview of your data connections.

   ![Data Integration Mode Page](../../../images/view_etl_dashboard.png)

4. (Optional) Click the 🔍 icon to find the source table you want to synchronize and drag it to the right target data source.

5. In the pop-up dialogenter the task name and choose whether to run the task.

   ![Create Task](../../../images/create_etl_task.gif)

   - **Only Save**: Save the task without running it. You can now click on the task name in the target data card to customize the task further. On the redirected task configuration page, you can add [processing nodes](../../data-pipeline/data-development/process-node) to meet requirements such as table structure adjustment (e.g., adding fields), table merging, and building wide tables. Once the setup is complete, click **Start** in the upper right corner of the page.

   - **Save and Run**: No additional action is required. Tapdata Cloud will automatically create a data transformation task and run it to synchronize your source tables in real-time to the selected target data source. In this case, the **customer** table in the source MySQL will be synchronized to MongoDB in real-time.

      You can also click the task name in the target data card to enter the task monitoring page to see the detailed operation status. For more information, see [Monitoring Tasks](../../data-pipeline/data-development/monitor-task.md).

