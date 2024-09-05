# TencentDB for PG

import Content from '../../reuse-content/_all-features.md';

<Content />

## Supported Versions

PostgreSQL 9.4, 9.5, 9.6, 10.x, 11.x, 12

## **Permission Settings**

### **As a Data Source**

**Initialization**

```sql
GRANT SELECT ON ALL TABLES IN SCHEMA <schemaname> TO <username>;
```

If you need to use the incremental log feature, you also need to set replication login permission:

```sql
CREATE ROLE <rolename> REPLICATION LOGIN;
CREATE USER <username> ROLE <rolename> PASSWORD '<password>';
// or
CREATE USER <username> WITH REPLICATION LOGIN PASSWORD '<password>';
```

If you need to perform incremental synchronization using the last update timestamp, you also need to perform the following steps:

- **Create Public Function** In the database, execute the following command

```sql
CREATE OR REPLACE FUNCTION <schema>.update_lastmodified_column()
  RETURNS TRIGGER language plpgsql AS $$
  BEGIN
      NEW.last_update = now();
      RETURN NEW;
  END;
$$;
```

- **Create Column and Trigger**

**Note**: The following operations need to be executed once for each table. Let's assume the table name that needs to add the last update column is `mytable`.

- **Create last_update Column**

```sql
ALTER TABLE <schema>.mytable ADD COLUMN last_update TIMESTAMP DEFAULT now();
```

- **Create Trigger**

```sql
CREATE TRIGGER trg_uptime BEFORE UPDATE ON <schema>.mytable FOR EACH ROW EXECUTE PROCEDURE update_lastmodified_column();
```


### **As a Data Target**

Grant user permissions:

```sql
GRANT INSERT, UPDATE, DELETE, TRUNCATE ON ALL TABLES IN SCHEMA <schemaname> TO <username>;
```
```