# Hive1

请遵循以下说明以确保在 Tapdata 中成功添加和使用 Hive 数据库。

## 限制说明

Hive 仅支持作为目标。

## 支持版本

Hive 3.1.2

## 配置说明

### 数据源配置

- Host/IP
- Port
- 数据库名名称
- 账户、密码

#### 开启 CDC 配置

Hive 中行级操作 update 和 delete 是属于事务操作，所以需要在 Hive 中开启事务操作，修改 `hive-site.xml` 中配置项为如下配置，修改完成后重启生效。

```
<property>
    <name>hive.support.concurrency</name>
    <value>true</value>
</property>
<property>
    <name>hive.enforce.bucketing</name>
    <value>true</value>
</property>
<property>
    <name>hive.exec.dynamic.partition.mode</name>
    <value>nonstrict</value>
</property>
<property>
    <name>hive.txn.manager</name>
    <value>org.apache.hadoop.hive.ql.lockmgr.DbTxnManager</value>
</property>
<property>
    <name>hive.compactor.initiator.on</name>
    <value>true</value>
</property>
<property>
    <name>hive.compactor.worker.threads</name>
    <value>1</value>
</property>
<property>
    <name>hive.in.test</name>
    <value>true</value>
</property>
```