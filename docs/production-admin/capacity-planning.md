# Capacity Planning

import Content from '../reuse-content/_enterprise-features.md';

<Content />

This document provides a comprehensive capacity planning reference to help users effectively allocate resources based on specific requirements in their environment. The actual system requirements may vary due to workload characteristics, network conditions, server specifications, and other factors. Therefore, we recommend conducting performance tests in the specific environment to obtain more accurate configuration data.

:::tip

If you are using the Tapdata Cloud, please refer to the [Instance Specifications](../billing/billing-overview#spec).

:::

## Terminology

* **Data Pipeline**: A data pipeline can replicate one or multiple tables from a source database to a target database. During the synchronization process, data can also be [transformed and processed](../user-guide/data-pipeline/data-development/process-node.md) (e.g., data filtering) to ensure that the target database receives accurate and optimized data.
* **RPS (Records Per Second)**: A metric that measures data transfer speed and system processing capability, reflecting the number of records the system processes per second.

## Pipeline Resource Requirements

* **Memory Requirements**: 
`(read_batch * 8 + 10240 + write_batch * (2 + threads)) * (10 * row_size + 5KB) + log buffer ≈ 1GB / 1KB row size`

  :::tip
  The read and write batch sizes can be adjusted in the [data pipeline configuration](../user-guide/data-pipeline/copy-data/manage-task.md) through the basic parameters of the source and target nodes.
  :::

* **CPU Requirements**: The requirements for computing resources vary under different business load scenarios, as a general reference:
  - **Total Threads**: `Server Cores * 2`
  - **Average Threads Required per Data Pipeline**: 1 ~ 8
  - **CPU Cores Required per Data Pipeline**: 0.5 ~ 4

## Quick Reference Table

<table>
<thead>
  <tr>
    <th>Category</th>
    <th>Business Load</th>
    <th>CPU Cores Required</th>
    <th>Memory Required</th>
    <th>Number of Pipelines per 16-core Server</th>
  </tr></thead>
<tbody>
  <tr>
    <td rowspan="2">Full Synchronization</td>
    <td>Large Data Volume (Table Data &gt; 1 TB)</td>
    <td>4</td>
    <td rowspan="5">1 GB per 1KB row size</td>
    <td>8</td>
  </tr>
  <tr>
    <td>Medium/Small Data Volume (Table Data &lt; 1TB)</td>
    <td>2</td>
    <td>16</td>
  </tr>
  <tr>
    <td rowspan="3">Incremental Replication</td>
    <td>High Throughput (RPS &gt; 10,000)</td>
    <td>2</td>
    <td>8</td>
  </tr>
  <tr>
    <td>Medium Throughput (1,000 ~ 9,999 RPS)</td>
    <td>1</td>
    <td>16</td>
  </tr>
  <tr>
    <td>Low Throughput (RPS &lt; 1,000)</td>
    <td>0.5</td>
    <td>32</td>
  </tr>
</tbody>
</table>
## High Availability Configuration Recommendations

In [High Availability (HA) deployment](install-tapdata-ha.md) scenarios, at least two TapData instances are typically deployed to ensure failover and business continuity. During failover, all pipelines from one instance will automatically transfer to the other instance. In this case, the remaining instance will bear additional load. To avoid excessive load, it is recommended to configure the number of pipelines at 50% ~ 75% of the server capacity to maintain the necessary performance buffer.

For example, if a 16-core server is configured to run 16 pipelines, in an HA setup, it is advisable to run only 8 ~ 12 pipelines to ensure system stability and high availability.

## Performance Monitoring and Adjustment

* [Real-Time Task Monitoring](../user-guide/data-pipeline/copy-data/monitor-task.md): Observe task operation details, such as synchronization rate and latency during full/incremental phases, through the task monitoring page.
* [Cluster Metrics Monitoring](../user-guide/manage-system/manage-cluster.md): Monitor the operating status of all components within the cluster and the number of external connections through the cluster management page. Use third-party performance monitoring tools to track CPU, memory, network, and other resource usage of the cluster.

Based on the above monitoring data, dynamically adjust pipeline configuration and resource allocation to ensure the system remains stable and efficient under high load conditions.