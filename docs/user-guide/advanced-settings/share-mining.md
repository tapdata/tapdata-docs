# Manage CDC Log Cache

import Content from '../../reuse-content/_enterprise-features.md';

<Content />

To alleviate the pressure on the source database during increments, TapData supports shared mining of **change data capture** (CDC) logs. Once the CDC Log Cache is activated, it will not start mining immediately. Instead, it begins when you create a task for the table belonging to that data source. Regardless of whether the mining task is paused or encounters errors, it will not affect the normal operation of the synchronization task.

## Enable CDC Log Cache

You can enable CDC Log Cache when [creating a connection](../../prerequisites/README.md), which allows for the collection of the source database's incremental logs into external storage. Once enabled, these logs can be used by multiple tasks, eliminating the need for redundant reads of the source database's incremental logs.

![](../../images/enable_shared_mining.png)

## Use CDC Log Cache

Create a data transformation or data replication task. When the task contains incremental tasks and the data source has cached the CDC logs, you can use this feature in the task settings. For more introductions about task configuration, see [create data replication/transformation task](../../quick-start/create-task.md).

![](../../images/create_shared_mining.png)

## Manage CDC Log Cache

Upon successful task creation, a mining task is automatically generated. In TapData Platform, navigate to **Advanced** > **CDC Log Cache** from the left menu. Here, mining names are prefixed with the **data source name**, aiding in quick identification:

![Task List](../../images/share_mining_list.png)

The manageable actions are as follows:

* **Stop**: Click **Stop** when you no longer need to execute the shared mining task or need to adjust configurations.

* **Edit**: Click **Edit** when the shared mining task is stopped, and then set the mining name, log save duration, and mining start time in the pop-up dialog box.
  
  ![Edit Shared Mining](../../images/edit_share_mining.png)

* **Monitor**: Click **Monitor** corresponding to the mining task to view detailed mining information, such as RPS (Records Per Second), incremental delay, and other key indicators.
  
  ![](../../images/shared_mining_detail.png)

* **Task Alerts**: Click **Monitor** corresponding to the mining task, click the settings in the upper right corner of the page, and in the panel that pops up on the right, <span id="release330-alert">configure task alerts</span>. You can send alert messages via system notification messages or emails to better grasp the task's running status.
  
  ![Configure Task Alerts](../../images/share_mining_alert_settings.png)

* **Start or Stop Mining Task for Specified Tables**: Click <b>Monitor</b> corresponding to the mining task, then click on the source node. In the panel on the right of the page, you can see information about the tables involved in shared mining and the quantity being mined, as shown below.
  
  ![Mining Table Information](../../images/shared_mining_detail_2.png)
  
  When encountering a table that triggers an incremental event exception due to a large transaction, you can select the relevant table on this page and click **Stop Mining**. Confirm the impact scope in the pop-up dialog box and click **OK**.
  
  After subsequently completing the large transaction submission processing, click on the **Stopped Mining** tab, select the target table, and click **Resume Mining**.

## Application Scenario

Suppose you want to create a synchronization task from MySQL to Oracle but want to implement it through CDC Log Cache to relieve the pressure on the source database.

First, create a MongoDB as a middle repository for storing mining logs, then turn on the CDC Log Cache for the connection that needs incremental log mining and select this MongoDB. Finally, enable CDC Log Cache when creating the task.

As demonstrated in the following example, after completing the settings, add a new data entry in the source database:

![](../../images/shared_mining_demo_1.png)



Check whether there are incremental data in the target database:

![](../../images/shared_mining_demo_3.png)