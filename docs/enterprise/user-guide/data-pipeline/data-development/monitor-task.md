# Monitoring Data Transformation Tasks

After initiating a data transformation task, the page automatically redirects to the task monitoring page, where you can observe detailed task operations, including Agent status, data synchronization status, task progress, and alarm settings.

:::tip
You can also enter the monitoring page by clicking **Monitor** for the respective task on the task list page.
:::

![](../../../images/monitor_copy_task_overview_cn.png)

## ① Top Control Bar

You can rename the task, view the task start time, and check the Agent status, which includes:

- **CPU Usage**: The ratio of the engine process's CPU usage to the total system CPU.
- **Memory Usage**: The amount of heap memory used over the maximum heap size.
- **GC Throughput**: The percentage of engine runtime not spent in GC, calculated as (Total Engine Runtime - GC Time) / Total Engine Runtime * 100%.

## ② Task Key Indicator Display Bar

This displays basic task information and key monitoring indicators, including sync information, performance indicators, and task time statistics:

- **QPS**: The average number of input and output events processed by the task per second, viewable by the number of events or their size.
- **Incremental Delay**: The delay from when an event is generated in the source database to when it is processed and written into the target by the task, measured in milliseconds. When there are multiple targets, only the maximum incremental delay is counted.
- **Task Statistical Events**: Counts all cumulative events after the task starts, with specifics including:
  - **Updates**: If an insert event output to the target is found to already exist and the write strategy is set to update in such cases, the insert event becomes an update event.
  - **DDL**:
    - Since Tapdata builds tables in the target based on inference results, DDL events are not counted at the source but can be counted at the target node for table creation.
    - If the target is a database type that does not require table creation (like MongoDB), table creation events are not counted.
    - If the target's repeat processing strategy is set to clear target structure and data, two DDL events, DROP TABLE and CREATE TABLE, are counted.

## ③ Node Information Display Area

Hovering over a node displays key indicator information for that node. Clicking the ![](../../../images/node_more_icon.png) icon in the bottom right corner of a node reveals more details:

- **Full Volume Progress**: Displays the full volume progress of that node during the full volume phase.
- **Incremental Timestamp**: Shows the timestamp of incremental logs collected during the incremental phase. The relative time is expressed as (Current Engine Time - Node's Incremental Timestamp). Specific incremental timestamp details appear in a tooltip on hover.
- **Write Time**: The time taken to write data to the target.
- **QPS**: The QPS of that node.
- **Cumulative Input Events**: The number of events input to that node from the previous node or source database.
- **Cumulative Output Events**: The number of events output from that node to the next node or target database.
- **Processing Time**: The time taken by that node to process data.

## ④ <span id="error-code">Task Log Display Area</span>

Clicking the ![](../../../images/view_log_icon.png) icon at the top of the page reveals the task log display area, where you can view the task's progress, logs, running records, alarm list, and related tasks. In the **Logs** tab, logs can be filtered by keyword, period, and level, and downloaded for local analysis.

Moreover, Tapdata supports displaying relevant error codes for common issues.

![Error Code](../../../images/error_log_code.png)

Clicking the error code opens a dialog box with detailed causes and solutions. For more information, see [Task Error Codes and Solutions](../../../troubleshooting/error-code.md).

![Error Code Detail](../../../images/error_code_pdk10003.png)

## ⑤ Task/Alarm Settings Area

Clicking the ![](../../../images/task_setting_icon.png) icon at the top of the page displays the (non-modifiable) task settings and alarm settings. You can set alarm rules for:

- Task runtime errors
- Task completion notifications
- Incremental phase start notifications
- Task stop notifications
- Incremental delay alarms