# 部署 Oracle 裸日志解析服务

为了提高数据变更捕获的效率，Tapdata 不仅支持使用数据库原生日志解析工具（LogMiner），还开发了直接解析数据库增量日志文件的能力，从而实现更高效的事件捕获，可获得更高的采集性能（QPS 20,000 以上），降低采集增量数据对源库的影响，但由于需要单独部署额外的组件，会增加一定的运维成本，适用于数据变更频繁的场景。

![工作流程](../images/raw_logs_workflow.png)

## 环境说明

* **数据库要求**：支持 11g、12c、18c、19c、21c 版本。
* **操作系统要求**：Linux 64 或 Windows 64 平台。
* **存储要求**：支持的存储文件系统为 ext4、btrfs、zfs、xfs、sshfs；支持的数据库块大小为2k、4k、8k、16k、32k
* **端口要求**：需开放服务器的部分端口用于服务通信，包含：数据传输默认端口：**8203**、WEB管理默认端口：**8303**、裸日志服务端口：**8190**。
* **权限要求**：需要裸日志插件的运行用户（操作系统用户）可读取 redo log files；除按照 [Oracle 准备工作](../prerequisites/on-prem-databases/oracle#source)要求的授予源库权限并开启归档日志外，还需要为数据库用户额外授予下述权限，以模拟 Oracle 的数据信息结构和流程，从而缓存 Oracle Schema 的部分信息，以此来支撑解析 redo log 。
  
  ```sql
  -- 替换 <DSTUSER> 为真实的用户名
  GRANT SELECT, FLASHBACK ON SYS.CCOL$ TO <DSTUSER>;
  GRANT SELECT, FLASHBACK ON SYS.CDEF$ TO <DSTUSER>;
  GRANT SELECT, FLASHBACK ON SYS.COL$ TO <DSTUSER>;
  GRANT SELECT, FLASHBACK ON SYS.DEFERRED_STG$ TO <DSTUSER>;
  GRANT SELECT, FLASHBACK ON SYS.ECOL$ TO <DSTUSER>;
  GRANT SELECT, FLASHBACK ON SYS.OBJ$ TO <DSTUSER>;
  GRANT SELECT, FLASHBACK ON SYS.SEG$ TO <DSTUSER>;
  GRANT SELECT, FLASHBACK ON SYS.TAB$ TO <DSTUSER>;
  GRANT SELECT, FLASHBACK ON SYS.TABCOMPART$ TO <DSTUSER>;
  GRANT SELECT, FLASHBACK ON SYS.TABPART$ TO <DSTUSER>;
  GRANT SELECT, FLASHBACK ON SYS.TABSUBPART$ TO <DSTUSER>;
  GRANT SELECT, FLASHBACK ON SYS.USER$ TO <DSTUSER>;
  GRANT SELECT ON SYS.V_$ARCHIVED_LOG TO <DSTUSER>;
  GRANT SELECT ON SYS.V_$DATABASE TO <DSTUSER>;
  GRANT SELECT ON SYS.V_$DATABASE_INCARNATION TO <DSTUSER>;
  GRANT SELECT ON SYS.V_$LOG TO <DSTUSER>;
  GRANT SELECT ON SYS.V_$LOGFILE TO <DSTUSER>;
  GRANT SELECT ON SYS.V_$PARAMETER TO <DSTUSER>;
  GRANT SELECT ON SYS.V_$STANDBY_LOG TO <DSTUSER>;
  GRANT SELECT ON SYS.V_$TRANSPORTABLE_PLATFORM TO <DSTUSER>;
  ```
  
  :::tip
  
  您需要以 **SYS** 身份为数据库用户额外授予上述权限，如果数据库启用了多租户功能，则必须在 PDB 中创建用户并授予权限。
  
  :::

## 操作步骤

接下来，我们以 Oracle 12c 运行在 Linux 平台为例，演示裸日志查询的部署流程。

1. [联系 Tapdata](mailto:team@tapdata.io) 获取裸日志解析插件的安装包和 License 文件。

2. 登录 Oracle 所属设备上，依次执行下述命令完成部署前的工作。

   1. 将安装包上传至 /home 目录中，随后执行下述格式的命令完成解压操作。

      ```bash
      tar -xvf {安装包文件}
      ```

   2. 执行下述命令，完成环境准备并启动前端部署页面。

      ```bash
      # 以 12 c 版本的组件安装包为例
      bash setup_linux64_12c.sh
      ```

      根据命令行提示，选择将 Oracle 数据库作为源库（即输入 `s`），然后填写用户名、密码、安装目录和 Oracle 环境文件，设置完成后会提示通过 **9099** 端口访问网页部署页面，示例如下：

      ![部署命令](../images/deploy_fzs.png)

   3. 将 License 文件放置在插件安装目录下的 `conf` 目录中。

      本案例中，基于命令提示，我们将插件安装在 `/home/fzs_tapdata` 中，那么 License 文件就放置在 `/home/fzs_tapdata/conf` 中即可

3. 通过网页访问部署页面，确认环境变量和 License 无误后单击**下一步**。

      假设 Oralce 的服务地址为 `192.168.1.18`，则访问地址为：`http://192.168.1.18:9099/`。

      ![检查环境变量和 License](../images/check_env.png)

4. 依次阅读安装须知、常见问题、软件不支持的对象列表和数据库隐藏参数检查，单击**下一步**。


5. 填写数据库连接的用户并进行检查，提示**用户已存在**表示通过检查，然后单击**下一步**。

   ![填写用户并检查](../images/check_user.png)

6. 选择同步模式，本案例中我们选择**用户级同步模式**并单击**下一步**。

   ![选择同步模式](../images/select_sync_mode.png)

   * **用户级同步模式**：在后续步骤中选中需要同步的 Schema，手动填写要排除的表，使用 Schema 中表较多的场景。
   * **表级同步模式**：在后续步骤中选中需要同步的表，适用于 Schema 中表较少的场景。
   * **全库同步模式**：同步整个数据库，可在后续步骤手动填写要排除的 Schema，适用与要同步的 Schema 较多的场景。

7. 选择要同步的 Schema，单击**下一步**。

   ![选择同步对象](../images/select_schema.png)

8. （可选）根据页面提示，输入要同步的 Schema、要排除的表和优先同步的大表，然后单击**下一步**。

9. 根据页面提示设置目标端 id 及全同步并发数量，其中并发数量取值范围为 1~8，然后单击**下一步**。

10. 后续步骤如何特殊需求保持默认并单击**下一步**即可。

11. 返回值设备的命令行中，执行 run 目录中对应版本的裸日志启动脚本即可，例如 Oracle 12c 版本，则执行 `bash fzstrack12c`。

    命令行提示 `java server started, wait for java client cmd...` 表示服务已正常启动。



## 下一步

在[配置 Oracle 连接](../prerequisites/on-prem-databases/oracle.md)时，可选择日志插件为 **bridge**，然后填写裸日志服务的 IP 地址，默认服务端口为 **8190**。



## 常见问题

* 问：裸日志插件主要读取哪些文件？

  答：主要读取 Oracle 数据库的 redo log 日志。

* 问：裸日志插件会占用什么资源？

  答：如果是存储介质是**本地磁盘**，redo log 保存在本地磁盘上，日志分析模块与 Oracle 通常只在新日志分析任务开启时进行数次通信，而 DML 与 DDL 的数据则是通过程序本地读取 redo log 文件二进制得到，不占用 Oracle 数据库本身的性能，但由于与 Oracle 部署在同一机器上，所以会占用一定的磁盘 I/O、CPU、内存以及网络带宽。

  如果是存储介质 **ASM**，redo log 保存 ASM 内，此时，DML 与 DDL 的数据来源则是通过程序远程查询 ASM 实例获取到的 redo log  二进制，所以会占用一定的 ASM 性能。此时程序可以不与 Oracle 同属一台机器，所以会占用一定的网络带宽与ASM性能。

* 问：如果强制终止 Tapdata 引擎或裸日志插件，会有什么影响？

  答：系统将重新扫描目录中积攒的 fzs 文件，可能会导致进入增量缓慢，如果发生异常，您可以将相关解析日志保存提供给技术支持。

* 问：如何重启裸日志插件服务？

  答：进入 `run` 目录，依次执行下述命令。

  ```bash
  ./fzsstop
  ./fzsweb -sq
  ./fzsweb -s
  ./fzsstart
  ```

  