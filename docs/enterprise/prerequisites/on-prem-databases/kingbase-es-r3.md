# KingbaseES-R3

KingbaseES-R3 is a domestically developed database based on the open-source PostgreSQL database. It is compatible with most of the features of lower versions of PostgreSQL. Currently, there are mainly two versions: V8-R3 and V8-R6, with different drivers and licenses. Currently, R3 does not support incremental data synchronization.

### R3 Features

The underlying system tables are all native to PostgreSQL. In Oracle mode, the default lowercase changes to uppercase, and the pg_ prefix changes to SYS_. Most SQL statements can be adjusted and executed in this way.