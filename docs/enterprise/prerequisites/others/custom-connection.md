# Custom Connection

If the existing data sources don't meet your requirements, you can create custom connections based on your business needs. This article outlines the configuration process.

## Connect to Custom Connection

1. Log in to the [Tapdata platform](https://cloud.tapdata.net/console/v3/).

2. In the left sidebar, click on **Connection Management**.

3. Click on **Create Connection** on the right side of the page.

4. In the pop-up dialog, search for and select **Custom Connection**.

5. Follow the instructions below to complete the data source configuration.

   * **Basic Information Settings**
        * **Connection Name**: Provide a meaningful and unique name.
        * **Connection Type**: Can be used as a source or target database.
        * **Collection Name**: Also known as the table name. When used as a source database, this represents the name of the data model generated from the data retrieved from the Custom Connection.
        * **Unique Primary Key**: Specify the field name serving as the primary key.
        * **Synchronization Method**: When used as a source database:
             * **Historical Data**: Select this option if Tapdata should only execute a historical data script once.
             * **Incremental Data**: Select this option for Tapdata to periodically execute an incremental data script every 2 seconds.
             * **Historical and Incremental Data**: Choose this option for Tapdata to execute a historical data script followed by periodic incremental script execution.
   
   
   * **JS Script Settings**
       * **JS Engine Version**: Select **New Version**.
       * **Pre-processing**: When enabled, Tapdata will execute your defined JS operation script before running data scripts (only once).
       * **Target Data Processing Script**: JS script for processing target data, used to format data to match the format of the target Custom Connection. This option is displayed only when the **Connection Type** includes a target.
       * **Incremental Data Script**: JS script for obtaining and processing incremental data. This is required when the **Synchronization Method** includes incremental data.
       * **Historical Data Script**: JS script for obtaining and processing historical data. This is required when the **Synchronization Method** includes historical data.
       * **Post-processing**: When enabled, Tapdata will execute your defined JS script after the data script is completed (only once).
   
   
   * **Advanced Settings**
       * **Agent Configuration**: Defaults to **Platform Automatic Allocation**, but you can also specify manually.
       * **Model Loading Time**: When the number of models in the data source is less than 10,000, the model information is refreshed every hour. If model data exceeds 10,000, it's refreshed daily at the specified time.
       * **Enable Heartbeat Table**: When the connection type is selected as **Source and Target** or **Source**, you can enable this option to create a heartbeat table named **_tapdata_heartbeat_table** in the source database. It will be updated every 10 seconds by Tapdata (requires relevant permissions) and used for monitoring the health of the data source connection and tasks.
   
6. Configuration is complete, click on **Script Debugging**.

7. On the redirected page, select either source or target, set a timeout, and click on "Run Test" to test script execution.

8. After completing the debugging with test runs, click the close button on the right to return to the connection configuration page.

9. Click on **Connection Test** and, upon successful testing, click **Save**.

## Introduction to Common Functions

Below are commonly used function introductions that you can reference while writing JS scripts.

### HTTP

```javascript
Http Return Instructions

// The 'data' is the returned body, which could be an array, object, or string

{code:200, data:[]}
rest.get(url, header)
rest.get(url, header, returnType)
rest.get(url, header, connectTimeOut, readTimeOut)
rest.get(url, header, returnType, connectTimeOut, readTimeOut)

// Call the http 'get' method
// returnType: The type of the returned result, default is an array
// connectTimeOut: Connection timeout in milliseconds (ms), default is 10000 ms. Use this parameter to specify the connection timeout if needed.
// readTimeOut: Read timeout in milliseconds (ms), default is 30000 ms. Use this parameter to specify the read timeout if needed.

var result = rest.get('http://127.0.0.1:1234/users?id=1', {}, '[array/object/string]', 30, 300);
rest.post(url, parameters)
rest.post(url, parameters, headers, returnType)
rest.post(url, parameters, connectTimeOut, readTimeOut)
rest.post(url, parameters, headers, returnType, connectTimeOut, readTimeOut)

// Call the http 'post' method
// returnType: The type of the returned result, default is an array
// connectTimeOut: Connection timeout in milliseconds (ms), default is 10000 ms. Use this parameter to specify the connection timeout if needed.
// readTimeOut: Read timeout in milliseconds (ms), default is 30000 ms. Use this parameter to specify the read timeout if needed.

var result = rest.post('http://127.0.0.1:1234/users/find', {}, {}, '[array/object/string]', 30, 300);
rest.patch(url, parameters)
rest.patch(url, parameters, headers)
rest.patch(url, parameters, connectTimeOut, readTimeOut)
rest.patch(url, parameters, headers, connectTimeOut, readTimeOut)

// Call the http 'patch' method
// connectTimeOut: Connection timeout in milliseconds (ms), default is 10000 ms. Use this parameter to specify the connection timeout if needed.
// readTimeOut: Read timeout in milliseconds (ms), default is 30000 ms. Use this parameter to specify the read timeout if needed.

var result = rest.patch('http://127.0.0.1:1234/users?where[user_id]=1', {status: 0}, {}, 30, 300);
rest.delete(url)
rest.delete(url, headers)
rest.delete(url, connectTimeOut, readTimeOut)
rest.delete(url, headers, connectTimeOut, readTimeOut)

// Call the http 'delete' method
// connectTimeOut: Connection timeout in milliseconds (ms), default is 10000 ms. Use this parameter to specify the connection timeout if needed.
// readTimeOut: Read timeout in milliseconds (ms), default is 30000 ms. Use this parameter to specify the read timeout if needed.

var result = rest.delete('http://127.0.0.1:1234/users?where[user_id]=1', {}, 30, 300);
```

### MongoDB

```javascript
mongo.getData(uri, collection)
mongo.getData(uri, collection, filter)
mongo.getData(uri, collection, filter, limit, sort)

// Query data in MongoDB
var result = mongo.getData('mongodb://127.0.0.1:27017/test', 'users', {id: 1}, 10, {add_time: -1});

mongo.insert(url, collection, inserts)

// Insert data in MongoDB
// 'inserts' represents the data to be inserted, it can be an array or an object
mongo.insert('mongodb://127.0.0.1:27017/test', 'users', [{id: 1, name: 'test1'}, {id: 2, name: 'test2'}]);

mongo.update(url, collection, filter, update)

// Update data in MongoDB
var modifyCount = mongo.update('mongodb://127.0.0.1:27017/test', 'users', {id: 1}, {name: 'test3'});

mongo.delete(url, collection, filter)

// Delete data in MongoDB
var deleteCount = mongo.delete('mongodb://127.0.0.1:27017/test', 'users', {id: 1});
```

