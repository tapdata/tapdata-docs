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
tap> h mysql
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
    additionalString: additionalString (Type: string)                                                                                               
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

## See also

Manage data sources with [Tap Shell](../tapcli-reference), such as viewing data source status, table structure information, deleting data sources, and other operations.
