# openGauss

openGauss 是一款支持 SQL 2003 标准语法，支持主备部署的高可用关系型数据库。完成 Agent 部署后，您可以跟随本文教程在 Tapdata 中添加 CSV 数据源，后续可将其作为源或目标库来构建数据管道。


## 支持版本

OpenGauss 3.0.0 及以上

## 支持字段类型
<details>
<summary><b>单击展开查看详细</b></summary>

- smallint
- integer
- bigint
- numeric
- real
- double precision
- character
- character varying
- text
- bytea
- bit
- bit varying
- boolean
- date
- interval
- timestamp
- timestamp with time zone
- point
- line
- lseg
- box
- path
- polygon
- circle
- cidr
- inet
- macaddr
- uuid
- xml
- json
- tsvector
- tsquery
- oid
- regproc
- regprocedure
- regoper
- regoperator
- regclass
- regtype
- regconfig
- regdictionary

</details>


## <span id="prerequisite">准备工作</span>

1. 登录 openGauss 数据库，执行下述格式的命令，创建用于数据同步/开发任务的账号。

   ```sql
   CREATE USER username PASSWORD 'password';
   ```

   * **username**：用户名。
   * **password**：密码。

2. 为刚创建的账号授予权限，简易示例如下，推荐基于业务需求设置更精细化的权限控制。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="unique-tabs">
    <TabItem value="source" label="作为源库" default>
    <pre>GRANT SELECT ON ALL TABLES IN SCHEMA schemaname TO username;</pre>
   </TabItem>
   <TabItem value="target" label="作为目标库">
    <pre>GRANT INSERT,UPDATE,DELETE,TRUNCATE ON ALL TABLES IN SCHEMA schemaname TO username;</pre>
   </TabItem>
  </Tabs>


   * **schemaname**：目标表所属的模型名称。
   * **username**：用户名。



## 添加数据源
1. 登录 Tapdata 平台。

2. 在左侧导航栏，单击**连接管理**。

3. 单击页面右侧的**创建**。

4. 在弹出的对话框中，搜索并选择 **openGauss**。

5. 根据下述说明完成数据源配置。

   ![](../../images/opengauss_connection.png)

   * 连接信息设置

      * **连接名称**：填写具有业务意义的独有名称。
      * **连接类型**：支持将 openGauss 数据库作为源或目标。
      * **地址**：数据库连接地址。
      * **端口**：数据库的服务端口。
      * **数据库**：数据库名称，即一个连接对应一个数据库，如有多个数据库则需创建多个数据连接。
      * **模型**：数据库的 Schema 名称。
      * **额外参数**：额外的连接参数，默认为空。
      * **账号**、**密码**：数据库的账号和密码，账号的创建和授权方法，见 [准备工作](#prerequisite)。

   * 高级设置
      * **日志插件**：保持默认的 **PGOUTPUT**。
      * **时区**：默认为数据库所用的时区，您也可以根据业务需求手动指定。
      * **包含表**：默认为**全部**，您也可以选择自定义并填写包含的表，多个表之间用英文逗号（,）分隔。
      * **排除表**：打开该开关后，可以设定要排除的表，多个表之间用英文逗号（,）分隔。
      * **agent 设置**：默认为**平台自动分配**，您也可以手动指定。
      * **模型加载频率**：数据源中模型数量大于 1 万时，Tapdata 将按照本参数的设定定期刷新模型。

6. 单击**连接测试**，测试通过后单击**保存**。

   :::tip

   如提示连接测试失败，请根据页面提示进行修复。

   :::
