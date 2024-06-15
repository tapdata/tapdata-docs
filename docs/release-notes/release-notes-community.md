# TapData Community Release Notes

import Content from '../reuse-content/_community-features.md';

<Content />

This document introduces the recent release notes for TapData Community. For more information on earlier versions, please refer to the [GitHub Release Page](https://github.com/tapdata/tapdata/releases).

## 3.8.0

### New Features

* [Task Monitoring Page](../user-guide/data-pipeline/copy-data/monitor-task.md) now supports performance analysis, allowing you to download performance metrics for analysis.

### Enhancements

* Improved the display of primary keys and indexes in the task's table model.
* Enhanced the model deduction logic, supporting model deduction directly in the engine.

### Bug Fixes

* Fixed an issue where some exceptions were ignored during data source error handling.
* Fixed an issue where aggregation tasks using time fields as join keys could not backtrack data.
* Fixed an issue with delayed times in mining tasks.
* Fixed an issue where MySQL as a source would consume a large amount of database memory during initial synchronization of large tables.

## 3.7.0

### New Features

* Introduced Mock Source and Mock Target data sources for data migration testing scenarios.

### Enhancements

* Improved the interaction logic for skipping errors when starting tasks.
* Improved the loading speed of the connection list.

### Bug Fixes

* Fixed inconsistencies between the task runtime model and configuration model.
* Fixed inaccurate task event statistics after filtering source data.
* Fixed timezone handling issues in Oracle and PostgreSQL synchronization scenarios.
* Fixed an issue where heartbeat task reset failures could prevent related tasks from starting.