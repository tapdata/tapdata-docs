# Task Error Codes and Solutions

import Content from '../../reuse-content/_all-features.md';

<Content />

If you encounter an issue with a task, you can view related log information at the bottom of the task's [monitoring page](../../user-guide/data-development/monitor-task.md). For common issues, TapData has defined specific error codes for easier identification, along with their causes and solutions.


## Common Processor
### 10001

**Description**: Client connection closed by the server due to:

- Manual server-side connection closure.
- Server-side automatic closure or rejection of subsequent connections due to excessive connections.

### 10002

**Description**: Username or password error due to:
- Incorrect entry.
- Special characters in the password.

**Solution**:
- Retry entering the password and test the connection.
- Use a password without special characters and contact [technical support](../../appendix/support.md) for a resolution.

### 10003

**Description**: This error occurs at the start of the incremental stage when the starting point is no longer in the source database log, typically due to:
- Manual or scheduled log file cleanup at the source.
- Incorrect "incremental collection start time" settings or timezone mismatches.
- Slow incremental speed causing the oldest logs to be overwritten.

**Solution**:
- Reset and restart the task to reinitialize and smoothly enter the incremental stage.
- After resetting, change the task to incremental mode, set the incremental start time, and restart.

### 10004

**Description**: Lack of read permissions when reading data due to:
- User in the data connection lacks read permissions.
- Insufficient permissions for incremental reading in some databases.

### 10005

**Description**: Lack of write permissions when writing data.

**Solution**: Check the data connection used by the target node to ensure the user has write permissions.

### 10006

**Description**: Data type mismatch during data write due to:
- Pre-existing target table with mismatched field types.
- Non-structured source database to structured target database type mismatches.
- Type changes in the data during processing through nodes.

**Solution**:
- Adjust the mismatched field types or remove the error-causing fields using a JS processing node.

### 10007

**Description**: Data length mismatch during data write due to:
- Pre-existing target table with mismatched field lengths.
- Non-structured source database to structured target database length mismatches.
- Changes in data length during processing through nodes.

**Solution**:
- Adjust the mismatched field lengths or remove the error-causing fields using a JS processing node.

### 10008

**Description**: Data write violates unique constraints due to mismatched unique indexes or primary keys.

**Solution**:
- Adjust the target table's primary keys or unique indexes, delete the target table for TapData to recreate, or disable concurrent writing in the task settings.

### 10009

**Description**: Data write violates non-null constraints due to:
- Mismatched non-null constraints between source and target tables.
- Null values set during processing with a JS processing node.

**Solution**:
- Remove the non-null constraints from the target table or adjust the JS logic to prevent null values.

---



## Task Processor

### 11001

**Description**: Unknown error.

**Solution**: Contact [technical support](../../appendix/support.md) for resolution.

### 11002

**Description**: Failure to write single log data to external cache due to non-operational external cache database.

**Solution**: Check the external cache configuration in the mining task monitor and ensure the database is operational.

### 11006

**Description**: When the task starts, the engine will initialize the custom node according to the created custom node template. If the initialization fails to retrieve the defined template information, this error is triggered.

**Solution**: Click the "Custom Node" under the "Advanced Functions" sub-menu on the left side of the system to view the currently created custom template. If the custom template has been deleted, recreate the custom template and reconfigure the task.



### 11021

**Description**: When a DDL event is encountered, the task stops with an error.

**Solution**: This error can be avoided by setting other DDL synchronization configurations, such as automatically ignoring all DDL events or synchronizing DDL events.



### 11022

**Description**: This exception occurs when a task encounters an unrecognized DDL event.

**Solution**: Select the "Ignore all DDL" option in the source node's DDL synchronization configuration. Additionally, manually execute the same DDL operation on the target database to ensure the source and target models are consistent, then restart the task.



### 11026

**Description**: Tasks cannot be started properly when switching from shared mining mode to normal mode.

**Solution**: Reset the task and run it again.



### 11027

**Description**: When the incremental task is started, the task fails to start because the "incremental acquisition start time" is empty.

**Solution**: Set the "Incremental Acquisition Start Time" to "At This Moment" or a "User-Specified Time" in the task configuration, then restart the task.

---



## Shared Mining Reader

### 13001

**Description**: Unknown error.

**Solution**: Contact [technical support](../../appendix/support.md) for resolution.

### 13002

**Description**: Unable to obtain the correct operation type from log data.

**Solution**: Examine detailed error information. If data has been corrupted, check for errors in the corresponding log mining task.

### 13003

**Description**: Update data log event with empty or non-existent post-update data.

### 13004

**Description**: Log event with empty or non-existent source table name.

### 13005

**Description**: Metadata operation log event with empty or non-existent content.

### 13006

**Description**: Empty log event.

### 13007

**Description**: Log event missing operation type attribute.

### 13008

**Description**: Log event missing checkpoint information.

### 13009

**Description**: Delete data log event with empty or non-existent data.

### 13010

**Description**: Write data log event with empty or non-existent data.



## Target Processor

### 15002

**Description**: After the task starts, the engine retrieves the target table model pushed by the management side and attempts to create the table in the target database. If the target table model cannot be retrieved, this error is triggered.

**Solution**: Reset the task on the management side and run it again to check if it starts successfully. If the issue persists, submit a work order to troubleshoot the problem.



### 15003

**Description**: During synchronization, if the target database does not contain a table matching the target node's table model, the engine attempts to create the table automatically. If table creation succeeds but index creation (either update condition fields or source table indexes) fails, this error is triggered.

**Solution**:

- Disable the "Create Table Synchronization Index" option in the target node's advanced configuration or remove the index from the source database table.
- Exclude fields that do not support index creation in the update condition or modify unsupported field types to ones compatible with the target database.
- Ensure the connected account used by the target node has the necessary permissions to create indexes.



### 15004

**Description**:An error occurred while deleting a table structure in the target node.

**Solution**:

- Grant the target node connection user the appropriate permissions to delete tables.
- Remove foreign key constraints from the associated table and restart the task.



### 15006

**Description**: If the target table exists and the configured policy is "Keep the target table structure and clear the data," but clearing the data fails, this error occurs.

**Solution**:

- Remove foreign key constraints referencing the target table.
- Grant the target node connection account the necessary permissions to clear the table.



### 15011

**Description**: The target node failed to perform the operation of adding a new field.

**Solution**:

- When running the task in "Incremental" synchronization mode, ensure the "Incremental Acquisition Start Time" is set to a point after the new field event. This prevents the target node from executing the operation repeatedly.
- Grant the target node the appropriate permissions to use the connected account.



### 15012

**Description**:The target node failed to modify a field name.

**Solution**:

- When running the task in "Incremental" synchronization mode, ensure the "Incremental Acquisition Start Time" is set to a point after the field name modification event. This prevents the target node from executing the operation repeatedly.
- Grant the target node the appropriate permissions to use the connected account.



### 15014

**Description**:The target node failed to modify a field attribute.

**Solution**:

- When running the task in "Incremental" synchronization mode, ensure the "Incremental Acquisition Start Time" is set to a point after the field attribute modification event. This prevents the target node from executing the operation repeatedly.
- Grant the target node the appropriate permissions to use the connected account.



### 15015

**Description**:The target node failed to delete a field.

**Solution**:

- When running the task in "Incremental" synchronization mode, ensure the "Incremental Acquisition Start Time" is set to a point after the field deletion event. This prevents the target node from executing the operation repeatedly.
- Grant the target node the appropriate permissions to use the connected account.

## Merge Processor

### 16006

**Description**: The merged source table does not have a primary key or a unique index, making it impossible to cache the data. Consequently, the merge cannot proceed.

**Solution**: Add a primary key or unique index to the source table.



### 16007

**Description**: The mode of merging into an array lacks the associated key for the array.

**Solution**: Set the associated key for the array in the interface.



### 16008

**Description**: Updating or writing to the cache failed because data could not be found in the cache based on the federated key.

**Solution**: Check whether the cache configuration and data are correct.



### 16009

**Description**: Updating or writing to the cache failed.

**Solution**: Check whether the cache configuration and data are correct.



### 16010

**Description**: Deleting from the cache failed because data could not be found in the cache based on the federated key.

**Solution**: Check whether the cache configuration and data are correct.



### 16011

**Description**: Deleting from the cache failed.

**Solution**: Check whether the cache configuration and data are correct.



### 16018

**Description**: In the master-slave merge configuration, the source join key configuration is missing.

**Solution**: Add the source join key configuration in the master-slave merge node.



### 16019

**Description**: The value for the join key does not exist in the data.

**Solution**: Ensure the data includes the required join key values.



### 16020

**Description**: In the master-slave merge configuration, the target join key configuration is missing.

**Solution**: Add the target join key configuration in the master-slave merge node.



### 16021

**Description**: The value for the primary key or unique index does not exist in the data.

**Solution**: Ensure the data includes the required primary key or unique index values.

---

## Shared Mining Processor

### 19002

**Description**: The shared mining task will read the incremental events from the source side and cache them in the external database for use by the copy/transform task that starts the shared mining. The task failed to write incremental events to the external storage database.

**Solution**: Check whether the external storage cache database is functioning correctly. Navigate to the external storage management interface via the system menu. Test the connection of the shared mining task's external storage configuration. If unavailable, troubleshoot based on the test failure information. Restart the shared mining task after fixing the issue.



### 19005

**Description**: Before the shared mining task starts, the engine generates a start tag to write to the external database. Writing the start tag to the cache external database failed.

**Solution**: Check whether the external storage cache database is functioning correctly. Navigate to the external storage management interface via the system menu. Test the connection of the shared mining task's external storage configuration. If unavailable, troubleshoot based on the test failure information. Restart the shared mining task after fixing the issue.



### 19006

**Description**: The shared mining task will read incremental events from the source side and cache them in the external database for use by downstream tasks. This error occurs when writing the log contents of a single incremental event to the external database fails.

**Solution**: Check whether the external storage cache database is functioning correctly. Navigate to the external storage management interface via the system menu. Test the connection of the shared mining task's external storage configuration. If unavailable, troubleshoot based on the test failure information. Restart the shared mining task after fixing the issue.

---

## External Storage Management

### 20001

**Description**: Failed to write a cache record to storage.

**Solution**: Check whether the external storage cache database is functioning correctly. Navigate to the external storage management interface via the system menu. Test the connection of the shared mining task's external storage configuration. If unavailable, troubleshoot based on the test failure information. Restart the shared mining task after fixing the issue.



### 20002

**Description**: When the task is started, the available external storage configuration is searched. If no available external storage configuration is found, this error is triggered.

**Solution**: Navigate to the external storage management interface via the system menu. Create a new external storage configuration, test the connection, and save it. Set the saved external storage configuration as the default.

---

## Exactly-Once Write Processor 

### 22003

**Description**: When the target database enables exactly-once incremental write mode, each incremental event generates a corresponding record written to the exact-once cache table (_TAP_EXACTLY_ONCE_CACHE). If the record fails to write to the database, the entire batch of events will be rolled back.

**Solution**:  

- Check whether the failure is caused by an issue with the target database, such as an outage. If there is an outage, restore the target database and restart the synchronization task.  
- Verify whether the exact-once cache table (`_TAP_EXACTLY_ONCE_CACHE`) has been accidentally deleted. If it has, restart the synchronization task.

---

## Table Mapping Processor

### 29002

**Description**: The engine needs to run the task using the model deduced before the management side is started. This error is triggered when the engine cannot retrieve the model from the management interface.

**Solution**: Check the running status of the management side. If the management side is not running normally, restore it and restart the task.

---



## Script Processor

### 30004

**Description**: Failed to execute an engine script.

**Solution**:

- Check the script content for unsupported syntax errors.
- Verify whether the script uses any unsupported functions.



### 30011

**Description**: A syntax error in the Python script within the Python node of the task prevented the creation of the Python execution engine.

**Solution**: Review the error message, check the script for errors, and modify the incorrect code in the Python node. Test the script and restart the task after successful validation.

---

## Dynamic Table Name Processor

### 35006

**Description**: The conflict between the table renaming DDL event and the table renaming node in the task is identified in the source node.

**Solution**:

- Modify the task configuration to remove the table editor node.
- Change the "DDL Synchronization" configuration in the source node's advanced settings to automatically ignore all DDLs. This ensures the source node ignores DDL events and avoids conflicts with the table editor node.

