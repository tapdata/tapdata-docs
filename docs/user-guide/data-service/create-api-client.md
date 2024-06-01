# Create a Client
import Content from '../../reuse-content/_enterprise-features.md';

<Content />

To manage and create API calls, an API client is required. Applications that developers design and develop, or any other applications needing to call API interfaces (referred to collectively as client applications), must register with the data publishing system. Upon registration, you will receive a unique client ID (client_id) and client secret (client_secret).

## Procedure

1. [Log in to TapData Platform](../log-in.md).

2. In the left navigation bar, select **Data Services** > **API Clients**.

3. Click **Create a Client** in the top right corner, fill in the relevant information, and click **OK**.

   ![](../../images/create_api_client.png)

   :::tip

   The client secret is an important basis for client applications to obtain API access authorization and should be properly stored to avoid transmission in public network environments.

   :::
