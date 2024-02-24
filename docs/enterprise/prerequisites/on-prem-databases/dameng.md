# Dameng（达梦）

达梦数据库管理系统（DM）是新一代大型通用关系型数据库，全面支持 SQL 标准和主流编程语言接口/开发框架。行列融合存储技术，在兼顾 OLAP 和 OLTP 的同时，满足 HTAP 混合应用场景。

完成 Agent 部署后，您可以跟随本文教程在 Tapdata 中添加 Dameng 数据源，后续可将其作为源或目标库来构建数据管道。



## 支持版本 

DM 7.x、8.x

import Content1 from '../../../reuse-content/beta/_beta.md';

<Content1 />

## 准备工作

在连接达梦数据库前，您还需要完成数据库账号的授权等准备工作：

* 作为源库
* 作为目标库



### <span id="source">作为源库</span>

1. 以拥有 DBA 权限的身份登录达梦数据库。

2. 依次执行下述格式的命令，创建用于数据复制/转换任务的用户。

   ```sql
   CREATE USER username IDENTIFIED BY "password" DEFAULT TABLESPACE table_space_name;
   ```
   
   * **username**：用户名。
   * **pass_word**：密码。
   * **table_space_name**：表空间名称。
   
3. 为刚创建的账号授予权限，您也可以基于业务需求自定义权限控制。

   ```sql
   -- 替换下述命令中的 username 为真实的用户名
   GRANT dba TO username;
   
   -- 或者使用下述更精细化的授权
   GRANT SELECT TABLE, SELECT VIEW TO username;
   GRANT SELECT ON "SYS"."V$RLOG" TO username;
   GRANT SELECT ON "SYS"."V$ARCHIVED_LOG" TO username;
   ```
   
4. 如需获取源库的数据变更以实现增量同步，您还需要跟随下述步骤开启数据库的归档功能和归档日志。

   :::tip

   您也可以执行 `SELECT para_name, para_value FROM v$dm_ini WHERE para_name IN ('ARCH_INI','RLOG_APPEND_LOGIC');` 命令来查看是否已开启该功能，返回结果中， **PARA_VALUE** 列的值为 **1** 表示已开启，可跳过本步骤。

   :::

   ```sql
   -- 修改数据库为 MOUNT 状态
   ALTER DATABASE MOUNT;
   
   -- 配置本地归档，DEST 指定的目录不存在时会自动创建
   -- FILE_SIZE 表示归档文件大小、space_limit 表示空间大小限制
   ALTER DATABASE ADD ARCHIVELOG 'DEST = /bak/dmdata/dameng, TYPE = local, FILE_SIZE = 1024, SPACE_LIMIT = 0';
   
   -- 开启归档模式
   ALTER DATABASE ARCHIVELOG;
   
   -- 开启附加日志，如果有主键列，则记录 UPDATE/DELETE 时只包含主键列信息
   ALTER SYSTEM SET 'RLOG_APPEND_LOGIC'=1 MEMORY;
   
   -- 修改数据库为 OPEN 状态
   ALTER DATABASE OPEN;
   ```



### <span id="source">作为目标库</span>

1. 以拥有 DBA 权限的身份登录达梦数据库。

2. 依次执行下述格式的命令，创建用于数据复制/转换任务的用户。

   ```sql
   CREATE USER username IDENTIFIED BY "password" DEFAULT TABLESPACE table_space_name;
   ```

   * **username**：用户名。
   * **password**：密码。
   * **table_space_name**：表空间名称。

3. 为刚创建的账号授予权限，您也可以基于业务需求自定义权限控制。

   ```sql
   -- 替换下述命令中的 username 为真实的用户名
   GRANT CREATE TABLE, DELETE TABLE, INSERT TABLE, SELECT TABLE, UPDATE TABLE, CREATE INDEX TO username;
   ```

## 添加数据源

1. 登录 Tapdata 平台。

2. 在左侧导航栏，单击**连接管理**。

3. 单击页面右侧的**创建**。

4. 在弹出的对话框中，搜索并选择 **Dameng**。

5. 在跳转到的页面，根据下述说明填写达梦数据库的连接信息。

   * **连接信息设置**
     * **连接名称**：填写具有业务意义的独有名称。
     * **连接类型**：支持将达梦数据库作为源或目标库。
     * **地址**：数据库连接地址。
     * **端口**：数据库的服务端口。
     * **数据库**：填写数据库名称。
     * **Schema**：Schema 名称，创建数据库用户时，达梦数据库会为自动创建一个与用户名相同的 Schema（全大写），如需连接多个 Schema 则需创建多个数据连接。
     * **账号**：数据库的账号。
     * **密码**：数据库账号对应的密码。
     * **连接参数**：额外的连接参数，默认为空。
     * **时区**：默认为数据库所用的时区，您也可以根据业务需求手动指定。
   * **高级设置**
     * **包含表**：默认为**全部**，您也可以选择自定义并填写包含的表，多个表之间用英文逗号（,）分隔。
     * **排除表**：打开该开关后，可以设定要排除的表，多个表之间用英文逗号（,）分隔。
     * **Agent 设置**：默认为**平台自动分配**，您也可以手动指定 Agent。
     * **模型加载频率**：数据源中模型数量大于 1 万时，Tapdata 将按照设置的时间定期刷新模型。
     * **开启心跳表**：当连接类型选择为**源头和目标**、**源头**时，支持打开该开关，由 Tapdata 在源库中创建一个名为 **_tapdata_heartbeat_table** 的心跳表并每隔 10 秒更新一次其中的数据（数据库账号需具备相关权限），用于数据源连接与任务的健康度监测。
     
       :::tip
     
       数据源需在数据复制/开发任务引用并启动后，心跳任务任务才会启动，此时您可以再次进入该数据源的编辑页面，即可单击**查看心跳任务**。
     
       :::


6. 单击**连接测试**，测试通过后单击**保存**。

   :::tip

   如提示连接测试失败，请根据页面提示进行修复。

   :::

