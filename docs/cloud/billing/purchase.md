# Subscription Instance

After registering with Tapdata Cloud, you will receive the benefit of creating one free Agent instance. If you require additional agents or desire higher transfer performance, you can refer to the instructions in this article to complete the subscription process for the desired instance.

## Procedure

1. Log in to [Tapdata Cloud](https://cloud.tapdata.io/).

2. In the left bottom corner of the page, click **Resource Management**.

   After successfully creating a free Agent instance, if you find that your business requires additional Agent instances to meet performance needs, you can proceed with subscribing to more instances. This will allow you to scale up the capabilities of Tapdata Cloud to accommodate your business requirements effectively.

   ![Agent Example](../images/agent_free.png)

3. On the right side of the page, click **Create Agent**.

4. Select product model according your need and click **Next**.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="unique-tabs">
    <TabItem value="etl-model" label="Integration Platform as a Service" default>
    <p>Suitable for data replication/synchronization, migrate data to cloud or building ETL pipelines. You can simply drag the source table to the target to automatically complete the creation of data replication tasks. For more information, see <a href="../user-guide/data-console/etl-mode"> Integration Platform as a Service</a>.</p>
​    <img src='/img/select_etl_model.png'></img>
</TabItem>
   <TabItem value="daas-model" label="Real Time Data as a Service">

   <p>Based on the concept of data hierarchical governance, Tapdata Cloud collects data sources scattered across different business systems through the Data Cache Layer, which minimizes the impact of data extraction on business and provides basic data for subsequent data processing and business, thus building a consistent, real-time data platform and connecting data silos. For more information, see <a href="../user-guide/data-console/daas-mode/enable-daas-mode"> Real Time Data as a Service</a>.</p>
   <img src='/img/select_daas_model.png'></img>
   </TabItem>
</Tabs>

5. Select deployment type according your need and click **Next**.

<Tabs className="unique-tabs">
    <TabItem value="semi-managed" label="Semi-Managed Mode" default>
   <p>You have the flexibility to <a href="../quick-start/install-agent"> deploy the Agent</a> on an existing device, leveraging the available hardware resources. This approach offers cost savings while enhancing security. </p>
   <img src='/img/semi_managed.png'></img>
   </TabItem>
    <TabItem value="full-managed" label="Fully-Managed Mode">
    <p>Tapdata Cloud will provide the necessary computing/storage resources for running the Agent and deploys it automatically. It offers unified operational maintenance and resource monitoring to enhance operational reliability, enabling one-click delivery and usage, allowing your to focus on core business.</p>
​    <img src='/img/full_managed.png'></img>
</TabItem>
</Tabs>


6. Next, we will demonstrate the purchasing process using the **Fully-Managed Mode** as an example. First, select information such as Agent specification and subscription method.

   ![Select Agent Specification](../images/select_agent_spec.png)

   * **Subscription Period**: Select the required subscription method, in order to avoid the expiration of the instance affecting the execution of the task, it is recommended to choose the Annually (**10% off**) or Monthly (**5% off**).
   * **Cloud Service Provider**:  When selecting the Fully Managed Mode, you need to select the cloud vendors.
   * **Region**: When selecting the Fully Managed Mode, you need to select a region where the Agent will depoly.
   * **Product Specifications**: Select product specifications based on the number of tasks and performance requirements required for evaluation. You can create an example of **SMALL** (Semi-Managed Mode) specifications for free. For detailed descriptions of product pricing and specifications, see [Billing Overview](billing-overview.md).

7. If you chose **Real Time Data as a Service** in Step 4, click **Next** and select the storage and compute resources for the **[Data Cache and Data Processing Layer](../user-guide/data-console/daas-mode/enable-daas-mode.md)** based on your Agent deployment mode.

<Tabs className="unique-tabs">
    <TabItem value="semi-managed-storage" label="Semi-Managed Mode" default>
   <p>You need to prepare a self-hosted <a href="https://www.mongodb.com/docs/manual/administration/install-on-linux/"> MongoDB database</a>  (4.0 and above) as a data repository, and fill in database URL. The user name and password need to be spliced in the connection string, for example:<pre>mongodb://admin:password@192.168.0.100:27017/mydb?replicaSet=xxx&authSource=admin</pre></p>
   <img src='/img/etl_storage.png'></img>
   </TabItem>
    <TabItem value="full-managed-storage" label="Fully-Managed Mode">
    <p>Select the specifications and storage capacity provided by the cloud vendor, and you need to pay for the selected cloud resources.</p>
    <img src='/img/daas_storage.png'></img>
</TabItem>
</Tabs>

8. Click **Next**, carefully review and confirm the specifications you wish to purchase. Ensure that the selected billing method aligns with your preferences. Additionally, verify that the email address provided is accurate and where you would like to receive the bill. 

   Once you have double-checked all the information, click on the **Online Payment** button to proceed with the purchase.

   :::tip

   When selecting the Real Time Data as a Service in step 4, you also need to select the storage resource

   :::

9. You will redirected to payment page. Please follow the instructions on the payment page to complete the payment process. After completing the payment, you will be able to download the payment credentials.

10. After the payment is successful, return to the Tapdata Cloud platform to see that the Agent instance you purchased is **To be deployed**.![Subscription is successful](../images/purchase_success.png)

   :::tip

   If you choose the Fully Managed Mode, the Agent will be automatically deployed. However, if you choose the Semi Managed Mode, you will need to manually [deploy the Agent](../quick-start/install-agent/README.md) on your own device.

   :::
