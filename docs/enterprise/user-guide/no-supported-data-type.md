# 数据类型支持说明

:::tip

本文仅列举在同步过程中不支持的字段类型，不在范围的数据源逐步补充。

:::

#### Oracle 作为源

| 目标           | 不支持字段                                                   |
| -------------- | ------------------------------------------------------------ |
| Oracle         | RAW，LONG_RAW，BFILE，XMLTYPE，STRUCT                        |
| MongoDB        | RAW，LONG_RAW，BFILE，XMLTYPE，STRUCT，INTERVAL DAY(2) TO SECOND(6),INTERVAL YEAR(4) TO MONTH |
| SQL Server     | RAW，LONG_RAW，BFILE，XMLTYPE，STRUCT，INTERVAL DAY(2) TO SECOND(6),INTERVAL YEAR(4) TO MONTH |
| MySQL          | RAW，LONG_RAW，BFILE，XMLTYPE，STRUCT，INTERVAL DAY(2) TO SECOND(6),INTERVAL YEAR(4) TO MONTH |
| PostgreSQL     | RAW，LONG_RAW，BFILE，XMLTYPE，STRUCT，INTERVAL DAY(2) TO SECOND(6),INTERVAL YEAR(4) TO MONTH |
| Elastic Search | RAW，LONG_RAW，BFILE，XMLTYPE，STRUCT，INTERVAL DAY(2) TO SECOND(6),INTERVAL YEAR(4) TO MONTH |
| Kafka          | RAW，LONG_RAW，BFILE，XMLTYPE，STRUCT，INTERVAL DAY(2) TO SECOND(6),INTERVAL YEAR(4) TO MONTH |
| ClickHouse     | RAW，LONG_RAW，BFILE，XMLTYPE，STRUCT，INTERVAL DAY(2) TO SECOND(6),INTERVAL YEAR(4) TO MONTH,BLOB |

#### MySQL 作为源

| 目标           | 不支持字段                                                   |
| -------------- | ------------------------------------------------------------ |
| Oracle         | GEOMETRY,POINT,LINESTRING,POLYGON,MULTIPOINT,MULTILINESTRING,MULTIPOLYGON,GEOMETRYCOLLECTION,DOUBLE UNSIGNED,DOUBLE UNSIGNED,BINARY,VARBINARY,TINYBLOB,BLOB,LONGBLOB |
| MongoDB        | GEOMETRY,POINT,LINESTRING,POLYGON,MULTIPOINT,MULTILINESTRING,MULTIPOLYGON,GEOMETRYCOLLECTION,DOUBLE UNSIGNED,DOUBLE UNSIGNED,BINARY,VARBINARY,TINYBLOB,BLOB,LONGBLOB |
| SQL Server     | GEOMETRY,POINT,LINESTRING,POLYGON,MULTIPOINT,MULTILINESTRING,MULTIPOLYGON,GEOMETRYCOLLECTION,DOUBLE UNSIGNED,DOUBLE UNSIGNED,BINARY,VARBINARY,TINYBLOB,BLOB,LONGBLOB |
| MySQL          | GEOMETRY,POINT,LINESTRING,POLYGON,MULTIPOINT,MULTILINESTRING,MULTIPOLYGON,GEOMETRYCOLLECTION |
| PostgreSQL     | GEOMETRY,POINT,LINESTRING,POLYGON,MULTIPOINT,MULTILINESTRING,MULTIPOLYGON,GEOMETRYCOLLECTION,DOUBLE UNSIGNED,DOUBLE UNSIGNED,BINARY,VARBINARY,TINYBLOB,BLOB,LONGBLOB |
| Elastic Search | GEOMETRY,POINT,LINESTRING,POLYGON,MULTIPOINT,MULTILINESTRING,MULTIPOLYGON,GEOMETRYCOLLECTION,DOUBLE UNSIGNED,DOUBLE UNSIGNED,BINARY,VARBINARY,TINYBLOB,BLOB,LONGBLOB |
| Kafka          | GEOMETRY,POINT,LINESTRING,POLYGON,MULTIPOINT,MULTILINESTRING,MULTIPOLYGON,GEOMETRYCOLLECTION,DOUBLE UNSIGNED,DOUBLE UNSIGNED,BINARY,VARBINARY,TINYBLOB,BLOB,LONGBLOB |
| ClickHouse     | GEOMETRY,POINT,LINESTRING,POLYGON,MULTIPOINT,MULTILINESTRING,MULTIPOLYGON,GEOMETRYCOLLECTION,DOUBLE UNSIGNED,BINARY,VARBINARY,TINYBLOB,BLOB,LONGBLOB |

#### SQL Server 作为源

:::tip

受 SQL Server 本身机制的影响，如果待同步的表没有主键且包含 ntext/text/image 类型时，一旦该表发生更新或者删除操作，可能会导致更新或删除多条数据（多条数据中，仅前文中字段的值不一致，其余字段值都一致的情况下）。

:::

| 目标           | 不支持字段                                      |
| -------------- | ----------------------------------------------- |
| Oracle         | xml, geometry, geography                        |
| MongoDB        | xml, geometry, geography                        |
| MySQL          | xml, geometry, geography                        |
| PostgreSQL     | xml, geometry, geography                        |
| Elastic Search | xml, geometry, geography                        |
| Kafka          | xml, geometry, geography                        |
| ClickHouse     | xml, geometry, geography,binary,varbinary,image |

#### PG 作为源

| 目标           | 不支持字段                                                   |
| -------------- | ------------------------------------------------------------ |
| Oracle         | point, line, lseg, box, path, polygon, circle, int4range, int8range, numrange, tsrange, tstzrange, daterange, macaddr8, uuid, xml |
| MongoDB        | point, line, lseg, box, path, polygon, circle, int4range, int8range, numrange, tsrange, tstzrange, daterange, macaddr8, uuid, xml |
| SQL Server     | point, line, lseg, box, path, polygon, circle, int4range, int8range, numrange, tsrange, tstzrange, daterange, macaddr8, uuid, xml |
| MySQL          | point, line, lseg, box, path, polygon, circle, int4range, int8range, numrange, tsrange, tstzrange, daterange, macaddr8, uuid, xml |
| PostgreSQL     | 'int4range', 'int8range', 'numrange', 'tsrange', 'tstzrange', 'daterange' |
| Elastic Search | point, line, lseg, box, path, polygon, circle, int4range, int8range, numrange, tsrange, tstzrange, daterange, macaddr8, uuid, xml |
| Kafka          | point, line, lseg, box, path, polygon, circle, int4range, int8range, numrange, tsrange, tstzrange, daterange, macaddr8, uuid, xml |
| ClickHouse     | point, line, lseg, box, path, polygon, circle, int4range, int8range, numrange, tsrange, tstzrange, daterange, macaddr8, uuid, xml, bytea |

#### MongoDB 作为源

| 目标           | 不支持字段                                                |
| -------------- | --------------------------------------------------------- |
| Oracle         | JAVASCRIPT,MIN_KEY,REGULAR_EXPRESSION,MAX_KEY             |
| SQL Server     | JAVASCRIPT,MIN_KEY,REGULAR_EXPRESSION,MAX_KEY             |
| MySQL          | JAVASCRIPT,MIN_KEY,REGULAR_EXPRESSION,MAX_KEY             |
| PostgreSQL     | JAVASCRIPT,MIN_KEY,REGULAR_EXPRESSION,MAX_KEY             |
| Elastic Search | JAVASCRIPT,MIN_KEY,REGULAR_EXPRESSION,MAX_KEY             |
| Kafka          | JAVASCRIPT,MIN_KEY,REGULAR_EXPRESSION,MAX_KEY             |
| ClickHouse     | JAVASCRIPT,MIN_KEY,REGULAR_EXPRESSION,MAX_KEY,BINARY,NULL |

