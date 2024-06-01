# Create a Server
import Content from '../../reuse-content/_enterprise-features.md';

<Content />

API servers can be configured to expose API server addresses externally, and multiple servers can also be added.

## Procedure

1. [Log in to TapData Platform](../log-in.md).

2. In the left navigation bar, select **Data Services** > **API Servers**.

3. Click **New Server** on the right side of the page.

4. In the pop-up dialog box, enter the server name and access address, and then click **OK**.

   ![](../../images/create_api_server.png)

   :::tip

   TapData includes an API server by default. Its address and port information can be obtained from the `application.yml` file in the TapData installation directory. Ensure the connection information is consistent to avoid the inability to use this feature.

   :::
