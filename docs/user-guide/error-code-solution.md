# Task Error Codes and Solutions

import Content from '../reuse-content/_all-features.md';

<Content />

If you encounter an exception with a task, you can view the relevant log information at the bottom of the task's [monitoring page](data-development/monitor-task.md). For common issues, TapData has codified them into specific error codes for easier lookup, and provides the cause of the error and its solution.

## 10001

**Error Code Description**: Client connection closed by the server. Reasons:

* The server manually closed the connection.
* The server had too many connections, leading to automatic closure or refusal of subsequent connections.

## 10002

**Error Code Description**: Incorrect username or password. Reasons:

* Entered incorrectly.
* Password contains special characters.

**Solutions**:

* Try to re-enter the password and test the connection.
* Try using a password without special characters and report to [technical support](../support.md) for resolution.

## 10003

**Error Code Description**: This error occurs during the incremental launch phase. The starting point no longer exists in the source database logs. In most cases, the starting point refers to time or the log ID of the source database. For many databases, the incremental data sync is based on database log files. The engine reads these files to complete the incremental read phase.

Before reading, the engine needs to locate the specific position in the logs to read or listen based on the starting point. Failure to find this position in the log files will cause an error. Reasons:

* Manual or scheduled log file cleanup was performed on the source database.
* If it's an incremental task, an error in the "**incremental collection start time**" setting or a timezone mismatch with the database can cause the error.
* Incremental speed is too slow, causing significant delays. This means that new entries in the source database have overwritten the oldest logs, as seen with MongoDB's Oplog. Consider increasing log space or investigating why the incremental speed is slow.

**Solutions**:

* Reset the task. The task will reinitialize and successfully enter the incremental phase.
* After reseting the task, change it to incremental sync mode, set the starting point for incrementation, and then restart the task. Ensure that the manually set starting point exists within the log files; otherwise, some incremental data may be lost.

## 10004

**Error Code Description**: Lacking appropriate permissions when reading data. Reasons:

* The user in the data connection lacks read permissions.
* Some databases require additional permissions for incremental reads. Ensure permissions are set correctly as described when creating the data source.

## 10005

**Error Code Description**: Lacking appropriate permissions when writing data.

**Solution**: Check if the username in the destination node's data connection lacks write permissions.

## 10006

**Error Code Description**: Data type being written doesn't match the database field's actual type. Reasons:

* Before running the task, if the destination table name already exists in the database, TapData won't auto-create the table. This may lead to mismatches in field types between the source and destination tables.
* Source is a non-relational database, and destination is a relational database, like syncing from MongoDB to Oracle. A field in the source may have multiple types, while the destination relational database only allows one type per field, causing an error.
* During syncing, computational nodes like JS processors are added, causing data type changes during processing, triggering this error.

**Solutions**:

* Refer to the error message below, compare the erroneous fields' types in the source and destination databases. If inconsistent, use database DDL or similar commands to correct it, then run the task again.
* Use the [JS processing node](data-development/process-node.md#js-process) to filter out erroneous fields. For instance, if the problematic field is `field1`, the corresponding JS would be `record.remove('field1')`.
* If the JS processing node changes the data type, the new type should be passed to TapData using the syntax provided below the JS editing box. Delete the target table and run the task again.

## 10007

**Error Code Description**: Data length being written doesn't match the database field's actual length. Reasons are similar to error code 10006.

**Solutions**: Similar to the solutions for error code 10006.

## 10008

**Error Code Description**: Data writing violated unique constraints. Reason: The unique index or primary key of the target table is inconsistent with the source table.

**Solutions**:

* Use database DDL or similar commands to modify the primary key or unique index of the target table, then try launching the task again.
* Delete the destination table, allowing TapData's auto-table creation feature to recreate the table, then try launching the task again.
* In the task editing interface, turn off concurrent writing to the target table and try launching the task again.

## 10009

**Error Code Description**: Data writing violated non-null constraints. Reasons:

* The non-null constraints of the destination table's fields are inconsistent with the source table.
* JS processing nodes were used, setting some field values to null during syncing. Simultaneously, in the destination table, that field is a non-null constraint.

**Solutions**:

* Use database DLL or similar commands to remove the non-null constraint from the destination table, then try launching the task again.
* Check the JS logic to see if data values were incorrectly set to null or if the error field was removed.

## 11001 & 13001

**Error Code Description**: Unknown error.

**Solution**: Contact [technical support](../support.md) for resolution.

## 13002

**Error Code Description**: Unable to retrieve the correct operation type from log data.

**Solution**: Examine the detailed error message. If the `op` field is empty or missing, it indicates that the data might have been corrupted. Check if there's an error with the corresponding log mining task.

## 13003

**Error Code Description**: For an update data log event, the updated data is null or missing.

## 13004

**Error Code Description**: In the log event, the source table name is null or missing.

## 13005

**Error Code Description**: For a metadata operation log event, the operation details are null or missing.

## 13006

**Error Code Description**: The log event is null.

## 13007

**Error Code Description**: The log event lacks an operation type attribute.

## 13008

**Error Code Description**: The log event lacks breakpoint information.

## 13009

**Error Code Description**: For a delete data log event, the deleted data is null or missing.

## 13010

**Error Code Description**: For a write data log event, the written data is null or missing.