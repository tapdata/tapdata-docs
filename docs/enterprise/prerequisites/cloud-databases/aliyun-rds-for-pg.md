# Aliyun RDS for PostgreSQL

请遵循以下说明以确保在 Tapdata 中成功添加和使用 PostgreSQL 数据库。

### 支持版本

PostgreSQL 9.4、9.5、9.6、10.x、11.x、12版本

### CDC 原理和支持

#### CDC 原理

PostgreSQL 的逻辑解码功能最早出现在9.4版本中，它是一种机制，允许提取提交到事务日志中的更改，并通过输出插件以用户友好的方式处理这些更改。 此输出插件必须在运行PostgreSQL服务器之前安装，并与一个复制槽一起启用，以便客户端能够使用更改。

#### CDC 支持

- **逻辑解码**（Logical Decoding）：用于从 WAL 日志中解析逻辑变更事件
- **复制协议**（Replication Protocol）：提供了消费者实时订阅（甚至同步订阅）数据库变更的机制
- **快照导出**（export snapshot）：允许导出数据库的一致性快照（pg_export_snapshot）
- **复制槽**（Replication Slot）：用于保存消费者偏移量，跟踪订阅者进度。 所以，根据以上，我们需要安装逻辑解码器，现有提供的解码器如下：

| **解码器** | **pg版本** | **tapdata支持** | **输出格式** |
| ---------- | ---------- | --------------- | ------------ |
| wal2json   | 9.4+       | 支持            | json         |

### 前提条件

#### 修改REPLICA IDENTITY

该属性决定了当数据发生UPDATE,DELETE时，日志记录的字段

- **DEFAULT** - 更新和删除将包含primary key列的现前值
- **NOTHING** - 更新和删除将不包含任何先前值
- **FULL** - 更新和删除将包含所有列的先前值
- **INDEX index name** - 更新和删除事件将包含名为index name的索引定义中包含的列的先前值 如果有多表合并同步的场景，则Tapdata需要调整该属性为FULL 示例alter table '[schema]'.'[table name]' REPLICA IDENTITY FULL`

#### 插件安装

- [wal2json](https://github.com/eulerto/wal2json/blob/master/README.md)

**安装步骤**
以 wal2json 为例，安装步骤如下
确保环境变量PATH中包含"/bin"

```bash
export PATH=$PATH:<postgres安装路径>/bin
```

**安装插件**

```bash
git clone https://github.com/eulerto/wal2json -b master --single-branch \ && cd wal2json \ && USE_PGXS=1 make \ && USE_PGXS=1 make install \ && cd .. \ && rm -rf wal2json
```



安装插件报错处理make命令执行，遇到类似 fatal error: [xxx].h: No such file or directory的异常信息
**原因**：缺少postgresql-server-dev
**解决方案**：安装postgresql-server-dev，以debian系统为例

```bash
// 版本号例如:9.4, 9.6等 apt-get install -y postgresql-server-dev-<版本号>
```



**配置文件**
如果你正在使用一个支持的逻辑解码插件(不能是 pgoutput )，并且它已经安装，配置服务器在启动时加载插件:

```bash
postgresql.conf 
shared_preload_libraries = 'decoderbufs,wal2json'
```



**配置replication**

```bash
# REPLICATION 
wal_level = logical 
max_wal_senders = 1 # 大于0即可 
max_replication_slots = 1 # 大于0即可
```



#### **权限设置**

##### **作为源**

- **初始化**

```sql
GRANT SELECT ON ALL TABLES IN SCHEMA <schemaname> TO <username>;
```



- **增量**
  用户需要有 replication login 权限，如果不需要日志增量功能，则可以不设置 replication 权限

```sql
CREATE ROLE <rolename> REPLICATION LOGIN;
CREATE USER <username> ROLE <rolename> PASSWORD '<password>';
// or
CREATE USER <username> WITH REPLICATION LOGIN PASSWORD '<password>';
```

配置文件 pg_hba.conf 需要添加如下内容：

```bash
pg_hba.conf
local   replication     <youruser>                     trust
host    replication     <youruser>  0.0.0.0/32         md5
host    replication     <youruser>  ::1/128            trust
```



##### **作为目标**

```sql
GRANT INSERT,UPDATE,DELETE,TRUNCATE ON ALL TABLES IN SCHEMA <schemaname> TO <username>;
```



**注意**：以上只是基本权限的设置，实际场景可能更加复杂

##### 测试日志插件

**注意**：以下操作建议在POC环境进行 连接postgres数据库，切换至需要同步的数据库，创建一张测试表

```sql
-- 假设需要同步的数据库为postgres，模型为public
\c postgres

create table public.test_decode
(
  uid    integer not null
      constraint users_pk
          primary key,
  name   varchar(50),
  age    integer,
  score  decimal
)
```



可以根据自己情况创建一张测试表

- 创建 slot 连接，以 wal2json 插件为例

```sql
select * from pg_create_logical_replication_slot('slot_test', 'wal2json')
```



- 创建成功后，对测试表插入一条数据
- 监听日志，查看返回结果，是否有刚才插入操作的信息

```sql
select * from pg_logical_slot_peek_changes('slot_test', null, null)
```



- 成功后，销毁slot连接，删除测试表

```sql
select * from pg_drop_replication_slot('slot_test') drop table public.test_decode
```



### 异常处理

- **Slot清理**
  如果 tapdata 由于不可控异常（断电、进程崩溃等），导致cdc中断，会导致 slot 连接无法正确从 pg 主节点删除，将一直占用一个 slot 连接名额，需手动登录主节点，进行删除 查询slot信息

```sql
// 查看是否有slot_name=tapdata的信息 
TABLE pg_replication_slots;
```



- **删除slot节点**

```sql
select * from pg_drop_replication_slot('tapdata');
```



- **删除操作**
  在使用 wal2json 插件解码时，如果源表没有主键，则无法实现增量同步的删除操作

### 使用最后更新时间戳的方式进行增量同步

#### 名词解释

**schema**：中文为模型，pgsql一共有3级目录，库->模型->表，以下命令中字符，需要填入表所在的模型名称

##### 预先准备（该步骤只需要操作一次）

- **创建公共函数** 在数据库中，执行以下命令

```sql
CREATE OR REPLACE FUNCTION <schema>.update_lastmodified_column()
  RETURNS TRIGGER language plpgsql AS $$
  BEGIN
      NEW.last_update = now();
      RETURN NEW;
  END;
$$;
```



- **创建字段和trigger**

**注意**：以下操作，每张表需要执行一次 假设需要增加 last update 的表名为 mytable

- **创建last_update字段**

```sql
alter table <schema>.mytable add column last_udpate timestamp default now();
```



- **创建trigger**

```sql
create trigger trg_uptime before update on <schema>.mytable for each row execute procedure   update_lastmodified_column();
```