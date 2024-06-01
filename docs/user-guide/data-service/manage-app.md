# Manage Application
import Content from '../../reuse-content/_enterprise-features.md';

<Content />

To better manage and distinguish API services, we can categorize them based on business needs, assigning different APIs into different applications. This article introduces the specific operation process.

## Procedure

1. [Log in to TapData Platform](../log-in.md).

2. In the left navigation bar, select **Data Services** > **Application List**.

3. At the top right of the page, click **Create Application**.

4. In the pop-up dialog, enter the application name and description, then click **Save**.

   ![Create Application](../../images/create_app_category.png)

   :::tip

   After completing the operation, when [creating an API service](create-api-service.md), you can select the application to join.

   :::

5. (Optional) Manage existing applications.

   ![Manage Application](../../images/manage_app.png)

   * **Edit**: You can edit the application's name and description information.
   * **Details**: You can view detailed information about the API services contained in the application, such as the publication status, etc.
   * **Delete**: If the current application contains API services, you need to transfer the API services to other applications in the pop-up dialog before you can delete them.