# XML

Tapdata 支持读取 Local（本地）、FTP、SFTP、SMB、S3FS 或 OSS 上的文件，支持的文件类型包括 [CSV](csv.md)、[EXCEL](excel.md)、[JSON](json.md) 和 XML，满足多样化的数据流转需求。

可扩展标记语言（XML）一种数据表示格式，可以描述非常复杂的数据结构，常用于传输和存储数据。完成 Agent 部署后，您可以跟随本文教程在 Tapdata 中添加 CSV 数据源，后续可将其作为源库来构建数据管道。

## 注意事项

- 一个连接配置仅对应一个模型（表），如有多个模型您需要分别为其创建链接。
- XML 数据源仅适用于数据转换任务，暂不支持在数据复制任务中引用。
- Tapdata 默认每隔 1 分钟检测 XML 文件是否发生变更（如新增/修改文件），如发生变更则将涉及的文件全量新增后更新条件字段以完成修改，暂不支持同步删除文件或数据。
- XML 文件中可用的数据类型为 ARRAY、BOOLEAN、DATETIME、INTEGER、NUMBER, OBJECT、STRING、TEXT。

## <span id="prerequisite">准备工作</span>

本小节介绍在创建 XML 数据源连接前所需的准备工作，请根据 XML 文件的存放位置选择阅读。

### 文件存放在 Local/FTP/SFTP/SMB

import Content1 from '../../../reuse-content/beta/_file-store-local_op.md';

<Content1 />


### 文件存放在 Amazon S3

import Content2 from '../../../reuse-content/beta/_file-store-s3.md';

<Content2 />


### 文件存放在 OSS


import Content3 from '../../../reuse-content/beta/_file-store-oss.md';

<Content3 />



## 添加数据源

1. 登录 Tapdata 平台。

2. 在左侧导航栏，单击**连接管理**。

3. 单击页面右侧的**创建**。

4. 在弹出的对话框中，选择 **XML**。

5. 在跳转到的页面，根据下述说明填写 XML 的连接信息。

   ![连接 XML](../../images/connect_xml.png)

   * **连接名称**：填写具有业务意义的独有名称。

   * **连接类型**：目前仅支持**源头**。

   * **文件协议**：根据 XML 文件存放的位置选择下述协议，本文以 **S3FS**（Amazon S3 存储桶） 为例演示操作流程。
     
     :::tip
     
     关于如何获取各协议所需填写的信息，见 [准备工作](#prerequisite)。     
     
     :::
     
      * **Local**：文件存放在本地（引擎）所在的设备上，选择此项后，您还需要填写文件路径。
      * **FTP**（文件传输协议）：文件存放在 FTP 服务器上，选择此项后，您还需要填写 FTP 服务器的地址、端口、用户名、口令、文件路径等信息，如上图所示。
      * **SFTP**（安全加密文件传输协议）：文件存放在 SFTP 服务器上，选择此项后，您还需要填写 SFTP 服务器的地址、端口、用户名、口令、文件路径等信息。
      * **SMB**（文件共享协议）：文件存放在 SMB 服务器上，兼容 1.x、2.x、3.x，选择此项后，您还需要填写 SMB 服务器的地址、用户名、口令、文件路径等信息。
      * **S3FS**（遵循S3协议文件系统）：文件存放在 Amazon S3 存储桶上，选择此项后，您还需要填写 Accesskey、Secretkey、终端（固定为 **s3.amazonaws.com**）、桶和文件路径等信息。
      * **OSS**（对象存储服务）：文件存放在阿里云对象存储 OSS 上，选择此项后，您还需要填写云账户的 Accesskey、Secretkey、终端、桶和文件路径等信息。
     
   * **Agent 设置**：默认为**平台自动分配**，您也可以手动指定。

   * **模型加载时间**：当数据源中模型数量小于 10,000 时，每小时刷新一次模型信息；如果模型数据超过 10,000，则每天按照您指定的时间刷新模型信息。

6. 单击**连接测试**，测试通过后单击**保存**。

   :::tip

   如提示连接测试失败，请根据页面提示进行修复。

   :::
