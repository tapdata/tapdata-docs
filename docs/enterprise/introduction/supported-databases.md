# 支持的数据源

Tapdata 支持丰富的数据源，具体如下：

:::tip

如需同步 DDL 操作，您需要开启 DDL 采集和 DDL 应用，更多介绍，见[DDL 同步说明](../best-practice/handle-schema-change.md)。

:::



```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```



### 认证数据源

<table>
<thead>
  <tr>
    <th rowspan="2">类型</th>
    <th colspan="3">作为来源</th>
    <th colspan="2">作为目标</th>
    <th rowspan="2">版本</th>
  </tr>
  <tr>
    <th>全量</th>
    <th>增量</th>
    <th>DDL 采集</th>
    <th>数据写入</th>
    <th>DDL 应用</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>ClickHouse</td>
    <td>➖</td>
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
    <td>2.3.x、0.x、1.x</td>
  </tr>
  <tr>
    <td>MongoDB</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>3.2、3.4、3.6、4.0+</td>
  </tr>
  <tr>
    <td>MySQL</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>5.0、5.1、5.5、5.6、5.7、8.x</td>
  </tr>
  <tr>
    <td>Oracle</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>9i、10g、11g、12c、19c</td>
  </tr>
  <tr>
    <td>PostgreSQL</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>✅</td>
    <td>9.4+</td>
  </tr>
  <tr>
    <td>SQL Server</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>2005、2008、2012、2014、2016、2017</td>
  </tr>
</tbody>
</table>


## Beta 数据源

:::tip

Beta 版本数据源处于公测阶段，已通过基础测试用例和集成测试用例，但尚未通过 Tapdata 认证测试流程，如在使用过程中有疑问，欢迎[联系我们](mailto:team@tapdata.io)。

:::


```mdx-code-block
<Tabs className="unique-tabs">
<TabItem value="自建数据库">
```

<table>
<thead>
  <tr>
    <th rowspan="2">类型</th>
    <th colspan="3">作为来源</th>
    <th colspan="2">作为目标</th>
    <th rowspan="2">版本</th>
  </tr>
  <tr>
    <th>全量</th>
    <th>增量</th>
    <th>DDL 采集</th>
    <th>数据写入</th>
    <th>DDL 应用</th>
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
    <td>不涉及</td>
  </tr>
  <tr>
    <td>Dameng</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>7.x、8.x</td>
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
    <td>-</td>
  </tr>
  <tr>
    <td>Informix</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>10 及以上</td>
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
  <tr>
    <td>TiDB</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>✅</td>
    <td>5.x</td>
  </tr>
</tbody>
</table>
</TabItem>

<TabItem value="数据仓库/数据湖">

<table>
<thead>
  <tr>
    <th rowspan="2">类型</th>
    <th colspan="3">作为来源</th>
    <th colspan="2">作为目标</th>
    <th rowspan="2">版本</th>
  </tr>
  <tr>
    <th>全量</th>
    <th>增量</th>
    <th>DDL 采集</th>
    <th>数据写入</th>
    <th>DDL 应用</th>
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
    <td>不涉及</td>
  </tr>
  <tr>
    <td>Databend</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>0.9 及以上</td>
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
    <td>2.0.13 及以上</td>
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

<TabItem value="云数据库/文件/SaaS" >

<table>
<thead>
  <tr>
    <th rowspan="2">类型</th>
    <th colspan="3">作为来源</th>
    <th colspan="2">作为目标</th>
    <th rowspan="2">版本</th>
  </tr>
  <tr>
    <th>全量</th>
    <th>增量</th>
    <th>DDL 采集</th>
    <th>数据写入</th>
    <th>DDL 应用</th>
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
    <td>不涉及</td>
  </tr>
  <tr>
    <td>Coding</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>不涉及</td>
  </tr>
  <tr>
    <td>CSV</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>不涉及，文件位置支持本地、FTP、SFTP、SMB、S3FS、OSS</td>
  </tr>
  <tr>
    <td>Excel</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>XLS/XLSX 格式，文件位置支持本地、FTP、SFTP、SMB、S3FS、OSS</td>
  </tr>
  <tr>
    <td>HubSpot</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>不涉及</td>
  </tr>
  <tr>
    <td>Lark-IM</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>不涉及</td>
  </tr>
  <tr>
    <td>LarkTask</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>不涉及</td>
  </tr>
  <tr>
    <td>Metabase</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>不涉及</td>
  </tr>
  <tr>
    <td>Salesforce</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>不涉及</td>
  </tr>
  <tr>
    <td>Zoho-CRM</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>不涉及</td>
  </tr>
  <tr>
    <td>Zoho-Desk</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>不涉及</td>
  </tr>
</tbody>
</table>

</TabItem>
</Tabs>





## Alpha 数据源

:::tip

Alpha 版本数据源处于公测阶段，已通过基础测试用例，但尚未通过集成测试用例和 Tapdata 认证测试流程，如在使用过程中有疑问，欢迎[联系我们](mailto:team@tapdata.io)。

:::

```mdx-code-block
<Tabs className="unique-tabs">
<TabItem value="自建数据库">
```
<table>
<thead>
  <tr>
    <th rowspan="2">类型</th>
    <th colspan="3">作为来源</th>
    <th colspan="2">作为目标</th>
    <th rowspan="2">版本</th>
  </tr>
  <tr>
    <th>全量</th>
    <th>增量</th>
    <th>DDL 采集</th>
    <th>数据写入</th>
    <th>DDL 应用</th>
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
    <td>5.x、6.x、7.x</td>
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
    <td>OceanBase（MySQL模式）</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>3.x</td>
  </tr>
  <tr>
    <td>OpenGauss</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>✅</td>
    <td>3.0.0 及以上</td>
  </tr>
  <tr>
    <td>MySQL PXC</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>5.0、5.1、5.5、5.6、5.7、8.x</td>
  </tr>
  <tr>
    <td>QuickAPI</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>不涉及</td>
  </tr>
</tbody>
</table>

</TabItem>

<TabItem value="数据仓库/数据湖">

<table>
<thead>
  <tr>
    <th rowspan="2">类型</th>
    <th colspan="3">作为来源</th>
    <th colspan="2">作为目标</th>
    <th rowspan="2">版本</th>
  </tr>
  <tr>
    <th>全量</th>
    <th>增量</th>
    <th>DDL 采集</th>
    <th>数据写入</th>
    <th>DDL 应用</th>
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
    <td>不涉及</td>
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
    <td>3.1.2 及以上</td>
  </tr>
</tbody>
</table>
</TabItem>

<TabItem value="云数据库">

<table>
<thead>
  <tr>
    <th rowspan="2">类型</th>
    <th colspan="3">作为来源</th>
    <th colspan="2">作为目标</th>
    <th rowspan="2">版本</th>
  </tr>
  <tr>
    <th>全量</th>
    <th>增量</th>
    <th>DDL 采集</th>
    <th>数据写入</th>
    <th>DDL 应用</th>
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
    <td>MySQL 5.0、5.1、5.5、5.6、5.7、8.x</td>
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
    <td>5.0、5.1、5.5、5.6、5.7、8.x</td>
  </tr>
  <tr>
    <td>Aliyun AnalyticDB PostgreSQL</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>9.4、9.5、9.6、10.x、11.x、12</td>
  </tr>
  <tr>
    <td>Aliyun RDS MySQL</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>5.0、5.1、5.5、5.6、5.7、8.x</td>
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
    <td>3.2、3.4、3.6、4.0、4.2</td>
  </tr>
  <tr>
    <td>Aliyun RDS PostgreSQL</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>9.4、9.5、9.6、10.x、11.x、12</td>
  </tr>
  <tr>
    <td>Aliyun RDS SQL Server</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>2008 R2、2012、2014、2016、2017、2019</td>
  </tr>
  <tr>
    <td>PolarDB MySQL</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>5.6、5.7、8.0</td>
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
    <td>MariaDB 10.1.9、Percona 5.7.17、MySQL 8.0.18</td>
  </tr>
  <tr>
    <td>TencentDB MongoDB</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>3.2、3.4、3.6、4.0、4.2</td>
  </tr>
  <tr>
    <td>TencentDB MySQL</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>5.5、5.6、5.7、8.x</td>
  </tr>
  <tr>
    <td>TencentDB PostgreSQL</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>9.4、9.5、9.6、10.x、11.x、12</td>
  </tr>
  <tr>
    <td>TencentDB SQL Server</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>2008 R2、2012、2016、2017、2019</td>
  </tr>
</tbody>
</table>
</TabItem>

<TabItem value="消息队列/中间件">

<table>
<thead>
  <tr>
    <th rowspan="2">类型</th>
    <th colspan="3">作为来源</th>
    <th colspan="2">作为目标</th>
    <th rowspan="2">版本</th>
  </tr>
  <tr>
    <th>全量</th>
    <th>增量</th>
    <th>DDL 采集</th>
    <th>数据写入</th>
    <th>DDL 应用</th>
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
    <td>不涉及</td>
  </tr>
<tr>
    <td>Hazelcast</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td> 5.20、5.21</td>
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

<TabItem value="文件/SaaS">

<table>
<thead>
  <tr>
    <th rowspan="2">类型</th>
    <th colspan="3">作为来源</th>
    <th colspan="2">作为目标</th>
    <th rowspan="2">版本</th>
  </tr>
  <tr>
    <th>全量</th>
    <th>增量</th>
    <th>DDL 采集</th>
    <th>数据写入</th>
    <th>DDL 应用</th>
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
    <td>不涉及</td>
  </tr>
<tr>
    <td>BesChannels</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>不涉及</td>
  </tr>
<tr>
    <td>Feishu-Bitable</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
    <td>➖</td>
    <td>不涉及</td>
  </tr>
  <tr>
    <td>JSON</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>不涉及，文件位置支持本地、FTP、SFTP、SMB、S3FS、OSS</td>
  </tr>
  <tr>
    <td>Lark Approval</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>不涉及</td>
  </tr>
  <tr>
    <td>Lark Doc</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>不涉及</td>
  </tr>
  <tr>
    <td>Shein</td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
    <td>➖</td>
    <td>➖</td>
    <td>不涉及</td>
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
    <td>不涉及，文件位置支持本地、FTP、SFTP、SMB、S3FS、OSS</td>
  </tr>
</tbody>
</table>
</TabItem>
</Tabs>

