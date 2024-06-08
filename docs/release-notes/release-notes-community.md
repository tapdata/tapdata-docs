# TapData Community Release Notes

import Content from '../reuse-content/_community-features.md';

<Content />

This document introduces the recent release notes for TapData Community. For more information on earlier versions, please refer to the [GitHub Release Page](https://github.com/tapdata/tapdata/releases).

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