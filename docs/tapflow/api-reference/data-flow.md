# Data Flow API

This document provides a comprehensive reference for managing data flows using the TapFlow API, including defining task sources/targets, executing data transformations, and handling advanced data flow operations.



## **Creating a Data Flow Task**

To create a data flow task, you need to sequentially call the `read_from`, `write_to`, and `save` APIs.



### read_from

**Node Description**: Specifies the primary data source table for the data flow task. You can define it using the `data_source_name.table_name` format, where `data_source_name` can be obtained via the `show dbs` command or by [creating a new data source](data-source.md).

Additionally, objects instantiated from the `Source API` can be directly used as a data source, which is particularly useful for more complex configurations (such as multi-table sync or performance optimization). For more details on usage and parameters, see [Advanced Data Source Configuration](data-source.md#advanced).

**Usage Examples**:

```python
# Example 1: Simple table read
tap > myflow = Flow("DataFlow_Test")  \
          .read_from("MongoDB_Demo.ecom_orders")

# Example 2: Use a Source API object as the data source
tap > source = Source("MongoDB_Demo", table=["ecom_orders"], mode="migrate")
tap > myflow = Flow("DataFlow_Test")  \
          .read_from(source)
```

You can also use a custom query to extract specific data from the source:

```python
myflow.read_from("MongoDB_Demo.ecom_orders", query="SELECT * FROM ecom_orders WHERE status='active'")
```

### write_to

**Node Description**: Writes data to the specified target data source.

**Usage Example**:

```python
# Real-time write to MongoDB
tap > myflow.write_to("MongoDB_Demo.ecom_orders");
```



### save

**Node Description**: Saves the current task configuration, making it persistent. Once `save()` is called, the data flow task can be started, stopped, or updated.

**Usage Example**:

```python
# Save and create a persistent data flow task
tap > myflow.save();
```



### Simplest Example

Here is a simple end-to-end example where data is read from the `ecom_orders` table in MySQL and written to the `Orders` collection in MongoDB. The task is saved and ready to be started.

```python
# Create and configure a data flow task
tap > myflow = Flow("DataFlow_Test")  \
          .read_from("MySQL_Demo.ecom_orders", query="SELECT * FROM ecom_orders LIMIT 2000")  \
          .write_to("MongoDB_Demo.Orders")  \
          .save();
```

:::tip
This is a minimal example. TapData also supports adding **processing nodes** before `write_to` to achieve more complex and customized data processing, which will be discussed later in this document.
:::



## Config Task Sync Types

Before starting a data flow task, TapFlow supports flexible configuration of the task's synchronization type to meet various business needs, such as **full sync**, **incremental sync**, and **full + incremental sync** (the default). For incremental sync tasks, you can specify the start time to precisely control the range of incremental data collection.



### Full Data Sync Only

A full data sync task loads all historical data from the source table to the target table. It is ideal for data initialization and one-time full migrations.

```python
# Configure full sync only
tap > myflow.full_sync();
# Save task configuration
tap > myflow.save();
```



### Incremental Data Sync Only

An incremental data sync task only captures change data (CDC) from the source table. You can choose to capture changes from the current point or specify a start time for the incremental data.

**Start Incremental Sync from Task Start Time**

```python
# Configure incremental sync only, starting from the current time
tap > myflow.only_cdc();
# Save task configuration
tap > myflow.save();
```

**Start Incremental Sync from a Specified Time**

To start collecting incremental data from a specific time, use the `config_cdc_start_time` method to set the start time and time zone.

```python
# Configure incremental sync only, starting from 2023-12-14 17:40:00
tap > myflow.only_cdc();
tap > myflow.config_cdc_start_time(1702546800000, tz="+8");
# Save task configuration
tap > myflow.save();
```

**Parameters**
- **`start_time`**: The start time for incremental sync, in `datetime` or milliseconds.
- **`tz`**: Time zone offset, default is `+8` (UTC+8). Examples: `+0` (UTC) or `-5` (EST).



### Full + Incremental Data Sync (Default)

A full + incremental data sync task first completes a full sync of historical data and then continuously captures incremental changes. It is suitable for long-term tasks like real-time synchronization or data warehouse construction.

```python
# Configure full + incremental sync (default)
tap > myflow.include_cdc();
# Save task configuration
tap > myflow.save();
```

## Add Processing Nodes

### Data Preprocessing

#### Filter Data (SQL Style)

**Node Description**: The `filter` node retains or discards data records based on specified conditions. It uses SQL-style syntax, making it easy to implement simple filtering rules for global data screening. This helps improve data quality or optimize subsequent processing.

**Usage Example**: The following examples demonstrate how to retain or discard records where the order amount is greater than 100 and the user's gender is male. The processed data is then written to the target database.

```python
# Create a data flow task that retains records that meet the condition
tap > flow = Flow("Filter_Data_Test")  \
          .read_from(MySQL_Demo.ecom_orders)  \
          .filter("order_amount > 100 and user_gender='male'")  \
          .write_to(MongoDB_Demo.filteredOrders)  \
          .save();

# Create a data flow task that discards records that meet the condition
tap > flow = Flow("Filter_Data_Discard")  \
          .read_from(MySQL_Demo.ecom_orders)  \
          .filter("order_amount <= 100 or user_gender='male'", filterType=FilterType.delete)  \
          .write_to(MongoDB_Demo.filteredOrders)  \
          .save();
```



#### Filter Data (JS Style)

**Node Description**: The `rowFilter` node allows for row-by-row processing of data using expressions. You can choose to retain or discard rows that meet specific conditions. This node supports JavaScript-style expressions, making it suitable for complex logic or dynamic field processing.

**Usage Example**: The following examples demonstrate how to retain or discard records where the price is greater than 100. The processed data is then written to the target database.

```python
# Create a data flow task that retains records that meet the condition
tap > flow = Flow("Row_Filter_Test")  \
          .read_from(MySQL_Demo.ecom_orders)  \
          .rowFilter("record.price > 100")  \
          .write_to(MongoDB_Demo.highValueOrders)  \
          .save();

# Create a data flow task that discards records that meet the condition
tap > flow = Flow("Row_Filter_Discard")  \
          .read_from(MySQL_Demo.ecom_orders)  \
          .rowFilter("record.price > 100", rowFilterType=RowFilterType.discard)  \
          .write_to(MongoDB_Demo.highValueOrders)  \
          .save();
```



#### Adjust Time

**Node Description**: The `adjust_time` node adjusts the value of time fields. It is commonly used for time zone conversion or standardizing time formats.

**Usage Example**: The following example adds 8 hours to the order time and writes the results to the target database.

```python
# Create a data flow task to add 8 hours to the order time
tap > flow = Flow("Adjust_Time_Test")  \
          .read_from(MySQL_Demo.ecom_orders)  \
          .adjust_time(addHours=8, t=["order_time"])  \
          .write_to(MongoDB_Demo.adjustedOrders)  \
          .save();
```



### Data Structure Optimization

#### Rename Table

**Node Description**: The `renameTable` node adds a prefix or suffix to the target table name. It is useful for table name management or version control.

**Usage Example**: The following example adds the prefix `v1_` and suffix `_backup` to the target table name and writes the results to the target database.

```python
# Create a data flow task that renames the target table with a prefix and suffix
tap > flow = Flow("Rename_Table_Test")  \
          .read_from(MySQL_Demo.ecom_orders)  \
          .renameTable(prefix="v1_", suffix="_backup")  \
          .write_to(MongoDB_Demo.versionedTable)  \
          .save();
```



#### Add Fields

**Node Description**: The `add_fields` node adds new fields to each record. Field values can be calculated using JavaScript expressions, enabling dynamic field extension.

**Usage Example**: The following example adds two new fields, `status_flag` set to `'completed'` and `order_value` set to `100.5`, and writes the results to the `additionalFieldsCollection` in MongoDB.

```python
# Create a data flow task to add new fields and specify field values
tap > flow = Flow("Add_Field_Test")  \
          .read_from(MySQL_Demo.ecom_orders)  \
          .add_fields([['status_flag', 'String', "'completed'"], ['order_value', 'Double', '100.5']])  \
          .write_to(MongoDB_Demo.additionalFieldsCollection)  \
          .save();
```



#### Rename Fields

**Node Description**: The `rename_fields` node renames specific fields in records. It is used to improve field readability or meet specific business requirements.

**Usage Example**: The following example renames the `order_status` field to `status` and the `order_id` field to `id`. The modified records are then written to the `renamedFieldsCollection` in MongoDB.

```python
# Create a data flow task to rename specific fields
tap > flow = Flow("Rename_Fields_Test")  \
          .read_from(MySQL_Demo.ecom_orders)  \
          .rename_fields({'order_status': 'status', 'order_id': 'id'})  \
          .write_to(MongoDB_Demo.renamedFieldsCollection)  \
          .save();
```



#### Include Specific Fields

**Node Description**: The `include` node retains only specified fields in the records. This simplifies the output content and enables selective display of data.

**Usage Example**: The following example retains only the `order_status` and `order_id` fields and writes the results to the `includedFieldsCollection` in MongoDB.

```python
# Create a data flow task that retains only specific fields
tap > flow = Flow("Include_Fields_Test")  \
          .read_from(MySQL_Demo.ecom_orders)  \
          .include("order_status", "order_id")  \
          .write_to(MongoDB_Demo.includedFieldsCollection)  \
          .save();
```



#### Exclude Specific Fields

**Node Description**: The `exclude` node removes specified fields from the records, often used to hide sensitive information or remove unnecessary fields.

**Usage Example**: The following example excludes the `order_status` and `order_delivered_customer_date` fields and writes the results to the `excludedFieldsCollection` in MongoDB.

```python
# Create a data flow task that excludes specific fields
tap > flow = Flow("Exclude_Fields_Test")  \
          .read_from(MySQL_Demo.ecom_orders)  \
          .exclude("order_status", "order_delivered_customer_date")  \
          .write_to(MongoDB_Demo.excludedFieldsCollection)  \
          .save();
```



#### Filter Field Types

**Node Description**: The `exclude_type` node removes fields of a specific data type from records. It is commonly used to clean up unnecessary data types, such as large objects or unstructured fields.

**Usage Example**: The following example removes fields of type `OBJECT_ID` and writes the results to the `cleanedOrders` collection in MongoDB.

```python
# Create a data flow task to exclude fields of the OBJECT_ID type
tap > flow = Flow("Exclude_Type_Test")  \
          .read_from(MySQL_Demo.ecom_orders)  \
          .exclude_type("OBJECT_ID")  \
          .write_to(MongoDB_Demo.cleanedOrders)  \
          .save();
```



#### Add Timestamp Field

**Node Description**: The `add_date_field` node adds a timestamp field to each data record, which is useful for data auditing or logging.

**Usage Example**: The following example adds a field `processed_time` to each record to track when it was processed.

```python
# Create a data flow task to add a timestamp field to each data record
tap > flow = Flow("Add_Date_Field_Test")  \
          .read_from(MySQL_Demo.ecom_orders)  \
          .add_date_field("processed_time")  \
          .write_to(MongoDB_Demo.timestampedOrders)  \
          .save();
```



### Data Enhancement Processing

#### Lookup Processing

**Node Description**: Performs a left join-like operation across multiple source tables, embedding data from related tables into the main table to create wide tables, often used in real-time data consolidation scenarios.

**Parameter Descriptions**:

- **from_table_name**: The related table’s name in the format `data_source_name.table_name`.
- **relation**: Mapping of join fields for an equality join between the main and related tables.
- **embed_path**: The path for embedding data (e.g., `object` or `array`).
- **embed_type**: Defines the embedded data structure type, either `object` (one-to-one) or `array` (one-to-many).
- **includes**: Fields to include in the results, separated by commas.

**Example**:

This example demonstrates using `lookup` to embed data from the `order_payments` table into `ecom_orders`, creating a wide table with order and payment details, and writing the result to the `ordersWithPayments` collection in MongoDB.

```python
tap > flow = Flow("Order_Payment_Join")
          .read_from(mySqlSource.ecom_orders)
          .lookup("mySqlSource.order_payments", relation=[["order_id", "order_id"]],
                  embed_path="payments", embed_type="array")
          .write_to(mongodbSource.ordersWithPayments)
          .save();
```



Here, `ecom_orders` is the main table, `order_payments` is the related table, joined by `order_id`. The payments data is embedded under the `payments` field as an array, allowing one-to-many data integration.

#### JS Processing

**Node Description**: Embeds JavaScript code within the data flow task to allow custom processing of data from the source. For more details, refer to [Standard](../../appendix/standard-js.md) / [Enhanced](../../appendix/standard-js.md) JS built-in functions.

**Example**: The following example adds a confirmation status field to delivered orders in a JavaScript processing node. The processed records are then written to the `updatedCollection` collection in MongoDB.

```python
# Defining JavaScript code to add a confirmation status to delivered orders
tap > jscode = '''
if (record.order_status == 'delivered') {
    record.confirmation_status = 1;  // Adds a confirmation field to delivered orders
}
return record;  // Returns the processed record
'''

# Creating a data flow task, applying JavaScript code, and writing results to the target database
tap > flow = Flow("Order_Status_Update")  \
          .read_from(mySqlSource.ecom_orders)  \
          .js(jscode)  \
          .write_to(mongodbSource.updatedCollection)  \
          .save();
```



#### Python Processing

**Node Description**: Embeds Python functions within the data flow task to filter and transform data according to custom logic.

**Example**: The following example defines a Python function `pyfunc` to keep only delivered orders, filtering out other records. The processed records are then written to the `pythonProcessedCollection` collection in MongoDB.

```python
# Defining a Python function to retain only delivered orders
tap > def pyfunc(record):
         if record['order_status'] != 'delivered':
             return None  # Return None to filter out records that don't meet the condition
         return record  # Returns the processed record

# Creating a data flow task, applying Python function, and writing results to the target database
tap > flow = Flow("Python_Function")  \
          .read_from(mySqlSource.ecom_orders)  \
          .py(pyfunc)  \
          .write_to(mongodbSource.pythonProcessedCollection)  \
          .save();
```

## See also

Manage flow tasks through [Tap Shell](../tapcli-reference), including starting and stopping tasks, checking task status, deleting tasks, and more.

