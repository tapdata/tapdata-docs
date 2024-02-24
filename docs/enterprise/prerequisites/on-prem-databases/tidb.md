# TiDB

TiDB 是 PingCAP 设计、研发的开源分布式关系型数据库，是一款同时支持在线事务处理与在线分析处理的融合型分布式数据库产品。完成 Agent 部署后，您可以跟随本文教程在 Tapdata 中添加 TiDB 数据源，后续可将其作为源或目标库来构建数据管道。

## 支持版本

TiDB 5.4 及以上

## <span id="prerequisite">准备工作</span>

### 作为源库

1. 登录 TiDB 数据库，执行下述格式的命令，创建用于数据同步/开发任务的账号。

   ```sql
   CREATE USER 'username'@'host' IDENTIFIED BY 'password';
   ```

   * **username**：用户名。
   * **host**：允许该账号登录的主机，百分号（%）表示允许任意主机。
   * **password**：密码。

   示例：创建一个名为 tapdata 的账号，允许从任意主机登录。

   ```sql
   CREATE USER 'tapdata'@'%' IDENTIFIED BY 'Tap@123456';
   ```



2. 为刚创建的账号授予权限。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="unique-tabs">
    <TabItem value="onedatabase" label="授予指定库 SELECT 权限" default>
    <pre>GRANT SELECT, SHOW VIEW, CREATE ROUTINE, LOCK TABLES ON database_name.table_name TO 'username' IDENTIFIED BY 'password';</pre>
   </TabItem>
   <TabItem value="all" label="授予全局权限">
    <pre>GRANT RELOAD, SHOW DATABASES, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'username' IDENTIFIED BY 'password';</pre>
   </TabItem>
  </Tabs>

* **database_name.table_name**：要授予权限的库和表，名称间用英文句号（.）分隔，例如 demodata.customer。
* **username**：用户名。
* **password**：密码。



:::tip

如希望将 TiDB 的数据实时同步至目标库，可在配置数据转换任务时，为源 TiDB 节点配置轮询字段来实现。

:::


### 作为目标库

1. 登录 TiDB 数据库，执行下述格式的命令，创建用于数据同步/开发任务的账号。

   ```sql
   CREATE USER 'username'@'host' IDENTIFIED BY 'password';
   ```

   * **username**：用户名。

   * **password**：密码。

   * **host**：允许该账号登录的主机，百分号（%）表示允许任意主机。

   示例：创建一个名为 tapdata 的账号。

   ```sql
   CREATE USER 'tapdata'@'%' IDENTIFIED BY 'Tap@123456';
   ```



2. 为刚创建的账号授予权限。

<Tabs className="unique-tabs">
    <TabItem value="onedatabase-t" label="授予指定库 SELECT 权限" default>
    <pre>GRANT SELECT, SHOW VIEW, CREATE ROUTINE, LOCK TABLES ON database_name.table_name TO 'username' IDENTIFIED BY 'password';</pre>
   </TabItem>
   <TabItem value="all-t" label="授予全局权限">
    <pre>GRANT RELOAD, SHOW DATABASES, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'username' IDENTIFIED BY 'password';</pre>
   </TabItem>
  </Tabs>

* **database_name.table_name**：要授予权限的库和表，名称间用英文句号（.）分隔，例如 demodata.customer。
* **username**：用户名。
* **password**：密码。



## 添加数据源
1. 登录 Tapdata 平台。

2. 在左侧导航栏，单击**连接管理**。

3. 在页面右侧，单击**创建连接**。

4. 在跳转到的页面，单击 **Beta 数据源**标签页，然后选择 **TiDB**。

5. 根据下述说明完成数据源配置。

   ![](../../images/tidb_connection_setting.png)

   * **连接信息设置**
      * **连接名称**：填写具有业务意义的独有名称。
      * **连接类型**：支持将 TiDB 数据库作为源或目标。
      * **PDServer 地址**：填写 PDServer 的链接地址。
      * **数据库地址**：数据库连接地址。
      * **端口**：数据库的服务端口。
      * **数据库名称**：数据库名称，即一个连接对应一个数据库，如有多个数据库则需创建多个数据连接。
      * **账号**、**密码**：数据库的账号和密码，账号的创建和授权方法，见[准备工作](#prerequisite)。
      * **其他连接串参数**：额外的连接参数，默认为空。
   * **高级设置**
      * **时间类型的时区**：默认为数据库所用的时区，您也可以根据业务需求手动指定。
      * **启动增量**：无需设置，如希望将 TiDB 的数据实时同步至目标库，可在配置数据转换任务时，为源 TiDB 节点配置轮询字段来实现。
      * **包含表**：默认为**全部**，您也可以选择自定义并填写包含的表，多个表之间用英文逗号（,）分隔。
      * **排除表**：打开该开关后，可以设定要排除的表，多个表之间用英文逗号（,）分隔。
      * **agent 设置**：默认为**平台自动分配**，您也可以手动指定。
      * **模型加载频率**：数据源中模型数量大于 1 万时，Tapdata 将按照本参数的设定定期刷新模型。
   * **SSL 设置**：选择是否开启 SSL 连接数据源，可进一步提升数据安全性，开启该功能后还需要上传 CA 文件、客户端证书、密钥填写客户端密码。

6. 单击**连接测试**，测试通过后单击**保存**。

   :::tip

   如提示连接测试失败，请根据页面提示进行修复。

   :::

