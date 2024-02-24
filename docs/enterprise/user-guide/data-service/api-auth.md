# API 认证介绍

Tapdata 的 API 认证服务基于 OAuth 2.0 机制，默认支持 `client credentials`、`implicit` 授权方式，您可以在[创建客户端](create-api-client.md)时选择授权方式。本文将介绍 API 认证流程，包含如何获取访问令牌，帮助您快速使用 API 服务。

## 获取访问令牌

### 请求地址

```bash
http://{Tapdata 服务器地址}:3030/oauth/token
```

### 请求参数
| 名称          | 类型   | 是否必填 | 说明                         |
| ------------- | ------ | -------- | ---------------------------- |
| grant_type    | String | 是       | 固定值：client_credentials   |
| client_id     | Sring  | 是       | 注册客户端时拿到的客户端 ID  |
| client_secret | Sring  | 是       | 注册客户端时拿到的客户端密钥 |


### 响应参数
| 名称          | 类型  | 是否必填 | 说明                                  |
| ------------- | ----- | -------- | ------------------------------------- |
| access_token  | Sring | 是       | 访问 API Server 的令牌                |
| expires_in    | Sring | 是       | 过期时间                              |
| refresh_token | Sring | 否       | 使用 refresh_token 更新 access_token  |
| token_type    | Sring | 否       | API Server 令牌认证方式，默认为Bearer |


## 携带访问令牌调用 API

客户端每次调用发布的接口都需要提供 `access_token` 完成鉴权认证。发送请求时，可以将 `access_token` 放在请求头、请求体或 URL 参数中；也可以使用 Bearer 方式将 `access_token` 添加认证请求头信息中，API Server 会自动获取并完成权限验证。

### API Key 方式

在 `request header`、`request body`、`request url` 中添加  `access_token` 参数：



```bash
access_token: eyJhbGciOiJIUzI1NiJ9.eyJjbGllbnRJZCI6ImI1********
```

### Bearer 方式

在 `request header` 中添加认证参数：



```bash
Authorization: bearer eyJhbGciOiJIUzI1NiJ9.eyJjbGllbnRJ********
```



## 常见响应状态码说明

| 响应状态码 | 说明                                                         |
| ---------- | ------------------------------------------------------------ |
| 200        | findById、findPage、create、自定义方法、请求处理成功返回。   |
| 204        | updateById、deleteById 请求处理成功返回。                    |
| 500        | 服务器内部处理错误返回。常见错误：新增记录违反唯一约束、MongoDB Validate 验证失败等。 |
| 401        | 认证失败返回，访问令牌过期或未提供访问令牌。                 |
| 404        | 操作数据不存在，删除、更新、查询不存在的记录等。             |



## 推荐阅读

* [通过 RESTful 查询 API](query-via-restful)
* [通过 GraphQL 查询 API](query-via-graphql)