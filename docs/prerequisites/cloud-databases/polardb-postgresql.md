# PolarDB PostgreSQL

import Content from '../../reuse-content/_enterprise-and-cloud-features.md';

<Content />

Please follow the instructions below to successfully add and use PolarDB PostgreSQL databases in TapData Cloud.

## Supported Version

PolarDB PostgreSQL 11

## Prerequisites

### Authorize Database Account (as a source)

```sql
GRANT SELECT ON ALL TABLES IN SCHEMA <schemaname> TO <username>;
```

### Authorize Database Account (as a target)

```sql
GRANT INSERT, UPDATE, DELETE, TRUNCATE ON ALL TABLES IN SCHEMA <schemaname> TO <username>;
```

:::tip

The above are just basic permission settings. The actual scenarios might be more complex.

:::


Please replace `<schemaname>` and `<username>` with the appropriate schema name and username in your actual configuration.