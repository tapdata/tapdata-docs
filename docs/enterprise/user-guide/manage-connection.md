# Manage Connections

Tapdata stores connection information for various databases through connections, facilitating direct reference when creating data replication/development tasks, eliminating the need for repeated configurations, and enhancing operational convenience. This document introduces common operational actions for connections.

## Procedure

1. Log in to the Tapdata.

2. In the left navigation bar, click **Connection Management**.

3. Based on business needs, select the action to perform.

   ![Manage Connections](../images/manage_connection.png)

    - **Filter Connections**: Quickly filter based on status, connection type, and data type, or search by connection name.

    - **Test Connection**: Test whether the connection is effective. If anomalies are found, follow the prompts in the dialog box for troubleshooting.

    - **Load Schema**: Manually load model information from the data source.

    - **Edit**: Modify the name and configuration information of the connection.

    - **Copy**: Quickly copy a connection with the same configuration based on a specified connection.

    - **Delete**: Perform the delete operation for connections that are no longer needed. This operation is irreversible, so proceed with caution.

      :::tip

      When executing this operation, all tasks using this connection must be deleted; otherwise, the connection cannot be deleted.

      :::