# MongoDB

MongoDB 是一个流行的、开源 NoSQL 数据库，以灵活/可扩展的方式存储和检索数据。完成 Agent 部署后，您可以跟随本文教程在 Tapdata 中添加 MongoDB 数据源，后续可将其作为源或目标库来构建数据管道。

## 支持版本

MongoDB 3.2、3.4、3.6、4.0、4.2

:::tip

Tapdata 基于 MongoDB 的 Change Stream 实现，此特性在 MongoDB 4.0 开始支持，因此，推荐源和目标数据库的版本为 4.0 及以上。

:::

## 准备工作

### 作为源库

1. 保障源库的架构为副本集或分片集群，如果为单节点架构，您可以将其配置为单成员的副本集以开启 Oplog。
   具体操作，见[如何将单节点转为副本集](https://docs.mongodb.com/manual/tutorial/convert-standalone-to-replica-set/)。

2. 配置充足的 Oplog 存储空间，至少需要容纳 24 小时的 Oplog。
   具体操作，见[修改 Oplog 大小](https://docs.mongodb.com/manual/tutorial/change-oplog-size/)。

3. 根据权限管控需求选择下述步骤，创建用于数据同步/开发任务的账号并授予权限。

   :::tip
   由于分片服务器不会向 config 数据库获取用户权限，因此，当源库为分片集群架构时，您需要在每个分片的主节点上创建相应的用户并授予权限。
   :::

   * 授予指定库（以 **demodata** 库为例）的读权限

     ```bash
     use admin
     db.createUser(
       {
         user: "tapdata",
         pwd: "my_password",
         roles: [
            { role: "read", db: "demodata" },
            { role: "read", db: "local" },
            { role: "read", db: "config" },
            { role: "clusterMonitor", db: "admin" },
         ]
       }
     )
     ```
     
   * 授予所有库的读权限。
   
     ```bash
     use admin
     db.createUser(
       {
         user: "tapdata",
         pwd: "my_password",
         roles: [
         { role: "readAnyDatabase", db: "admin" },
            { role: "clusterMonitor", db: "admin" },
      ]
       }
      )
     ```

4. 在设置 MongoDB URI 时，推荐将写关注级别设置为大多数，即 `w=majority`，否则可能因 Primary 节点异常宕机导致的数据丢失文档。

5. 源库为集群架构时，为提升数据同步性能，Tapdata 将会为每个分片创建一个线程并读取数据，在配置数据同步/开发任务前，您还需要执行下述操作。

   * 关闭源库的均衡器（Balancer），避免块迁移对数据一致性的影响。具体操作，见[如何停止平衡器](https://docs.mongodb.com/manual/reference/method/sh.stopBalancer/)。
   * 清除源库中，因块迁移失败而产生的孤立文档，避免 _id 冲突。具体操作，见[如何清理孤立文档](https://docs.mongodb.com/manual/reference/command/cleanupOrphaned/)。



### 作为目标库

授予指定库（以 **demodata** 库为例）的写权限，并授予 **clusterMonitor** 角色以供数据验证使用，示例如下：

```bash
use admin
db.createUser(
  {
    user: "tapdata",
    pwd: "my_password",
    roles: [
       { role: "readWrite", db: "demodata" },
       { role: "clusterMonitor", db: "admin" },
    ]
  }
)
```

:::tip

仅当 MongoDB 为 3.2 版本时，需要授予 local 数据库的读权限。

:::

## 添加数据源
1. 登录 Tapdata 平台。

2. 在左侧导航栏，单击**连接管理**。

3. 单击页面右侧的**创建**。

4. 在弹出的对话框中，搜索并选择 **MongoDB**。

5. 在跳转到的页面，根据下述说明填写 MongoDB 的连接信息。

   ![MongoDB 连接示例](../../images/mongodb_connection_cn.png)

   * **连接信息设置**
      * **连接名称**：填写具有业务意义的独有名称。
      * **连接类型**：支持将 MongoDB 作为源或目标库。
      * **连接方式**：根据业务需求选择：
         * **URI 模式**：选择该模式后，您需要填写数据库 URI 连接信息，用户名和密码需拼接在连接串中，例如：` mongodb://admin:password@192.168.0.100:27017/mydb?replicaSet=xxx&authSource=admin`
         * **标准模式**：选择该模式后，您需要填写数据库地址、名称、账号、密码和其他连接串参数。
   * **高级设置**
      * **使用 TLS/SSL 连接**：根据业务需求选择：
        * TSL/SSL 连接：Tapdata 将连接网络中的单独服务器，该服务器提供到数据库的 TSL/SSL 通道。如果您的数据库位于不可访问的子网中，则可尝试使用此方法。
        * 直接连接：Tapdata 将直接连接到数据库，您需要设置安全规则以允许访问。
      * **共享挖掘**：[挖掘源库](../../user-guide/advanced-settings/share-mining.md)的增量日志，可为多个任务共享源库的增量日志，避免重复读取，从而最大程度上减轻增量同步对源库的压力，开启该功能后还需要选择一个外存用来存储增量日志信息。
      * **包含表**：默认为**全部**，您也可以选择自定义并填写包含的表，多个表之间用英文逗号（,）分隔。
      * **排除表**：打开该开关后，可以设定要排除的表，多个表之间用英文逗号（,）分隔。
      * **Agent 设置**：默认为**平台自动分配**，您也可以手动指定 Agent。
      * **模型加载频率**：数据源中模型数量大于 1 万时，Tapdata 将按照设置的时间定期刷新模型。
   * **SSL 设置**：选择是否开启 SSL 连接数据源，可进一步提升数据安全性，开启该功能后续上传 CA 文件、客户端证书、密钥填写客户端密码。

6. 单击**连接测试**，测试通过后单击**保存**。

   :::tip

   如提示连接测试失败，请根据页面提示进行修复。

   :::