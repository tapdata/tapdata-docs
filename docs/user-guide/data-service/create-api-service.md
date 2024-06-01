# Create Data API
import Content from '../../reuse-content/_enterprise-features.md';

<Content />

To help developers easily dock interfaces and conveniently view API information published through TapData, we offer a data services feature.

## Supported Data Sources

Currently, it supports Doris, MongoDB, MySQL, Oracle, PostgreSQL, SQL Server, and TiDB.

## Procedure

1. [Log in to TapData Platform](../log-in.md).

2. In the left navigation bar, choose **Data Services** > **API List**.

3. Click **Create API** at the top right of the page, then complete the settings on the right panel according to the instructions below.

   ![](../../images/create_api_service.png)

   * **Service Name**: Enter a service name with business significance for easy identification in the future.
   * **Owner Application**: Select the affiliated application for convenient business category management. For more introduction, see [Application Management](manage-app.md).
   * **Connection Type**, **Connection Name**, **Object Name**: Choose the object to query based on business needs.
   * **Interface Type**: Choose between **Default Query** or **Custom Query**. When selecting **Custom Query**, you can set filters and set filtering/sorting conditions at the bottom of the page.
   * **API Path Settings**: Choose according to business needs.
      * **Default Path**: TapData randomly generates a unique access address.
      * **Custom Path**: The access path consists of **Version**, **Prefix**, and **Basic Path**, formatted as `/api/version/prefix/basic_path`. It supports letters, numbers, underscores (_), and dollar signs ($), but cannot start with a number.
   * **Input Parameters**: Allows modification of parameter default values.
   * **Output Results**: Supports setting the fields contained in the output results.

4. Click **Save** at the top right of the page, then click **Generate** at the bottom right of the page.

5. Find the service you just created and click **Publish** on its right to use the related service.

6. (Optional) Click the service you just created, select the **Debug** tab in the right panel, enter request parameters, and click **Submit** to verify service availability.

   ![Try Query API](../../images/try_query_api.png)

7. (Optional) For the data services you have created, you can <span id="release330-export-api">select and export them</span> for backup or sharing with other team members. You can also import data services.

   ![Import/Export API Services](../../images/import_export_api.png)

   Additionally, for published data services, you can select them and click **API Document Export** to quickly establish API usage documentation within the team. The exported Word file is in docx format and includes data service name, API description, GET/POST parameter descriptions.
