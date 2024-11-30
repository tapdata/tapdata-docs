# API Query Parameters
import Content from '../../reuse-content/_enterprise-features.md';

<Content />

When invoking published API interfaces, it's possible to add query conditions in the URL query string to quickly filter the query results. This article introduces supported filters and provides related usage examples.

## Supported Filters

- **[Limit Filter (Return Record Count Filter)](#limit)**: Limits the number of returned records.
- **[Skip Filter (Skip Specified Record Count Filter)](#skip)**: Skips a specified number of rows in the returned data.
- **[Where Filter (Query Condition Filter)](#where)**: Queries and returns data based on a set of logically related conditions, similar to SQL's WHERE clause.

In this case, we have published the `customer` table [as an API service](create-api-service.md), and the data comes from a randomly generated source. Its table structure and data sample are as follows:

```sql
mysql> SELECT * FROM customer LIMIT 1\G;
*************************** 1. row ***************************
           id: 000329567a744f6497a843993fcc7a30
         name: Christopher
     lastname: Kidd
      address: 6748 Johnson Court
Royhaven, NE 88469
      country: Israel
         city: Dylanmouth
registry_date: 02-04-1978
    birthdate: 2001-08-09
        email: robertlopez@example.com
 phone_number: +12(2)0954942591
       locale: se_NO
1 row in set (0.00 sec)
```

You can also use the Postman tool for a visualized invocation as shown in the following figure:

![Query Example](../../images/query_api.png)

Next, we will introduce how to use various filters and provide examples, i.e., setting **Query Params** in the figure above, which corresponds to parameters after the question mark in the request URL.

## <span id="limit">Limit Filter</span>

Limit the total number of returned records to be equal to or less than a specified number. The default is **10**. It is often used with the Skip Filter to implement pagination queries. The syntax is as follows:

```bash
# Method one
filter[limit]=n

# Method two
filter={"limit":n}
```

### Usage Example

Assuming we want to return only **1** query result from the **customer** table:

```bash
# Method one
?filter[limit]=1

# Method two
?filter={"limit":1}
```

### Return Example

```json
{
    "data": [
        {
            "id": "000329567a744f6497a843993fcc7a30",
            "name": "Christopher",
            "lastname": "Kidd",
            "address": "6748 Johnson Court\nRoyhaven, NE 88469",
            "country": "Israel",
            "city": "Dylanmouth",
            "registry_date": "02-04-1978",
            "birthdate": "2001-08-09",
            "email": "robertlopez@example.com",
            "phone_number": "+12(2)0954942591",
            "locale": "se_NO"
        }
    ],
    "total": {
        "count": 49998
    },
    "api_monit_info": {
        "recv_timestmap": 1688868479316,
        "db_request_exhaust": 147,
        "resp_timestmap": 1688868479463
    }
}
```

## <span id="skip">Skip Filter</span>

Returns the query result after skipping a specified number of records starting from the 1st record. It is often used with the Limit Filter to implement pagination queries. The syntax is as follows:

```bash
# Method one
filter[skip]=n

# Method two
filter={"skip":n}
```

### Usage Example

**Example one**: Return results starting from the 10th record:

```bash
# Method one
?filter[skip]=10

# Method two
?filter{"skip":10}
```

**Example two**: Display 10 records per page and query data on the 5th page:

```bash
# Method one
?filter[limit]=10&filter[skip]=50

# Method two
?filter={"limit":10,"skip":50} 
```

### Return Example

The following example shows the return result for example two.

```json
{
    "data": [
        {
            "id": "004c44345baf4b60b8dacc253f7a2ca3",
            "name": "Kristen",
            "lastname": "Potts",
            "address": "77579 Rodriguez Mountain\nCamachoburgh, MI 90174",
            "country": "Botswana",
            "city": "West Erin",
            "registry_date": "20-11-2005",
            "birthdate": "2017-01-29",
            "email": "csmith@example.net",
            "phone_number

": "928-622-3569x475",
            "locale": "cy_GB"
        },
        ...
    ],
    "total": {
        "count": 49988
    },
    "api_monit_info": {
        "recv_timestmap": 1688868479316,
        "db_request_exhaust": 147,
        "resp_timestmap": 1688868479463
    }
}
```

## <span id="where">Where Filter</span>

Query and return data according to a set of logically related conditions. It's similar to SQL's WHERE clause. The syntax is as follows:

```bash
# Method one
filter[where][field][operator]=value

# Method two
filter={"where":{"field":{"operator":value}}}
```

### Usage Example

**Example**: Query customers whose names are "Christopher":

```bash
# Method one
?filter[where][name][eq]=Christopher

# Method two
?filter={"where":{"name":{"eq":"Christopher"}}}
```

### Return Example

The return result is a JSON array containing all records that meet the query condition, i.e., customer names are "Christopher".

```json
{
    "data": [
        {
            "id": "000329567a744f6497a843993fcc7a30",
            "name": "Christopher",
            "lastname": "Kidd",
            "address": "6748 Johnson Court\nRoyhaven, NE 88469",
            "country": "Israel",
            "city": "Dylanmouth",
            "registry_date": "02-04-1978",
            "birthdate": "2001-08-09",
            "email": "robertlopez@example.com",
            "phone_number": "+12(2)0954942591",
            "locale": "se_NO"
        }
    ],
    "total": {
        "count": 1
    },
    "api_monit_info": {
        "recv_timestmap": 1688868479316,
        "db_request_exhaust": 147,
        "resp_timestmap": 1688868479463
    }
}
```

---



## More Examples and Complex Filters

### Example 1: Combined Use of Limit and Where Filters

Return **5** records where the name is "Christopher".

```bash
# Method one
?filter[where][name][eq]=Christopher&filter[limit]=5

# Method two
?filter={"where":{"name":{"eq":"Christopher"}},"limit":5}
```

### Example 2: Multiple Conditions in Where Filter

Return records where the name is "Christopher" and the country is "Israel".

```bash
# Method one
?filter[where][name][eq]=Christopher&filter[where][country][eq]=Israel

# Method two
?filter={"where":{"name":{"eq":"Christopher"},"country":{"eq":"Israel"}}}
```

### Example 3: Using Logical Operators (AND, OR)

Return records where the name is "Christopher" OR "Alex".

```bash
# Method one (not recommended due to ambiguity)
?filter[where][name][eq]=Christopher&filter[where][name][eq]=Alex

# Method two
?filter={"where":{"or":[{"name":{"eq":"Christopher"}},{"name":{"eq":"Alex"}}]}}
```