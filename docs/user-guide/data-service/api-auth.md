# API Authentication
import Content from '../../reuse-content/_enterprise-features.md';

<Content />

TapData's API authentication service is based on the OAuth 2.0 mechanism, with default support for `client credentials` and `implicit` authorization methods. You can select the authorization method when [creating a client](create-api-client.md). This article introduces the API authentication process, including how to obtain access tokens, to help you quickly utilize the API service.

## Obtaining Access Tokens

### Request URL

```bash
http://{TapData server address}:3030/oauth/token
```

### Request Parameters
| Name           | Type   | Required | Description                                   |
| -------------- | ------ | -------- | --------------------------------------------- |
| grant_type     | String | Yes      | Fixed value: client_credentials               |
| client_id      | String | Yes      | Client ID obtained when registering the client|
| client_secret  | String | Yes      | Client secret obtained when registering the client|


### Response Parameters
| Name           | Type  | Required | Description                                    |
| -------------- | ----- | -------- | ---------------------------------------------- |
| access_token   | String| Yes      | Token to access the API Server                 |
| expires_in     | String| Yes      | Expiration time                                |
| refresh_token  | String| No       | Used to update the access_token                |
| token_type     | String| No       | Token authentication method for the API Server, default is Bearer |


## Calling APIs with the Access Token

The client must provide the `access_token` for authentication with each API call. The `access_token` can be included in the request header, request body, or URL parameters; alternatively, you can use the Bearer method to add the `access_token` to the authentication request header, and the API Server will automatically retrieve and validate the permissions.

### API Key Method

Add the `access_token` parameter in the `request header`, `request body`, or `request url`:

```bash
access_token: eyJhbGciOiJIUzI1NiJ9.eyJjbGllbnRJZCI6ImI1********
```

### Bearer Method

Add the authorization parameter in the `request header`:

```bash
Authorization: bearer eyJhbGciOiJIUzI1NiJ9.eyJjbGllbnRJ********
```

## Common Response Status Codes

| Response Code | Description                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| 200           | Successful return for findById, findPage, create, custom methods, and requests. |
| 204           | Successful return for updateById, deleteById requests.                      |
| 500           | Internal server error, common errors include violating unique constraints, MongoDB Validate failure, etc. |
| 401           | Authentication failure, access token expired or not provided.               |
| 404           | Operation data does not exist, such as deleting, updating, or querying non-existent records. |

## Recommended Reading

* [Querying via RESTful API](query-via-restful.md)
* [Querying via GraphQL API](query-via-graphql.md)