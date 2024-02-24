# 标准 JS 内置函数

标准 JS 节点只能对数据记录进行处理和运算，如需使用所有的系统内置函数，实现外部调用（如网络、数据库等），可使用[增强 JS 节点](enhanced-js.md)。

使用方法及场景介绍，见 [JS 处理节点](../user-guide/data-pipeline/data-development/process-node#js-process)。

## context

### global

说明：节点维度下的一个任务周期内的 hashMap 容器，可在 js 节点上自定义响应的内容。

示例：

```js
let myVariable = context.global["myVariable"];
if ("undifine" == myVariable || null == myVariable){
  myVariable = context.global["myVariable"] = {
      "key":1,
      "status":false
   }
}
myVariable.key++;
```

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



## HashMap

### put/remove

说明：哈希字典。

示例：

```javascript
var map = new HashMap();
map.put("name", "test");
map.remove("name");
```

## LinkedHashMap

说明：JAVA 内置有序 map 容器

示例：

```js
var map = new LinkedHashMap();//创建
map.put("key", "This is a LinkedHashMap")://向容器中加入key-value键值对
let value = map.get("key");//根据key获取value
let isEmpty = map.isEmpty();//判断容器是否为空
let size = map.size();//获取容器中键值对的数目
map.remove("key");//移出容器中指定键的键值对
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

#### getValueByKey/needSplit/removeValueByKey/containsKey/getValuePositionInMap/deepCloneMap/copyToNewMap/putValueInMap/recursiveFlatMap/obj2Map

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

