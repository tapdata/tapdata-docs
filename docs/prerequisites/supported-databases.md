# Supported Data Sources

import Content from '../reuse-content/_all-features.md';

<Content />

TapData supports rich data sources as follows:

:::tip

* If you need to synchronize DDL operations, you need to enable DDL collection and DDL apply. For more information, see [Handle DDL Changes During Data Sync](../best-practice/handle-schema-changes.md).
* TapData Community only supports ClickHouse, Kafka, MongoDB, MySQL, and PostgreSQL data sources.

:::



```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## GA Data Sources

<table>
<thead>
  <tr>
    <th rowspan="2">Type</th>
    <th colspan="3">As a source</th>
    <th colspan="2">As a target</th>
    <th rowspan="2">Versions</th>
  </tr>
  <tr>
    <th>Full data synchronization</th>
    <th>Incremental data synchronization</th>
    <th>DDL event collection</th>
    <th>Data write</th>
    <th>DDL event apply</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>AWS Clickhouse</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>✅</td>
    <td>23 and above</td>
  </tr>
  <tr>
    <td>ClickHouse</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>✅</td>
    <td>21.x</td>
  </tr>
  <tr>
    <td>Kafka</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>2.3.x, 0.x, 1.x</td>
  </tr>
  <tr>
    <td>MongoDB</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>3.4, 3.6, 4.0+</td>
  </tr>
  <tr>
    <td>MySQL</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>5.0, 5.1, 5.5, 5.6, 5.7, 8.x</td>
  </tr>
  <tr>
    <td>Oracle</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>9i, 10g, 11g, 12c, 19c</td>
  </tr>
  <tr>
    <td>PostgreSQL</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>✅</td>
    <td>9.4 and above</td>
  </tr>
  <tr>
    <td>SQL Server</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>2005, 2008, 2012, 2014, 2016, 2017</td>
  </tr>
   <tr>
    <td>TiDB</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>5.4 and above</td>
  </tr>
</tbody>
</table>



## Beta Data Sources

:::tip

The beta version of the data sources is in public preview and has passed the basic test cases and integration test cases, but has not yet passed the TapData certification test process. If you have any questions during use, please [contact us](mailto:team@tapdata.io).

:::



```mdx-code-block
<Tabs className="unique-tabs">
<TabItem value="On-Premises Databases">
```

<table>
<thead>
  <tr>
    <th rowspan="2">Type</th>
    <th colspan="3">As a source</th>
    <th colspan="2">As a target</th>
    <th rowspan="2">Versions</th>
  </tr>
  <tr>
    <th>Full data synchronization</th>
    <th>Incremental data synchronization</th>
    <th>DDL event collection</th>
    <th>Data write</th>
    <th>DDL event apply</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Custom Connection</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Dameng</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>7.x, 8.x</td>
  </tr>
  <tr>
    <td>IBM DB2</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>9.7 LUW</td>
  </tr>
  <tr>
    <td>DummyDB</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Informix</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>10 and above</td>
  </tr>
  <tr>
    <td>Mock Source</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>N/A</td>
  </tr>
  <tr>
   <td>Mock Target</td>
   <td>➖</td>
   <td>➖</td>
   <td>➖</td>
   <td>✅</td>
   <td>➖</td>
   <td>N/A</td>
  </tr>
  <tr>
    <td>KingBaseES-R6</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>✅</td>
    <td>V8R6</td>
  </tr>
  <tr>
    <td>MariaDB</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>10.x</td>
  </tr>
  <tr>
    <td>MongoDB Below 3.4</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>3.4 or earlier</td>
  </tr>
  <tr>
    <td>Redis</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>2.8 ~ 6.0</td>
  </tr>
  <tr>
    <td>Sybase</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>ASE 16.0</td>
  </tr>
  <tr>
    <td>TDengine</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>✅</td>
    <td>3.x</td>
  </tr>
</tbody>
</table>

</TabItem>

<TabItem value="Data Warehouse and Data Lake">

<table>
<thead>
  <tr>
    <th rowspan="2">Type</th>
    <th colspan="3">As a source</th>
    <th colspan="2">As a target</th>
    <th rowspan="2">Versions</th>
  </tr>
  <tr>
    <th>Full data synchronization</th>
    <th>Incremental data synchronization</th>
    <th>DDL event collection</th>
    <th>Data write</th>
    <th>DDL event apply</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>BigQuery</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Databend</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>0.9 and above</td>
  </tr>
  <tr>
    <td>Doris</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>0.15.0</td>
  </tr>
  <tr>
    <td>Hudi</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>0.11.0</td>
  </tr>
  <tr>
    <td>GaussDB（DWS）</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>8.1.3</td>
  </tr>
  <tr>
    <td>SelectDB</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>2.0.13 and above</td>
  </tr>
  <tr>
    <td>YashanDB</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>1.0</td>
  </tr>
</tbody>
</table>

</TabItem>

<TabItem value="Cloud Databases/Files/SaaS" >

<table>
<thead>
  <tr>
    <th rowspan="2">Type</th>
    <th colspan="3">As a source</th>
    <th colspan="2">As a target</th>
    <th rowspan="2">Versions</th>
  </tr>
  <tr>
    <th>Full data synchronization</th>
    <th>Incremental data synchronization</th>
    <th>DDL event collection</th>
    <th>Data write</th>
    <th>DDL event apply</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Azure CosmosDB</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Coding</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>CSV</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>N/A, file locations supported include local, FTP, SFTP, SMB, S3FS, OSS</td>
  </tr>
  <tr>
    <td>Excel</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>XLS/XLSX, file locations supported include local, FTP, SFTP, SMB, S3FS, OSS</td>
  </tr>
  <tr>
  <tr>
    <td>Huawei's Cloud GaussDB</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>✅</td>
    <td>Enterprise version 2.8 (primary-standby), supports Standby version 8.1 for on-prem deployment</td>
  </tr>
    <td>HubSpot</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Lark-IM</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>LarkTask</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Metabase</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Salesforce</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Zoho-CRM</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Zoho-Desk</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>N/A</td>
  </tr>
</tbody>
</table>

</TabItem>
</Tabs>





## Alpha Data Sources

:::tip

The Alpha version of the data sources is in public preview and has passed the basic test cases, but has not yet passed the integration test cases and the TapData certification test process. If you have any questions during use, please [contact us](mailto:team@tapdata.io).

:::



```mdx-code-block
<Tabs className="unique-tabs">
<TabItem value="On-Premises Databases">
```
<table>
<thead>
  <tr>
    <th rowspan="2">Type</th>
    <th colspan="3">As a source</th>
    <th colspan="2">As a target</th>
    <th rowspan="2">Versions</th>
  </tr>
  <tr>
    <th>Full data synchronization</th>
    <th>Incremental data synchronization</th>
    <th>DDL event collection</th>
    <th>Data write</th>
    <th>DDL event apply</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Elasticsearch</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>5.x, 6.x, 7.x</td>
  </tr>
  <tr>
    <td>Gbase 8a</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>8x</td>
  </tr>
  <tr>
    <td>Gbase 8s</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>8x</td>
  </tr>
  <tr>
    <td>KingBaseES-R3</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>✅</td>
    <td>V8R3</td>
  </tr>
  <tr>
    <td>OceanBase（MySQL Mode）</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>3.x, 4.x</td>
  </tr>
  <tr>
    <td>OceanBase（Oracle Mode）</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>4.x</td>
  </tr>
  <tr>
    <td>OpenGauss</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>✅</td>
    <td>3.0.0 and above</td>
  </tr>
  <tr>
    <td>MySQL PXC</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>5.0, 5.1, 5.5, 5.6, 5.7, 8.x</td>
  </tr>
  <tr>
    <td>QuickAPI</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>N/A</td>
  </tr>
</tbody>
</table>


</TabItem>

<TabItem value="Data Warehouse and Data Lake">

<table>
<thead>
  <tr>
    <th rowspan="2">Type</th>
    <th colspan="3">As a source</th>
    <th colspan="2">As a target</th>
    <th rowspan="2">Versions</th>
  </tr>
  <tr>
    <th>Full data synchronization</th>
    <th>Incremental data synchronization</th>
    <th>DDL event collection</th>
    <th>Data write</th>
    <th>DDL event apply</th>
  </tr>
</thead>
<tbody>
<tr>
    <td>GreenPlum</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>N/A</td>
  </tr>
<tr>
    <td>Hive1</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Hive 3</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>3.1.2 and above</td>
  </tr>
</tbody>
</table>

</TabItem>

<TabItem value="Cloud Databases">

<table>
<thead>
  <tr>
    <th rowspan="2">Type</th>
    <th colspan="3">As a source</th>
    <th colspan="2">As a target</th>
    <th rowspan="2">Versions</th>
  </tr>
  <tr>
    <th>Full data synchronization</th>
    <th>Incremental data synchronization</th>
    <th>DDL event collection</th>
    <th>Data write</th>
    <th>DDL event apply</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>AWS RDS MySQL</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>MySQL 5.0, 5.1, 5.5, 5.6, 5.7, 8.x</td>
  </tr>
  <tr>
    <td>Aliyun Tablestore</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>5.13.9</td>
  </tr>
  <tr>
    <td>Aliyun AnalyticDB MySQL</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>5.0, 5.1, 5.5, 5.6, 5.7, 8.x</td>
  </tr>
  <tr>
    <td>Aliyun AnalyticDB PostgreSQL</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>9.4, 9.5, 9.6, 10.x, 11.x, 12</td>
  </tr>
  <tr>
    <td>Aliyun RDS MySQL</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>5.0, 5.1, 5.5, 5.6, 5.7, 8.x</td>
  </tr>
  <tr>
    <td>Aliyun RDS MariaDB</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>10.3</td>
  </tr>
  <tr>
    <td>Aliyun RDS MongoDB</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>3.2, 3.4, 3.6, 4.0, 4.2</td>
  </tr>
  <tr>
    <td>Aliyun RDS PostgreSQL</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>9.4, 9.5, 9.6, 10.x, 11.x, 12</td>
  </tr>
  <tr>
    <td>Aliyun RDS SQL Server</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>2008 R2, 2012, 2014, 2016, 2017, 2019</td>
  </tr>
  <tr>
    <td>PolarDB MySQL</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>5.6, 5.7, 8.0</td>
  </tr>
  <tr>
    <td>PolarDB PostgreSQL</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>11</td>
  </tr>
  <tr>
    <td>TencentDB MariaDB</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>MariaDB 10.1.9, Percona 5.7.17, MySQL 8.0.18</td>
  </tr>
  <tr>
    <td>TencentDB MongoDB</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>3.2, 3.4, 3.6, 4.0, 4.2</td>
  </tr>
  <tr>
    <td>TencentDB MySQL</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>5.5, 5.6, 5.7, 8.x</td>
  </tr>
  <tr>
    <td>TencentDB PostgreSQL</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>9.4, 9.5, 9.6, 10.x, 11.x, 12</td>
  </tr>
  <tr>
    <td>TencentDB SQL Server</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>2008 R2, 2012, 2016, 2017, 2019</td>
  </tr>
</tbody>
</table>


</TabItem>

<TabItem value="Message Queue and Middleware">

<table>
<thead>
  <tr>
    <th rowspan="2">Type</th>
    <th colspan="3">As a source</th>
    <th colspan="2">As a target</th>
    <th rowspan="2">Versions</th>
  </tr>
  <tr>
    <th>Full data synchronization</th>
    <th>Incremental data synchronization</th>
    <th>DDL event collection</th>
    <th>Data write</th>
    <th>DDL event apply</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>ActiveMQ</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>5.14.x</td>
  </tr>
  <tr>
    <td>AI Chat</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>N/A</td>
  </tr>
<tr>
    <td>Hazelcast</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td> 5.20, 5.21</td>
  </tr>
  <tr>
    <td>RabbitMQ</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>3.8.x</td>
  </tr>
  <tr>
    <td>RocketMQ</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>4.9.x</td>
  </tr>
</tbody>
</table>

</TabItem>

<TabItem value="File/SaaS">

<table>
<thead>
  <tr>
    <th rowspan="2">Type</th>
    <th colspan="3">As a source</th>
    <th colspan="2">As a target</th>
    <th rowspan="2">Versions</th>
  </tr>
  <tr>
    <th>Full data synchronization</th>
    <th>Incremental data synchronization</th>
    <th>DDL event collection</th>
    <th>Data write</th>
    <th>DDL event apply</th>
  </tr>
</thead>
<tbody>
<tr>
    <td>Alibaba 1688</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>N/A</td>
  </tr>
<tr>
    <td>BesChannels</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>N/A</td>
  </tr>
<tr>
    <td>Feishu-Bitable</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>JSON</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>N/A, file locations supported include local, FTP, SFTP, SMB, S3FS, OSS</td>
  </tr>
  <tr>
    <td>Lark Approval</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Lark Doc</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Shein</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Vika</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>V1</td>
  </tr>
  <tr>
    <td>XML</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>N/A, file locations supported include local, FTP, SFTP, SMB, S3FS, OSS</td>
  </tr>
</tbody>
</table>

</TabItem>
</Tabs>