# Manage Data Sources

TapData Shell allows users to create and manage data sources via command line, with simple configurations to connect to various data sources. It supports viewing status, switching contexts, retrieving schema details, and more. You can also manage data sources through the [web interface](../../prerequisites/README.md) to suit your preferred workflow.

## Create a Data Source

**Command Description**: Create a new data source connection. TapData Shell supports [dozens of common data sources](../../prerequisites/supported-databases.md), and data sources are configured using `name`, `type`, and `config` parameters.

:::tip

Each data source type may require different parameters. For detailed configuration requirements, permissions, and parameter descriptions, see [Connecting Data Sources](../../prerequisites/README.md).

:::

**Parameter Descriptions**:

- **name**: Data source name, following variable naming conventions.
- **type**: Data source type. Options include `source` (as source database), `target` (as target database), and `source_and_target` (as both source and target).
- **config**: Data source connection parameters, provided in JSON or dictionary format.

**Viewing Data Source Help Information**

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

**Configuration Example**:

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

**Output Example**:

```python
datasource MySQL_ECommerce creating, please wait...                                
save datasource MySQL_ECommerce success, will load schema, please wait...          
load schema status: finished
```

:::tip

If you encounter a `load schema status: error`, it usually indicates an issue with permissions or configuration. Retry with the same name; the system will prompt `database MongoDB_ECommerce exists, will update its config` and overwrite the previous configuration.

:::

## Manage Data Sources

### show dbs

**Command Description**: List all connected data sources, including connection ID, status, database type, and data source name.

**Example**:

```python
tap > show dbs
id         status     database_type        name                                      
4fa6c6     ready      MongoDB              MongoDB_ECommerce                       
4fa6c1     ready      Mysql                MySQL_ECommerce  
```

### use <db_name>

**Command Description**: Select a data source for further operations, such as viewing tables.

**Example**:

```python
tap > use MySQL_ECommerce
datasource switch to: MySQL_ECommerce
```

### show tables

**Command Description**: After selecting a data source, use this command to list all tables in the current database.

**Example**:

```python
tap > show tables
ecom_customers        ecom_order_items      ecom_order_payments   ecom_orders           ecom_product_category 
ecom_products         ecom_sellers   
```

### desc <table_name>

**Command Description**: After selecting a data source, use this command to view the schema information of a specific table (such as column types).

**Example**:

```python
desc ecom_customers
{
  "customer_id": "varchar(255)",
  "customer_unique_id": "varchar(255)",
  "customer_zip_code_prefix": "varchar(255)",
  "customer_city": "varchar(255)",
  "customer_state": "varchar(255)"
}
```

### count  <table_name>

**Command Description**: After selecting a data source, use this command to view the row count of a specific table.

**Example**:

```python
count ecom_customers
table ecom_customers has 99002 records  
```