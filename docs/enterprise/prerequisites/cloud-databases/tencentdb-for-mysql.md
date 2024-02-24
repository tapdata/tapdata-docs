# TencentDB for MySQL

请遵循以下说明以确保在 Tapdata 中成功添加和使用 MySQL 数据库。

### 支持版本

MySQL 5.0、5.1、5.5、5.6、5.7、8.x

### 前提条件（作为源）

#### 开启 Binlog

- 必须开启 MySQL 的 binlog ，Tapdata 才能正常完成同步工作。
- 级连删除（CASCADE DELETE），这类由数据库产生的删除不会记录在 binlog 内，所以不被支持。 修改 $MYSQL_HOME/mysql.cnf, 例如:

```json
server_id         = 223344
log_bin           = mysql-bin
expire_logs_days  = 1
binlog_format     = row
binlog_row_image  = full
```

配置解释：

- server-id: 对于 MySQL 中的每个服务器和复制客户端必须是唯一的
- binlog_format：必须设置为 row 或者 ROW
- binlog_row_image：必须设置为 full
- expire_logs_days：二进制日志文件保留的天数，到期会自动删除
- log_bin：binlog 序列文件的基本名称

#### 重启 MySQL

```bash
/etc/inint.d/mysqld restart
```

验证 binlog 已启用，请在 mysql shell 执行以下命令

```sql
show variables like 'binlog_format';
```

输出的结果中，format value 应该是"ROW"

验证 binlog_row_image 参数的值是否为full:

```sql
show variables like 'binlog_row_image';
```

输出结果中，binlog_row_image value应该是"FULL"

#### **创建MySQL账号**

Mysql8以后，对密码加密的方式不同，请注意使用对应版本的方式，设置密码，否则会导致无法进行增量同步 使用以下命令，确认 supplemental logging 是否开启

**3.3.1 5.x版本**

```sql
create user 'username'@'localhost' identified by 'password';
```



**3.3.2 8.x版本**

```sql
// 创建用户 
create user 'username'@'localhost' identified with mysql_native_password by 'password'; 
// 修改密码 
alter user 'username'@'localhost' identified with mysql_native_password by 'password'; 
```



#### 给 tapdata 账号授权

对于某个数据库赋于select权限

```sql
GRANT SELECT, SHOW VIEW, CREATE ROUTINE, LOCK TABLES ON <DATABASE_NAME>.<TABLE_NAME> TO 'tapdata' IDENTIFIED BY 'password';
```

对于全局的权限

```sql
GRANT RELOAD, SHOW DATABASES, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'tapdata' IDENTIFIED BY 'password';
```



#### 约束说明

当从 MySQL 同步到其他异构数据库时，如果源 MySQL 存在表级联设置，因该级联触发产生的数据更新和删除不会传递到目标。如需要在目标端构建级联处理能力，可以视目标情况，通过触发器等手段来实现该类型的数据同步。

### **前提条件（作为目标）**

对于某个数据库赋于全部权限

```sql
GRANT ALL PRIVILEGES ON <DATABASE_NAME>.<TABLE_NAME> TO 'tapdata' IDENTIFIED BY 'password';
```

对于全局的权限

```sql
GRANT PROCESS ON *.* TO 'tapdata' IDENTIFIED BY 'password';
```



### 常见错误

“Unknown error 1044”

如果权限已经授权，但是通过 tapdata 还是无法通过测试连接，可以通过下面的步骤检查并修复

```sql
SELECT host,user,Grant_priv,Super_priv FROM mysql.user where user='username'; 
//查看Grant_priv字段的值是否为Y 
//如果不是，则执行以下命令 
UPDATE mysql.user SET Grant_priv='Y' WHERE user='username'; FLUSH PRIVILEGES;
```
