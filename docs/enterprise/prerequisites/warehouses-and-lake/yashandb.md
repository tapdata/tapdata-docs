# YashanDB

崖山数据库管理系统（YashanDB）是深圳计算科学研究院在经典数据库理论基础上，融入新的原创理论，自主设计、研发的新型数据库管理系统。Tapdata 支持将 YashanDB 作为目标库来构建数据管道，帮助您快速完成数据流转。

接下来，跟随本文介绍在 Tapdata 平台上连接 YashanDB 数据源。

## 准备工作

以 DBA 管理员身份登录 YashanDB，执行下述格式的命令完成账号授权操作：

```sql
-- 将 username 更换为真实的用户名
GRANT CREATE SESSION TO username;
GRANT INSERT ANY TABLE TO username;
GRANT UPDATE ANY TABLE TO username;
GRANT DELETE ANY TABLE TO username;
GRANT SELECT ANY TABLE TO username;
```

## 连接 YashanDB

1. 登录 Tapdata 平台。

2. 在左侧导航栏，单击**连接管理**。

3. 单击页面右侧的**创建**。

4. 在弹出的对话框中，搜索并选择 **YashanDB**。

5. 在跳转到的页面，根据下述说明填写 YashanDB 的连接信息。

   ![连接 YashanDB](../../images/connect_yashandb.png)

    - **基本设置**
      - **连接名称**：填写具有业务意义的独有名称。
      - **连接类型**：仅支持**目标**。
      - **地址**：填写数据的连接地址。
      - **端口**：数据库的服务端口，默认为 **1688**。
      - **模式**：要连接的 Schema（模式），即全大写的用户名，例如 用户名为 `tapdata`，则 Schema 为 `TAPDATA`。
      - **用名名**、**密码**：分别填写数据库的用户名和密码。
    - **高级设置**
      - **包含表**：默认为**全部**，您也可以选择自定义并填写包含的表，多个表之间用英文逗号（,）分隔。
      - **排除表**：打开该开关后，可以设定要排除的表，多个表之间用英文逗号（,）分隔。
      - **Agent 设置**：默认为**平台自动分配**，您也可以手动指定 Agent。
      - **模型加载时间**：当数据源中模型数量小于 1 万时，Tapdata 会每小时刷新一次；当数据源中模型数量大于 1 万时，Tapdata 会每天按照指定的时间进行模型刷新。

6. 单击页面下方的**连接测试**，提示通过后单击**保存**。

   :::tip

   如提示连接测试失败，请根据页面提示进行修复。

   :::

