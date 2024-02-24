# Aliyun ADB PostgreSQL

请遵循以下说明以确保在 Tapdata 中成功添加和使用 ADB PostgreSQL 数据库。

ADB PostgreSQL支持作为源和目标，作为源时仅支持全量同步。

## 支持版本

6.0

## 作为源

```sql
GRANT SELECT ON ALL TABLES IN SCHEMA <schemaname> TO <username>;
```

以上只是基本权限的设置，实际场景可能更加复杂。

## 作为目标

```sql
GRANT INSERT,UPDATE,DELETE,TRUNCATE ON ALL TABLES IN SCHEMA <schemaname> TO <username>;
```

以上只是基本权限的设置，实际场景可能更加复杂。