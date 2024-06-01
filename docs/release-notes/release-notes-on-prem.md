# TapData Enterprise Release Notes

import Content from '../reuse-content/_enterprise-features.md';

<Content />

## 3.6.0

### New Features

* Added support for dynamically generating date suffixes for target table names when [configuring data transformation tasks](../user-guide/data-pipeline/data-development/create-task#target-node-set), suitable for daily batch processing scenarios.
* Added support for [integrating with third-party platforms via Webhook](../user-guide/notification.md) to enable more alert notification channels.
* Added support for performing Hash validation between MySQL, Oracle, SQL Server, PostgreSQL, and GaussDB data sources when [configuring data validation tasks](../user-guide/data-pipeline/verify-data.md), improving validation efficiency.
* Added support for setting partitions when configuring Doris data sources.
* Added support for the Oracle mode of OceanBase data sources, with the data source name OceanBase(Oracle).

### Enhancements

* Optimized data handling logic when syncing MongoDB to relational databases (e.g., MySQL).
* Enhanced the Dummy data source to support quickly adding large fields for performance testing scenarios.

### Bug Fixes

* Fixed an issue where MariaDB could not write data in the `0000-00-00 00:00:00` format to the target.
* Fixed an issue where heartbeat tasks could not automatically recover after the heartbeat table was mistakenly deleted.
* Fixed an issue where shared extraction tasks could not be serialized after an error occurred.

## 3.5.16

### New Features

* Support for bidirectional data synchronization between MySQL instances and between PostgreSQL instances, better meeting the needs of active-active and disaster recovery scenarios.
* Support for importing files from [MongoDB Relmig](https://www.mongodb.com/docs/relational-migrator/) version 1.3.0 and above, further enhancing ecosystem integration capabilities.
* Support for synchronizing MongoDB [Oplog](https://www.mongodb.com/docs/manual/core/replica-set-oplog/) (operation log) data.
* Support for filtering the time field of tables in the source node’s **[Advanced Settings](../user-guide/data-pipeline/data-development/create-task#full-sql-query)** when configuring data transformation tasks (e.g., relative dates).
* Display milestone information for tasks on the [Task List](../user-guide/data-pipeline/copy-data/manage-task.md) page, helping users quickly understand key progress statuses.

### Enhancements

* Improved [Unwind Node](../user-guide/data-pipeline/data-development/process-node#unwind) functionality, allowing users to set expansion modes, such as **Embedded Objects** or **Flatten Fields**.
* Enhanced full synchronization detail page display, supporting quick table name filtering.

### Bug Fixes

* Fixed an issue where adjusting alarm settings could affect normal task operations in certain scenarios.
* Fixed an issue where adding a new digging table caused the task to display digging task errors.

* Fixed an issue where tasks would still retrieve data from deleted shared cache tasks after being restarted.

## 3.5.15

### New Features

* [Data replication tasks](../user-guide/data-pipeline/copy-data/create-task.md) now support table-level checkpoint resumption, allowing tasks to continue syncing from the last incomplete table upon restart.
* Added the ability to quickly [set task labels](../user-guide/data-pipeline/copy-data/manage-task.md) by dragging and dropping.
* Added support for MySQL replica architecture, ensuring tasks continue to sync data normally after a failover event.

### Bug Fixes

* Fixed an issue with Alibaba Cloud PolarDB MySQL data source, where tasks failed due to unsupported events.
* Fixed incorrect progress indicators in statistics for completed full replication tasks.

## 3.5.14

### New Features

* Support for [assigning labels](../user-guide/manage-system/manage-cluster.md) to **sync governance services** (Agents), allowing for subsequent assignment of tasks to agents with specific labels.
* Supported real-time log parsing for [TiDB data sources](../prerequisites/on-prem-databases/tidb.md), meeting the needs for incremental data synchronization.
* During the full synchronization phase from Oracle to MySQL, support for syncing unique indexes and regular indexes that do not utilize functions.
* Added the ability to skip errors encountered during the last run when starting tasks.

### Enhancements

* Optimized the data synchronization task scenario, allowing source nodes to [configure DDL synchronization settings](../best-practice/handle-schema-changes.md) and specify DDL statements to ignore (based on regular expressions) in case of DDL errors.
* Enhanced data verification capabilities to support tasks that include processing nodes.
* Improved the data verification results page display, enabling quick filtering of consistent and inconsistent tables.

### Bug Fixes

* Fixed an issue where MongoDB used as external storage and storing keys with dots (.) in strings, and values as maps, caused exceptions.
* Fixed a loop error when performing connection tests on Kafka data sources containing non-JSON topics.
* Fixed an error that occurred during trial runs of JS nodes in specific scenarios.
* Fixed incorrect data issues caused by changing key values in master-slave merge nodes.
* Fixed an issue where using RocksDB as cache storage could cause task errors.

## 3.5.13

### New Features

* When [configuring data verification tasks](../user-guide/data-pipeline/verify-data.md), custom filtering based on time fields is now available for MongoDB aggregation queries.
* Supported [hash verification](../user-guide/data-pipeline/verify-data.md) for MySQL/Oracle homogeneous data source synchronization.

### Bug Fixes

* Fixed an issue where DDL operations could not be synchronized normally in multi-threaded synchronization scenarios.
* Fixed an occasional issue where file handles were not released in time when JS nodes printed logs.
* Fixed an issue with the import of MongoDB RM files.

## 3.5.12

### New Features

* Support for sending email reminders one week before the license expires (once a day), which can be combined with [configuring SMTP email services](best-practice/alert-via-qqmail.md) to enhance operational convenience.
* New options in [DDL synchronization settings](../best-practice/handle-schema-changes.md): **Stop Task on DDL Error** and **Automatically Ignore All DDLs**, catering to different business scenario needs.
* Added a [time field injection](user-guide/data-pipeline/data-development/process-node#time_injection) node, allowing the addition of a custom timestamp field to data during synchronization. This provides a more flexible way to capture incremental changes from the source database.
* Support for setting the expiration time and size of engine logs, enabling automatic log cleanup.

### Enhancements

* Optimized task retry logic and interface prompt information.
* Enhanced the setting for incremental collection timing, supporting quick selection of the incremental time point from the last incremental run.
* Improved the interaction logic for using external storage with the master-slave merge node.



## V3.5.11

### New Features

- [Shared Mining](user-guide/advanced-settings/share-mining.md) functionality supports using RocksDB as local external storage for incremental log storage expansion.
- [TDengine Connector](prerequisites/on-prem-databases/tdengine.md) supports using multiple databases as incremental sources.

### Enhancements

- [Task Monitoring Page](user-guide/data-pipeline/copy-data/monitor-task.md) adds a time filter option for the incremental phase to quickly observe the QPS of the incremental phase.
- Added related prompt information for key operations that may affect the database (such as filtering source table data).

### Bug Fixes

* Fixed the issue where the final data does not match the expectation when the primary and secondary table key conditions change in [Primary-Secondary Merge Node](user-guide/data-pipeline/data-development/process-node#pri-sec-merged).

## V3.5.10

### New Features

* For data synchronization scenarios between MongoDBs, newly supports [Capped Collections](https://www.mongodb.com/docs/manual/core/capped-collections/).
* Data replication/transformation tasks support import capability. You can design the data flow process on [MongoDB Relational Migrator](https://www.mongodb.com/docs/relational-migrator/) and export it, then directly import it in the TapData data pipeline, enhancing the convenience of data pipeline design.

### Bug Fixes

* Fixed the issue where JS node model declaration settings showed an error in the task editing page.
* Fixed the issue where the DROP COLUMN operation was not properly synchronized when synchronizing from Oracle to MySQL.
* Fixed the problem of DDL errors when synchronizing from MySQL to ClickHouse.
* Fixed the issue of task instability caused by frequent reconnections of WebSocket.
* Fixed several UI interaction experience issues.

## V3.5.9

### New Features

* For MongoDB data sources version 5.x and above, newly supports [Time Series Collections](https://www.mongodb.com/docs/manual/core/timeseries-collections/).
* For MongoDB data sources version 6.x and above, newly supports [preImage](https://www.mongodb.com/docs/manual/changeStreams/#change-streams-with-document-pre--and-post-images).

### Bug Fixes

* Fixed the issue of inaccurate breakpoints in multiple table data replication scenarios.
* Fixed known UI interaction experience issues.

## V3.5.8

### New Features

- Newly supports [Azure Cosmos DB](prerequisites/cloud-databases/azure-cosmos-db.md) as a data source, capable of synchronizing full data from the source to help facilitate rapid data flow in the cloud.

### Enhancements

- Enhanced data source connection methods, [SQL Server](prerequisites/on-prem-databases/sqlserver.md) supports SSL connections to further enhance data security.
- Optimized the method of adjusting field types in [data replication tasks](user-guide/data-pipeline/copy-data/create-task.md); in addition to manual input, it now supports direct selection of common types from the target database.
- For the source node settings of the task, supports setting the number of records read per batch during the incremental phase to better meet the performance requirements of incremental synchronization.

### Bug Fixes

- Fixed the issue where the enhanced JS node model declaration did not take effect or showed an exception in specific scenarios.
- Fixed several UI interaction experience issues.

## V3.5.7

### New Features

- Supports loading table comments for [Oracle data sources](prerequisites/on-prem-databases/oracle#advanced), which can be enabled in the advanced options during data source configuration, allowing quick identification of tables' business meanings through comments.
- Supports deployment of TapData on [Windows platform](../quick-start/install/install-tapdata-enterprise/install-on-windows.md), further expanding the range of supported deployment platforms.
- In the task operation [monitoring page](user-guide/data-pipeline/copy-data/monitor-task.md), supports viewing QPS information based on the dimension of event size.

### Bug Fixes

- Fixed the issue where incremental information was not successfully cleared after resetting the task and rerunning it.
- Fixed the issue where the incremental time point was displayed in scenarios of full data synchronization for some SaaS data sources.

## V3.5.6

### Enhancements

- Optimized [data source connections](prerequisites/README.md), with MySQL, PostgreSQL, Kafka, TiDB, MariaDB, etc., supporting SSL connections to further enhance data security.
- Enhanced the filtering function of [data verification](user-guide/data-pipeline/verify-data.md), supporting custom query and aggregation query filtering through SQL.
- Optimized interface interaction logic.
- For non-primary key update conditions, created a unique index to solve the problem of data duplication.

### Bug Fixes

- Fixed the issue where the table name contained `.` could lead to data synchronization failure.
- Fixed the problem where the task exception information did not include the table name.

## V3.5.5

### New Features

- Newly supports Hive3 as a target.
- When MongoDB is the target, newly supports [automatic creation of sharded collections](user-guide/data-pipeline/copy-data/create-task#advanced-settings).
- Newly added [Unwind Processing Node](user-guide/data-pipeline/data-development/process-node#Unwind), helping you efficiently "unwind" elements in an array, converting each element into a separate data row.
- When configuring tasks, newly supports the ability to disable nodes. Hovering over a node now offers this functionality, helping to reduce the cost of data flow in the process.

### Enhancements

- Optimized the setting of [published API scope](user-guide/data-service/create-api-service#settings), allowing adjustments without needing to publish.
- When [configuring data replication tasks](user-guide/data-pipeline/copy-data/create-task.md), the **selectable table range** dropdown box allows quick filtering of tables with or without primary keys, where tables with primary keys include those without primary keys but with unique indexes.

### Bug Fixes

- Fixed the issue where the MongoDB target encountered an error in INSERT operations when no sharding key was found.
- Fixed the problem where MongoDB does not support REPLACE, meaning that fields deleted by REPLACE could not be properly removed.

## V3.5.4

### New Features

- Added [building materialized views](user-guide/data-pipeline/data-development/create-materialized-view.md) feature, enabling quick construction of real-time data models.
- Added support for configuring source nodes of [shared mining](user-guide/advanced-settings/share-mining.md) tasks, including settings for enabling **incremental multi-threaded writing** and **supplementing updated data with complete fields**.
- Kafka data source added support for [setting the number of replicas and partitions](pipeline-tutorial/oracle-to-kafka#advanced_settings).
- Added support for the `$unset` operation during synchronization between MongoDB instances.

### Enhancements

- [Data verification](user-guide/data-pipeline/verify-data.md) feature field filtering experience optimization.
- Supported quick node targeting at the top of the data replication/data transformation configuration page through node search.

## V3.5.2

### New Features

* Added [Python Processing Node](user-guide/data-pipeline/data-development/process-node#python), supporting custom data processing logic through Python scripts, offering performance improvements compared to JS processing nodes.
* Added support for data synchronization between Redis instances.

### Enhancements

* Enhanced [data

source error codes](troubleshooting/error-code.md), covering more scenarios and providing solutions.

## V3.5.1

### New Features
- Now when [creating a role](user-guide/manage-system/manage-role.md), it supports the granular granting of functional and data rights.

### Enhancements
- Enhanced the UI prompts and guidance when setting up core data sources like PostgreSQL, Redis, etc.
- Improved test scenarios when using MongoDB as external storage.

### Bug Fixes
- Resolved an issue where users were unable to access the run-monitoring page for executed tasks.

---

## V3.4

### New Features
- When task configurations are set for full + incremental sync, there's now support to turn on the [scheduled periodic task feature](user-guide/data-pipeline/copy-data/create-task#task-attr). The task will automatically stop, reset, and run again at the set time.
- For the [add/remove field node](user-guide/data-pipeline/data-development/process-node#add-and-del-cols), field order adjustment is now supported.
- A new feature to [dynamically adjust memory](user-guide/data-pipeline/copy-data/create-task#task-attr) has been introduced (enabled by default). During the full synchronization phase, it identifies memory usage and auto-adjusts the memory queue, effectively preventing memory overflow scenarios.
- The data panel has been renamed to the [Real-time Data Center](user-guide/real-time-data-hub/README.md), with added guidance on usage and task creation.
- Introduced a target write strategy, where if an update event does not exist, it can be written to a local log.

### Enhancements
- Data validation usability and UI interactions have been enhanced.
- Error code implementation for the MongoDB data source has been added.
- Optimized the incremental delay metric on the run-monitoring page, using the task's incremental delay warning threshold as the Y-axis data source.
- Enhanced the display of sample data.

### Bug Fixes
- Fixed task count limits in the engine specs.
- Resolved an issue where MongoDB showed unsupported error prompts when used with custom SQL as the target.
- Fixed an issue where, after turning on automatic periodic scheduling for a task, if auto-reset fails, the task won't attempt a reset in the next cycle and won't be scheduled to run.

---

## V3.3

### New Features
- [Kafka data source](prerequisites/mq-and-middleware/kafka.md) now supports custom message body formats.
- Added the [API interface documentation export feature](user-guide/data-service/create-api-service#release330-export-api) to help teams quickly establish and enhance API usage documents.
- Shared mining functionality supports [configuring task alerts](user-guide/advanced-settings/share-mining#release330-alert), allowing alerts via system notifications or emails for better task monitoring.
- The [data validation function](user-guide/data-pipeline/verify-data.md) allows setting data filters, enabling validation of specific conditional data only, reducing validation scope and increasing efficiency.
- In data service platform mode, when dragging a data table to the platform cache layer to generate a task, it supports [setting the synchronization type of the task to be full or incremental](../user-guide/real-time-data-hub/daas-mode/create-daas-task/#release330-task).

### Enhancements
- Introduced [rolling upgrades](production-admin/operation#release330-upgrade), which, compared to the downtime upgrade method, further reduces business impacts.
- Post-error in [shared mining tasks](user-guide/advanced-settings/share-mining.md), associated tasks now include alert prompts.
- In the [row filter processing node](user-guide/data-pipeline/data-development/process-node.md), added usage examples when filtering with the DATE type.
- [Time operation node](user-guide/data-pipeline/data-development/process-node#date-calculation) now displays adjusted fields.
- Optimized algorithm for estimating remaining time for full synchronization.
- Field processing nodes now support one-click copy and paste for configurations.

### Bug Fixes
- Fixed an issue where launching TM without setting the java environment variable would prevent it from starting, adding log output for this issue.
- Addressed a problem where the admin user, after changing the username in the personal center, could not view any menus.
- Fixed an issue in data replication where, during task creation, all data sources did not support DDL.
- Resolved a problem in data replication tasks, where during node configuration, adding a prefix or suffix would reload after each character input.



## V3.2

### New Features

- In the data platform mode, it can directly [display the relationship of table-level traceability](../user-guide/real-time-data-hub/daas-mode/daas-mode-dashboard#release320-daas), helping you to visually show the link relationship of data tables.
- In the data platform mode, it supports [deleting tables from the platform processing layer](../user-guide/real-time-data-hub/daas-mode/daas-mode-dashboard#release320-daas).
- When configuring the target node of a task, it supports [adjusting field length by a coefficient](user-guide/data-pipeline/copy-data/create-task#release320-col-length) to avoid data write failures due to different character encodings.
- [Data verification](user-guide/data-pipeline/verify-data) feature supports SelectDB data source.
- In scenarios where Redis is the target node, and data is stored in List or Hash format with a single key, it [supports writing the source table schema into a Hash key](pipeline-tutorial/mysql-to-redis#release320-contain-table-head) (default name is `-schema-key-`). The value is used to store the source table's table name and column name information.
- Added [**type filter**](user-guide/data-pipeline/data-development/process-node#release320-type-filter) processing node, which can quickly filter columns of the same type. Filtered fields will not be passed to the next node.
- **Field editing** processing node supports conversion between snake_case and camelCase naming.
- Data copy tasks, data conversion tasks, data panels, and caching creation support [displaying table description information](user-guide/data-pipeline/copy-data/create-task#310-table-model), defaulting to table comment information.

### Enhancements

- Product menu adjustments: data development is renamed to [data conversion](user-guide/data-pipeline/data-development/). Some functions have been moved to [advanced settings](user-guide/advanced-settings/) (e.g., shared cache).
- Improved interaction for tables without primary keys, e.g., [support for filtering non-primary key tables and adding primary key table identification](user-guide/data-pipeline/copy-data/create-task#310-table-model) when configuring data copy tasks.
- For external storage configurations of MongoDB data sources, [connection testing capability](user-guide/manage-system/manage-external-storage#320-external-storage) has been added.
- When creating a new external storage and choosing MongoDB, it supports [using SSL connections](user-guide/manage-system/manage-external-storage#320-external-storage).
- Creating an HttpReceiver data source now [supports script trial runs](prerequisites/others/http-receiver) and [access authentication functionality](prerequisites/others/http-receiver).
- Standard JS node capabilities adjusted, adding [Linked HashMap data structure](appendix/standard-js#linkedhashmap) and [context.global object](appendix/standard-js#global).
- **Field editing** processing node's UI interaction has been improved.
- Redundant prompts for task startup and schema reload have been optimized.
- Data copy tasks support manually adding new tables. New tables can achieve full + incremental data synchronization.
- Improved user experience and interaction for data verification.
- Optimized task node configuration processing logic.
- In the data panel's **platform cache layer** and **data processing layer**, you can display connection and table information generated by data copy/transfer tasks.
- In the data directory mode of the data panel, you can add description information for tables and fields.
- Optimized deployment flow and prompts for TapData.
- TapData launcher optimization: restarting the service does not require re-registering the data source.
- When starting and stopping the Agent node, PDK registration is automatically stopped.
- Overall optimization of interaction for data copy and data conversion task configuration.

### Bug Fixes

- Fixed 2 issues where specifying different external storage for Oracle data sources resulted in external storage not being user-specified after merging.
- Fixed an issue where turning on shared mining for import task data sources made external storage configuration display as id and unmodifiable.
- Fixed a task merging issue from the data source to the platform cache layer.

## V3.1

### New Features

- [Data panel functionality](user-guide/real-time-data-hub/etl-mode) now supports table-level traceability capabilities. You can view data lineage relationships through table details.
- When [configuring data copy tasks](./user-guide/data-pipeline/copy-data/create-task#310-table-model), you can view the table model in the processing node.
- Supports publishing API data services based on Doris data source [Release API Data Services](user-guide/data-service/create-api-service.md).
- [Cluster management](user-guide/manage-system/manage-cluster.md) page allows downloading thread resource monitoring and data source usage data.

### Enhancements

- Shared mining task management improved, supporting [starting/stopping mining tasks for individual tables](user-guide/advanced-settings/share-mining.md#release310-share-mining).
- [Shared cache](user-guide/advanced-settings/share-cache.md), [functions](user-guide/advanced-settings/manage-function.md), [API data services](user-guide/data-service/create-api-service) support import/export functions.
- [Data verification](user-guide/data-pipeline/verify-data) supports configuring alert rules and notification methods.
- Auto-fill table logic for [data verification](user-guide/data-pipeline/verify-data) has been optimized.
- Frontend added explanations for the distinction between [standard JS](appendix/standard-js) and [enhanced JS](appendix/enhanced-js).
- JS processor standardization, JS usage, and trial run have been restructured.
- In all processing nodes supporting JS scripting, typing `record.` automatically prompts for the current model's field names.
- Resolving timeout issues caused by clearing external storage data during a reset has been optimized.
- Support for modifying primary keys.
- Supports setting the default interval for incremental synchronization tasks via scripting.
- License optimization: Binding to IP addresses prevents hardware changes from invalidating the License.
- Enhanced usage prompts for Excel data sources.
- Performance enhancements:
  - **JS Node** processing performance improved.
  - **Field processing** node processing performance improved.
  - **Master-slave merge** node performance improved.
  - **Field editing** node frontend display optimization in multi-field scenarios.
- Optimized data type boundary prompts and handling logic.
- Connection management filter bar database type dropdown supports search and clear selection.
- Error code pop-ups now offer a one-click copy feature for the error stack.

### Bug Fixes

- Fixed issues with incremental metrics lacking incremental time points for polling sources.
- Fixed an issue where model changes forcibly delete updated fields.
- Fixed node configuration issues for type modification, field addition/deletion, and field renaming; configurations are reset when loading the model.
- Fixed errors occurring when turning on the full custom switch and the target is MongoDB.



## V3.0

### New Features

- [Integrated GraphQL capability](user-guide/data-service/query-via-graphql.md), enriching API query methods.
- Added [application categorization capability for APIs](user-guide/data-service/create-api-service.md), facilitating categorization based on business.
- Introduced [time calculation processing node](user-guide/data-pipeline/data-development/process-node#time-calculation) for flexible handling of discrepancies in source and destination database time zones.
- Introduced [full-scale partitioning capability](best-practice/full-breakpoint-resumption.md), currently only supported for MongoDB.

### Enhancements

- [Shared cache function](user-guide/advanced-settings/share-mining.md) improved, offering an observable page to monitor mining progress and troubleshoot failures.
- [Full custom query function](user-guide/data-pipeline/data-development/create-task#full-sql-query) relaxed the restriction of only using JS nodes, now allowing the addition of other processing nodes with the node model directly utilizing the source table's model.
- The field [processing node](user-guide/data-pipeline/data-development/process-node.md) supporting operations like adding/deleting fields, type modifications, and renaming fields now includes a field search function.
- Adjusted wording for Schema loading frequency configuration in connection settings.
- Optimization of table name modification logic in the **Table Editing Node**; removed the apply button for direct configuration effectiveness.
- During the startup of the management process (frontend), it now includes heapDump and stackTrace parameters, similar to the synchronization governance process.
- Introduced task editing versioning to prevent overwriting of higher-version configurations by lower versions when multiple users edit the same task.
- Documentation on the right side of the data source configuration now supports image enlargement.
- Implementation of error codes for Oracle data sources.
