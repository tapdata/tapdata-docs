# Query API through RESTful
import Content from '../../reuse-content/_enterprise-features.md';

<Content />

RESTful API is an application programming interface (API or Web API) that adheres to REST architectural specifications. TapData supports integrated RESTful API services, allowing you to execute requests through the API service address and obtain managed data information.

In this article, we will introduce how to use the Postman to invoke API requests.

## Procedure

1. [Log in to TapData Platform](../log-in.md).

2. In the left navigation bar, select **Data Services** > **API List**.

3. Obtain the service access address and Access Token authentication information.

   1. Locate and click on the target service name.

   2. Scroll down to the service access area in the right-hand panel and get the address for service access. In this case, we will demonstrate the procedure using a **GET** type service as an example.

      ![Get Service Access Address](../../images/obtain_restful_address.png)

   3. Click the **Debug** tab, scroll down to **Example Code**, and obtain the Access Token authentication information.

      ![Get Access Token](../../images/obtain_access_token.png)

4. Open the [Postman tool](https://www.postman.com/), and click **Workspaces** at the top of the software page, and select your Workspace.

5. Click **New**, and in the pop-up dialog box, select **HTTP Request**.

   ![Create HTTP Request](../../images/create_restful_request.png)

6. In the Request URL text box, enter the API query request address you obtained in step 3.

7. (Optional) Click **Query Params** below the text box and set the query request parameters. For an introduction to the supported request parameters, please refer to step 3.

8. Click **Authorization** below the text box, select **Type** as **Bearer Token**, and fill in the Access Token authentication information obtained in step 3.

   ![Set Authorization Information](../../images/restful_authorization.png)

9. Click **Query**, the return example is shown below.

   ![Query Result](../../images/restful_api_query_result.png)

   :::tip

   TapData supports adding query conditions to the URL query string to quickly filter query results. For specific operations, see [API Query Parameter Description](api-query-params.md).

   :::
