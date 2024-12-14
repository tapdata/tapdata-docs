# Data Source APIs

This document explains how to create a new data source connection in TapFlow, which serves as the source and target for subsequent flow tasks. Additionally, you can manage data sources [through the interface](../../prerequisites/README.md) for convenience based on your preferences.

:::tip

TapFlow supports [dozens of common data sources](../../prerequisites/supported-databases.md). You can configure a data source by setting the `name`, `type`, and `config` parameters. Configuration details, required permissions, and parameter descriptions vary by data source type. For more information, see [Connect Data Sources](../../prerequisites/README.md).

:::

## Parameter Descriptions

- **name**: Data source name, following variable naming conventions.
- **type**: Data source type. Options include `source` (as source database), `target` (as target database), and `source_and_target` (as both source and target).
- **config**: Data source connection parameters, provided in JSON or dictionary format.

### View Data Source Help

Before configuring a data source, you can use the `h <database_type>` command to view specific configuration requirements for each data source.

```python
# View the required and optional parameters for a MySQL data source
tap > h mysql
required config:
    database: database_name (Type: string)                                                                                                        
    port: database_port (Type: string)                                                                                                            
    host: database_host (Type: string)                                                                                                            
    username: database_username (Type: string)                                                                                                    
optional config:
    deploymentMode:  (Type: string)                                                                                                               
        Enum values: standalone, master-slave
        Dependencies:
            When value is standalone, requires: host, port
            When value is master-slave, requires: masterSlaveAddress
    password: database_password (Type: string)                                                                                                    
    timezone:  (Type: string)                                                                                                                     
        Enum values: -11:00, -10:00, -09:00, ...
    addtionalString: addtionalString (Type: string)                                                                                               
    masterSlaveAddress:  (Type: array)                                                                                                            
        Array[port: number, host: string]
```

**Explanations of Configuration Parameters**

- **required config**: Mandatory configuration options, including:
  - **`database`**: Name of the database.
  - **`port`**: Database port number.
  - **`host`**: Database host address.
  - **`username`**: Database username.
- **optional config**: Optional configuration options, including:
  - **`deploymentMode`**: The deployment mode.
  - **`password`**: Database password.
  - **`timezone`**: Timezone configuration, default is UTC+0. If set to another timezone, it will affect fields without timezone information (e.g., `datetime`), but will not affect fields with time zones (e.g., `timestamp`, `date`, `time`).
  - **`masterSlaveAddress`**: Address of the master-slave setup.



### Configuration Example

The following example demonstrates how to create a MySQL data source named **MySQL-EcommerceData**. The configuration process for other data source types is similar. Simply adjust the configuration details based on the selected data source.

```python
# Define a dictionary to store MySQL data source connection details
mysql_json_config = {
    'database': 'ECommerceData',  # Database name
    'port': 3306,                 # MySQL port, typically 3306
    'host': '192.168.1.18',       # MySQL host address
    'username': 'your_username',  # Database username
    'password': 'your_password'   # Database password
}

# Initialize a MySQL data source object using the given configuration
mysql_conn = DataSource('mysql', 'MySQL_ECommerce', mysql_json_config)

# Set the data source type to 'source' (source database)
mysql_conn.type('source')

# Save the MySQL data source configuration to TapFlow
mysql_conn.save()

# (Optional) To delete the data source configuration, call the delete() method
# mysql_conn.delete()
```



### Output Example

```python
datasource MySQL_ECommerce creating, please wait...                                
save datasource MySQL_ECommerce success, will load schema, please wait...          
load schema status: finished
```

:::tip

If an error message like `load schema status: error` appears, it is often due to incorrect permissions or configuration issues. You can try to recreate the source using the same name. The system will display a message like `database MySQL_ECommerce exists, will update its config`, which means it will overwrite the previous configuration.

:::

## <span id="advanced">Advanced Configuration</span>

In TapFlow, the **`Source` API** serves as the starting point for data flow tasks. It defines data sources, table names, and task types, and it also loads the source table data required for task execution. Additionally, `Source` provides advanced features and configuration options to support data synchronization, Change Data Capture (CDC), and performance optimization.

:::tip

The advanced configuration of the `Source API` only applies to the subsequent [data flow tasks](data-flow.md). It does not modify the global default settings of the data source or affect other pre-defined data flow tasks.

:::



### Select Tables and Task Type

The **Source API** offers flexible table selection and task mode configuration for a variety of data flow scenarios:

- **Data Transformation Task** (Single Table): If the task only processes one specific table, the task type is automatically set to **data transformation task** (`sync` mode). This mode is suitable for data modeling, ETL, data cleaning, and wide table construction.

  ```python
  # Data transformation task: Process only the ecom_orders table
  source = Source('MySQL_ECommerce', table='ecom_orders')
  ```

- **Data Replication Task** (Multiple Tables): If multiple tables or regex patterns are specified, the task is automatically set as a **data replication task** (`migrate` mode). This mode is useful for database migration, cloud migration, database backup, and multi-table synchronization.

  ```python
  # Data replication task: Specify multiple tables
  source = Source('MySQL_ECommerce', table=['ecom_orders', 'customer_info'], mode='migrate')
  
  # Data replication task: Use regex to match table names
  source = Source('MySQL_ECommerce', table_re='sales_.*', mode='migrate')
  ```

:::tip

- Regular expressions are useful for dynamically tracking and syncing newly added tables.
- Starting from TapFlow 0.2.32, **`mode='migrate'`** is required to explicitly define data replication tasks for compatibility and clarity.

:::



### Enable DDL Synchronization

Enable **DDL synchronization** (disabled by default) to ensure that structural changes to the source database (like adding, renaming, or deleting columns) are also synchronized to the target database.

```python
source.enableDDL()
```

:::tip

To enable DDL synchronization, the target database must also support DDL application. You can check the [list of supported data sources](../../prerequisites/supported-databases.md) for each database's support for DDL events. For more details, see [Best Practices for Handling Schema Changes](../../case-practices/best-practice/handle-schema-changes.md).

:::



### Enable MongoDB PreImage

Enable **[PreImage](https://www.mongodb.com/docs/manual/changeStreams/#change-streams-with-document-pre--and-post-images)** for MongoDB (disabled by default). When enabled, it captures the original (pre-update) values for change events, allowing audit trails or rollbacks.

```python
source.enablePreImage()
```



### Disable Update Field Completion

The **Update Field Completion** feature (enabled by default) ensures that all fields (including unchanged fields) are written to the target database during an update to ensure data consistency. To reduce storage overhead, you can disable this feature using the following command:

```python
source.disable_filling_modified_data()
```



### Set Incremental Read Batch Size

Defines the number of records to read in each batch during incremental synchronization. The default value is **1**. Increasing this value can improve throughput but may increase latency.

```python
# Set batch size to read 10 records at a time
source.increase_read_size(10)  
```



### Set Full Read Batch Size

Defines the number of records to read in each batch during full synchronization. The default value is **100**. Adjusting this value can improve performance during initial data migration.

```python
# Set batch size to read 500 records at a time
source.initial_read_size(500)  
```



### Comprehensive Configuration Example

The following example demonstrates how to configure the **Source API** to support flexible data source configuration and improve performance by increasing batch sizes for full and incremental reads.

```python
# Reference an existing data source and configure it as a data replication task for multiple tables
source = Source('MySQL_ECommerce', table=['ecom_orders', 'customer_info'], mode='migrate')

# Enable DDL change synchronization
source.enableDDL()

# Set the incremental batch read size to 10 records
source.increase_read_size(10)

# Set the full batch read size to 500 records
source.initial_read_size(500)

print("Advanced data source configuration complete. Ready to create data flow tasks...")
```

By configuring advanced settings, you can optimize the performance, flexibility, and robustness of your data flow tasks. This includes enabling DDL synchronization, increasing batch sizes, and enhancing data extraction and replication processes.

## See also

Manage data sources with [Tap Shell](../tapcli-reference), such as viewing data source status, table structure information, deleting data sources, and other operations.
