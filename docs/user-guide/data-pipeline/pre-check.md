# Task Pre-check

import Content from '../../reuse-content/_all-features.md';

<Content />

To ensure the normal operation of data replication/development tasks, when you save or start a task, TapData will conduct a pre-check based on node configuration and data source characteristics. Simultaneously, it prints the check results through logs, helping you avoid the risk of task execution failure and manage tasks more efficiently.

## Pre-check Logs Example

After the data replication/development task configuration is completed, execute save or start the task, and the pre-check information will be displayed at the bottom of the page. Relevant examples are as follows:

![Task Pre-check](../../images/task_pre_check.png)

## Task Settings Check

| Check Item                 | Log Example                                                  |
| -------------------------- | ------------------------------------------------------------ |
| Task Sync Type Check       | 【ERROR】【2023-01-01 00:00:00】【Task Sync Type Check】【Node-Source】The sync type (Full) of this node does not match the task sync type (Full + Incremental), the task cannot start normally, please check the relevant configuration. |
| Default Timezone Check     | 【WARN】【2023-01-01 00:00:00】【Default Timezone Check】The default timezone connected by the source node (Node-Source) is inconsistent with the default timezone connected by the target node (Node-Target), which may cause inconsistency in synchronized data. |
| Task Model Inference Check | 【ERROR】【2023-01-01 00:00:00】【Task Model Inference Check】Task configuration model inference failed, the task cannot start normally, please check the relevant issues. <br /> { <br />Node Name 1: Table Name 1: Field Name 1; <br />Node Name 2: Table Name 2: Field Name 2 <br />} |

## Source Node Check

| Check Item                     | Log Example                                                  |
| ------------------------------ | ------------------------------------------------------------ |
| Source Connection Status Check | 【ERROR】【2023-01-01 00:00:00】【Source Connection Status Check】【Node-Source】The data connection of this node is unavailable, the task cannot start normally, please check the relevant issues. { Data source login permission check failed: Wrong username or password } |
| Source Model Load Check        | 【ERROR】【2023-01-01 00:00:00】【Source Model Load Check】【Node-Source】The data model loading of this node failed, the task cannot start normally, please check the relevant issues. <br />{ Table Name 1; <br />Table Name 2 <br />} |
| Source Type Mapping Check      | 【WARN】【2023-01-01 00:00:00】【Source Type Mapping Check】【Node-Source】【Personinfo】【id】The data type of this field is temporarily unsupported, and will be ignored during data reading. |

## Target Node Check

| Check Item                     | Log Example                                                  |
| ------------------------------ | ------------------------------------------------------------ |
| Target Connection Status Check | 【ERROR】【2023-01-01 00:00:00】【Target Connection Status Check】【Node-Target】The data connection of this node is unavailable, the task cannot start normally, please check the relevant issues. { Data source login permission check failed: Wrong username or password } |
| Target Model Load Check        | 【ERROR】【2023-01-01 00:00:00】【Target Model Load Check】【Node-Target】The data model loading of this node failed, the task cannot start normally, please check the relevant issues. { Table Name 1; Table Name 2 } |
| Target Type Mapping Failure    | 【WARN】【2023-01-01 00:00:00】【Target Type Mapping Check】【Node-Target】【Personinfo】【id】The data type of this field is temporarily unsupported, and will be ignored during data writing. |
| Target Type Mapping Warning    | 【WARN】【2023-01-01 00:00:00】【Source Type Mapping Check】【Node-Target】【Personinfo】【pic】The target data type mapped by this field is a system-guessed result, which may be biased. Please check and confirm whether it meets the expectations, and adjust accordingly. |

## Scenario-based Check

| Category    | Check Item                       | Explanation                                                  |
| ----------- | -------------------------------- | ------------------------------------------------------------ |
| Source Node | MariaDB Timezone Check           | 【WARN】【2023-01-01 00:00:00】【MariaDB Timezone Check】【Node-MariaDB】The timezone setting in the MariaDB connection configuration only takes effect in the Full phase and is invalid in the Incremental phase. |
| Target Node | Oracle NOT NULL Constraint Check | 【WARN】【2023-01-01 00:00:00】【Oracle NOT NULL Constraint Check】【Node-Oracle】【Personinfo】【id】When writing NOT NULL fields with Oracle data source as the target, "" cannot be processed. |
| Target Node | CK Primary Key Type Check        | 【WARN】【2023-01-01 00:00:00】【CK Primary Key Type Check】【Node-CK】【Personinfo】When using ClickHouse data source as the target and the primary key data type is floating-point, this data table does not support the processing of update delete events. |