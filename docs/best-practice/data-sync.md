# Data Sync Best Practices
import Content from '../reuse-content/_all-features.md';

<Content />

This guide aims to provide best practices for data synchronization using TapData Cloud. We will discuss in detail aspects like data source analysis, task configuration, and monitoring, to help you build efficient and reliable data synchronization tasks.

## Analyze Data Sources

Analyzing the data sources is fundamental to data synchronization. It helps assess the resources needed for synchronization and formulate a detailed task configuration strategy, including:

| Category                            | Description                                                  |
| ----------------------------------- | ------------------------------------------------------------ |
| **Number of Tables to Synchronize** | Estimate the scale and complexity of the synchronization task based on this data. If there are many tables, create data synchronization tasks in batches or prioritize synchronizing key data. |
| **Volume of Data Changes**          | Estimate the daily data change volume to adjust the synchronization frequency and performance parameters, ensuring real-time or near-real-time data updates. |
| **Primary Keys/Unique Indexes**     | Primary keys or unique indexes play a crucial role in synchronization performance and data consistency. If absent, special configurations may be needed for these tables in subsequent task settings. |
| **Target Database Type**            | Confirm the type of target database. For heterogeneous data synchronization, ensure data type compatibility. For more information, see [Data Type Support](../user-guide/no-supported-data-type.md). |

:::tip

When subscribe an instance, you can choose the specifications based on the estimated scale of table data and data change volume. For more details, see [Specification Description](../billing/billing-overview.md#spec).

:::

## Configure and Optimize Tasks

Based on the understanding of the data source, the next step is to configure data synchronization tasks rationally to improve efficiency and accuracy.

| Category                         | Description                                                  |
| -------------------------------- | ------------------------------------------------------------ |
| **Task Segmentation Strategy**   | ●  **Based on Table Primary Key**: Filter out tables with and without primary keys during task configuration, and configure synchronization tasks for them separately to avoid affecting the synchronization performance of primary key tables. Additionally, when configuring tasks for tables without primary keys, manually select specific column combinations as update columns to ensure data uniqueness and avoid low synchronization efficiency due to full-field matching.<br />●  **Based on Data Size**: Configure tasks according to the size of tables (number of rows and data volume), e.g., set up separate synchronization tasks for large tables (like fact tables) and other tasks for multiple small tables (like dimension tables) to prevent large tables from impacting the overall synchronization task performance. |
| **Performance Tuning**           | Adjust synchronization parameters appropriately based on the scale and read-write performance of the data source, such as **Batch Read Number**, **Multi-thread Writing**, etc. |
| **DDL Synchronization Strategy** | Decide whether to change the source database's table structure. Understand the potential impacts of table structure changes (like adding or dropping columns) on the data synchronization process to avoid affecting normal business operations. For more information, see [DDL Synchronization Explanation](handle-schema-changes.md). |

## Monitor and Maintain

After starting the task, regularly check the task [monitoring page](../user-guide/copy-data/monitor-task.md) for details such as the synchronization rate during the full synchronization phase and changes in the source database data, so you can ensure timely identification and resolution of any issues. If you encounter task anomalies, consult the task logs for detailed [Error Codes and Solutions](../user-guide/error-code-solution.md) to facilitate troubleshooting.

## See also

* [Create Data Replication Tasks](../user-guide/copy-data/README.md)
* [Frequently Asked Questions](../faq/README.md)