# Coding

Coding 是腾讯云旗下的一站式 DevOps 研发管理平台，围绕 DevOps 理念向广大开发者及企业研发团队提供代码托管、项目协同、测试管理、持续集成、制品库、持续部署、云原生应用管理 Orbit、团队知识库等系列工具产品。

完成 Agent 部署后，您可以跟随本文教程在 Tapdata 中添加 Coding 数据源，后续可将其作为源库来构建数据管道。

## 数据说明

支持增量轮询的任何表在执行增量轮询时都无法监听并处理删除事件（所有修改事件都以插入事件处理），如需要具体的事件区分请选择Webhook增量方式（局限于SaaS平台，并不是所有表都支持Webhook增量）

* 事项表-Issues：事项表包含全部类型包括需求、迭代、任务、史诗以及自定义的类型。 其增量方式在轮询式下无法准确知道增量事件，统一作为新增事件处理。
* 迭代表-Iterations：迭代表包含所有迭代。 受限于Coding的OpenAPI，其轮询式增量采取从头覆盖，意味着任务开始后监控上显示的增量事件数存在误差，但不会造成真实数据误差。
* 项目成员表-ProjectMembers：此表包含当前选中的项目下的全部项目成员。

### 注意事项

请不要使用同一个 OAuth 授权过多数据源，也不要使用同一个 Coding 数据源为同一张表创建过多的任务，否则可能造成 Coding 启动限流措施。

## 连接 Coding

1. 登录 Tapdata 平台。
2. 在左侧导航栏，单击**连接管理**。
3. 单击页面右侧的**创建**。
4. 在弹出的对话框中，搜索并选择 **Coding**。
5. 在跳转到的页面，根据下述说明填写 BigQuery 的连接信息。
   * **连接名称**：填写具有业务意义的独有名称。
   * **团队名称**：您可以通过 Coding 链接中直观获取到，例如链接为 **https://team_name.coding.net/** ，那么团队名称就是 team_name。填写完成后，单击**授权**，在跳转到的页面完成登录授权。
   * **增量方式**：支持 **Webhook** 和**轮询式**，如选择 Webhook 模式，您需要单击**生成**来获取服务 URL，后续您还需要将该 URL 配置到 Coding 平台中。
6. 单击**连接测试**，测试通过后单击**保存**。

   :::tip

   如提示连接测试失败，请根据页面提示进行修复。

   :::

## 配置 Service Hook

当选择增量方式为 **Webhook** 时，您还需要跟随下述步骤，在 Coding 平台完成 Service Hook 配置。

1. 一键生成服务URL，并复制到剪切板。

   ![img](https://tapdata-bucket-01.oss-cn-beijing.aliyuncs.com/doc/coding/generate.PNG)

2. 进入您的团队并选择对应的项目。

   ![img](https://tapdata-bucket-01.oss-cn-beijing.aliyuncs.com/doc/coding/init.PNG)

3. 进入项目设置后，找到开发者选项。

   ![img](https://tapdata-bucket-01.oss-cn-beijing.aliyuncs.com/doc/coding/developer.PNG)

4. 找到ServerHook，再找到右上角点的新建ServerHook按钮并点击。

   ![img](https://tapdata-bucket-01.oss-cn-beijing.aliyuncs.com/doc/coding/init-webhook.PNG)

5. 进入Webhook配置，第一步我们选择Http Webhook后点击下一步。

   ![img](https://tapdata-bucket-01.oss-cn-beijing.aliyuncs.com/doc/coding/webhook.PNG)

6.  配置我们需要的监听的事件类型。

   ![img](https://tapdata-bucket-01.oss-cn-beijing.aliyuncs.com/doc/coding/monitor.PNG)

7.  粘贴我们最开始在创建数据源页面生成的服务URL到此。

   ![img](https://tapdata-bucket-01.oss-cn-beijing.aliyuncs.com/doc/coding/url.PNG)

