# 性能测试

本文档旨在详细介绍对 Tapdata 进行性能测试的方法和步骤。我们将探讨如何准确地评估 Tapdata 在不同条件下的数据处理能力、响应时间和系统稳定性，帮助您了解 Tapdata 在各种负载下的表现，从而更好地规划资源和优化配置。



## 测试环境

* **操作系统**：CentOS 7 64 位

* **CPU**：12 核
* **内存**：96 GB

## 测试方法

为了确保对 Tapdata 的性能进行全面且准确的评估，我们将采用以下测试方法：

1. **同步任务创建**。
   
   根据预定的测试类型创建相应的数据同步任务，包含全量和增量同步，以全面评估同步性能。
   
2. **模拟高强度数据写入**。
   
   在源数据库端，通过自动化脚本持续高强度地执行数据写入操作，保障数据流入源数据库的速度和量符合测试要求。
   
3. **监测目标端数据同步情况**。
   
   观察并记录目标数据库端的数据变化和写入速度，确认目标端是否能够有效、准确地处理数据同步。
   
5. **数据一致性验证**。
   
   确保在高负载下，源数据库和目标数据库之间的数据一致性，包括验证数据完整性和同步准确性，确保没有数据丢失或错误同步。

通过以上步骤，我们能够全面评估 Tapdata 在高负载条件下的数据处理能力和稳定性。此外，这种方法还将帮助我们识别潜在的性能瓶颈，为后续的优化提供依据。

## 测试指标说明

| 指标      | 说明                                                         |
| --------- | ------------------------------------------------------------ |
| 同步 QPS  | 每秒同步的数据条数，单位为 条/秒。                           |
| 99th 延迟 | 99% 操作延迟，即 99% 操作的最大延迟时间，单位为毫秒。<br />假设该指标的值为 100 毫秒，表示 99% 的请求可以在 100 毫秒内被处理。 |
| 95th 延迟 | 95% 操作延迟，即 95% 操作的最大延迟时间，单位为毫秒。<br />假设该指标的值为 100 毫秒，表示 99% 的请求可以在 100 毫秒内被处理。 |
| 平均延迟  | 操作的平均延迟分布，单位为毫秒。                             |

## 测试结果

为了确保性能测试结果的准确性和适用性，我们将在多种数据库架构、同构/异构数据环境下进行测试。这种多样化的测试方法有助于全面评估 Tapdata 在不同场景和链路下的性能表现。

## 源库为 MongoDB

### 环境说明

* **MongoDB 实例**：部署架构为 3 节点的分片集群，包含 12 个字段，集合的结构如下，除 `_id` 外无任何的索引，自动化脚本将会以 **11,000** 条每秒的速率向源端执行数据插入操作，同时为任务开启了增量多线程写入（4 线程）。

  ![collection_schema](../images/collection_schema.png)

* **ElasticSearch 实例**：部署架构为单节点实例，运行在 Docker 平台中，指定初始堆内存与最大堆内存为 4GB。

* **Redis 实例**：部署架构为单节点实例，运行在 Docker 平台中，拥有 12Core 48GB 内存。



### 测试结果

源库为 MongoDB，实时同步至不同的目标库的测试结果如下：

| 目标库            | 源表增量写入条数 | 增量同步总耗时 | 平均同步 QPS | 99th 延迟  | 95th 延迟  | 平均延迟   |
| ----------------- | ---------------- | -------------- | ------------ | ---------- | ---------- | ---------- |
| **MongoDB**       | 510 万           | 438 秒         | 11,664       | 2,000 毫秒 | 1,900 毫秒 | 1,163 毫秒 |
| **ElasticSearch** | 310 万           | 261 秒         | 11,608       | 1,700 毫秒 | 1,500 毫秒 | 980 毫秒   |
| **Redis**         | 670 万           | 577 秒         | 11,592       | 1,600 毫秒 | 1,300 毫秒 | 781 毫秒   |



## 源库为 MySQL

### 环境说明

* **MySQL 实例**：部署的机器拥有 12 Core 48GB 内存，除 `CUSTOMER_ID` 外无任何的索引，表结构示例如下：

  ```sql
  CREATE TABLE customer(
      CUSTOMER_ID bigint PRIMARY KEY,
      CITY VARCHAR(100),
      AGE INT,
      FIRST_NAME VARCHAR(150),
      LAST_NAME VARCHAR(150),
      DATE_OF_BIRTH DATETIME,
      JOB VARCHAR(150),
      EMAIL VARCHAR(100),
      ZIP VARCHAR(10),
      PHONE VARCHAR(40)
  );
  ```

  此外，我们将利用 MySQL 的存储过程来实现数据持续写入，从而实现增量数据生成，存储过程定义如下：

  ```sql
  DELIMITER //
  CREATE PROCEDURE CUSTOMER_INSERT_DATA(IN DATA_COUNT INT,IN BATCH_SIZE INT)
  BEGIN
      DECLARE i INT default 1;
      DECLARE MAX_ID INT;
      select max(test.customer.CUSTOMER_ID) from test.customer into MAX_ID;
      IF MAX_ID IS NULL THEN
          SET MAX_ID = 0;
      END IF;
      SET autocommit =0;
      WHILE i <= DATA_COUNT do
          INSERT INTO customer(CUSTOMER_ID, CITY, AGE, FIRST_NAME, LAST_NAME, DATE_OF_BIRTH, JOB, EMAIL, ZIP, PHONE)
              VALUES (MAX_ID+i,'Oppenheim',18,'Lambert','Sauer',now(),'Vertreter / Vertreterin','rushland2003@live.com','13480','+49-4611-41132053');
          IF(mod(i,BATCH_SIZE)=0)
              THEN commit;
          END IF;
          SET i = i+1;
      END WHILE ;
      Commit ;
  END //
  DELIMITER ;
  ```

* **Kafka 实例**：运行在 Docker 平台，可分配内存为 48GB。

**测试结果**：

| 目标库    | 源表增量写入条数 | 增量同步总耗时 | 平均同步 QPS | 99th 延迟  | 95th 延迟  | 平均延迟 |
| --------- | ---------------- | -------------- | ------------ | ---------- | ---------- | -------- |
| **MySQL** | 500 万           | 281 秒         | 17,795       | 1,400 毫秒 | 1,200 毫秒 | 712 毫秒 |
| **Kafka** | 200 万           | 184 秒         | 10,892       | 1,100 毫秒 | 1,100 毫秒 | 690 毫秒 |



## 源库为 PostgreSQL

### 环境说明

本次测试中，PostgreSQL 实例部署在 Docker 平台中，可分配内存为 48GB，除 `CUSTOMER_ID` 外无任何的索引，采用 WAL2JSON 来获取增量日志信息，表结构示例如下：

```sql
CREATE TABLE customer (
   CUSTOMER_ID bigint PRIMARY KEY,
   CITY VARCHAR(100),
   AGE INT,
   FIRST_NAME VARCHAR(150),
   LAST_NAME VARCHAR(150),
   DATE_OF_BIRTH TIMESTAMP,
   JOB VARCHAR(150),
   EMAIL VARCHAR(100),
   ZIP VARCHAR(10),
   PHONE VARCHAR(40)
);
```

此外，我们将利用 PostgreSQL 的自定义函数来实现数据持续写入，从而实现增量数据生成，大约每秒 10,000 条的速率插入，存储过程定义如下：

```sql
CREATE OR REPLACE FUNCTION CUSTOMER_INSERT_DATA6(DATA_COUNT INT, BATCH_SIZE INT) RETURNS VOID AS $$
DECLARE
    i INT := 1;
    MAX_ID INT;
BEGIN
    SELECT MAX(CUSTOMER_ID) FROM customer6 INTO MAX_ID;
    IF MAX_ID IS NULL THEN
        MAX_ID := 0;
    END IF;
        WHILE i <= DATA_COUNT LOOP
                INSERT INTO customer6 (CUSTOMER_ID, CITY, AGE, FIRST_NAME, LAST_NAME, DATE_OF_BIRTH, JOB, EMAIL, ZIP, PHONE)
                VALUES (MAX_ID+i, 'Oppenheim', 18, 'Lambert', 'Sauer', CURRENT_TIMESTAMP, 'Vertreter / Vertreterin', 'rushland2003@live.com', '13480', '+49-4611-41132053');
                i := i + 1;
        END LOOP;
END;
$$ LANGUAGE plpgsql;
```

### 测试结果

| 目标库         | 源表增量写入条数 | 增量同步总耗时 | 平均同步 QPS | 99th 延迟  | 95th 延迟  | 平均延迟   |
| -------------- | ---------------- | -------------- | ------------ | ---------- | ---------- | ---------- |
| **PostgreSQL** | 145 万           | 121 秒         | 11,946       | 16,00 毫秒 | 1,500 毫秒 | 1,060 毫秒 |





## 源库为 Redis

### 环境说明

本次测试中，Redis 实例的部署架构为 3 节点集群，每个节点拥有 4 Core 16GB 内存，自动化脚本将会以 **30,000** 条每秒的速率向源端执行数据插入操作，Key 结构示例如下：

```bash
9000) "8273618"
9001) "7690169"
9002) "1854874"
```

### 测试结果

| 目标库    | 源表增量写入条数 | 增量同步总耗时 | 平均同步 QPS | 99th 延迟 | 95th 延迟 | 平均延迟 |
| --------- | ---------------- | -------------- | ------------ | --------- | --------- | -------- |
| **Redis** | 2,940 万         | 1806 秒        | 16,287       | 800 毫秒  | 200 毫秒  | 140 毫秒 |



