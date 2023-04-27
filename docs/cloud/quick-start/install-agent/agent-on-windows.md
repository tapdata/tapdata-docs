# Windows 平台上安装

Tapdata Agent（简称 Agent）通过流式技术从源端获取数据、处理转换数据并发送到目标端，支持多平台安装，本文介绍如何在 Windows 平台上安装 Agent。

## 环境要求

- 硬件环境：x86 架构处理器
- 操作系统：64 位
- 网络环境：可连通公网，且可与源/目标数据库通信
- 软件依赖：Java 1.8 版本

:::tip

您可以在 Windows 设备上的命令行中执行 `java -version` 命令查看 Java 版本，如未安装请参见[官方文档](https://www.java.com/en/download/manual.jsp)。

:::

## 安装 Agent 

1. 登录 [Tapdata Cloud 平台](https://cloud.tapdata.net/console/v3/)。

2. 基于业务需求创建所需规格的 Agent，具体操作，见[订阅实例](../../billing/purchase.md)。

   :::tip

   推荐选购全托管实例，由 Tapdata Cloud 提供 Agent 运行所需的计算/存储资源并自动部署，同时提供统一的运行维护和资源监控以提升运行可靠性，免去部署和运维精力，专注业务本身。

   :::

3. 订阅完成后，在跳转到的部署页面选择 **Windows（64 bit）**，单击**下载 Tapdata Agent**，然后复制安装命令。

   ![复制安装命令](../../images/agent_on_windows_cn.png)

4. 为方便管理，我们将下载的 Agent 安装程序移动至安装目录（如 **C:\tapdata**）。

5. 双击安装程序 **tapdata.exe**，根据提示，单击右键粘贴在步骤 3 复制的 Token 信息并按回车键，启动成功后命令窗口将自动关闭。

6. （可选）双击 Agent 安装目录中的 **status.bat** 程序，查看 Agent 状态，正常启动的示例如下。

   ![Agent 启动成功](../../images/agent_started_on_windows.png)



## 视频教程

<iframe      src="https://20778419.s21v.faiusr.com/58/2/ABUIABA6GAAg-ZOHkQYoqs3RogI.mp4"   width="100%"      height="539"      frameborder="0"    allowfullscreen="true"  > </iframe>

## 下一步

[连接数据库](../connect-database.md)

## 推荐阅读

* [管理 Agent](../../user-guide/manage-agent.md)
* [安装与管理 Agent 常见问题](../../faq/agent-installation.md)
