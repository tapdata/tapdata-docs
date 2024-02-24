# KingbaseES-R6

基于开源数据库Postgres开发的国产数据库，R6兼容Postgres9.6版本绝大多数特性。 目前主要有V8-R3与V8-R6两种，适配的驱动与license都不相同。


## R6特性

全部向postgres原生兼容，详细可以参见postgres，oracle模式下，也默认全小写，pg_前缀和SYS_前缀完全兼容 r6的oracle模式慎用，"<全大写>"表名和字段名会自动转为小写。