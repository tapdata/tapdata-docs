# GBase 8s

GBase 8s 数据库是一款基于 informix 研发的数据库，保留了大部分原生的语法、特性及字段类型，并且引入了大量 Oracle 的优势特性。

## 支持版本

目前 GBase 8s 向外开放的所有版本

## 数据库特殊性提示（作为目标）

- GBase 8s满足事务的支持，需要开启日志备份，否则会报错：Transactions not supported （开启命令：ontape -s –U dbname）。
- GBase 8s可以通过额外连接参数的配置（delimident=y）设置表名大小写敏感，否则表名使用大写时会报错。