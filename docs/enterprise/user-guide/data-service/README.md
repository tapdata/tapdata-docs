# 数据服务

Tapdata 支持 API 形式发布表数据，帮助企业构建统一的数据服务平台，各类应用可基于 API 为推送服务等应用提供支持，推荐的使用顺序如下：

| 步骤                                              | 说明                                                         |
| ------------------------------------------------- | ------------------------------------------------------------ |
| [创建 API 应用](manage-app.md)                    | 基于 API 的用途进行分组管理。                                |
| [创建 API 服务](create-api-service.md)            | 选择需要关联的表，设置 API 的名称、版本、访问路径、权限范围等信息，设置完成后发布上线即可。 |
| [创建 API 客户端](create-api-client.md)           | 基于业务需求设置权限范围和认证方式，保障 API 服务的安全性。  |
| 调用 API 服务                                     | 支持 [RESTful](query-via-restful.md) 和 [GraphQL](query-via-graphql.md) 访问方式。 |
| [审计](audit-api.md)和[监控](monitor-api-request) | 审计和监控 API 调用情况，满足合规和安全性等需求。            |





import DocCardList from '@theme/DocCardList';

<DocCardList />