# Command Reference

Tap Shell offers a comprehensive set of commands for managing data sources and data flow tasks. This document provides detailed instructions on how to use these commands. For automated management of data sources and data flow tasks via API, please refer to the [API Reference Guide](api-reference/README.md).

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

## Manage Data Flow Tasks

### show flows

**Command Description**: Lists all data flow tasks, including task names, statuses, and synchronization types (e.g., **initial_sync** for full data synchronization and **cdc** for incremental synchronization).

**Example**:

```python
tap > show flows
d7c298: Oracle_Sync_Test       complete     sync/initial_sync+cdc
```

### **status <flow name/id>**

**Command Description**: Displays runtime statistics for a data synchronization task.

**Example**:

```python
status MySQL_A_to_B
job current status is: running, qps is: 31808.0, total rows: 1300000, delay is: 706ms
```

### start <flow name/id>

**Command Description**: Starts the specified data flow task. By default, the first run will perform a full data synchronization, followed by incremental synchronization. If the task is configured as full-only, it will complete a single full synchronization; if incremental-only, it will begin at the specified starting point or current time.

**Example**:

```python
tap > start MySQL_A_to_B
Task start succeed 
```

### stop <flow name/id>

**Command Description**: Stops the specified data flow task, which will resume from the last incremental point on the next start.

**Example**:

```python
tap > stop MySQL_A_to_B
Task stop succeed 
```

### **logs <flow name/id>**

**Command Description**: Displays logs for the specified data flow task.

```python
tap > logs Oracle_Sync_Test
{'id': '671f9c54cc9caf4b1cb1942b', 'customId': '638af042703dd67b8fb63af8', 'level': 'INFO', 'timestamp': 1730124884471, 'date': '2024-10-28T14:14:43.568+00:00', 'taskId': '668f197a37800f4b2a167806', 'taskRecordId': '671f9bee548ec6691e89681c', 'taskName': 'MySQL_A_to_B', 'nodeId': '4eb098ee-19f8-4e63-a7bf-9d7e726c62ea', 'nodeName': 'Region_A', 'message': 'Node Region_A[4eb098ee-19f8-4e63-a7bf-9d7e726c62ea] start preload schema,table counts: 1', 'logTags': [], 'data': [], 'user_id': '638af042c162f518b1b9bdf4'}
```

### reset <flow name/id>

**Command Description**: Clears synchronization progress of  the specified data flow task, and the task will restart from scratch on the next start.

**Example**:

```python
tap > reset MySQL_B_to_A
Task reset success 
```

### delete <flow name/id>

**Command Description**: Deletes the specified data flow task

:::warning

This action is irreversible. Proceed with caution.

:::

**Example**:

```python
tap > delete MySQL_to_MongoDB_Order
Are you sure you want to delete flow MySQL_to_MongoDB_Order (y/[n]): y
Task deleted successfully            
```

