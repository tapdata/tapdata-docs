# 更新日志

本文介绍 V3.x 的版本更新日志，早期版本请参见 [V2.x 版本更新日志](https://docs.tapdata.net/2.0/enterprise/release-notes)。

## V3.5.11

### 新增功能

- [共享挖掘](user-guide/advanced-settings/share-mining.md)功能支持使用 RocksDB 作为本地外存，可实现对增量日志的存储扩展。
- [TDengine 连接器](prerequisites/on-prem-databases/tdengine.md)支持将多个数据库作为增量源

### 功能优化

- [任务监控页面](user-guide/data-pipeline/copy-data/monitor-task.md)，增加增量阶段的时间过滤选项，便于快速观察增量阶段的 QPS
- 针对可能对数据库造成影响的关键操作（例如过滤源表数据），增加相关提示信息

### 问题修复

* 修复[主从合并节点](user-guide/data-pipeline/data-development/process-node#pri-sec-merged)，当主表与子表关键条件变化时，最终数据与预期不符合的问题

## V3.5.10

### 新增功能

* MongoDB 间的数据同步场景，新增支持 [Capped 集合](https://www.mongodb.com/docs/manual/core/capped-collections/)
* 数据复制/转换任务支持导入能力，您可以在 [MongoDB Relational Migrator](https://www.mongodb.com/docs/relational-migrator/) 上设计好数据流转流程并将其导出，随后在 Tapdata 数据管道右上角直接导入，进一步提升数据管道设计便利性

### 问题修复

* 修复 JS 节点模型声明设置在任务编辑页面提示错误的问题
* 修复 Oracle 同步至 MySQL 时，DROP COLUMN 操作未正常同步的问题
* 修复 MySQL 同步至 ClickHouse 时，DDL 报错的问题
* 修复 WebSocket 频繁重连导致任务不稳定的问题
* 修复若干 UI 交互体验问题



## V3.5.9

### 新增功能

* 针对 MongoDB 5.x 及以上版本的数据源，新增支持 [Time Series 集合](https://www.mongodb.com/docs/manual/core/timeseries-collections/)
* 针对 MongoDB 6.x 及以上版本的数据源，新增支持 [preImage](https://www.mongodb.com/docs/manual/changeStreams/#change-streams-with-document-pre--and-post-images)

### 问题修复

* 修复多表数据复制场景下，断点不准确的问题
* 修复已知的 UI 交互体验问题

## V3.5.8

### 新增功能

- 数据源新增 [Azure Cosmos DB](prerequisites/cloud-databases/azure-cosmos-db.md)，可做为源库同步全量数据，帮助实现云端数据快速流转

### 功能优化

- 优化数据源连接方式，[SQL Server](prerequisites/on-prem-databases/sqlserver.md) 可支持 SSL 连接，可帮助进一步提升数据安全性
- 优化[数据复制任务](user-guide/data-pipeline/copy-data/create-task.md)的目标节点字段类型调整方式，在手动输入的基础上，支持直接选择目标数据库常用类型
- 针对任务的源节点设置，支持设置增量阶段每批读取的条数，更好适应增量同步的性能需求

### 问题修复

- 修复增强 JS 节点在特定场景下，模型声明不生效或异常问题
- 修复若干 UI 交互体验问题



## V3.5.7

### 新增功能

- 支持对 [Oracle 数据源](prerequisites/on-prem-databases/oracle#advanced)加载表注释，可在配置数据源时的高级选项中开启，方便通过注释信息快速识别表的业务含义
- 支持在 [Windows 平台中部署 Tapdata](quick-start/install/install-on-windows.md)，进一步丰富部署平台支持度
- 任务运行[监控页面](user-guide/data-pipeline/copy-data/monitor-task.md)中，支持基于事件大小的维度来查看 QPS 信息

### 问题修复

- 修复重置任务后重新运行任务时，增量信息未清理成功的问题
- 修复部分 SaaS 数据源在执行全量数据同步时，显示增量时间点的问题




## V3.5.6

### 功能优化

- 优化[数据源连接](prerequisites/README.md)方式，MySQL、PostgreSQL、Kafka、TiDB、MariaDB 等数据源支持 SSL 连接，可帮助进一步提升数据安全性
- 优化[数据校验](user-guide/data-pipeline/verify-data.md)的过滤功能，支持通过 SQL 实现自定义查询和聚合查询过滤
- 优化界面交互逻辑
- 针对非主键的更新条件，创建唯一索引来解决数据重复的问题

### 问题修复

- 修复表名包含 `.` 时可能出现的数据同步失败问题
- 修复任务异常信息未包含表名的问题



## V3.5.5

### 新增功能

- 新增支持 Hive3 作为目标
- MongoDB 作为目标时，新增支持[自动创建分片集合](user-guide/data-pipeline/copy-data/create-task#advanced-settings)
- 新增 [Unwind 处理节点](user-guide/data-pipeline/data-development/process-node#Unwind)，可帮助您高效地将数组中的每个元素“展开”，将每个元素转换为独立的数据行
- 配置任务时，新增支持禁用节点能力，鼠标悬停至节点上即可选择该功能，可帮助减少数据在处理过程中的流转成本

### 功能优化

- 优化已发布的 [API 权限范围的设置](user-guide/data-service/create-api-service#settings)，无需取消发布即可调整权限
- [配置数据复制任务](user-guide/data-pipeline/copy-data/create-task.md)时，可通过**可选择的表范围**下拉框快速过滤出有主键或无主键表，其中有主键表包含具有唯一索引的无主键表

### 问题修复

- 修复了 MongoDB 作为目标时，INSERT 操作遇到无分片键发生报错的问题
- 修复了 MongoDB 不支持 REPLACE，即 REPLACE 删掉的字段无法被正常删除的问题





## V3.5.4

### 新增功能

- 新增[构建物化视图](user-guide/data-pipeline/data-development/create-materialized-view.md)功能，可快速构建实时数据模型
- 新增支持对[共享挖掘](user-guide/advanced-settings/share-mining.md)任务的源节点进行配置调整，支持设置是否启用**增量多线程写入**和**补充更新数据的完整字段**
- Kafka 数据源新增支持[设置副本数和分区数](pipeline-tutorial/oracle-to-kafka#advanced_settings)
- MongoDB 间同步时，新增对 `$unset` 操作的支持

### 功能优化

- [数据校验](user-guide/data-pipeline/verify-data.md)功能字段过滤体验优化
- 支持在数据复制/数据转换配置的页面顶部，通过搜索节点来快速定位目标节点



## V3.5.2

### 新增功能

* 新增 [Python 处理节点](user-guide/data-pipeline/data-development/process-node#python)，支持通过 Python 脚本来自定义数据处理逻辑，相较于 JS 处理节点性能有一定提升
* 新增支持 Redis 间的数据同步能力

### 功能优化

* 优化[数据源错误码](troubleshooting/error-code.md)，覆盖更多场景并提供解决方案



## V3.5.1

- [创建角色](user-guide/manage-system/manage-role.md)时，支持对功能和数据权限的精细化权限授予            

### 功能优化

- 对核心数据源（如 PostgreSQL、Redis等），优化创建连接时的页面参数介绍和指引
- 优化将 MongoDB 作为外存时的测试项

### 问题修复

* 修复了运行过的任务无法查看运行监控页面的问题

## V3.4

### 新增功能

* 当任务配置为全量+增量时，支持开启[定期调度任务功能](user-guide/data-pipeline/copy-data/create-task#task-attr)，到达该时间点后任务会自动停止、重置并重新运行
* 对于[增删字段节点](user-guide/data-pipeline/data-development/process-node#add-and-del-cols)，支持字段顺序调整功能
* 任务设置新增[动态调整内存功能](user-guide/data-pipeline/copy-data/create-task#task-attr)（默认开启），全量同步阶段，识别内存占用量并自动调整内存队列，可有效避免内存资源短缺场景下的内存溢出
* 数据面板更名为[实时数据中心](user-guide/data-console/README.md)，同时增加使用和任务创建引导
* 新增目标写入策略，当更新事件不存在时，支持将更新事件写入到本地日志

### 功能优化

- 优化提升数据校验可用性和页面交互
- 新增 MongoDB 数据源的错误码实现
- 优化运行监控页面左侧的增量延迟指标，以任务的增量延迟告警阈值作为 Y 轴数据来源
- 优化样本数据展现

### 问题修复

* 修复引擎规格中的任务数量限制
* 修复使用自定义 SQL 时，MongoDB 作为目标库错误提示不支持的问题
* 修复任务开启自动周期调度后，如果自动重置失败，在下个运行周期时不会再次尝试重置，任务也不会再被调度运行的问题


## V3.3

### 新增功能

- [Kafka 数据源](prerequisites/mq-and-middleware/kafka.md)支持自定义消息体格式
- 新增 [API 接口文档导出功能](user-guide/data-service/create-api-service#release330-export-api)，帮助团队快速建立并完善 API 使用资料
- 共享挖掘功能支持[配置任务告警](user-guide/advanced-settings/share-mining#release330-alert)，可通过系统通知消息或邮件来发出告警信息，帮助更好地掌握任务的运行状态
- [数据校验功能](user-guide/data-pipeline/verify-data.md)，支持设置数据过滤，从而实现只对特定条件的数据进行校验，可帮助您减少校验规模，提升效率
- 在数据服务平台模式下，向平台缓存层拖拽数据表生成任务时，支持[设置任务的同步类型为全量或增量](user-guide/data-console/daas-mode/create-daas-task/#release330-task)

### 功能优化

- [支持滚动升级](production-admin/operation.md#release330-upgrade)，相较于停机升级方式，可进一步降低业务影响
- [共享挖掘任务](user-guide/advanced-settings/share-mining.md)报错后，关联任务增加告警提示
- 在[行过滤器处理节点](user-guide/data-pipeline/data-development/process-node.md)中，使用 DATE 类型过滤时，增加使用示例
- [时间运算节点](user-guide/data-pipeline/data-development/process-node#date-calculation)，支持展示调整的字段
- 全量完成剩余时间算法优化
- 字段处理节点支持针对配置的一键复制和粘贴

### 问题修复

- 启动TM时如果没配置 java 环境变量，会导致启动不了，此时添加了针对该问题的日志输出
- 修复了 admin 用户，在个人中心修改用户名后，所有菜单都不能查看的问题
- 修复了数据复制/数据转换创建任务时，所有数据源都不支持 DDL 的问题
- 修复了数据复制任务，配置表编辑节点时，添加前后缀输入一个字符加载一次的问题



## V3.2

### 新增功能

- 数据平台模式下，可直接[展示表级溯源的关系](user-guide/data-console/daas-mode/daas-mode-dashboard#release320-daas)，帮助您可视化展示数据表产生的链路关系
- 数据平台模式下，支持[删除**平台加工层**的表](user-guide/data-console/daas-mode/daas-mode-dashboard#release320-daas)
- 在配置任务的目标节点时，支持[按照系数来调整字段长度](user-guide/data-pipeline/copy-data/create-task#release320-col-length)，避免因字符编码不同等原因引发的数据写入失败问题
- [数据校验](user-guide/data-pipeline/verify-data)功能支持 SelectDB 数据源
- Redis 作为目标节点场景下，存储为 List 或 Hash 格式，且选择为单键方式时，[支持将源表 Schema 写入一个 Hash 键](pipeline-tutorial/mysql-to-redis#release320-contain-table-head)（默认名称为 `-schema-key-`），其值用来存放源表的表名和列名信息。
- 新增[**类型过滤**](user-guide/data-pipeline/data-development/process-node#release320-type-filter)处理节点，可将快速过滤同类型的列，被过滤的字段将不会传递至下个节点
- [**字段编辑**](user-guide/data-pipeline/copy-data/process-node#column-modification)处理节点，支持蛇形命名和驼峰命名之间的转换
- 数据复制任务、数据转换任务、数据面板、换成创建时支持[显示表的描述信息](user-guide/data-pipeline/copy-data/create-task#310-table-model)，默认来源为表的注释信息

### 功能优化

- 产品菜单调整，数据开发更名为[数据转换](user-guide/data-pipeline/data-development/)，另有部分功能移至[高级设置](user-guide/advanced-settings/)（如共享缓存）中
- 无主键数据表管理交互优化，例如在配置数据复制任务时，[支持筛选无主键表并增加主键表的标识](user-guide/data-pipeline/copy-data/create-task#310-table-model)
- 对于外存配置的 MongoDB 数据源，加入[连接测试能力](user-guide/manage-system/manage-external-storage#320-external-storage)
- 新建的外存，当选择 MongoDB 时支持[使用 SSL 连接](user-guide/manage-system/manage-external-storage#320-external-storage)
- 创建 HttpReceiver 数据源时[支持试运行脚本](prerequisites/others/http-receiver)，同时增加[访问鉴权功能](prerequisites/others/http-receiver#320-http-receiver)
- 标准  JS 节点能力调整，增加 [LinkedHashMap 数据结构](appendix/standard-js#linkedhashmap)和 [context.global 对象](appendix/standard-js#global)
- [**字段编辑**](user-guide/data-pipeline/copy-data/process-node#column-modification)处理节点，界面交互优化
- 任务启动和重新加载 Schema 的冗余提示优化
- 数据复制任务，支持手动添加新表，新增表的可实现全量+增量数据同步
- 数据校验使用与界面交互优化
- 任务节点配置处理逻辑优化
- 数据面板中的**平台缓存层**和**数据加工层**中，可展示由数据复制/转换任务生成的连接和表信息
- 数据面板中的数据目录模式下，支持对表和字段添加描述信息
- Tapdata 部署流程和提示调整优化
- Tapdata 启动器优化，重新启动服务无需重复注册数据源
- 在 Agent 启动和停止节点时，自动停止 PDK 注册
- 数据复制任务与数据转换任务配置交互的整体优化

### 问题修复

- 修复了 2 个 Oracle 数据源指定不同的外存，挖掘合并后导致外存不是用户指定的问题
- 修复了导入任务数据源开启了共享挖掘，外存配置显示为id且不可修改的问题
- 修复了数据源到平台缓存层的任务合并问题



## V3.1

### 新增功能

- [数据面板功能](user-guide/data-console/etl-mode)新增支持表级溯源能力，可通过表详情查看数据血缘关系
- [配置数据复制任务](./user-guide/data-pipeline/copy-data/create-task#310-table-model)时，支持在处理节点中查看表模型
- 支持基于 Doris 数据源[发布 API 数据服务](user-guide/data-service/create-api-service.md)
- [集群管理](user-guide/manage-system/manage-cluster.md)页面，支持下载线程资源监控和数据源使用情况数据

### 功能优化

- 共享挖掘任务管理优化，支持[启停单个表的挖掘任务](user-guide/advanced-settings/share-mining.md#release310-share-mining)
- [共享缓存](user-guide/advanced-settings/share-cache.md)、[函数](user-guide/advanced-settings/manage-function.md)、[API 数据服务](user-guide/data-service/create-api-service)支持导入导出功能
- [数据校验](user-guide/data-pipeline/verify-data)支持配置告警信息的规则和通知方式
- [数据校验](user-guide/data-pipeline/verify-data)自动填充表逻辑优化
- 前端增加[标准 JS](appendix/standard-js) 和[增强 JS](appendix/enhanced-js) 的功能区分说明
- JS 处理器标准化、JS 用法及试运行重构
- 在所有支持写 JS 脚本的处理节点中，当输入 `record.` 时可自动提示当前模型的字段名
- 重置时清除外存数据导致超时问题优化
- 支持修改主键
- 支持通过脚本统一设置任务增量同步间隔默认时间
- License 优化，通过绑定 IP 地址避免硬件信息变化导致 License 失效
- Excel 数据源使用提示优化，增加提示信息
- 性能优化
  - **JS 节点**处理性能优化
  - **字段处理**节点处理性能优化
  - **主从合并**节点性能优化
  - **字段编辑**节点在多字段场景下的前端展示优化
- 数据类型边界提示及处理逻辑优化
- 连接管理的筛选栏，数据库类型下拉列表支持搜索和清除选中
- 错误码弹窗，错误堆栈增加一键复制的功能

### 问题修复

- 修复针对轮询源的增量，没有增量时间点指标的问题
- 修复模型变化后，会强制删除更新字段的问题
- 修复类型修改、 增删字段、字段改名的节点配置，在加载模型的时候会被重置的问题
- 修复打开全量自定义开关时，目标是 MongoDB 出现报错的问题



## V3.0

### 新增功能

- [集成 GraphQL 能力](user-guide/data-service/query-via-graphql.md)，丰富 API 查询方式。
- 为 API [增加应用分类能力](user-guide/data-service/create-api-service.md)，便于基于业务分类。
- 新增[时间运算处理节点](user-guide/data-pipeline/data-development/process-node#time-calculation)，可灵活应对源目库时区不一致场景。
- 新增[全量分片能力](best-practice/full-breakpoint-resumption.md)，目前仅支持 MongoDB。

### 功能优化

- [共享缓存功能](user-guide/advanced-settings/share-mining.md)优化，提供可观测页面，便于观察挖掘进度和故障排查。
- [全量自定义查询功能](user-guide/data-pipeline/data-development/create-task#full-sql-query)，放开仅能使用 JS 节点的限制，也支持添加其它处理节点，节点模型直接使用源表的模型。
- 增删字段、类型修改、字段改名等字段[处理节点](user-guide/data-pipeline/data-development/process-node.md)，支持字段搜索功能。
- 连接配置中 Schema 加载频率配置文案调整。
- **表编辑节点**的表名修改逻辑优化，去掉应用按钮，配置直接生效。
- 管理进程（frontend）启动时，与同步治理进程一样，增加了 heapDump、stackTrace 相关参数。
- 增加任务编辑版本，避免多人编辑同一任务时，低版本配置覆盖高版本配置。
- 数据源配置右侧的说明文档， 支持放大图片。
- Oracle 数据源错误码实现。
