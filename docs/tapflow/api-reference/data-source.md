# Data Source APIs

This document explains how to create a new data source connection in TapFlow, which serves as the source and target for subsequent flow tasks. Additionally, you can manage data sources [through the interface](../../prerequisites/README.md) for convenience based on your preferences.

:::tip

TapFlow supports [dozens of common data sources](../../prerequisites/supported-databases.md). You can configure a data source by setting the `name`, `type`, and `config` parameters. Configuration details, required permissions, and parameter descriptions vary by data source type. For more information, see [Connect Data Sources](../../prerequisites/README.md).

:::

## Parameter Descriptions

- **name**: Data source name, following variable naming conventions.
- **type**: Data source type. Options include `source` (as source database), `target` (as target database), and `source_and_target` (as both source and target).
- **config**: Data source connection parameters, provided in JSON or dictionary format.

## Viewing Data Source Help Information

Before configuring, use `h <database_type>` to view configuration requirements for each data source type.

```python
# View required and optional parameters for a MySQL data source
tap > h mysql
required config:
    database: database_name                                                                                                                                              
    port: database_port                                                                                                                                                  
    host: database_host                                                                                                                                                  
    username: database_username                                                                                                                                          
optional config:
    deploymentMode:                                                                                                                                                      
    password: database_password                                                                                                                                          
    masterSlaveAddress: 
```

* **required config**: Required settings, including:
  - `database`: Database name
  - `port`: Database port
  - `host`: Database host address
  - `username`: Database username

* **optional config**: Optional settings, including:
  - `deploymentMode`: Deployment mode
  - `password`: Database password
  - `masterSlaveAddress`: Master-slave address

## Configuration Example

The example below demonstrates creating a MySQL data source named `MySQL-EcommerceData`. Other data sources can be configured similarly by adjusting the settings based on the data source type.

```python
# Define a dictionary variable mysql_json_config for MySQL connection configuration
mysql_json_config = {
    'database': 'ECommerceData',  # Database name
    'port': 3306,                 # MySQL port, usually 3306
    'host': '192.168.1.18',       # MySQL host address
    'username': 'your_username',  # Database username
    'password': 'your_passwd'     # Database password
}

# Create a data source connection object mysql_conn, referencing mysql_json_config and saving it as a source
mysql_conn = DataSource('mysql', 'MySQL_ECommerce', mysql_json_config).type('source').save()
```

## Output Example

```python
datasource MySQL_ECommerce creating, please wait...                                
save datasource MySQL_ECommerce success, will load schema, please wait...          
load schema status: finished
```

:::tip

If you encounter a `load schema status: error`, it usually indicates an issue with permissions or configuration. Retry with the same name; the system will prompt `database MongoDB_ECommerce exists, will update its config` and overwrite the previous configuration.

:::



## See also

Manage data sources with [Tap Shell](../tapcli-reference), such as viewing data source status, table structure information, deleting data sources, and other operations.
