# Deploy and Manage Agent

This article lists common problems encountered by Tapdata Agent in deployment and operation.

## Deploy Agent

### What is the role of the agent?

Agent is a key program in data synchronization, data heterogeneity, and data development scenarios. It is responsible for obtaining data from the source system, processing and transmitting it to the target system, and is unifiedly managed by Tapdata cloud. The workflow is as follows:

![Agent Architecture](../images/architecture.png)

:::tip

Tapdata Agent obtains data from the source, processes and transforms it, then sends it to its target. The data is not uploaded or stored in Tapdata Cloud.

:::

### What's the difference between Full-Managed Mode and Semi-Managed Mode?

| Type                   | Description                                                  | Architecture                                                 |
| ---------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Fully-Managed Mode** | Tapdata Cloud will provide the necessary computing/storage resources for running the Agent and deploys it automatically. It offers unified operational maintenance and resource monitoring to enhance operational reliability, enabling one-click delivery and usage, allowing users to focus on their core business. | ![全托管](https://docs.tapdata.net/assets/images/fully_managed-12c576a9a02c96a8a7588f6f2d372cf8.png) |
| **Semi-Managed Mode**  | You have the flexibility to [deploy the Agent](../quick-start/install-agent/README.md) on an existing device, leveraging the available hardware resources. This approach offers cost savings while enhancing security. | ![半托管](https://docs.tapdata.net/assets/images/self_host_managed-ac00059b1099b9c395840c2bd0965445.png) |

### Where is the Agent deployed?

The Tapdata Agent should be installed in the local network where the database is located since data flow is usually time-sensitive.

See [Deploying Tapdata Agent](../quick-start/install-agent) for more information.

### How many agents need to be deployed?

Just deploy an agent and make sure that the agent can communicate with the source/destination of the database.

### Can multiple agents be deployed?

Yes, you need to make sure that these agents can communicate with the source/destination of the database.

:::tip

A task will only run on one agent, and when there are many tasks, multiple agents can be deployed to improve the workload.

:::

### How can I change an Agent for a task when an Agent has an exception?

You can edit the corresponding task, then manually specify a working agent for it, and then troubleshoot the abnormal agent.

![Specify Agent](../images/specify_agent_en.png)

### If Oracle is in rac mode with two nodes, how to deploy the agent?

As long as it can be connected to rac, the agent can connect to the scan/vip of rac, and it does not need to be deployed on the same device with Oracle.

### Failed to pass the test after installing Docker Windows (64 bit)?

The best way to [deploy Agent](../quick-start/install-agent/agent-on-docker.md) is directly through Docker.

### How do I get the tokens needed for deployment again?

1 token is only used to deploy 1 agent, if you want to deploy multiple agents, please go to Tapdata Cloud to create an agent.

### Agent has been in deployment status detection?

You need to follow the prompts to complete the deployment of the Agent, and the Agent state will be automatically converted to **running** after the deployment is completed. If more than 5 minutes have not yet shown normal, the deployment may fail, you can contact us for [technical support](support.md) and provide logs to assist in locating the problem.



## Manage Agent

### Agent startup error: "start timout"?

If you encounter the failure of starting the Agent, you can check the log file **logs/tapdata-agent.log** in the installation directory to determine whether it is a network problem, you can also contact us for [technical support](support.md).

### Enter the token and report an error: "java.lang.IllegalStateException: Cannot load configuration class: io.tapdata.Application"?

The package is incomplete. Please replace it with a new version.

### How do I check the status of my Agent?

* **View by command**: Log in to the device where the Agent is deployed and enter the Agent installation directory, execute the `./tapdata status` command, as shown in the following example, the Agent is normally running.

   ![Command to check the status of the Agent](../images/agent_status_cli.png)

* **View through the interface**: Log in to the [Tapdata Cloud](https://cloud.tapdata.io/), click **Agent** in the left navigation bar to view the status of all agents, and click Agent name to get the directory, logs, and other information of the Agent.

   ![Check the status of the Agent](../images/agent_status_ui_en.png)

### Agent unexpectedly stopped, how to start the agent?

Log in to the device where the Agent is deployed and enter the Agent installation directory, execute the `./tapdata start` command, if you cannot start, you can contact us for [technical support](support.md), and provide logs to assist in locating the problem.

### The Agent is running normally, but appears to be offline in Tapdata Cloud?

The Agent reports the heartbeat to the Tapdata Cloud every minute, and if the Tapdata Cloud does not receive the heartbeat information for five consecutive minutes, the Agent is displayed offline, usually due to network fluctuations.

The Agent offline does not affect the normal operation of the running task, but the newly created task is affected.

### How to uninstall the reinstall agent?

Select the following methods to uninstall the Reinstall Agent according to your platform:

* Docker: Delete the container directly, and then rerun the command to start the container to complete the installation.
* Linux/Windows:
   * **Fresh Install**
      1. Execute the command stop service: `./tapdata stop -f`.
      2. Delete the installation directory.
      3. Create an Agent on Tapdata Cloud and follow the prompts to complete the deployment.
   * **Retain Configuration Reinstall**
      1. Save the configuration file **application.yml** in the Agent installation directory.
      2. Execute the command stop service: `./tapdata stop -f`.
      3. Delete the installation directory.
      4. Create a new installation directory and copy **application.yml** to it.
      5. Download the tapdata agent.
      6. Execute `./tapdata start backend`

### Agent runtime error: "OutOfMemoryError"

It is necessary to confirm that the Agent device has sufficient available memory. The solution is as follows:

* Out of memory: Replace the device where the Agent is deployed, or try reducing the value of **Batch read number** for tasks in the Tapdata Cloud.

* Memory is plentiful

   1. In the Agent installation directory, locate and modify the **application.yml** file

   2. Adjust the memory size according to the available memory. For example, add the following configuration in the file: `tapdataJavaOpts: "-Xms4G -Xmx8G"`, that is, the initial memory is 4GB, and the maximum memory is 8GB.

      ```yaml
      tapdata:
          conf:
              tapdataPort: '3030'
              backendUrl: 'https://cloud.tapdata.io/api/'
              apiServerPort: ""
              tapdataJavaOpts: "-Xms4G -Xmx8G"
              reportInterval: 20000
              uuid: a5f266a1-a495-412f-a433-29d345713c176
          cloud:
              accessCode: ""
              baseURLs: 'https://cloud.tapdata.io/api/'
              username: null
              token:
      spring:
          data:
              mongodb:
                  username: ""
                  password: ""
                  mongoConnectionString: ""
                  uri: ""
                  ssl: ""
                  sslCA: ""
                  sslCertKey: ""
                  sslPEMKeyFilePassword: ""
                  authenticationDatabase: ""
      ```



   3. After saving, execute the following command to restart the agent.

      ```shell
      # Stop Agent
      ./tapdata stop -f
      # Start Agent
      ./tapdata start
      ```

