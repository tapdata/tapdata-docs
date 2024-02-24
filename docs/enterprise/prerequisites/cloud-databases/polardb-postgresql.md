# PolarDB PostgreSQL

请遵循以下说明以确保在 Tapdata 中成功添加和使用 PolarDB PostgreSQL 数据库。

### 支持版本

PolarDB PostgreSQL 11

### 准备工作

#### 授权数据库账号（作为源）

```sql
GRANT SELECT ON ALL TABLES IN SCHEMA <schemaname> TO <username>;
```

#### 授权数据库账号（作为源）

```sql
GRANT INSERT,UPDATE,DELETE,TRUNCATE ON ALL TABLES IN SCHEMA <schemaname> TO <username>;
```



:::tip

以上只是基本权限的设置，实际场景可能更加复杂。

:::