# Subscription Instance

import Content from '../reuse-content/_cloud-features.md';

<Content />

After registering with TapData Cloud, you will receive the benefit of creating one free Agent instance. If you require additional agents or desire higher transfer performance, you can refer to the instructions in this article to complete the subscription process for the desired instance.

## Procedure

1. Log in to [TapData Cloud](https://cloud.tapdata.io/).

2. In the left navigation panel, click **Resource Management**.

   After successfully creating a free Agent instance, if you find that your business requires additional Agent instances to meet performance needs, you can proceed with subscribing to more instances. This will allow you to scale up the capabilities of TapData Cloud to accommodate your business requirements effectively.

   ![Agent Example](../images/agent_free.png)

3. On the right side of the page, click **Create Agent**.

4. In the pop-up dialog, select <span id="hosted-mode">deploy mode</span>, spec and subscription period.

   ![Select Agent Specification](../images/select_agent_spec.png)

   * **Deploy Mode**: Choose the deploy mode based on your business needs:
     * **Self-Hosted Mode**: You need provide the equipment for [deploying](../quick-start/install/install-tapdata-agent.md) and maintaining the Agent. This allows for the optimal utilization of existing hardware resources, resulting in lower costs and enhanced security.
     * **Fully Managed Mode**: TapData Cloud provides the required computing/storage resources for running the Agent and deploys it automatically. Additionally, we offer unified operational maintenance and resource monitoring to enhance reliability. This enables one-click delivery and usage, eliminating the need for deployment and operational efforts, allowing you to focus on your core business activities.
       :::tip
       When selecting the **Fully Managed Mode**, you also need to choose the cloud provider and region where the Agent will be deployed.
       :::
   * **Cloud Provider** and **Region**: Required when choosing the **Fully Managed Mode**.
   * **Agent Spec**: Select product specifications based on the number of tasks and performance requirements required for evaluation. You can create an example of **SMALL** specifications for free. For detailed descriptions of product pricing and specifications, see [Billing Overview](billing-overview.md).
   * **Traffic Billing**: When choosing **Fully Managed Mode**, you will also need to pay for traffic based on the amount of synchronized data (billed monthly).
   * **Subscription Method**: Select the required subscription period, in order to avoid the expiration of the instance affecting the execution of the task, it is recommended to choose the Annually (**10% off**) or Monthly (**5% off**).

5. Click **Next**, on the following page, carefully review and confirm the specifications you wish to purchase. Ensure that the selected billing method aligns with your preferences. Additionally, verify that the email address provided is accurate and where you would like to receive the bill. 

   Once you have double-checked all the information, click on the **OK** button to proceed with the purchase.

6. You will redirected to payment page. Please follow the instructions on the payment page to complete the payment process. After completing the payment, you will be able to download the payment credentials.

7. After the payment is successful, return to the TapData Cloud platform to see that the Agent instance you purchased is **To be deployed**.

   Next, you can deploy the Agent on your server. For more information, see [Install Agent](../quick-start/install/install-tapdata-agent.md).

   ![Subscription is successful](../images/purchase_success.png)



## Next Steps

To ensure the proper use of subsequent data replication/transformation functions, you need to adjust the relevant firewalls to ensure that the Agent can communicate normally with TapData Cloud and the source/target databases. The Agent workflow is shown below:

![Agent Communication](../images/architecture.png)

If you have subscribed to the [Fully Managed Agent](#hosted-mode) and the connected data sources only accept connections from specific IP addresses, you need to add the Agent's server address to the security settings of the corresponding data source. For example, add it to the firewall whitelist rules of a self-hosted database to allow the Agent to establish communication and transfer data with your data sources. The Agent server addresses for each region are as follows:

- Alibaba Cloud Beijing: **47.93.190.224**
- Alibaba Cloud Hong Kong: **47.242.251.110**
