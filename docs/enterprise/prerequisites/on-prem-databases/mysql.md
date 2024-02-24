# MySQL

MySQL 是应用最广泛的开源关系数据库，是许多网站、应用程序、商业产品使用的关系数据存储。完成 Agent 部署后，您可以跟随本文教程在 Tapdata 中添加 MySQL 数据源，后续可将其作为源或目标库来构建数据管道。

## 支持版本 

MySQL 5.0、5.1、5.5、5.6、5.7、8.x

## 准备工作

### 作为源库

import Content1 from '../../../reuse-content/certificate/_mysql-as-source.md';

<Content1 />

​      

### 作为目标库

import Content2 from '../../../reuse-content/certificate/_mysql-as-target.md';

<Content2 />



### <span id="ssl">开启 SSL 连接（可选）</span>

为进一步提升数据链路的安全性，您还可以选择为 MySQL 数据库开启 SSL（Secure Sockets Layer）加密，实现在传输层对网络连接的加密，在提升通信数据安全性的同时，保证数据的完整性，具体操作流程如下：

1. 登录 MySQL 数据库所属的设备，运行 **mysql_ssl_rsa_setup** 程序来创建 SSL/RSA 文件，您可以通过 find 命令查找该程序的位置。

   在执行本步骤前，您可以登录 MySQL 数据库并执行 `SHOW GLOBAL VARIABLES LIKE '%ssl%';` 命令，查看是否生成过 SSL/RSA 文件及 SSL 开启状态。

   ```bash
   /usr/bin/mysql_ssl_rsa_setup
   ```

   :::tip

   * 运行该程序需确保您的设备已安装 **openssl**，例如在 CentOS 系统中，可执行 `yum install openssl -y` 命令来安装。
   * 命令执行完毕后，会自动生成文件： `ca-key.pem`、`server-key.pem` 和 `client-key.pem`，通常位于 `/var/lib/mysql/` 目录中，您可以将其下载至本机中，后续在 Tapdata 中配置连接时使用。

   :::

2. 使用 `vim` 命令，修改 `$MYSQL_HOME/mysql.cnf` 中的配置，开启强制 SSL 认证并指定相关 SSL/RSA 文件位置，修改完成后保存并退出编辑。

   ```bash
   [mysqld]
   require_secure_transport=ON
   # 自签名的 CA 证书
   ssl-ca=/var/lib/mysql/ca.pem
   # 服务端证书文件
   ssl-cert=/var/lib/mysql/server-cert.pem
   # 服务端私钥文件
   ssl-key=/var/lib/mysql/server-key.pem
   [client]
   ssl-mode=REQUIRED
   # 客户端连接服务端所需提供的证书文件
   ssl-cert=/var/lib/mysql/client-cert.pem
   # 客户端连接服务端所需提供的私钥文件
   ssl-key=/var/lib/mysql/client-key.pem
   ```

3. 登录 MySQL 数据库，**选择**执行下述格式的命令，调整数据同步/开发任务的账号。

   ```sql
   ALTER USER 'username'@'host' REQUIRE x509; -- 强制要求客户端提供有效证书
   ALTER USER 'username'@'host' REQUIRE ssl; -- 不强制要求客户端提供有效证书
   FLUSH PRIVILEGES;
   ```

   * **username**：用户名。
   * **host**：允许该账号登录的主机，例如使用百分号（%）以允许任意主机。

4. 重启 MySQL 数据库。

   


## 添加数据源

1. 登录 Tapdata 平台。

2. 在左侧导航栏，单击**连接管理**。

3. 单击页面右侧的**创建**。

4. 在弹出的对话框中，搜索并选择 **MySQL**。

5. 在跳转到的页面，根据下述说明填写 MySQL 的连接信息。

   ![连接配置示例](../../images/mysql_connection_demo.png)

    * **连接信息设置**
        * **连接名称**：填写具有业务意义的独有名称。
        * **连接类型**：支持将 MySQL 作为源或目标库。
        * **地址**：数据库连接地址。
        * **端口**：数据库的服务端口。
        * **数据库**：数据库名称，即一个连接对应一个数据库，如有多个数据库则需创建多个数据连接。
        * **账号**：数据库的账号。
        * **密码**：数据库账号对应的密码。
    * **高级设置**
        * **连接参数**：额外的连接参数，默认为空。
        * **时区**：默认为数据库所用的时区，您也可以根据业务需求手动指定。
          如果源库为默认数据库时区（+8:00），目标端数据库为指定时区+0:00，那么假设源端数据库存储的时间为 2020-01-01 16:00:00，目标端数据库存储的时间则为 2020-01-01 08:00:00
        * **共享挖掘**：[挖掘源库](../../user-guide/advanced-settings/share-mining.md)的增量日志，可为多个任务共享源库的增量日志，避免重复读取，从而最大程度上减轻增量同步对源库的压力，开启该功能后还需要选择一个外存用来存储增量日志信息。
        * **包含表**：默认为**全部**，您也可以选择自定义并填写包含的表，多个表之间用英文逗号（,）分隔。
        * **排除表**：打开该开关后，可以设定要排除的表，多个表之间用英文逗号（,）分隔。
        * **Agent 设置**：默认为**平台自动分配**，您也可以手动指定 Agent。
        * **模型加载频率**：数据源中模型数量大于 1 万时，Tapdata 将按照设置的时间定期刷新模型。
    * **SSL 设置**：选择是否开启 SSL 连接数据源，可进一步提升数据安全性，开启该功能后还需要上传 CA 文件、客户端证书、客户端密钥文件等，相关文件已在[开启 SSL 连接](#ssl)中获取。

6. 单击**连接测试**，测试通过后单击**保存**。

   :::tip

   如提示连接测试失败，请根据页面提示进行修复。

   :::

## 常见问题

* 问：可以使用从库作为源进行数据同步吗？

  答：可以，除在从库上开启以上设置外，还需要：

  1. 执行下述命令，检查 MySQL 库的参数配置，确保 **log_slave_updates** 的值为 1。

     ```sql
     Select @@log_slave_updates
     ```

  2. 检查主从库是否一致，不一致时可查看从节点状态：`SHOW SLAVE STATUS`，

     根据具体报错修复后，再执行数据同步。

* 问：Tapdata 连接测试时，提示错误：“Unknown error 1044”

  答：如果已经授予了正确的权限，可以通过下述方法检查并修复：

  ```sql
  SELECT host,user,Grant_priv,Super_priv FROM mysql.user where user='username';
  //查看Grant_priv字段的值是否为Y
  //如果不是，则执行以下命令
  UPDATE mysql.user SET Grant_priv='Y' WHERE user='username';
  FLUSH PRIVILEGES;
  ```

## 相关文档

* [MySQL 实时同步至 Redis](../../pipeline-tutorial/mysql-to-redis.md)
* [采集 Excel 数据至 MySQL](../../pipeline-tutorial/excel-to-mysql.md)
* [构建数组提取链路简化数据分析](../../pipeline-tutorial/extract-array.md)
