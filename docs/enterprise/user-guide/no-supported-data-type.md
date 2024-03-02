# Data Type Support Explanation

:::tip

This document only lists field types that are not supported during the synchronization process. Data sources not covered will be supplemented gradually.

:::

#### Oracle as Source

| Target           | Unsupported Fields                                                   |
| ---------------- | -------------------------------------------------------------------- |
| Oracle           | RAW, LONG_RAW, BFILE, XMLTYPE, STRUCT                                |
| MongoDB          | RAW, LONG_RAW, BFILE, XMLTYPE, STRUCT, INTERVAL DAY(2) TO SECOND(6), INTERVAL YEAR(4) TO MONTH |
| SQL Server       | RAW, LONG_RAW, BFILE, XMLTYPE, STRUCT, INTERVAL DAY(2) TO SECOND(6), INTERVAL YEAR(4) TO MONTH |
| MySQL            | RAW, LONG_RAW, BFILE, XMLTYPE, STRUCT, INTERVAL DAY(2) TO SECOND(6), INTERVAL YEAR(4) TO MONTH |
| PostgreSQL       | RAW, LONG_RAW, BFILE, XMLTYPE, STRUCT, INTERVAL DAY(2) TO SECOND(6), INTERVAL YEAR(4) TO MONTH |
| Elastic Search   | RAW, LONG_RAW, BFILE, XMLTYPE, STRUCT, INTERVAL DAY(2) TO SECOND(6), INTERVAL YEAR(4) TO MONTH |
| Kafka            | RAW, LONG_RAW, BFILE, XMLTYPE, STRUCT, INTERVAL DAY(2) TO SECOND(6), INTERVAL YEAR(4) TO MONTH |
| ClickHouse       | RAW, LONG_RAW, BFILE, XMLTYPE, STRUCT, INTERVAL DAY(2) TO SECOND(6), INTERVAL YEAR(4) TO MONTH, BLOB |

#### MySQL as Source

| Target           | Unsupported Fields                                                   |
| ---------------- | -------------------------------------------------------------------- |
| Oracle           | GEOMETRY, POINT, LINESTRING, POLYGON, MULTIPOINT, MULTILINESTRING, MULTIPOLYGON, GEOMETRYCOLLECTION, DOUBLE UNSIGNED, DOUBLE UNSIGNED, BINARY, VARBINARY, TINYBLOB, BLOB, LONGBLOB |
| MongoDB          | GEOMETRY, POINT, LINESTRING, POLYGON, MULTIPOINT, MULTILINESTRING, MULTIPOLYGON, GEOMETRYCOLLECTION, DOUBLE UNSIGNED, DOUBLE UNSIGNED, BINARY, VARBINARY, TINYBLOB, BLOB, LONGBLOB |
| SQL Server       | GEOMETRY, POINT, LINESTRING, POLYGON, MULTIPOINT, MULTILINESTRING, MULTIPOLYGON, GEOMETRYCOLLECTION, DOUBLE UNSIGNED, DOUBLE UNSIGNED, BINARY, VARBINARY, TINYBLOB, BLOB, LONGBLOB |
| MySQL            | GEOMETRY, POINT, LINESTRING, POLYGON, MULTIPOINT, MULTILINESTRING, MULTIPOLYGON, GEOMETRYCOLLECTION |
| PostgreSQL       | GEOMETRY, POINT, LINESTRING, POLYGON, MULTIPOINT, MULTILINESTRING, MULTIPOLYGON, GEOMETRYCOLLECTION, DOUBLE UNSIGNED, DOUBLE UNSIGNED, BINARY, VARBINARY, TINYBLOB, BLOB, LONGBLOB |
| Elastic Search   | GEOMETRY, POINT, LINESTRING, POLYGON, MULTIPOINT, MULTILINESTRING, MULTIPOLYGON, GEOMETRYCOLLECTION, DOUBLE UNSIGNED, DOUBLE UNSIGNED, BINARY, VARBINARY, TINYBLOB, BLOB, LONGBLOB |
| Kafka            | GEOMETRY, POINT, LINESTRING, POLYGON, MULTIPOINT, MULTILINESTRING, MULTIPOLYGON, GEOMETRYCOLLECTION, DOUBLE UNSIGNED, DOUBLE UNSIGNED, BINARY, VARBINARY, TINYBLOB, BLOB, LONGBLOB |
| ClickHouse       | GEOMETRY, POINT, LINESTRING, POLYGON, MULTIPOINT, MULTILINESTRING, MULTIPOLYGON, GEOMETRYCOLLECTION, DOUBLE UNSIGNED, BINARY, VARBINARY, TINYBLOB, BLOB, LONGBLOB |

#### SQL Server as Source

:::tip

Affected by SQL Server's own mechanisms, if the table to be synchronized does not have a primary key and includes ntext/text/image types, updates or deletions to that table might lead to updating or deleting multiple records (in cases where only the values of the aforementioned fields differ, and all other field values are identical).

:::

| Target           | Unsupported Fields                                      |
| ---------------- | ------------------------------------------------------- |
| Oracle           | xml, geometry, geography                                |
| MongoDB          | xml, geometry, geography                                |
| MySQL            | xml, geometry, geography                                |
| PostgreSQL       | xml, geometry, geography                                |
| Elastic Search   | xml, geometry, geography                                |
| Kafka            | xml, geometry, geography                                |
| ClickHouse       | xml, geometry, geography, binary, varbinary, image      |

#### PostgreSQL as Source

| Target           | Unsupported Fields                                                   |
| ---------------- | -------------------------------------------------------------------- |
| Oracle           | point, line, lseg, box, path, polygon, circle, int4range, int8range, numrange, tsrange, tstzrange, daterange, macaddr8, uuid, xml |
| MongoDB          | point, line, lseg, box, path, polygon, circle, int4range, int8range, numrange, tsrange, tstzrange, daterange, macaddr8, uuid, xml |
| SQL Server       | point, line, lseg, box, path, polygon, circle, int4range, int8range, numrange, tsrange, tstzrange, daterange, macaddr8, uuid, xml |
| MySQL            | point, line, lseg, box, path, polygon, circle, int4range, int8range, numrange, tsrange, tstzrange, daterange, macaddr8, uuid, xml |
| PostgreSQL       | 'int4range', 'int8range', 'numrange', 'tsrange', 'tstzrange', 'daterange' |
| Elastic Search   | point, line, lseg, box, path, polygon, circle, int4range, int8range, numrange, tsrange, tstzrange, daterange, macaddr8, uuid, xml |
| Kafka            | point, line, lseg, box, path, polygon, circle, int4range, int8range, numrange, tsrange, tstzrange, daterange, macaddr8, uuid, xml |
| ClickHouse       | point, line, lseg, box, path, polygon, circle, int4range, int8range, numrange, tsrange, tstzrange, daterange, macaddr8, uuid, xml, bytea |

#### MongoDB as Source

| Target           | Unsupported Fields                                                |
| ---------------- | ----------------------------------------------------------------- |
| Oracle           | JAVASCRIPT, MIN_KEY, REGULAR_EXPRESSION, MAX_KEY                  |
| SQL Server       | JAVASCRIPT, MIN_KEY, REGULAR_EXPRESSION, MAX_KEY                  |
| MySQL            | JAVASCRIPT, MIN_KEY, REGULAR_EXPRESSION, MAX_KEY                  |
| PostgreSQL       | JAVASCRIPT, MIN_KEY, REGULAR_EXPRESSION, MAX_KEY                  |
| Elastic Search   | JAVASCRIPT, MIN_KEY, REGULAR_EXPRESSION, MAX_KEY                  |
| Kafka            | JAVASCRIPT, MIN_KEY, REGULAR_EXPRESSION, MAX_KEY                  |
| ClickHouse       | JAVASCRIPT, MIN_KEY, REGULAR_EXPRESSION, MAX_KEY, BINARY, NULL    |