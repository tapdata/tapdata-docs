# TencentDB TD-SQL

Please follow the instructions below to ensure successful addition and use of the distributed database TD-SQL  version database in Tapdata.

## Supported Versions

TencentDB TD-SQL 5.7.x, 8.0.x

## As a Data Source

* Enable the Binlog feature on the source database.

- Create an Account

  For MySQL 8 and later, password encryption is different. Make sure to use the corresponding method for your version to set the password; otherwise, incremental synchronization may fail. Use the following commands to confirm whether supplemental logging is enabled.

**For 5.x Versions**

```sql
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
```

**For 8.x Versions**

```sql
-- Create the user
CREATE USER 'username'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
-- Change the password
ALTER USER 'username'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```

### Granting Permissions

Grant `SELECT` permissions for a specific database:

```sql
GRANT SELECT, SHOW VIEW, CREATE ROUTINE, LOCK TABLES ON <DATABASE_NAME>.<TABLE_NAME> TO 'tapdata' IDENTIFIED BY 'password';
```

Grant global privileges:

```sql
GRANT RELOAD, SHOW DATABASES, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'tapdata' IDENTIFIED BY 'password';
```

### Constraint Explanation

When synchronizing from MySQL to other heterogeneous databases, if the source MySQL database has table-level cascade settings, data updates and deletes triggered by this cascade will not be propagated to the target. If you need to build cascading processing capabilities on the target side, you can use triggers or other methods to achieve this type of data synchronization.

## As a Target

Grant full privileges for a specific database:

```sql
GRANT ALL PRIVILEGES ON <DATABASE_NAME>.<TABLE_NAME> TO 'tapdata' IDENTIFIED BY 'password';
```

Grant global privileges:

```sql
GRANT PROCESS ON *.* TO 'tapdata' IDENTIFIED BY 'password';
```

### Common Errors

"Unknown error 1044"

If permissions are granted correctly but you're still unable to pass the test connection through Tapdata, you can use the following steps to check and fix the issue:

```sql
SELECT host, user, Grant_priv, Super_priv FROM mysql.user WHERE user='username'; 
-- Check if the value of the Grant_priv field is 'Y' 
-- If not, execute the following command 
UPDATE mysql.user SET Grant_priv='Y' WHERE user='username'; FLUSH PRIVILEGES;
```

