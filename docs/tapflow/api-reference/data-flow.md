# Data Flow APIs

This document provides a complete reference for managing data flows using the Data Flow API, including operations for defining tasks, and performing data filtering.

## Create Data Flow Task

To create a data flow task, use the commands `read_from`, `write_to`, and `save` in sequence.

#### read_from

**Command Description**: Specifies the primary data source table for the data flow task. You can specify it using `data_source_name.table_name`, where `data_source_name` can be retrieved via `show dbs` or by [creating a new data source](data-source.md).

Additionally, you can define a custom query via `query`, replacing the default `select * from table`.

**Example**:

```python
# Reading data from MySQL table
tap > myflow = Flow("DataFlow_Test")
          .read_from(mySqlSource.ecom_orders, query="select * from ecom_orders LIMIT 2000");
```

#### write_to

**Command Description**: Writes data from the synchronization task to the specified target data source.

```python
# Real-time data write to MongoDB
tap > myflow.write_to("MongoDB_Local.ecom_orders");
```

#### save

**Command Description**: Saves the current task configuration, making it a persistent task. Once saved, the data synchronization task can be started or stopped.

```python
# Save and create a persistent data flow task
tap > myflow.save();
```

#### Simplest Example

Combining all steps into a complete example, this task reads order data from MySQL and writes it to MongoDB. Once saved, you can run the [start](#start) command to begin the task.

```python
# Creating a data flow task
tap > myflow = Flow("DataFlow_Test")
          .read_from("mySqlSource.ecom_orders", query="SELECT * FROM ecom_orders LIMIT 2000")
          .write_to("mongodbSource.Orders")
          .save();
```

:::tip

The example above is a minimal setup. TapData also supports adding [processing nodes](#add-nodes) before `write_to` to enable more complex and customized data transformations. See below for details.

:::

## <span id="add-nodes">Add Processing Nodes</span>

### js

**Command Description**: Embeds JavaScript code within the data flow task to allow custom processing of data from the source. For more details, refer to [Standard](../../appendix/standard-js.md) / [Enhanced](../../appendix/standard-js.md) JS built-in functions.

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

### py

**Command Description**: Embeds Python functions within the data flow task to filter and transform data according to custom logic.

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

### add_fields

**Command Description**: Adds new fields to records, with values calculated using JavaScript expressions for dynamic field extension.

**Example**: In the following example, two new fields are added: `status_flag` is set to `'completed'`, and `order_value` is set to `100.5`. The result is written to the `additionalFieldsCollection` collection in MongoDB.

```python
# Creating a data flow task to add new fields with specified values
tap > flow = Flow("Add_Field_Test")  \
          .read_from(mySqlSource.ecom_orders)  \
          .add_fields([['status_flag', 'String', "'completed'"], ['order_value', 'Double', '100.5']])  \
          .write_to(mongodbSource.additionalFieldsCollection)  \
          .save();
```

### rename_fields

**Command Description**: Renames specified fields in records for improved readability or to align with business requirements.

**Example**: The example below renames the `order_status` field to `status` and the `order_id` field to `id`, with the processed records written to the `renamedFieldsCollection` collection in MongoDB.

```python
# Creating a data synchronization task to rename specified fields
tap > flow = Flow("Rename_Fields_Test")  \
          .read_from(mySqlSource.ecom_orders)  \
          .rename_fields({'order_status': 'status', 'order_id': 'id'})  \
          .write_to(mongodbSource.renamedFieldsCollection)  \
          .save();
```

### include

**Command Description**: Retains specified fields in records using wildcards if needed, ideal for streamlining output content or displaying only relevant data.

**Example**: The following example retains only the `order_status` and `order_id` fields, with processed records written to the `includedFieldsCollection` collection in MongoDB.

```python
# Creating a data flow task to retain specified fields
tap > flow = Flow("Include_Fields_Test")  \
          .read_from(mySqlSource.ecom_orders)  \
          .include("order_status", "order_id")  \
          .write_to(mongodbSource.includedFieldsCollection)  \
          .save();
```

### exclude

**Command Description**: Excludes specified fields from records, useful for hiding sensitive information or removing unnecessary fields.

**Example**: The following example excludes the `order_status` and `order_delivered_customer_date` fields, with the processed records written to the `excludedFieldsCollection` collection in MongoDB.

```python
# Creating a data flow task to exclude specified fields
tap > flow = Flow("Exclude_Fields_Test")  \
          .read_from(mySqlSource.ecom_orders)  \
          .exclude("order_status", "order_delivered_customer_date")  \
          .write_to(mongodbSource.excludedFieldsCollection)  \
          .save();
```

### lookup

**Command Description**: Performs a left join-like operation across multiple source tables, embedding data from related tables into the main table to create wide tables, often used in real-time data consolidation scenarios.

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



## See also

Manage flow tasks through [Tap Shell](../tapcli-reference), including starting and stopping tasks, checking task status, deleting tasks, and more.

