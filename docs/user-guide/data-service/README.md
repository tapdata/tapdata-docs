# Publish Data API
import Content from '../../reuse-content/_enterprise-features.md';

<Content />

TapData supports publishing table data as APIs, aiding enterprises in building a unified data services platform. Various applications can use these APIs to provide support for services such as push notifications. The recommended sequence of use is as follows:

| Step                                                        | Description                                                  |
| ----------------------------------------------------------- | ------------------------------------------------------------ |
| [Create an API Application](manage-app.md)                  | Manage based on the purpose of the API in groups.            |
| [Create an API Service](create-api-service.md)              | Select the tables to associate, set the API's name, version, access path, permission scope, etc. Once set up, publish it online. |
| [Create an API Client](create-api-client.md)                | Set the scope of permissions and authentication methods based on business needs to ensure the security of the API service. |
| Invoke API Service                                          | Supports [RESTful](query-via-restful.md) and [GraphQL](query-via-graphql.md) access methods. |
| [Audit](audit-api.md) and [Monitor](monitor-api-request.md) | Audit and monitor API usage to meet compliance and security requirements. |

import DocCardList from '@theme/DocCardList';

<DocCardList />