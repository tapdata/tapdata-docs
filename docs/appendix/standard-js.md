# Standard JS Built-in Function

import Content from '../reuse-content/_all-features.md';

<Content />

Standard JS nodes can only process and operate on data records. If you require the usage of system built-in functions for external calls, such as networking or database operations, you can utilize [enhanced JS nodes](enhanced-js.md).

For information on how to use and scenarios, see [JS processing node](../user-guide/data-development/process-node.md#js-process).

## DateUtil

### parse

Description: Converts date strings in various formats to Date.

Example:

* General Usage

   ```javascript
   var dte = DateUtil.parse('2010-01-01 00:00:00');
   ```

* Advanced usage: `parse(dateString, timeoffset)`, that is, specify the time zone offset while converting.

   ```javascript
   // UTC+08:00
   var dte = DateUtil.parse('2010-01-01 00:00:00', 8);
   
   // UTC+0
   var dte = DateUtil.parse('2010-01-01 00:00:00', 0);
   ```


### determineDateFormat

Description: Get the date format.

Example:

```javascript
var format = DateUtil.determineDateFormat('2010-01-01 00:00:00');
```

### timeStamp2Date

Description: Converts the timestamp to a date string in the specified format.

Example:

```javascript
var dteStr = DateUtil.timeStamp2Date(1592233019140, 'yyyy-MM-dd HH:mm:ss');
```

### addYears/addMonths/addDays/addHours/addMinutes/addSeconds

Description: Adds or subtracts the year/month/day/hour/minute/second of the date.

Example:

```javascript
var dte = DateUtil.addYears(new Date(), 1);
dte = DateUtil.addYears(dte, -1);
```

### sameYear/sameMonth/sameDay/sameHour/sameMinute/sameSecond

Description: Compares the year/month/day/hour/minute/second of the date.

Example:

```javascript
if ( DataUtil.sameYear(new Date(), new Date()) ) {
    ...
}
```

## idGen/UUIDGenerator

### uuid

Description: Generate uuid, if you use `var str = uuid();`, you can get a random string.

Example:

```javascript
// Both methods below are available
var uuid = idGen.uuid();
var uuid = UUIDGenerator.uuid();
```

### objectId

Description: Generate MongoDB ObjectId.

Example:

```javascript
// Both methods below are available
var oid = idGen.objectId();
var oid = UUIDGenerator.objectId();
```

### objectIdStr

Description: Generate MongoDB ObjectId String section.

Example:

```javascript
// Both methods below are available
var oidStr = idGen.objectIdStr();
var oidStr = UUIDGenerator.objectIdStr();
```



## HashMap

### put/remove

Description: Hash dictionary.

Example:

```javascript
var map = new HashMap();
map.put(“name”, “test”);
map.remove(“name”);
```

## ArrayList

### add/remove

Description: Array type.

Example:

```javascript
var list = new ArrayList();
list.add(“test1”);
list.remove(0);
```

## Date

### add/remove

Description: Date type.

Example:

```javascript
var dte = new Date();
var year = dte.getYear()+1900;
```

## JSONUtil

### json2List/obj2Json/obj2JsonPretty/json2Map

Description: JSON format conversion.

Example:

```javascript
var d = new Date();
var json = JSONUtil.obj2Json(d)
```

## HanLPUtil

### hanLPParticiple

Description: Chinese word segmentation tool, two parameters need to be set in parentheses, the format is `(String inputString, String language)`.

Example:

```javascript
var d = HanLPUtil.hanLPParticiple('你好', 'HK_T')
```

Parameter Description

- **inputString**: A string that requires word segmentation.

- **language**: the type of the language with the word segmentation, support:
   - CH_S: Simplified Chinese.

   - CH_T: Traditional Chinese.

   - HK_T: Traditional Chinese (Hong Kong).

   - TW_T: Traditional Chinese (Taiwan).

Returns: Array type, that is, the result set after word segmentation.

## split_chinese

Description: Chinese word segmentation tool, two parameters need to be set in parentheses, the format is `(String inputString, String language)`.

Example:

```javascript
var strs = split_chinese("这是一个中文句子", "CH_S");
```

Parameter Description

- **inputString**: A string that requires word segmentation.

- **language**: the type of the language with the word segmentation, support:
   - CH_S: Simplified Chinese.

   - CH_T: Traditional Chinese.

   - HK_T: Traditional Chinese (Hong Kong).

   - TW_T: Traditional Chinese (Taiwan).

Returns: Array type, that is, the result set after word segmentation.

## util

### strToBase64/base64ToStr/unwind

Description: String format conversion.

Example:

```javascript
// Convert the string to Base64 format
var b = util.strToBase64('aa');
// Split JSON arrays into hierarchy levels
var list = util.unwind(map, 'a.b.c');
```

## MD5Util/MD5

Description: MD5 encryption tool.

Example:

```javascript
// Get the MD5 signature of a string, the second parameter indicates whether to convert it to uppercase
var b = MD5Util.crypt('aa', true);
// Or
var b = MD5('aa', true);
```

## Collections

### sort/get/emptySet/emptyList

Description: Collection tool classes, such as sorting, getting collections, etc.

Example:

```javascript
// Sort the List
Collections.sort(list);
// Get an empty collection
var set = Collections.emptySet();
```

## MapUtil

#### getValueByKey/needSplit/removeValueByKey/containsKey/getValuePositionInMap/deepCloneMap/copyToNewMap/putValueInMap/recursiveFlatMap/obj2Map

Description: Dictionary tool class.

Example:

```javascript
// Get the value of a specified level from a given map
var a = MapUtil.getValueByKey(map, 'a.b.c');
```

## sleep

Description: The duration of the program hibernation is specified in milliseconds.

Example:

```javascript
// Sleep for 10 milliseconds in the program
sleep(10);
```

