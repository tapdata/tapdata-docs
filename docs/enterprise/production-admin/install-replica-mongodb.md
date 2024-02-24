# 部署 MongoDB 副本集

Tapdata 在运行时，会将任务的必要配置、共享缓存等信息存储至 MongoDB 数据库中，为保障生产环境的高可用，在部署 Tapdata 前，需要完成 MongoDB 副本集的部署，本文将介绍具体的部署流程。

## 部署架构

推荐 MongoDB 为 4.0 及以上版本，本案例以 CentOS 7 平台为例，部署 1 主 2 从 的副本集：

| 角色        | IP           | 服务          | 服务端口端口     |
|-------------|--------------|--------------|-------------------|
| Primary Node（主节点） | 172.16.1.10 | mongod       | 27017 |
| Secondary Node（从节点） | 172.16.1.11 | mongod       | 27017 |
| Secondary Node（从节点） | 172.16.1.12 | mongod       | 27017 |

## 操作步骤

1. 为所有服务器依次执行下述命令，完成文件访问数、防火墙等系统参数设置。

   ```bash
   ulimit -n 1024000 
   echo "* soft nofile 1024000" >> /etc/security/limits.conf 
   echo "* hard nofile 1024000" >> /etc/security/limits.conf 
   systemctl disable firewalld.service 
   systemctl stop firewalld.service 
   setenforce 0 
   sed -i "s/enforcing/disabled/g" /etc/selinux/config 
   ```

2. 从 MongoDB 官网[下载所需的安装包](https://www.mongodb.com/try/download/community)。

3. 在所有服务器上，依次执行下述格式的解压并安装 MongoDB，本案例将以 **4.4.28** 版本为例演示流程。

   ```bash
   # 解压文件，需更换为您真实的文件名称
   tar zxvf mongodb-linux-x86_64-rhel70-4.4.28.tgz
   # 将 MongoDB 的可执行文件复制到系统二进制目录中，完成软件安装
   cp mongodb-linux-x86_64-rhel70-4.4.28/bin/* /usr/local/bin/
   ```

4. 在所有服务器上，依次执行下述命令创建数据目录和日志目录，完成授权操作。

   ```bash
   # 数据目录
   sudo mkdir -p /var/lib/mongo
   sudo chown -R mongodb:mongodb /var/lib/mongo
   # 日志目录
   sudo mkdir -p /var/log/mongodb
   sudo chown -R mongodb:mongodb /var/log/mongodb
   ```

5. 执行下述操作，完成密钥文件的生成，后续将用于节点间的认证。

   1. 在主节点所属设备上，执行下述命令安装 OpenSSL 并升密钥文件。

      ```bash
      # 安装 OpenSSL
      sudo yum install openssl -y
      # 生成密钥文件至指定目录并授权
      mkdir /etc/mongodb
      openssl rand -base64 756 > /etc/mongodb/repl.key
      chmod 400 /etc/mongodb/repl.key
      ```

   2. 通过 `scp` 命令将其复制到另外两个节点的 `/etc/mongodb` 目录中。

6. 在所有服务器上的 `/etc/mongodb` 目录中，创建配置文件 `mongod.yml`，配置示例如下：

   ```yaml
   systemLog:
     destination: file
     path: /var/log/mongodb/mongod.log
     logAppend: true
   storage:
     dbPath: /var/lib/mongo
     journal:
       enabled: true
   net:
     port: 27017
     bindIp: 0.0.0.0
   replication:
     replSetName: repl
   security:
     authorization: enabled
     keyFile: /etc/mongodb/repl.key
   ```

   :::tip

   上述配置文件中，我们指定了日志文件、存储文件目录、服务端端口、认证等信息，您也可以基于业务需求，增加或调整更多参数。关于参数的详细介绍，见 [MongoDB 配置文件选项](https://www.mongodb.com/docs/v4.4/reference/configuration-options)。

   :::

7. 在所有服务器上，执行下述命令启动 MongoDB 服务。

   ```bash
   mongod -f /etc/mongodb/mongod.yml --fork
   ```

8. 在主节点所属服务器上，执行下述命令完成副本集配置。

   1. 连接到 MongoDB 主节点。

      ```bash
      mongo --host 127.0.0.1 --port 27017
      ```

   2. 初始化副本集。

      ```bash
      rs.initiate({
        _id : "repl",
        members: [
          { _id: 0, host: "172.16.1.10:27017" },
          { _id: 1, host: "172.16.1.11:27017" },
          { _id: 2, host: "172.16.1.12:27017" }
        ]
      })
      ```

      完成操作后，可使用 `rs.status()` 检查副本集状态，确保所有节点的状态正确（一个 `PRIMARY` 和两个 `SECONDARY`）。

   3. 创建 root 用户并设置密码。

      ```bash
      use admin
      db.createUser(
        {
          user: "root",
          pwd: "Tap@123456",
          roles: [
             "root"
          ]
        }
      )
      ```

9. 在所有服务器上，为 MongoDB 服务设置开机启动。

   1. 进入 `/usr/lib/systemd/system` 目录， 使用文本编辑器（如 `vim`）创建一个新的服务文件并命名为 `mongod.service`，将下述文件内容粘贴到文件中。

      ```bash
      # 确保 ExecStart 指向正确的 mongod 可执行文件和配置文件路径
      [Unit]
      Description=MongoDB Database Service
      After=network.target
      
      [Service]
      Type=forking
      ExecStart=/usr/local/bin/mongod -f /etc/mongodb/mongod.yml
      ExecStop=/usr/local/bin/mongod --shutdown --config /etc/mongodb/mongod.yml
      Restart=on-failure
      RestartSec=5
      
      [Install]
      WantedBy=multi-user.target
      
      ```

   2. 加载新的服务文件，并启用以实现开机启动：

      ```bash
      sudo systemctl daemon-reload
      sudo systemctl enable mongod.service
      ```

   3. （可选）在业务低峰期，重启机器并通过 `systemctl status mongod.service` 命令查看 MongoDB 服务是否正常启动。

 

## 下一步

[部署高可用 Tapdata](install-tapdata-ha.md)

## 扩展阅读

* [安全](https://www.mongodb.com/docs/v4.4/security/#security)：通过身份验证、访问控制、加密等手段，保障 MongoDB 数据安全。
* [备份](https://www.mongodb.com/docs/v4.4/core/backups/)：实施定期备份策略以防止数据丢失。
* [监控](https://www.mongodb.com/docs/v4.4/administration/monitoring/)：配置监控工具以跟踪性能指标和异常。
* [关注更新](https://www.mongodb.com/docs/v4.4/release-notes/4.4/)：定期检查并应用 MongoDB 的安全更新和补丁。