# Manage Clusters

Through the Cluster Management page, you can view the running status of all components within the current cluster, the number of external connections established, and other information. It also supports management operations.

## Procedure

1. Log in to Tapdata.

2. In the left navigation bar, select **System** > **Cluster** to view the running status and connection information of each component.

   You can also start/stop, and restart services. Note that stopping and restarting operations will affect the normal operation of related services, so please operate during maintenance windows or during business off-peak periods.

   ![Cluster Management](../../images/manage_cluster_1.png)

3. On this page, choose the following operations according to business needs.

    * Click ![](../../images/process_monitor_icon.png) to download the thread resource usage details of the current engine, in JSON format.

    * Click ![](../../images/data_source_monitor_icon.png) to download the data source usage details of the current engine, in JSON format.

    * Click ![](../../images/cluster_setting_icon.png) to adjust the server name and switch the network card display information.

      :::tip

      Switching the network card display information only changes the IP address display under the server on the Cluster Management page and will not affect functional operation.

      :::

    * Click ![](../../images/cluster_add_icon.png) to add custom service monitoring.