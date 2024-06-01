# TapData Cloud

import Content from '../../reuse-content/_cloud-features.md';

<Content />

The TapData Agent is an essential component for data synchronization, data heterogeneity, and data pipeline scenarios. While it is recommended to install the TapData Agent within the local network where the database is located for real-time processing, an alternative option is available. You can also install the TapData Agent on the TapData Cloud server, eliminating the need for setting up a machine locally. This provides flexibility and convenience for managing your data flow.

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

<details>
  <summary>Agent Introduction</summary>
  TapData Agent plays a critical role in the data flow process. It retrieves data from the source, performs necessary processing and transformations, and subsequently transfers it to the designated target. It is important to note that the data being handled by the TapData Agent is not uploaded or stored in TapData Cloud. The agent acts as a facilitator, ensuring efficient and secure data transfer without retaining any data in the cloud environment.
</details>


## Procedure

TapData Cloud offers pricing based on the specifications and quantity of subscribed Agent instances. You have the option to create one free instance of the **SMALL** specification Agent, and if required, you can [purchase additional Agent instances](../../billing/billing-overview.md) to align with your specific business requirements.

Next, let's create a free Agent instance.

1. [Log in to TapData Platform](../../user-guide/log-in.md).

2. In the left navigation panel, click **Resource Management**.

3. On the right side of the page, click **Create Agent**.

4. In the pop-up dialog, select deploy mode, spec and subscription period.

   ![Select Agent Specification](../../images/create_free_agent.png)

   * **Deploy Mode**
     * **Self-Hosted Mode**: You need provide the equipment for [deploying](#deploy-agent) and maintaining the Agent. This allows for the optimal utilization of existing hardware resources, resulting in lower costs and enhanced security.
     * **Fully Managed Mode**: TapData Cloud provides the required computing/storage resources for running the Agent and deploys it automatically. Additionally, we offer unified operational maintenance and resource monitoring to enhance reliability. This enables one-click delivery and usage, eliminating the need for deployment and operational efforts, allowing you to focus on your core business activities.
       :::tip
       When selecting the **Fully Managed Mode**, you also need to choose the cloud provider and region where the Agent will be deployed.
       :::
   * **Agent Spec**: Select product specifications based on the number of tasks and performance requirements required for evaluation. You can create an example of **SMALL** specifications for free. For detailed descriptions of product pricing and specifications, see [Billing Overview](../../billing/billing-overview.md).
   * **Subscription Period**: Select the required subscription period, in order to avoid the expiration of the instance affecting the execution of the task, it is recommended to choose the Annually (**10% off**) or Monthly (**5% off**).

5. Click **Subscription**.

6. <span id="deploy-agent">If you choose</span> the **Fully Managed Mode**, the Agent will be automatically deployed. If you opt for the **Self-Hosted Mode**, please follow the steps below for manual deployment.

   1. Select the deployment platform on the redirected page.

      ![Select Deploy Platform](../../images/select_deploy_platform.png)

   2. Click **Copy** to obtain the deployment command.

   3. Follow the steps below based on the selected deployment platform.

<details>
<summary>Show Requirements</summary>

- CPU: x86 Architecture Processor
- Operating System: 64-bit
- Network: Ability to connect to the public network and communicate with the source/target database
- Software: Java 1.8

</details>

```mdx-code-block
<Tabs className="unique-tabs">
<TabItem value="Linux (64 bit)">
```
1. Log in to the device where the Agent will be deployed (without root privileges), create a folder first (e.g., **tapdata**) and enter it for easier management of the Agent.
2. Paste and execute the installation command you copied before, which contains the process of downloading, deploying, and launching the Agent, and the launch success is shown in the figure below.

   ![Agent Started Successfully](../../images/agent_started_on_linux.png)

</TabItem>

<TabItem value="Docker">

1. To log in to the device where the Agent will be deployed (without root privileges), create a folder first, such as **tapdata**. Enter the created folder to facilitate easier management of the Agent.

2. Paste and execute the installation command that you copied before, which includes the steps of downloading, deploying, and launching the Agent. After a successful launch, you can retrieve the container ID, as you can see in below picture.

   ![Agent Started Successfully](../../images/agent_started_on_docker.png)

   

</TabItem>

<TabItem value="Windows (64 bit)">

1. According to the prompts on the page, download the Agent installer and configuration file (**application.yml**).

2. For easier management of the TapData Agent, we recommend moving the downloaded Agent installer to the installation directory of your choice. For example, you can move it to **C:\tapdata** on a Windows system. By doing so, you can conveniently access and manage the TapData Agent from the designated installation directory.

3. Double-click on **tapdata.exe** in the Agent installation directory to complete the installation. After a successful launch, the command window will automatically close.

4. (Optional) Double-click the **status.bat** in the Agent installation directory to check the status of the Agent. The following is an example of a normal startup.

   ![Agent Started Successfully](../../images/agent_started_on_windows.png)

</TabItem>
</Tabs>

   



<details>
<summary>Need to Install on Mac (M1 Chip)?</summary>

1. Open the Mac's terminal, then execute the following command to download and launch the JDK image.

   ```shell
   # Download Image
   docker pull openjdk:8u312
   # Run Image
   docker run -t -d openjdk:8u312
   ```

2. Execute `docker ps` to get the container ID, and then execute the following format of the command to enter the container command line, for example:

   ```shell
   docker exec -it Container-ID /bin/bash
   ```

   :::tip

   Replace the Container-ID in the command, such as `docker exec -it 1dbee41b4adc/bin/bash`.

   :::

3. To manage the Agent easily, create a folder (e.g., **tapdata**) and enter it by executing the following command.

   ```shell
   mkdir tapdata&&cd tapdata
   ```

4. In the container command line, execute the following command to download the Agent program and unzip it.

   ```shell
   wget 'https://resource.tapdata.net/doc-source/tapdata.zip' && unzip tapdata.zip
   ```

5. Back to the Deployment page on TapData Cloud, select **Linux(64 bit)** as the target operating system and click **copy**.

      ![Copy the installation command](../../images/select_deploy_platform.png)

6. In the Docker container's command line, paste the copied command, remove the content before `./tapdata`, and then execute it.  The startup is successful, you can refer to the below figure.

   ![](../../images/agent_started_on_macm1.png)

</details>

## Next step

[Connect Data Sources](../connect-database.md)

## See also

* [Manage Agent](../../user-guide/manage-agent.md)
* [FAQ about Agent](../../faq/agent-installation.md)
