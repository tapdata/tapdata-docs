# 单节点部署（Windows 平台）

本文介绍如何快速在本地的 Windows 平台部署 Tapdata 服务。

:::tip

单节点部署可用于功能测试场景，如需用作生产环境，推荐采用[高可用部署](../../production-admin/install-tapdata-ha.md)。

:::

## 软硬件环境要求

* CPU：8 核
* 内存：16 GB
* 存储空间：100 GB
* 操作系统：Windows 操作系统（64 位）

## 准备工作

1. 部署 MongoDB 数据库，该库将作为 Tapdata 存储系统运行相关数据，例如日志、元数据等，相关部署方法，可参考[官方文档](https://www.mongodb.com/docs/v4.4/administration/install-on-linux/)。

2. 登录至待部署的设备上，安装 Java 1.8 并设置环境变量。

   1. [下载 Java 1.8](https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html) 并根据提示完成安装。

   2. 进入**控制面板** > **系统和安全** > **系统**。

   3. 单击左侧的**高级系统设置**，然后单击**环境变量**。

      ![选择环境变量](../../images/select_system_env.png)

   4. 在弹出的对话框中，单击**系统变量**下方的**新建**，然后填写变量名和值，最后单击**确定**。
   
      ![添加变量](../../images/add_system_env.png)
   
      * **变量名**：`JAVA_HOME`
      * **变量值**：JDK 的安装路径，本例为 `C:\Program Files\Java\jdk1.8.0_202`
   
   5. 在**系统变量**区域框中，找到并双击名为 **Path** 的变量，然后在弹出的对话框中，分别新建下述环境变量，最后单击**确定**。
   
      ![修改变量](../../images/edit_system_env.png)
   
      * `%JAVA_HOME%\bin`
      * `%JAVA_HOME%\jre\bin`
   
   6. 参考步骤 4，继续新增系统变量，变量名和值如下，完成设置后单击**确定**。
   
      * **变量名**：`CLASSPATH`
      * **变量值**：`.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar`
   
   7. （可选）打开命令行，执行`java -version` 命令验证环境变量有效性，执行成功后示例如下：

      ```bash
      java version "1.8.0_202"
      Java(TM) SE Runtime Environment (build 1.8.0_202-b08)
      Java HotSpot(TM) 64-Bit Server VM (build 25.202-b08, mixed mode)
      ```
   
      

## 操作步骤

:::tip

本文以 Windows Server 2019 为例，演示部署流程。

:::

1. 下载 Tapdata 安装包（可[联系我们](mailto:team@tapdata.io)获取），将安装包解压到所需目录。

2. 打开命令行，执行下述格式的命令进入到解压到的目录，本案例中为 `D:\tapdata`。

   ```bash
   cd /d D:\tapdata
   ```

3. 准备 License 文件。

   1. 执行下述命令获取申请所需的 SID 信息。

      ```bash
      java -cp components/tm.jar -Dloader.main=com.tapdata.tm.license.util.SidGenerator org.springframework.boot.loader.PropertiesLauncher
      ```

   2. 将打印出的 SID 信息提供给 Tapdata 支持团队，完成 License 申请流程。

   3. 将申请到的 License 文件上传至解压后的目录中。

2. 执行 `./tapdata.exe start`，跟随命令行提示，依次设置 Tapdata 的登录地址、API 服务端口、MongoDB 连接信息等，示例及说明如下：

   ```bash
    ./tapdata.exe start
    _______       _____  _____       _______
   |__   __|/\   |  __ \|  __ \   /\|__   __|/\    
      | |  /  \  | |__) | |  | | /  \  | |  /  \   
      | | / /\ \ |  ___/| |  | |/ /\ \ | | / /\ \  
      | |/ ____ \| |    | |__| / ____ \| |/ ____ \ 
      |_/_/    \_\_|    |_____/_/    \_\_/_/    \_\ 
   
   WORK DIR:/root/tapdata
   Init tapdata...
   ✔ Please enter backend url, comma separated list. e.g.:http://127.0.0.1:3030/ (Default: http://127.0.0.1:3030/):  …
   ✔ Please enter tapdata port. (Default: 3030):  …
   ✔ Please enter api server port. (Default: 3080):  …
   ✔ Does MongoDB require username/password?(y/n):  … no
   ✔ Does MongoDB require TLS/SSL?(y/n):  … no
   ✔ Please enter MongoDB host, port, database name(Default: 127.0.0.1:27017/tapdata):  …
   ✔ Does API Server response error code?(y/n):  … yes
   MongoDB uri:  mongodb://127.0.0.1:27017/tapdata
   MongoDB connection command: mongo  mongodb://127.0.0.1:27017/tapdata
   System initialized. To start Tapdata, run: tapdata start
   WORK DIR:/root/tapdata
   Testing JDK...
   java version:1.8
   Java environment OK.
   Unpack the files...
   Restart TapdataAgent ...:
   TapdataAgent starting ...:
   ```

   * **Please enter backend url**：设置 Tapdata 平台的登录地址，默认为 `http://127.0.0.1:3030/`
   * **Please enter tapdata port**：设置 Tapdata 平台的登录端口，默认为 `3030`。
   * **Please enter api server port**：设置 API Server 的服务端口，默认为 `3080`。
   * **Does MongoDB require username/password?**：MongoDB 数据库是否启用了安全认证，未启用则输入 **n**，如果启用则输入 **y**，然后根据提示分别输入用户名、密码和鉴权数据库（默认为 `admin`）。
   * **Does MongoDB require TLS/SSL?(y/n)**：MongoDB 数据库是否启用 TSL/SSL 加密，未启用则输入 **n**，如果启用则输入 **y**，然后根据提示分别输入 CA 证书和 Certificate Key 文件的绝对地址路径，以及 Certificate Key 的文件密码。
   * **Please enter MongoDB host, port, database name**：设置 MongoDB 数据库的 URI 连接信息，默认为 `127.0.0.1:27017/tapdata`。
   * **Does API Server response error code?**：是否启用 API Server 响应错误码功能。

   部署成功后，命令行返回示例如下：

   ```bash
   deployed connector.
   Waiting for the flow engine to start \
   FlowEngine is startup at : 2023-04-01 23:00
   API service started
   ```

3. 通过浏览器登录 Tapdata 平台，本机的登录地址为  [http://127.0.0.1:3030](http://127.0.0.1:3030)，首次登录请及时修改密码以保障安全性。

   :::tip

   如需在同一内网的其他设备上访问 Tapdata 服务，请确保网络可互通，例如[设置 Windows 防火墙](https://learn.microsoft.com/zh-cn/windows/security/operating-system-security/network-security/windows-firewall/configure)，允许访问本机的 3030 和 3080 端口。

   :::



## 部署命令执行示例

import AsciinemaPlayer from '@site/src/components/AsciinemaPlayer/AsciinemaPlayer.tsx';

<AsciinemaWidget src="https://docs.tapdata.io/asciinema_playbook/install_tapdata.cast" rows={20} idleTimeLimit={3} preload={true} />


<AsciinemaPlayer
    src="/asciinema_playbook/install_tapdata.cast"
    poster="npt:0:20"
    rows={25}
    speed={1.8}
    preload={true}
    terminalFontSize="15px"
    fit={false}
/>



## 下一步

[连接数据库](../connect-database.md)

