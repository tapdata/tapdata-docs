# KingbaseES-R3

基于开源数据库 Postgres 开发的国产数据库，KingbaseES-R3 兼容 Postgres 低版本绝大多数特性。 目前主要有 V8-R3 与 V8-R6 两种，适配的驱动与license都不相同，目前R3未支持增量数据同步。

### R3特性

底层系统表均为postgres原生，在oracle模式下，默认小写会改为大写，pg_前缀会改为SYS_ 绝大多数SQL语句都可以通过此方式调整执行。