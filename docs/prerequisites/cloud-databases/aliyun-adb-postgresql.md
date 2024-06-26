# Aliyun ADB PostgreSQL

import Content from '../../reuse-content/_enterprise-and-cloud-features.md';

<Content />

Please follow the instructions below to successfully add and use Aliyun ADB PostgreSQL database in TapData.

## Supported Versions

6.0

## As a Source

```sql
GRANT SELECT ON ALL TABLES IN SCHEMA <schemaname> TO <username>;
```

The above is a basic setting of permissions. Actual scenarios may be more complex.

## As a Target

```sql
GRANT INSERT, UPDATE, DELETE, TRUNCATE ON ALL TABLES IN SCHEMA <schemaname> TO <username>;
```

The above is a basic setting of permissions. Actual scenarios may be more complex.