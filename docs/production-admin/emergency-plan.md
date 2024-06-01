# Emergency Plans

import Content from '../reuse-content/_enterprise-features.md';

<Content />

This document provides a comprehensive emergency handling process and contingency strategies for TapData products, aiming to help you respond quickly and effectively in the event of an emergency or product issue, thereby mitigating the impact of failures and enhancing the overall stability and security of the product.

:::tip

TapData supports both standalone and high-availability deployments. For production environments, it is recommended to use a [high-availability deployment](install-tapdata-ha.md) method.

:::

## Component Recovery and Task Restart Strategy

To ensure the high availability of the system and the stability of data synchronization tasks, TapData has designed a failure recovery strategy aimed at quickly responding to component anomalies and automatically restoring services and tasks to minimize business impact.

| Component | Description |
| --------- | ----------- |
| Engine    | ●  Once the engine starts and other components are normal, tasks will gradually recover based on the current phase. The recovery time is influenced by the number of tasks. For instance, tasks fewer than 10 are expected to recover within seconds, and those not exceeding 100 within 5 minutes. <br />●  Incremental synchronization tasks will resume normal operation directly, and the synchronization delay will gradually decrease. <br />●  Full synchronization tasks will restart the full synchronization until they enter the incremental phase. |
| Management End | After the management end returns to normal, if the engine environment is unaffected, all engines are expected to automatically recover within 30 seconds, followed by a gradual return of tasks to normal status. |
| Database | After the database recovers from an abnormal state (most nodes are normal), and both the management end and engine environment are normal, a comprehensive recovery is expected within 1 minute. All management ends and engines will automatically restart, and tasks will gradually resume. |

## Resource Monitoring and Management

To effectively manage and maintain the operation of the TapData system, ensuring the continuity and efficiency of data processing tasks, it is recommended to regularly check and maintain machine resources to prevent potential issues:

* **Disk Space**: To maintain system stability, it's advisable to regularly monitor and manage disk space. In case of insufficient disk space, follow these steps for resolution:
  - Safely clear log files in the `logs` folder under the TapData working directory.
  - For disk space occupied by services other than TapData, appropriate investigation and cleanup actions are recommended.
* **Memory**:
  - For the meta-database (e.g., MongoDB intermediary), it's advisable to manage memory usage effectively by adding the parameter `storage.wiredTiger.engineConfig.cacheSizeGB: X`. This setting helps control database memory usage, recommended to be set to about half of the physical memory.
  - For the TapData engine and management end, memory usage can be controlled through the `tapdataJavaOpts` and `tapdataTMJavaOpts` in the configuration file. For example, setting "-Xmx4G -Xms4G" limits the process memory to within 4GB.
* **Network**:
  - Short-term network interruptions usually do not affect the normal operation of TapData tasks. However, long-term network interruptions might cause tasks to error or interrupt. In such cases, it's recommended to troubleshoot network issues as soon as possible and restart related processes to recover tasks.

## Service Exception Handling Strategy

### Engine Exception Recovery

Facing engine service exceptions, our goal is to minimize business impact and quickly restore normal operation. Whether in a single engine deployment or high-availability (HA) deployment, we offer a series of strategies and steps to address engine exceptions.

#### High-Availability (HA) Deployment

In a [high-availability environment](install-tapdata-ha.md), tasks from a single exceptional engine are expected to be gradually taken over by other engines within 10 minutes to minimize task impact, while attempts to automatically recover the exceptional engine will be made in the background.

#### Single Engine Deployment

For single-engine deployments, engine exceptions may cause synchronization tasks to interrupt immediately. If the daemon or operating system processes are running normally and the engine terminates unexpectedly due to OOM (Out of Memory) or other reasons, TapData will typically automatically restart the engine within 30 seconds. If the engine does not restart successfully, manual intervention is required, for example:

- In case of server hardware failure, power outage, or network failure, check the engine status after the environment is restored.
- If the engine fails to start automatically, follow these steps to manually restart:
  1. Enter the TapData working directory: `cd working_directory`.
  2. Check component status: `./tapdata status`.
  3. Start or restart the engine: `./tapdata start backend` or `./tapdata restart backend`.
  4. Confirm engine status: If `TapData Engine PID` is displayed, it indicates successful startup.

### Management End Exception Recovery

Facing management end exceptions, our goal is to ensure business continuity and quickly restore services. Below are the strategies and steps for dealing with management end exceptions.

#### High-Availability (HA) Deployment

In a [high-availability environment](install-tapdata-ha.md), as long as at least one management end is running normally, all tasks will continue to run unaffected. If all management ends are exceptional, the recovery strategy is the same as for a single management end deployment.

#### Single Management End Deployment

In single management end deployments, management end exceptions usually do not immediately affect synchronization tasks. If the daemon or operating system processes are running normally and the management end terminates unexpectedly due to OOM (Out of Memory) or other reasons, TapData will typically automatically restart the management end within 30 seconds. If it does not restart successfully, manual intervention is required, for example:

:::tip

If the management end does not successfully restart after 10 minutes, all engines may stop tasks and exit. In this case, it is recommended to manually restart the management end.

:::

- In case of server hardware failure, power outage, or network failure, check the management end status after the environment is restored.
- If the engine fails to start automatically, follow these steps to manually restart:
  1. Enter the TapData working directory: `cd working_directory`.
  2. Check component status: `./tapdata status`.
  3. Start or restart the management end: `./tapdata start frontend` or `./tapdata restart frontend`.
  4. Confirm startup success: Display of `TapData Frontend PID` indicates completion.

### Database Exception

TapData stores necessary configurations, shared cache, and other information in a designated MongoDB database. In case of database exceptions, the recovery strategy is as follows.

#### High-Availability (HA) Deployment

In a high-availability environment, database exceptions in a minority of nodes usually do not affect system operation. However, if the number of exceptional nodes exceeds half, immediate action is required to repair these nodes to reduce the risk of a complete database failure.

#### Single Database Deployment

For single database deployments, short-term database exceptions generally do not immediately affect services. However, if exceptions last for more than 10 minutes, the management end may exit operation. In this case, the following measures should be taken:

- **Timely Monitoring**: Continuously monitor the database status and immediately start troubleshooting and repairing upon detection of anomalies.
- **Emergency Measures**: If the database has been exceptional for more than 10 minutes, take emergency measures, such as restarting the management end, as detailed in the **Management End Exception** section.

### Process Exception Handling Strategy

#### Engine Performance and Exception Handling

The engine may encounter various performance issues or exceptions during operation. Below are common scenarios and their handling strategies:

- **Memory Exhaustion**: If the process is alive but CPU is nearly full and task monitoring shows continuous garbage collection (GC) activity over 90%, it typically indicates insufficient memory. In this case, you might notice that the task heartbeat is no longer updating or only a few tasks are updating.

  **Solution**: Reduce the number of tasks running on the engine or adjust the maximum memory allocation for the engine, then restart the engine.

- **Task Overload**: If the process is alive, CPU is nearly full, all tasks are running, but GC activity is consistently below 10%, and most tasks are performing poorly, it's likely due to task overload.

  **Solution**: Stop unnecessary tasks or run the engine on a machine with higher CPU configuration, or scale out the engine.

- **Unhealthy Working State**: If the engine process is alive but tasks are not running, and CPU utilization is 0%, it may indicate the engine is in an unhealthy state.

  **Solution**: Restart the engine and send the logs from the `logs` directory of the last few days to the TapData technical support team for help.

#### Management End Stability and Exception Handling

The management end typically does not run data synchronization tasks, so the probability of faults is relatively lower. However, in some cases, resource issues (such as disk, memory, or network problems) may cause service to run abnormally. Additionally, if the management end experiences CPU near full capacity, consider increasing the memory usage limit in the `tapdataTMJavaOpts` configuration file and restart it.

#### Database Exception Handling and Recovery Strategy

TapData stores essential configuration, shared cache, and other information in a designated MongoDB database. It's recommended that the database itself adopts a [replica set deployment](https://www.mongodb.com/docs/manual/replication/) method to ensure its high availability.

#### High-Availability (HA) Deployment

In the recommended high-availability environment, below are common database issues and their solutions:

- **Replica Set Node Status Abnormal**: If the status of nodes in the replica set is not PRIMARY, SECONDARY, or ARBITER for an extended period, contact the database administrator or TapData support team promptly to avoid potential security risks.
- **Replica Set Synchronization Delay**: Check the primary-secondary synchronization delay using the `rs.status()` command. The **[optimeDate](https://www.mongodb.com/docs/v7.0/reference/command/replSetGetStatus/#mongodb-data-replSetGetStatus.members-n-.optimeDate)** field values should be close or differ by a few seconds. If the delay is significant, it indicates a low synchronization rate between nodes. Contact the database administrator or TapData support team for assistance.
- **Insufficient Log Window Size**: Check the log window using `rs.printReplicationInfo()`. If the window time is short (e.g., hours or minutes), it may indicate write overload or improper log configuration. Contact the database administrator or TapData support team for adjustments.

#### Non-HA Deployment

For database deployments with fewer than 3 nodes (e.g., single-node deployment), they should only be used in testing environments and are not suitable for production. Anomalies in such database nodes can lead to data loss or corruption, causing business interruption. Common exception handling strategies include:

- **Disk Exhaustion**:
  - **Manage Disk Exhaustion**: Clear unnecessary files and restart the database.
  - **Data Disk Exhaustion**: Avoid deleting any data files and contact the database administrator or TapData technical support team.
- **Memory Exhaustion**: Adjust the `storage.wiredTiger.engineConfig.cacheSizeGB` configuration, then restart the database.
- **Slow Database Response**: If the database CPU is overloaded or `db.currentOp()` shows abnormal operations, contact the database administrator or TapData technical support team.

In any case of database exceptions, it is advisable to first contact the DBA team or TapData technical support team for resolution, ensuring stable operation and data security of the database.

### Task Exception Handling and Recovery Strategy

When encountering exceptions during task execution, our goal is to diagnose the issue quickly and restore the task. Below are strategies for handling different task exceptions.

#### Task Error Stopped

- **Restart Task**: Try manually restarting the task. If the task resumes and the delay drops to an acceptable range, the alarm can be cleared. Subsequently, send the retained error logs to the support team for further analysis to prevent similar issues in the future.
- **Task Reset**: If the task data volume is small and full synchronization can be completed quickly, choose to retain the target table data and structure, reset the task, and resynchronize; if the task still fails after reset and the temporary unavailability of the data table is acceptable, choose to clear the target table data and structure before resetting the task.
- **Unable to Restart Task**: If the task cannot be restarted (e.g., remains in "Starting" or "Reset Failed" status for a long time), first check the health of the source/target databases and TapData components. If a fault is found, eliminate it before attempting to recover the task; if no apparent fault is found, contact the support team for assistance.

#### Excessive Task Delay

- **Global Delay**: If all tasks experience increased delay, check the engine resources and network conditions. It may be caused by engine overload or network issues. Try adjusting engine configurations or network settings to resolve the issue.
- **Sudden Delay**: If the delay suddenly increases but gradually decreases, it may be due to large batch modifications in the source database. If this occurs frequently, coordinate with the source database users to adjust the timing of large batch modifications.
- **Same Source Task Delay**: If delay increases after adding tasks from the same source, consider source database load issues. Also, consider merging tasks or enabling shared mining, then restart related tasks.
- **Delay Caused by Data Volume Growth**: If the synchronization speed rises and delay increases, it may be due to data volume growth. Try pausing tasks, adjusting target write parameters, such as increasing the number of concurrent threads.

### Task Unable to Operate

If a task cannot be operated (e.g., remains in "Starting", "Stopping", etc., status), try the following steps:

1. Check the status of all TapData components to ensure no anomalies.
2. If components are normal, copy the task to operate in a new task, prioritizing business continuity.
3. After task recovery, contact the support team for further investigation.

### CDC Log Cache Task Exception

If a shared mining task encounters an exception, it may cause all related tasks to enter an incremental synchronization delay state. You can see a yellow exclamation mark on the related task list, indicating that the shared mining task related to this task has stopped running. The troubleshooting process includes:

1. If the CDC Log Cache task is exceptional, promptly start the stopped shared mining task.
2. If starting CDC Log Cache reports an error, avoid resetting to prevent data loss.
3. If it's acceptable to rerun full synchronization, first stop all related tasks, reset CDC Log Cache, then restart normal tasks.
4. If the issue persists, contact our support team for assistance.