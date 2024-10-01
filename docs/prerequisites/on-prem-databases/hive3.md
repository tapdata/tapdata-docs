# Hive3

import Content from '../../reuse-content/_all-features.md';

<Content />

Please follow the instructions below to successfully add and use the Hive database in TapData Cloud.

## Limitations

Hive is only supported as a target.

## Supported Version

Hive 3.1.2

## Configuration Instructions

### Data Source Configuration

- Host/IP
- Port
- Database Name
- Account and Password

#### Enable CDC Configuration

In Hive, row-level operations like update and delete are transactional operations. Therefore, you need to enable transactional operations in Hive by modifying the `hive-site.xml` configuration with the following settings. After making the changes, restart for the changes to take effect.

```xml
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