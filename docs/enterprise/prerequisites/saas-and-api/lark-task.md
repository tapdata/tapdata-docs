# LarkTask

飞书是一款协作与管理平台，支持即时通讯、音视频会议等功能。完成 Agent 部署后，您可以跟随本文教程在 Tapdata 中添加  Larktask（飞书任务）数据源，后续可将其作为目标库来构建数据管道。


## <span id="prerequisite">准备工作</span>

1. 以管理员的身份登录[飞书开放平台](https://open.feishu.cn/app)。

2. 在开发平台首页，进入企业自建的应用。

   :::tip

   关于企业自建应用的创建方法，见[开发流程](https://open.feishu.cn/document/home/introduction-to-custom-app-development/self-built-application-development-process)。

   :::

3. 在左侧导航栏，单击**凭证与基础信息**，获取 App ID 和 App Secret 信息，后续将在连接数据源时使用。

   ![](../../images/obtain_feishu_app_ak.png)



## 添加数据源

1. 登录 Tapdata 平台。

2. 在左侧导航栏，单击**连接管理**。

3. 在页面右侧，单击**创建连接**。

4. 在跳转到的页面，单击 **Beta 数据源**标签页，然后选择 **LarkTask**。

5. 根据下述说明完成数据源配置。

   ![](../../images/feishu_connection_setting.png)

   * **连接名称**：填写具有业务意义的独有名称。
   * **连接类型**：仅支持**目标**。
   * **应用 ID**、**应用 Secret**：可通过飞书开放平台获取，具体操作，见[准备工作](#prerequisite)。
   * **agent 设置**：默认为**平台自动分配**，您也可以手动指定。
   * **模型加载频率**：数据源中模型数量大于 1 万时，Tapdata 将按照本参数的设定定期刷新模型。

6. 单击**连接测试**，测试通过后单击**保存**。

   :::tip

   如提示连接测试失败，请根据页面提示进行修复。

   :::