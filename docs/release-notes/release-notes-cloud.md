# TapData Cloud Release Notes

import Content from '../reuse-content/_cloud-features.md';

<Content />

To enhance the user experience, TapData Cloud continuously enriches and optimizes product features and rectifies known defects by releasing new versions. This article provides an update log for TapData Cloud, helping you grasp the new feature specifications more effectively.

### 2025-01-24

#### Bug Fixes

- Fixed an issue where heartbeat task startup failures prevented data synchronization tasks from starting properly.
- Fixed a problem where notification settings  were not applied after saving.

### 2025-01-15

#### New Features

- Enhanced [Sybase](../prerequisites/on-prem-databases/sybase.md)-to-PostgreSQL synchronization scenario, adding index migration and **sequence** synchronization features, further improving migration automation and ensuring sequence data consistency.

#### Feature Optimizations

- Optimized the Oracle connection test feature, adding prompts for mismatched case sensitivity between username and schema to improve user experience.

#### Bug Fixes

- Fixed the issue where shared data mining tasks initiated by the admin user could not be used properly by other users.

### 2024-12-30

#### Enhancements

- Added the ability to download log files from the task monitoring page for easier fault diagnosis.
- Optimized engine startup to eliminate the need for MongoDB configuration during initialization.
- Expanded error code coverage and provided more detailed solution hints.

#### Bug Fixes

- Fixed a problem where tasks synchronizing only primary key tables using regex continued to log "new table detected" after adding non-primary key tables.

### 2024-12-17

#### Enhancements

- Optimized and added new engine error codes to help users quickly locate the cause of issues.

#### Bug Fixes

- Fixed an issue where the system failed to start when configuring SSL connections for MongoDB as an intermediate database.
- Fixed an issue where data was not updated to the target during incremental synchronization when synchronizing Oracle tables with multi-column composite primary keys to GaussDB (DWS).
- Fixed an issue where the task incorrectly reported missing table creation privileges after synchronizing some tables to MySQL.
- Fixed a system error that occurred when viewing the source node list of a data mining task.
- Fixed an issue where the row count displayed in the real-time data platform's table details was inconsistent with the actual row count.

### 2024-11-29

#### Enhancements

- Enabled copy all selected table names during task configuration, improving operational efficiency.
- Expanded the range of built-in error codes for better issue identification and diagnosis.
- Enhanced milestone tracking and display logic during task execution.
- Improved log viewing experience for script processing nodes by supporting split log display.

#### Bug Fixes

- Fixed an issue where syncing PostgreSQL to SQL Server failed to sync newly added partitioned child tables if the parent table’s partitions were not created before task execution.
- Resolved an issue where MongoDB indexes were not correctly loaded, causing schema loading failures.
- Fixed an issue where data extraction tasks could get stuck at the table structure replication stage.


### 2024-11-15

#### New Features

- Added support for real-time synchronization of PostgreSQL partitioned tables to SQL Server.

#### Enhancements

- Expanded the range of built-in error codes for faster issue identification and diagnosis.

#### Bug Fixes

- Fixed an issue where resetting tasks on the edit page failed, causing a “current status not allowed” error when saving the task.
- Resolved an issue where removing and re-adding a table being synchronized in a replication task failed to resume synchronization correctly.

### 2024-10-30

#### New Features

- Added HTTPS connection support for [Elasticsearch data sources](../prerequisites/on-prem-databases/elasticsearch.md), enhancing data transmission security to meet more stringent data security and compliance requirements.
- Enabled support for synchronizing tables without primary keys by adding a hash field (default name: `_no_pk_hash`), ensuring data consistency and stable synchronization in non-primary key scenarios.

#### Enhancements

- Enhanced data filtering logic in Row Filter nodes, ensuring that target data is updated to maintain consistency when data status changes from meeting to not meeting filter conditions.
- Improved support for handling changes in composite primary keys in Oracle.

#### Bug Fixes

- Fixed an issue preventing the display of all tables (completed, in progress, and not started) in full sync details.
- Corrected inaccuracies in time and milestone statistics.
- Resolved an issue with MongoDB Atlas functionality when DNS resolution fails.

### 2024-10-17

#### New Features

* Kafka-Enhanced and TiDB have passed the TapData certification testing process and have been upgraded to [Certified Data Sources](../prerequisites/supported-databases.md), providing more advanced features and enhanced production stability.

#### Enhancements

- Added a [Multi-threaded CT Table Polling](../prerequisites/on-prem-databases/sqlserver.md#advanced-settings) option to improve incremental data collection performance for SQL Server environments with a large number of tables (over 500), significantly increasing synchronization efficiency.
- Optimized the cache management logic for processing nodes, enhancing resource usage efficiency and improving task execution speed.
- Introduced an automatic retry mechanism for Oracle LogMiner errors caused by exceeding PGA limits, improving fault tolerance.

#### Bug Fixes

- Fixed an issue where, after enabling the heartbeat table, tasks displayed no delay but data was not synchronized.
- Fixed an issue where not all tags could be viewed when setting tags.
- Fixed an issue where the task retry start time was incorrectly displayed as 1970.
- Fixed an issue where index creation failed when Elasticsearch was used as the target database.

### 2024-10-10

#### New Features

* Doris, ClickHouse, KingBaseES-R6, PostgreSQL, SQL Server, and MongoDB have passed the TapData certification testing process and have been upgraded to [Certified Data Sources](../prerequisites/supported-databases.md), providing more advanced features and enhanced production stability.
* When using PostgreSQL as a source, it is now possible to specify the time point for incremental data in task settings.

#### Enhancements

* When configuring an Elasticsearch data source, the task setup now allows you to select an update strategy for data writing.
* For data replication tasks, the source node's table selection defaults to primary key tables, with an added prompt message.

#### Bug Fixes

- Fixed an issue where tasks would encounter errors during the incremental phase after enabling the heartbeat table in new tasks.
- Fixed the issue where tasks got stuck in the full phase and could not move to the incremental phase after a reset.

### 2024-09-20

#### New Features

* MySQL has passed the TapData certification testing process, upgrading it to a [certified data source](../prerequisites/supported-databases.md), providing more comprehensive features and enhanced production stability.
* Added a [form-based mode](../user-guide/copy-data/quick-create-task.md) for building replication tasks, simplifying the task creation process and improving operational convenience.

#### Enhancements

- Added a new sorting feature for mining tasks based on today's mined volume, making task management and filtering more convenient.

#### Bug Fixes

- Fixed an issue where regular indexes were not properly synchronized after enabling the **Sync Indexes on Table Creation** option, ensuring data synchronization integrity.

### 2024-08-21

#### New Features

- Oracle, Dameng, and Db2 have passed the TapData certification testing process and have been upgraded to [Certified Data Sources](../prerequisites/supported-databases.md), offering richer features and higher production stability.
- Added [traffic billing](../billing/billing-overview.md) feature for fully managed instances, supporting [traffic bill viewing and payment](../billing/renew-subscribe.md), enabling users to easily monitor traffic usage and manage bills conveniently.
- For [PostgreSQL](../prerequisites/on-prem-databases/postgresql.md) data sources, incremental data synchronization is now supported using the walminer plugin, catering to more use cases.
- Data replication tasks now support reading from multiple tables simultaneously, improving parallel processing capabilities and task execution efficiency.

#### Enhancements

- Significantly enhanced data synchronization performance.
- Improved error messages and high-risk operation warnings.
- For data sources that do not support hash validation, hash validation is now disabled by default.
- After full sync tasks are completed, restarting the task will trigger a full resynchronization to ensure data consistency.
- The Agent deployment page now includes a network whitelist configuration guide, making it easier to configure communication between the Agent and the management console.

#### Bug Fixes

- Fixed an issue where some task monitoring metrics were lost after task completion.
- Fixed a query efficiency issue caused by missing necessary indexes in the intermediate database, reducing data scan volume.
- Fixed an issue where selecting "Show only different fields" when downloading data validation discrepancies resulted in downloading all fields.
- Fixed an issue where the old engine name still appeared in task settings after changing the engine name in cluster management.
- Fixed a problem where task editing could get stuck during model generation, improving the task editing experience.
- Fixed an issue where large-scale Agents could not start due to insufficient memory on low-configuration servers.
- Fixed possible OOM error problems with Agents, enhancing memory management and stability.
- Fixed an issue where full sync tasks in the cloud version sometimes got stuck in a running state, improving task execution smoothness.
- Fixed an issue where editing an API showed a duplicate name warning.
- Fixed an issue where, after stopping a data replication task in the incremental phase and restarting it, the full completion time displayed incorrectly.
- Fixed an issue with TDengine where SQL statement length exceeded limits when writing to super tables with many fields.
- Fixed an error occurring in data transformation tasks using TDengine as a source when the table name contained Chinese characters.
- Fixed potential exceptions when running mining tasks on PostgreSQL data sources.
- Fixed an issue in Oracle to Doris shared mining tasks where source table DDL events could not be parsed.
- Fixed issues with inserting and deleting operations when syncing Oracle to PostgreSQL for tables without primary keys, enhancing synchronization reliability.
- Fixed specific exception issues during the incremental phase of MongoDB to Kafka data transformation tasks.
- Fixed an issue where an unexpected `_id` field appeared in the model when synchronizing MongoDB oplog to Kafka.
- Fixed an issue where MongoDB oplog data replication tasks could not replicate properly during synchronization.

#### New Features

- Oracle, Kafka, and Db2 have completed the TapData certification testing process, upgraded to [GA-level data sources](../prerequisites/supported-databases.md), offering enhanced capabilities and production stability.
- Added traffic billing view and payment features in the cloud version.

#### Enhancements

- Optimized the layout structure of the menu entries.
- Improved error messages and risk warnings for high-risk operations.
- Significantly improved data synchronization performance.
- Optimized memory allocation logic during Agent startup.

#### Bug Fixes

- Fixed the issue where some monitoring metrics were lost after task completion.
- Fixed potential runtime issues in PostgreSQL data source mining tasks.
- Fixed the issue where large-scale Agents on low-configuration servers might fail to start due to insufficient memory.
- Fixed the issue where full data synchronization tasks remained in a running state for an extended period.

### 2024-08-06

#### New Features

- Enhanced [Data Transformation Task Configuration](../user-guide/data-development/create-task.md) to support reloading of single table models in the source node model preview area, improving loading efficiency.
- Introduced time detection functionality that automatically detects the time difference between the engine deployment server and the database server and displays it on the task monitoring page.

#### Optimizations

* User-defined field business descriptions can now be directly displayed in the column name position of the table sample data.

#### Bug Fixes

- Fixed an issue where some table data counts in the real-time data platform were empty.
- Fixed an issue where the host was not displayed in the path when publishing APIs in the real-time data platform.
- Fixed an issue where MongoDB database cursor timeout prevented normal full synchronization.
- Fixed an issue where the custom SQL filter switch could not be turned on in the source node data filtering settings.
- Fixed an formatting error in email alerts for the fully managed Agent.

### 2024-07-20

#### New Features

- Added a [Union Node](../user-guide/copy-data/process-node.md) to data replication tasks, enabling the merging (UNION) of multiple tables within the same database. This is useful for data integration and analysis scenarios.
- [Doris](../prerequisites/warehouses-and-lake/doris.md) data source now supports certificate-free HTTPS connections.
- MySQL, Oracle, OpenGauss, SQL Server, and PostgreSQL data sources now support enabling the **Hash Sharding** feature in the advanced settings of nodes during task configuration, significantly improving the full data sync speed for large tables.
- Added support for [VastBase](../prerequisites/on-prem-databases/vastbase.md) data source, with a maturity level of Beta, further enriching the variety of data sources.

#### Enhancements

- Improved synchronization logic for time zone fields.
- Optimized the display logic of continuous log mining settings, automatically hiding related buttons if the database version does not support this feature.

#### Bug Fixes

- Fixed an issue with incremental sync delay display in MongoDB sync tasks that used shared mining.
- Addressed the unclear error messages and lack of detailed information in the error codes when the source MySQL does not support incremental.
- Corrected the format of task warning alerts.
- Resolved an issue where imported tasks showed running records and the current running record status appeared as "deleting."
- Fixed an issue with incorrect display when renaming tables in FDM replication tasks.
- Addressed an issue where editing tasks incorrectly modified the association key when the target table association key was set.
- Fixed a potential failure when removing fields in Python nodes.
- Resolved an issue where deleting the primary node in master-slave merge operations caused configuration errors in the master-slave merge node, leading to task errors.
- Corrected an issue where creating an application in application management incorrectly prompted that the tag name already existed.
- Fixed garbled text issue with Chinese node names in tasks when a source-side DDL occurs and the engine server is not set to UTF character encoding.

### 2024-07-05

#### Enhancements

* Optimized features in the [Real-Time Data Hub](../user-guide/real-time-data-hub/README.md):
  * The data processing layer now displays all models in the database.
  * The platform cache layer and platform processing layer can be configured with different connections, which cannot be adjusted after setting.
  * Added an API publishing entry.
  * Improved the display of model details.
* Added field restriction configuration parameters for the ElasticSearch data source.
* Optimized exception handling logic when enabling the preimage capability for the MongoDB data source.

#### Bug Fixes

- Fixed an issue where some task event statistics might occasionally be missing when reported.
- Fixed an issue where shared cache tasks without shared mining might encounter errors due to exceeding the log time window if data does not change upon restarting or upgrading the engine.
- Fixed an issue where disabling the slave node under the MDM_model led to task startup failures.
- Fixed an issue where the lineage graph in the real-time data hub occasionally failed to display.
- Fixed an issue where the unset operation on the source table could cause task errors in scenarios where the write mode is updating sub-documents.
- Fixed an issue where joining collections with time types in MongoDB and MySQL caused errors.
- Fixed an issue where tasks created in the real-time data hub could not add master-slave merge nodes.
- Fixed an issue where incremental update events unexpectedly performed lookups in master-slave merge scenarios.
- Fixed conflict errors when modifying columns in master-slave merge nodes.

### 2024-06-21

#### New Features

* Enhanced [TiDB](../prerequisites/on-prem-databases/tidb.md) data source capabilities with support for real-time incremental synchronization.

#### Enhancements

* Improved the display of primary keys and indexes in the task's table model.
* Enhanced the model deduction logic, supporting model deduction directly in the engine.

#### Bug Fixes

* Fixed an issue where some exceptions were ignored during data source error handling.
* Fixed an issue where aggregation tasks using time fields as join keys could not backtrack data.
* Fixed an issue with delayed times in mining tasks.
* Fixed an issue where MySQL as a source would consume a large amount of database memory during initial synchronization of large tables.

### 2024-06-07

#### New Features

* Introduced Mock Source and Mock Target data sources for data migration testing scenarios.

#### Enhancements

* Improved the interaction logic for skipping errors when starting tasks.
* Improved the loading speed of the connection list.

#### Bug Fixes

* Fixed inconsistencies between the task runtime model and configuration model.
* Fixed inaccurate task event statistics after filtering source data.
* Fixed timezone handling issues in Oracle and PostgreSQL synchronization scenarios.
* Fixed an issue where heartbeat task reset failures could prevent related tasks from starting.

### 2024-05-21

#### New Features

* Added support for dynamically generating date suffixes for target table names when [configuring data transformation tasks](../user-guide/data-development/create-task.md#target-node-set), suitable for daily batch processing scenarios.
* Added support for setting partitions when configuring Doris data sources.
* Added support for the Oracle mode of OceanBase data sources, with the data source name OceanBase(Oracle).

#### Enhancements

* Optimized data handling logic when syncing MongoDB to relational databases (e.g., MySQL).
* Enhanced the Dummy data source to support quickly adding large fields for performance testing scenarios.

#### Bug Fixes

* Fixed an issue where MariaDB could not write data in the `0000-00-00 00:00:00` format to the target.
* Fixed an issue where heartbeat tasks could not automatically recover after the heartbeat table was mistakenly deleted.
* Fixed an issue where shared extraction tasks could not be serialized after an error occurred.

### 2024-05-06

#### New Features

* Support for bidirectional data synchronization between MySQL instances and between PostgreSQL instances, better meeting the needs of active-active and disaster recovery scenarios.
* Support for importing files from [MongoDB Relmig](https://www.mongodb.com/docs/relational-migrator/) version 1.3.0 and above, further enhancing ecosystem integration capabilities.
* Support for synchronizing MongoDB [Oplog](https://www.mongodb.com/docs/manual/core/replica-set-oplog/) (operation log) data.
* Support for filtering the time field of tables in the source node’s **[Advanced Settings](../user-guide/data-development/create-task.md#full-sql-query)** when configuring data transformation tasks (e.g., relative dates).
* Display milestone information for tasks on the [Task List](../user-guide/copy-data/manage-task.md) page, helping users quickly understand key progress statuses.

#### Enhancements

* Improved [Unwind Node](../user-guide/data-development/process-node.md#unwind) functionality, allowing users to set expansion modes, such as **Embedded Objects** or **Flatten Fields**.
* Enhanced full synchronization detail page display, supporting quick table name filtering.

#### Bug Fixes

* Fixed an issue where adjusting alarm settings could affect normal task operations in certain scenarios.
* Fixed an issue where adding a new digging table caused the task to display digging task errors.

### 2024-04-26

#### New Features

* [Data replication tasks](../user-guide/copy-data/create-task.md) now support table-level checkpoint resumption, allowing tasks to continue syncing from the last incomplete table upon restart.
* Added the ability to quickly [set task labels](../user-guide/copy-data/manage-task.md) by dragging and dropping.
* Added support for MySQL replica architecture, ensuring tasks continue to sync data normally after a failover event.

#### Enhancements

* The Windows version of the Cloud Agent now includes digital certificate signing to avoid installation delays caused by system security prompts.
* Improved the User Center page layout.

#### Bug Fixes

* Fixed an issue where tasks were failing with Aliyun PolarDB MySQL data sources due to unsupported event types.
* Corrected a statistical progress display error in the completion metrics of full data synchronization tasks.

### 2024-04-12

#### New Features

* Added support for real-time log parsing of [TiDB data sources](../prerequisites/on-prem-databases/tidb.md), fulfilling incremental data synchronization needs.
* During the full sync phase from Oracle to MySQL, support has been added for syncing unique and normal indexes that do not utilize functions.
* Enhanced the task start process to include an option to skip errors encountered during the last run.

#### Enhancements

* Improved DDL synchronization settings in data sync tasks by allowing users to configure DDL statements to ignore (based on regular expressions) when DDL errors occur.
* Enhanced data verification capabilities to support tasks that include processing nodes.
* Optimized the data verification results page to quickly filter between consistent and inconsistent tables.

#### Bug Fixes

* Fixed an issue where MongoDB used as external storage failed when storing values in a Map format with keys containing the `.` character.
* Addressed a looping error that occurred during connection tests for Kafka data sources containing non-JSON topics.
* Resolved a bug where JS nodes reported errors during trial runs under specific conditions.
* Fixed an issue with incorrect data results when changing join keys in master-slave merge nodes.
* Fixed a problem where using RocksDB as cache storage could cause task errors.

### 2024-03-29

#### Enhancements

* To further enhance user experience, Beta and Alpha [data sources](../prerequisites/README.md) now require an application for use, allowing TapData to provide better technical support based on your business scenarios.

#### Bug Fixes

* Resolved an issue where Agents crashed under specific circumstances.
* Fixed a bug related to importing RM files in MongoDB.

##  2024-03-08

### New Features

* Support for setting [default alarm recipients](../user-guide/workshop.md), allowing customization of alarm receipt email addresses (supports multiple addresses).
* New options in [DDL synchronization settings](../case-practices/best-practice/handle-schema-changes.md): **Stop Task on DDL Error** and **Automatically Ignore All DDLs**, catering to different business scenario needs.
* Added a [time field injection](../user-guide/data-development/process-node.md#time_injection) node, allowing the addition of a custom timestamp field to data during synchronization. This provides a more flexible way to capture incremental changes from the source database.

### Enhancements

* Optimized task retry logic and interface prompt information.
* Enhanced the setting for incremental collection timing, supporting quick selection of the incremental time point from the last incremental run.
* Improved the interaction logic for using external storage with the master-slave merge node.

## 2024-01-26

### New Features

- Added support for [Shared Mining](../user-guide/advanced-settings/share-mining.md), allowing multiple tasks to share incremental logs from the source database, thus avoiding redundant reads and significantly reducing the load on the source database during incremental synchronization.
- The Shared Mining feature now supports using RocksDB as [local external storage](../user-guide/advanced-settings/manage-external-storage.md) to extend storage for incremental logs.

### Enhancements

- Improved the onboarding process for users from the [Google Cloud Marketplace](https://console.cloud.google.com/marketplace/product/tapdata-public/detail).
- Added a time filter option for the incremental phase in the [Task Monitoring Page](../user-guide/copy-data/monitor-task.md) to quickly observe RPS (Records Per Second) during the incremental phase.
- Added warning messages for critical operations that might impact the database (e.g., filtering source table data).
- Refined the logic for unsubscribing after instance subscription expiration.

### Bug Fixes

- Fixed an issue with the [Primary-Secondary Merge Node](../user-guide/data-development/process-node.md#pri-sec-merged) where changes in the key conditions between the primary and secondary tables resulted in data not matching expectations.

## 2024-01-12

### New Features

* Added support for [Capped Collections](https://www.mongodb.com/docs/manual/core/capped-collections/) in data synchronization between MongoDB database.
* Data replication/transformation tasks now have import capabilities. Design your data flow process on [MongoDB Relational Migrator](https://www.mongodb.com/docs/relational-migrator/), export it, and then directly import it into TapData data pipelines from the top right corner, enhancing the convenience of data pipeline design.

### Enhancements

* Enhanced the new user onboarding process, including the ability to collapse prompts and return to previous steps.

### Bug Fixes

* Fixed an issue where JS node model declaration settings showed incorrect prompts on the task editing page.
* Fixed an issue where the DROP COLUMN operation in Oracle to MySQL synchronization was not syncing correctly.
* Addressed an issue causing DDL errors when syncing from MySQL to ClickHouse.
* Fixed instability in tasks due to frequent WebSocket reconnections.
* Corrected several UI interaction experience issues.

## 2023-12-26

### New Features

* Added support for [Time Series collections](https://www.mongodb.com/docs/manual/core/timeseries-collections/) in MongoDB 5.x and above versions.
* Added support for [preImage](https://www.mongodb.com/docs/manual/changeStreams/#change-streams-with-document-pre--and-post-images) in MongoDB 6.x and above versions.

### Enhancements

* Improved system prompts when enabling scheduled tasks while reaching the task limit.

### Bug Fixes

* Fixed inaccuracies in checkpoints in multi-table data replication scenarios.
* Resolved issues with unsubscribed and deleted Agent instances continuing to report heartbeat information.
* Addressed known UI interaction experience issues.

## 2023-12-08

### New Features

- Added [Azure Cosmos DB](../prerequisites/cloud-databases/azure-cosmos-db.md) as a new data source, enabling full data synchronization to facilitate quick cloud data transfers.

### Enhancements

- Upgraded data source connections, with [SQL Server](../prerequisites/on-prem-databases/sqlserver.md) now supporting SSL connections, enhancing data security.
- Optimized field type adjustments in [data replication tasks](../user-guide/copy-data/create-task.md), allowing for direct selection of common types from the target database.
- Improved task source node settings, enabling customization of the number of rows read per batch in the incremental phase, catering to performance needs of incremental synchronization.

### Bug Fixes

- Addressed issues with enhanced JS nodes failing or causing exceptions under certain scenarios.
- Corrected several UI interaction experience issues for better usability.



## 2023-11-24

### New Features

* Support for loading table comments on [Oracle data sources](../prerequisites/on-prem-databases/oracle.md#advanced), which can be enabled in the **Advanced Settings** when configuring the data source. This makes it easier to quickly identify the business meaning of tables through their comments.
* In the task [monitoring page](../user-guide/copy-data/monitor-task.md), support viewing RPS (Records Per Second) information based on the size of events.

### Enhancements

* Enhanced the display effects of resource management and the subscription center pages.
* When performing data source connection tests, support for displaying connector download progress is now available, helping to quickly grasp connection progress and pinpoint timeout issues.

### Bug Fixes

* Fixed an issue where incremental information was not successfully cleared after resetting and rerunning a task.
* Fixed an issue where some SaaS data sources displayed incremental timestamps during full data synchronization.

### Enhancements

### Bug Fixes

## 2023-11-03

### Enhancements

- Enhanced [Data Source Connection](../prerequisites/README.md) methods, supporting SSL connections for data sources like MySQL, PostgreSQL, Kafka, TiDB, MariaDB, etc., to further enhance data security.
- Improved user interface interaction logic.
- To better manage data duplication for updates on non-primary keys, TapData Cloud now supports creating unique indexes.

### Bug Fixes

- Fixed an issue where data synchronization could fail when table names contain `.`.
- Fixed an issue where task exception messages did not include table names.
- Fixed an issue with incorrect judgment of task quotas and task count limits when specifying an Agent for a task.


## 2023-10-20

### New Features

- Added support for [automatically creating sharded collections](../user-guide/copy-data/create-task.md#advanced-settings) when MongoDB Cluster is set as the target.
- Add support for [Unwind Processing Node](../user-guide/data-development/process-node.md#Unwind), which can help you efficiently "unwind" each element in an array, converting each element into independent data rows.
- Added support for disabling node capabilities when configuring tasks. You can access this feature by hovering over a node, which can help reduce the cost of data flow during processing.

### Enhancements

- When [configuring data replication tasks](../user-guide/copy-data/create-task.md), you can now quickly filter tables with or without primary keys through the "**Selectable table range**" dropdown. Tables with primary keys include those without primary keys but with unique indexes.
- Added a Demo data source to the onboarding guide flow for new users, helping you quickly complete the tutorial and set up your first data flow task.
- Optimized the front-end display effects of operation buttons on the engine interface.

### Bug Fixes

- Fixed an issue where an error occurred in MongoDB as a target during an INSERT operation when there was no shard key.
- Fixed an issue where MongoDB did not support REPLACE properly, and the fields deleted by REPLACE could not be properly removed.

## 2023-10-08

### New Features

- Introduced the [Create Materialized View](../user-guide/data-development/create-materialized-view.md) feature for swift construction of real-time data models.
- Added capability to fetch read-only access information of [subscribed MongoDB Atlas](../user-guide/real-time-data-hub/daas-mode/enable-daas-mode.md#Procedure).
- Kafka data source now supports settings for replication factor and partition count.
- For synchronization between MongoDB instances, added support for `$unset` operations.

### Enhancements

- During the task guidance process, when creating a connection for a fully managed Agent, instructions about the public IP address of the fully managed Agent have been added.
- Enabled rapid target node location through node search at the top of the data replication/data transformation configuration page.

### Bug Fixes

* Fixed an issue where the wrong category of operation logs was recorded when restarting the Agent via the webpage.

---

## 2023-09-20

### New Features

- Added [Python processing node](../user-guide/data-development/process-node.md#python), which supports customizing data processing logic through Python scripts. This offers improved performance compared to the JS processing node.
- Added a "**Contact Us**" entry point, making it easier for users to quickly reach out to technical support when faced with issues.

### Feature Improvements

- Enhanced [error codes for data sources](../user-guide/error-code-solution.md), covering more scenarios and providing solutions.
- While setting up email alert notifications, added guidance for binding email addresses.
- Improved reminders and easy upgrade guide for when the task count reaches its limit.





## 2023-08-28

### New Features

- Introduced the [Primary-Secondary Merge Node](../user-guide/data-development/process-node.md#pri-sec-merged), enabling quick construction and real-time updates of wide tables, assisting you in achieving better data analysis.
- [Real-Time Data Hub](../user-guide/real-time-data-hub/daas-mode/enable-daas-mode.md) now offer a storage instances for free trial, with more new specifications available, including M10, M20, and M30.
- Added support for connecting [existing MongoDB Atlas instances](../user-guide/real-time-data-hub/daas-mode/enable-daas-mode.md#atlas) as data storage for the Real-Time Data Hub.

### Feature Improvements

- Changed the display of help documentation on the right side during data source connection to embedded online documentation, assisting users in accessing the most recent help information.
- For core data sources (such as Oracle, PostgreSQL, etc.), improved the page parameter descriptions and guidance when creating connections.

### Bug Fixes

- Fixed the issue where users couldn't view the monitoring page for previously run tasks.
