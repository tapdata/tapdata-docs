# Zoho-CRM

import Content from '../../reuse-content/_all-features.md';

<Content />

Zoho CRM acts as a single repository to bring your sales, marketing, and customer support activities together, and streamline your process, policy, and people in one platform. TapData Cloud supports Zoho CRM as a data source to build a data pipeline to help you read data in CRM and synchronize it to the specified data source, helps you quickly open the data flow channel. This article explains how to add a Zoho CRM data source to TapData Cloud.



## Readable Data

TapData Cloud allows you to read data in Zoho CRM as a table and synchronize it to the target database. Here is the data can be easily accessed in Zoho CRM:

- **Accounts**
- **Contacts**
- **Leads**
- **Potentials**
- **Quotes**
- **Sales_Order**

## Connect to Zoho CRM

1. [Log in to TapData Platform](../../user-guide/log-in.md).

2. In the left navigation panel, click **Connections**.

3. On the right side of the page, click **Create**.

4. In the pop-up dialog box, search for and select **Zoho CRM**.

5. Fill in the connection information for Zoho CRM on the redirected page, following the instructions provided below.
   - **Name**: Fill in a unique name with business significance.
   - **Type**: Currently only supported as a **Source**.
   - **Advanced Settings**
      - **Agent settings**: Defaults to **Platform automatic allocation**, you can also manually specify an agent.
      - **Model Load Time**: When the number of models in the data source is less than 10,000, the model information is refreshed every hour; if the model data exceeds 10,000, the model information is refreshed every day at the time you specify.

6. Click **Authorize**, and on the Zoho CRM authorization page that you are redirected to, complete the login and authorization (it is recommended to authorize as an organization administrator). 

   :::tip

   After completing the operation, the page will return to the data source configuration page and display **Authorization successful**.

   :::

7. Click **Test**, and when passed, click **Save**.

   If the connection test fails, follow the prompts on the page to fix it.

