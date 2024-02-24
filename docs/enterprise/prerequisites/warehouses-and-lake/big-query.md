# BigQuery

[BigQuery](https://cloud.google.com/bigquery/docs?hl=zh-cn) 是 Google Cloud 的全代管式 PB 级经济实惠的分析数据仓库，可让您近乎实时地分析大量数据。完成 Agent 部署后，您可以跟随本文教程在 Tapdata 中添加 BigQuery 数据源，后续可将其作为目标库来构建数据管道。


## 前提条件

引擎所属机器可访问谷歌云服务。


## 准备工作

1. 登录 Google Cloud 的[角色页面](https://console.cloud.google.com/iam-admin/roles)，创建角色，该角色将包含 Tapdata 操作 BigQuery 所必须的权限。

   1. 单击**创建角色**。

   2. 在跳转到的页面，填写角色名称，然后单击**添加权限**。

   3. 在弹出的对话框中，依次搜索并授予下述权限。
   
   <details>
    <summary>最小权限列表（单击展开）</summary>
  <div>
    <div>
    bigquery.datasets.create<br/>
      bigquery.datasets.get<br/>
      bigquery.datasets.update<br/>
      bigquery.jobs.create<br/>
      bigquery.jobs.get<br/>
      bigquery.jobs.list<br/>
      bigquery.jobs.listAll<br/>
      bigquery.jobs.delete<br/>
      bigquery.jobs.update<br/>
      bigquery.routines.list<br/>
      bigquery.routines.get<br/>
      bigquery.tables.create<br/>
      bigquery.tables.delete<br/>
      bigquery.tables.get<br/>
      bigquery.tables.getData<br/>
      bigquery.tables.list<br/>
      bigquery.tables.setCategory<br/>
      bigquery.tables.update<br/>
      bigquery.tables.updateData
    </div>
  </div>
</details>

   4. 权限选择完成后，单击**创建**。


2. 登录 Google Cloud 的[凭据页面](https://console.cloud.google.com/apis/credentials)，创建服务账号，该账号将用于后续的身份验证。

   1. 在页面顶部，单击**创建凭据** > **服务账号**。

   2. 在服务账号详情区域，填写服务账号的名称、ID 和说明信息，单击**创建并继续**。

      ![创建访问账号](../../images/create_server_account.png)

   3. 在**角色**下拉框中输入并选中我们刚创建的角色（**bigquery-role**），单击页面底部的**完成**。

      ![授予权限](../../images/grant_bigquery_role.png)

4. 为服务账号创建认证密钥。

   1. 在跳转到的**凭据**页面，单击页面下方刚创建的服务账号。

   2. 在**密钥**标签页，单击**添加密钥** > **创建新密钥**。

      ![创建密钥](../../images/create_account_key.png)

   3. 在弹出的对话框中，选择**密钥类型**为 **JSON**，然后单击**创建**。

      操作完成后密钥文件将自动下载保存至您的电脑，为保障账户安全性，请妥善保管密钥文件。

   4. 登录 Google Cloud 控制台，创建数据集和表，如已存在可跳过本步骤。

      1. [创建 BigQuery 数据集](https://cloud.google.com/bigquery/docs/datasets?hl=zh-cn)

         :::tip

         为保障 Tapdata 正常读取到数据集信息，创建数据集时，选择**位置类型**为**多区域**。

         :::

      2. [创建表](https://cloud.google.com/bigquery/docs/tables?hl=zh-cn)。



## 添加数据源

1. 登录 Tapdata 平台。

2. 在左侧导航栏，单击**连接管理**。

3. 单击页面右侧的**创建**。

4. 在弹出的对话框中，单击 **Beta 数据源**，然后选择 **BigQuery**。

5. 在跳转到的页面，根据下述说明填写 BigQuery 的连接信息。

   ![配置 BigQuery 连接信息](../../images/connect_bigquery.png)

   * **连接名称**：填写具有业务意义的独有名称。
   * **连接类型**：目前仅支持作为**目标**。
   * **访问账号（JSON）**：用文本编辑器打开您在准备工作中下载的密钥文件，将其复制粘贴进该文本框中。
   * **数据集 ID**：选择 BigQuery 中已有的数据集。
   * **agent 设置**：选择**平台自动分配**，如有多个 Agent，请手动指定可访问谷歌云服务的 Agent。

6. 单击**连接测试**，测试通过后单击**保存**。

   :::tip

   如提示连接测试失败，请根据页面提示进行修复。

   :::

