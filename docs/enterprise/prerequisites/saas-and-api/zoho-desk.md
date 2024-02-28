# Zoho Desk

If you're interested, consider exploring ZoHo Desk's OpenAPI documentation and WebHook documentation to understand the details:

- [OpenAPI Documentation](https://desk.zoho.com.cn/support/APIDocument.do#Introduction)
- [WebHook Documentation](https://desk.zoho.com.cn/support/WebhookDocument.do#Introduction)
- [Workflow Configuration Documentation](https://www.zoho.com.cn/developer/help/extensions/automation/workflow-rules.html)

Of course, you can also follow the content below for a quick start on configuring the ZoHo Desk data source.

---

## 1. Attribute Description

1. **Organization ID (org ID):** Your data source organization. Obtain and configure this from ZoHo Desk manually.
2. **Client ID:** Obtain and copy the client ID manually from ZoHo Desk.
3. **Client Secret:** Similar to the client ID, you'll find the client secret alongside the client ID. Enter both to generate the application code.
4. **Application Generation Code:** Use this code along with the client ID and client secret to get OpenAPI access key and refresh token.
5. **Connection Mode:** Users can choose the connection mode, including normal document mode and CSV mode (not available yet).
6. **Incremental Mode:** ZoHo Desk data sources only support WebHook incremental mode for OpenAPI. Details are explained below.
7. **Service URL:** This URL is used to configure WebHooks. Copy and paste the generated service URL here for ZoHo Desk's WebHook configuration. Configuration process is explained below.

---

## 2. Configuration Steps

### 2.1 Basic Configuration

1. **Obtain Organization ID:** In ZoHo Desk, click "Settings" in the upper right corner, then navigate to "Developer Space" and the "API" section. Find "Zoho Service Communication (ZSC) Key" at the bottom and copy the organization ID.

2. Access the API Console by clicking "ADD CLIENT" in the upper right corner. Choose "Self Client."

   API Console Link: [API Console](https://api-console.zoho.com.cn/)

3. Click "Client Secret" in the menu to get the Client ID and Client Secret.

4. Next, generate the "Generate Code". Input the Scope, providing a complete scope benefits API data retrieval. Example scope:

   ```
   Desk.tickets.ALL,Desk.search.READ,Desk.contacts.READ,Desk.contacts.WRITE,Desk.contacts.UPDATE,Desk.contacts.CREATE,Desk.tasks.ALL,Desk.basic.READ,Desk.basic.CREATE,Desk.settings.ALL,Desk.events.ALL,Desk.articles.READ,Desk.articles.CREATE,Desk.articles.UPDATE,Desk.articles.DELETE
   ```

   You can customize the scope using the official documentation: [OAuth Scopes](https://desk.zoho.com.cn/support/APIDocument.do#OAuthScopes).

5. Choose a "Time Duration": 3, 5, 7, or 10 minutes. You need to return to TapData Create Connection page within this time to get access and refresh tokens.

6. After clicking "Create", manually select the associated project (portal) which is the data source.

7. After generating "Generate Code", return to TapData Create Connection page within the specified time to obtain the Token. Follow the same steps to get Generate Code again if time is exceeded.

### 2.2 WebHook Configuration

Configuring WebHooks enables real-time data updates.

#### Global WebHook Configuration

1. First, click "Generate Service URL" to create the corresponding service URL for the data source. ZoHo Desk will use this URL to communicate update events.

2. Open ZoHo Desk, go to "Settings" in the upper right, select "Developer Space," then navigate to "WebHook." Create a new WebHook. Input the WebHook name, paste the generated service URL into the URL field, and select and add desired events.

3. Click "Save" to activate the WebHook.

#### Workflow WebHook Configuration

1. If the global WebHook configuration doesn't work, you may need to configure a WebHook within a workflow.

2. Access "Settings," find "Automation," select "Workflow," then "Rules." Create a new rule.

3. Choose the relevant module, name the rule, and proceed.

4. Select the execution event to trigger the workflow.

5. Optionally define conditions to filter specific events.

6. Choose an operation. For WebHook, select all operations, then choose "Send Cliq Notification" from external operations.

7. Edit the operation name and paste the service URL from the creation of ZoHo data source in TapData into the "InComing WebHook URL" field.

8. Edit the "Notification Message" and click "Save." This configures a workflow.

---

## 3. Table Descriptions

- Tickets: Work Order Table
- Departments: Department Table
- Products: Product Table
- OrganizationFields: Custom Attribute Field Table
- Contracts: Contract Table

---

## 4. Precautions

- Configuration of ZoHo data source requires generating the service URL and configuring it in ZoHo Desk. Otherwise, incremental events won't work.
- When duplicating a ZoHo data source, configure a new WebHook in ZoHo Desk as the service URL is unique for each data source.
- Avoid creating multiple ZoHo data sources using the same Client ID and Client Secret, as access keys from the same set are limited. This prevents unnecessary losses due to OpenAPI rate limiting. ZoHo Desk provides a limited number of OpenAPI access connections even for VIPs.
- In WebHook incremental mode, if you delete a record or data monitored by WebHooks in ZoHo Desk, you'll receive an update event related to the IsDel field. If you reset and restart the task, the deleted record won't be obtained due to ZoHo Open API not providing records with IsDel set to TRUE.
- Regarding the service URL, ZoHo WebHook requires your service URL to be accessible on port 80 or 443, e.g., http://xxx.xx.xxx:80/xxxxxxxx or https://xxx.xx.xxx:443/xxxxxx. Therefore, you need to receive ZoHo Desk's data on ports 80 or 443.
