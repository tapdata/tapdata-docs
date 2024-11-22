# Task Error Codes and Solutions

import Content from '../../reuse-content/_all-features.md';

<Content />

If you encounter an issue with a task, you can view related log information at the bottom of the task's [monitoring page](../../user-guide/data-development/monitor-task.md). For common issues, TapData has defined specific error codes for easier identification, along with their causes and solutions.

## 10001

**Description**: Client connection closed by the server due to:
- Manual server-side connection closure.
- Server-side automatic closure or rejection of subsequent connections due to excessive connections.

## 10002

**Description**: Username or password error due to:
- Incorrect entry.
- Special characters in the password.

**Solution**:
- Retry entering the password and test the connection.
- Use a password without special characters and contact [technical support](../../appendix/support.md) for a resolution.

## 10003

**Description**: This error occurs at the start of the incremental stage when the starting point is no longer in the source database log, typically due to:
- Manual or scheduled log file cleanup at the source.
- Incorrect "incremental collection start time" settings or timezone mismatches.
- Slow incremental speed causing the oldest logs to be overwritten.

**Solution**:
- Reset and restart the task to reinitialize and smoothly enter the incremental stage.
- After resetting, change the task to incremental mode, set the incremental start time, and restart.

## 10004

**Description**: Lack of read permissions when reading data due to:
- User in the data connection lacks read permissions.
- Insufficient permissions for incremental reading in some databases.

## 10005

**Description**: Lack of write permissions when writing data.

**Solution**: Check the data connection used by the target node to ensure the user has write permissions.

## 10006

**Description**: Data type mismatch during data write due to:
- Pre-existing target table with mismatched field types.
- Non-structured source database to structured target database type mismatches.
- Type changes in the data during processing through nodes.

**Solution**:
- Adjust the mismatched field types or remove the error-causing fields using a JS processing node.

## 10007

**Description**: Data length mismatch during data write due to:
- Pre-existing target table with mismatched field lengths.
- Non-structured source database to structured target database length mismatches.
- Changes in data length during processing through nodes.

**Solution**:
- Adjust the mismatched field lengths or remove the error-causing fields using a JS processing node.

## 10008

**Description**: Data write violates unique constraints due to mismatched unique indexes or primary keys.

**Solution**:
- Adjust the target table's primary keys or unique indexes, delete the target table for TapData to recreate, or disable concurrent writing in the task settings.

## 10009

**Description**: Data write violates non-null constraints due to:
- Mismatched non-null constraints between source and target tables.
- Null values set during processing with a JS processing node.

**Solution**:
- Remove the non-null constraints from the target table or adjust the JS logic to prevent null values.

## 11001

**Description**: Unknown error.

**Solution**: Contact [technical support](../../appendix/support.md) for resolution.

## 11002

**Description**: Failure to write single log data to external cache due to non-operational external cache database.

**Solution**: Check the external cache configuration in the mining task monitor and ensure the database is operational.

## 13001

**Description**: Unknown error.

**Solution**: Contact [technical support](../../appendix/support.md) for resolution.

## 13002

**Description**: Unable to obtain the correct operation type from log data.

**Solution**: Examine detailed error information. If data has been corrupted, check for errors in the corresponding log mining task.

## 13003

**Description**: Update data log event with empty or non-existent post-update data.

## 13004

**Description**: Log event with empty or non-existent source table name.

## 13005

**Description**: Metadata operation log event with empty or non-existent content.

## 13006

**Description**: Empty log event.

## 13007

**Description**: Log event missing operation type attribute.

## 13008

**Description**: Log event missing checkpoint information.

## 13009

**Description**: Delete data log event with empty or non-existent data.

## 13010

**Description**: Write data log event with empty or non-existent data.