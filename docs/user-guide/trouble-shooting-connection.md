# Troubleshooting Connections

import Content from '../reuse-content/_all-features.md';

<Content />

To ensure the effectiveness of the data source connection, you can perform a connection test after completing the [data connection configuration](../prerequisites/README.md). By clicking on **Test Connection**, you can verify if the data source configuration meets the requirements and check for normal network connectivity. This article provides an overview of common inspection items within TapData and offers troubleshooting methods in case of connection failures.

- **Check if connections are available**

   When TapData attempts to connect to the data source and encounters an unreachable network, the connection test will fail. In such cases, it is recommended to check the network connectivity by examining factors such as the local iptables configuration and any ACL limits present in the network. These checks will help identify potential issues that may be preventing successful network communication.

- **Check if the username, password, and database are correct**

   TapData utilizes the configured username and password to establish a connection with the data source. If the provided username, password, or database name is incorrect, the connection test will fail. In such cases, it is important to verify the accuracy of the authentication information entered. Double-check the username, password, and database name to ensure they are correct and match the credentials required for the data source.

- **Check if data source version is supported**

   TapData detects the version of the data source, and if the version is not supported, the test fails.

- **Load model**

   TapData tries to load the table meta information in the data source, if it fails to load, the test fails, then check whether the database user has been granted the corresponding permission.

- **Check if binlog is enabled and set to ROW format** (for MySQL)

   TapData verifies whether the database's binlog is enabled and set to the ROW format. If these requirements are not met, the connection test will fail. To gather more information about binlog settings, it is recommended to refer to the [MySQL preparations documentation](../prerequisites/on-prem-databases/mysql.md). In such cases, it is necessary to review and verify the configuration of the database's binlog to ensure it is properly enabled and set to the ROW format as per the requirements.

- **Check if permissions required for CDC are authorized**

   TapData checks whether the database account has the necessary permissions to perform CDC (Change Data Capture), if the permission is not met, the test fails, then check whether the database user has been granted the corresponding permission.

- **Check if archive logging is enabled** (for Oracle)

   TapData checks if the archive log is enabled. If it is not enabled, the test fails. For more information about how to enable it, see [Oracle preparation](../prerequisites/on-prem-databases/oracle.md).

- **Check if supplemental log mode is correct** (for Oracle)

   TapData checks if the supplemental log mode is correct. If it is incorrect, the test fails. For more information about how to set it up, see [Oracle preparation](../prerequisites/on-prem-databases/oracle.md).

- **Check if permissions required for DDL are authorized** (for Oracle)

   TapData checks if the database account has DDL execution permissions. If the permission is not met, the test fails. For an example of authorization, see [Oracle preparation](../prerequisites/on-prem-databases/oracle.md).



## See also

[Preparations Before Connection](../prerequisites/README.md)