# 增强 JS 内置函数（Beta）

增强 JS 节点（Beta）可使用所有的内置函数，实现外部调用（如网络、数据库等），如仅需对数据记录进行处理和运算，请使用[标准 JS 节点](standard-js.md)。

使用方法及场景介绍，见 [JS 处理节点](../user-guide/data-pipeline/data-development/process-node#js-process)。

:::tip

本功能仅支持在数据转换任务中使用。

:::

## DateUtil

### parse

说明：将各种格式的日期字符串转换为 Date 类型。

示例：

* 一般用法：

  ```javascript
  var dte = DateUtil.parse('2010-01-01 00:00:00'); 
  ```

* 高级用法：`parse(dateString, timeoffset)`，即在转换的同时指定时区偏移量。

  ```javascript
  // 东8区
  var dte = DateUtil.parse('2010-01-01 00:00:00', 8);
  
  // 0时区
  var dte = DateUtil.parse('2010-01-01 00:00:00', 0);
  ```


### determineDateFormat

说明：获取日期格式。

示例：

```javascript
var format = DateUtil.determineDateFormat('2010-01-01 00:00:00');
```

### timeStamp2Date

说明：将时间戳按照指定格式转为日期字符串。

示例：

```javascript
var dteStr = DateUtil.timeStamp2Date(1592233019140, 'yyyy-MM-dd HH:mm:ss');
```

### addYears/addMonths/addDays/addHours/addMinutes/addSeconds

说明：对日期的年/月/日/时/分/秒进行加减运算。

示例：

```javascript
var dte = DateUtil.addYears(new Date(), 1);
dte = DateUtil.addYears(dte, -1);
```

### sameYear/sameMonth/sameDay/sameHour/sameMinute/sameSecond

说明：对日期的年/月/日/时/分/秒进行比较运算。

示例：

```javascript
if ( DataUtil.sameYear(new Date(), new Date()) ) {
    ...
}
```

## idGen/UUIDGenerator

### uuid

说明：生成 uuid，如采用 `var str = uuid();`，即可获取随机字符串。

示例：

```javascript
// 下述两种方法均可
var uuid = idGen.uuid();
var uuid = UUIDGenerator.uuid();
```

### objectId

说明：生成 MongoDB ObjectId。

示例：

```javascript
// 下述两种方法均可
var oid = idGen.objectId();
var oid = UUIDGenerator.objectId();
```

### objectIdStr

说明：生成 MongoDB ObjectId 字符串部分。

示例：

```javascript
// 下述两种方法均可
var oidStr = idGen.objectIdStr();
var oidStr = UUIDGenerator.objectIdStr();
```

## networkUtil

### GetAddress

说明：网络工具，获取 IP 地址或 MAC 地址。

示例：

```javascript
// 获取第一张网卡的 MAC 地址
var mac = networkUtil.GetAddress("mac");

// 获取 IP 地址 
var ip = networkUtil.GetAddress("ip");
```

## HashMap

### put/remove

说明：哈希字典。

示例：

```javascript
var map = new HashMap();
map.put("name", "test");
map.remove("name");
```

## ArrayList

### add/remove

说明：数组类型。

示例：

```javascript
var list = new ArrayList();
list.add("test1");
list.remove(0);
```

## Date

### add/remove

说明：日期类型。

示例：

```javascript
var dte = new Date();
var year = dte.getYear()+1900;
```

## ScriptExecutorsManager

### getScriptExecutor

说明：获取数据源执行器。

示例：

```javascript
var source = ScriptExecutorsManager.getScriptExecutor('mysql-connection-name');
```

## ScriptExecutor

### execute

说明：数据库执行操作，返回值为布尔类型，**true** 表示操作成功，**false** 表示操作失败。

:::tip

`execute` 前为 `source` 表示对源库执行操作，为 `target` 表示对目标库执行操作。

:::

示例：

```javascript
var result = target.execute({
    database: "test",
    collection: "user",
    op: "update",
    filter: {id: 1},
    opObject: {name: "user001", age: 20},
    upsert: true
});
```

参数说明：

* 对于结构化数据库（如 MySQL），使用方法可参考：`var result = source.execute({sql: "update test.user set name='user001' where id = 1"});`

* 对于 MongoDB，可用参数如下：

  - **database**：操作的数据库名称。

  - **collection**：操作的集合名称。

  - **op**：要执行的操作（INSERT/UPDATE/DELETE）。

  - **filter**：更新或者删除的条件。

  - **opObject**：新增、更新、删除的具体数据。

  - **upsert**：是否采用 MongoDB 的 UPSERT 模式，即不存在进行新增，存在则更新，默认为 **false**。

  - **multi**：是否更新多条记录，默认为 **false**。

### executeQuery

说明：数据库查询操作，返回值为数组类型，表示查询的结果集。

:::tip

`executeQuery` 前为 `source` 表示对源库执行操作，为 `target` 表示对目标库执行操作。

:::

示例：

```javascript
var users = target.executeQuery({
    database: "test",
    collection: "user",
    filter: {age: {$gt: 10}},
    sort: {age: -1},
    limit: 10
});
```

参数说明：

* 对于结构化数据库（如 MySQL），使用方法可参考：`var users = source.executeQuery({sql: "select * from test.user where age>10"});`
* 对于 MongoDB，可用参数如下：
  * **database**：操作的数据库名称。
  * **collection**：操作的集合名称。
  * **filter**：更新或者删除的条件。
  * **sort**：排序条件 （可选）。
  * **limit**：限制输出条数（可选）。

### call

说明：执行存储过程及函数，仅结构化数据库支持使用，可执行指定的数据库存储过程及自定义函数。返回值为键值对类型，根据存储过程定义返回结果。

示例：

```javascript
var result = source.call('demo' [{'param1':'aa'}])
```

参数说明：

* **funcName**：存储过程/函数名称。
* **params**：传入的参数，支持下述参数。
  * **mode**：入参类型，取值：**in**（默认值，传入）、**out**（传出）、**in/out**（传入并传出）。
  * **name**: 参数名称。
  * **value**: 参数的值。
  * **type**: 参数类类型。

## JSONUtil

### json2List/obj2Json/obj2JsonPretty/json2Map

说明：JSON 格式转换。

示例：

```javascript
var d = new Date();
var json = JSONUtil.obj2Json(d)
```

## HanLPUtil

### hanLPParticiple

说明：汉语分词工具，括号中需要设置两个参数，格式为`(String inputString, String language)`。

示例：

```javascript
var d = HanLPUtil.hanLPParticiple('你好', 'HK_T')
```

参数说明：

- **inputString**：需要进行分词的字符串。

- **language**：带分词的语言类型，支持： 
  - CH_S：简体中文。

  - CH_T：繁体中文。

  - HK_T：香港繁体。 

  - TW_T：台湾繁体。

返回值：数组类型，即分词后的结果集。

## split_chinese

说明：汉语分词工具，括号中需要设置两个参数，格式为`(String inputString, String language)`。

示例：

```javascript
var strs = split_chinese("这是一个中文句子", "CH_S");
```

参数说明：

- **inputString**：需要进行分词的字符串。

- **language**：带分词的语言类型，支持： 
  - CH_S：简体中文。

  - CH_T：繁体中文。

  - HK_T：香港繁体。 

  - TW_T：台湾繁体。

返回值：数组类型，即分词后的结果集。

## util

### strToBase64/base64ToStr/unwind

说明：字符串格式转换。

示例：

```javascript
// 将字符串装换为 Base64 格式
var b = util.strToBase64('aa');
// 将 JSON 数组按照层级拆分
var list = util.unwind(map, 'a.b.c');
```

## MD5Util/MD5

说明：MD5 加密工具。

示例：

```javascript
// 获取字符串的 MD5 签名，第二个参数为是否转换大写
var b = MD5Util.crypt('aa', true);
// 或者采用下述方法
var b = MD5('aa', true);
```

## Collections

### sort/get/emptySet/emptyList

说明：集合工具类，如排序、获取集合等。

示例：

```javascript
// 为 List 排序
Collections.sort(list);
// 获取空集合
var set = Collections.emptySet();
```

## MapUtil

### getValueByKey/needSplit/removeValueByKey/containsKey/getValuePositionInMap/deepCloneMap/copyToNewMap/putValueInMap/recursiveFlatMap/obj2Map

说明：字典工具类。

示例：

```javascript
// 从给定的map中获取指定层级的值
var a = MapUtil.getValueByKey(map, 'a.b.c');
```

## sleep

说明：程序休眠指定时长，单位为毫秒。

示例：

```javascript
// 程序休眠 10 毫秒
sleep(10);
```

## rest

### get/post/patch/delete

说明：调用 HTTP 的相关方法（如 Get），格式参考：

```javascript
rest.get(url, header)
rest.get(url, header, returnType)
rest.get(url, header, connectTimeOut, readTimeOut)
rest.get(url, header, returnType, connectTimeOut, readTimeOut)
```

* **returnType**：返回的结果类型，默认为 array。
* **connectTimeOut**：连接超时时间，单位毫秒，默认为 10000 毫秒，需要指定连接超时时间时可使用该参数。
* **readTimeOut**：读取超时时间，单位毫秒，默认为 30000 毫秒，需要指定读取超时时间时可使用该参数。

示例：

* Get

  ```javascript
  var result = rest.get('http://127.0.0.1:1234/users?id=1', {}, '[array/object/string]', 30, 300);rest.post(url, parameters)
  rest.post(url, parameters, headers, returnType)
  rest.post(url, parameters, connectTimeOut, readTimeOut)
  rest.post(url, parameters, headers, returnType, connectTimeOut, readTimeOut)
  ```

* Post

  ```javascript
  var result = rest.post('http://127.0.0.1:1234/users/find', {}, {}, '[array/object/string]', 30, 300);rest.patch(url, parameters)
  rest.patch(url, parameters, headers)
  rest.patch(url, parameters, connectTimeOut, readTimeOut)
  rest.patch(url, parameters, headers, connectTimeOut, readTimeOut)
  ```

* Patch

  ```javascript
  var result = rest.patch('http://127.0.0.1:1234/users?where[user_id]=1', {status: 0}, {}, 30, 300);rest.delete(url)
  rest.delete(url, headers)
  rest.delete(url, connectTimeOut, readTimeOut)
  rest.delete(url, headers, connectTimeOut, readTimeOut)
  ```

* Delete

  ```javascript
  var result = rest.delete('http://127.0.0.1:1234/users?where[user_id]=1', {}, 30, 300);
  ```

## mongo

### getData/insert/update/delete

说明：对 MongoDB 数据执行增删改查操作，格式参考：

```javascript
mongo.getData(uri, collection)
mongo.getData(uri, collection, filter)
mongo.getData(uri, collection, filter, limit, sort)
```

示例：

* 查询数据

  ```javascript
  var result = mongo.getData('mongodb://127.0.0.1:27017/test', 'users', {id: 1}, 10, {add_time: -1});mongo.insert(url, collection, inserts)
  ```

* 插入数据，支持传入数组或者对象

  ```javascript
  mongo.insert('mongodb://127.0.0.1:27017/test', 'users', [{id: 1, name: 'test1'}, {id: 2, name: 'test2'}]);mongo.update(url, collection, filter, update)
  ```

* 更新数据

  ```javascript
  var modifyCount = mongo.update('mongodb://127.0.0.1:27017/test', 'users', {id: 1}, {name: 'test3'});mongo.delete(url, collection, filter)
  ```

* 删除数据

  ```javascript
  var deleteCount = mongo.delete('mongodb://127.0.0.1:27017/test', 'users', {id: 1});
  ```



### aggregate

说明：内置目标节点数据库聚合操作。

参数说明：

* **database**：操作的数据库名称。
* **collection**：操作的集合名称。
* **pipeline**：聚合管道参数。

返回值：数组类型，表示聚合的结果集。

示例：

```javascript
var aa = ScriptExecutor.getScriptExecutor('mongo-test');
var users = aa.aggregate({
    database: "test",
    collection: "user",
    pipeline: [{'$match':{'CUSTOMER_ID':'C000026278'}}]
});
```

