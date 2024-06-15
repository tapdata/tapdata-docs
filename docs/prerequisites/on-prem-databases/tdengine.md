# TDengine

import Content from '../../reuse-content/_enterprise-and-cloud-features.md';

<Content />

Please follow the instructions below to ensure that the TDengine database is successfully added and used in TapData Cloud.

## Supported version

TDengine 3.x

## Connection configuration

### Port configuration

Full functionality using REST connection. Please configure port 6041.

###  Incremental data functionality explanation

TDengine supports new data subscription, which utilizes the Java connector and requires support for port 6030. Additionally, you need to install the client driver for TDengine.

To install the TDengine client driver, follow these steps

https://docs.tdengine.com/develop/connect/

## Supported field types

```
TIMESTAMP
INT
INT UNSIGNED
BIGINT
BIGINT UNSIGNED
FLOAT
DOUBLE
SMALLINT
SMALLINT UNSIGNED
TINYINT
TINYINT UNSIGNED	
BOOL
NCHAR
BINARY (An alias for VARCHAR, BINARY type fields will be converted to VARCHAR type when creating the table.)
VARCHAR
```

## Common issues

Error occurred while modifying column width:

TDengine currently does not support modifying the width of certain column types.