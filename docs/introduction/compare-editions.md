# Editions Comparison
import Content from '../reuse-content/_all-features.md';

<Content />

TapData offers three different editions of its product: TapData Cloud, TapData Enterprise, and TapData Community, catering to different user needs and scenarios. Below is a detailed introduction to their features and applicable scenarios.

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## Editions Introduction

```mdx-code-block
<Tabs className="unique-tabs">
<TabItem value="TapData Enterprise">
```

TapData Enterprise supports deployment in local data centers, suitable for scenarios with strict requirements on data sensitivity or network isolation. It provides enterprise-level data integration solutions.

**Features:**

- **Local Deployment**: Supports deployment in the enterprise's local data center, meeting data security and compliance requirements.
- **Full Control**: Enterprises have full control over data storage, processing, and transmission, ensuring data privacy.
- **High Performance**: Optimized for large-scale data integration tasks, offering efficient data synchronization and transformation functions.
- **Enterprise Support**: Provides professional technical support and customized services to meet the specific needs of enterprises.

**Applicable Scenarios:**

- Scenarios with strict requirements on data sensitivity or network isolation, such as financial institutions, government departments, or large enterprises that want full control over their data.
- Scenarios requiring high data processing performance and quick scalability, such as real-time analysis and transaction systems.
- Enterprises wishing to use existing hardware to deploy services, easily achieving horizontal scalability to enhance overall performance.

</TabItem>

<TabItem value=" TapData Cloud">

TapData Cloud adopts a SaaS (Software as a Service) model. Register for a [TapData Cloud account](https://cloud.tapdata.net/console/v3/) to quickly get started without the need to deploy and maintain infrastructure. It is suitable for scenarios requiring quick deployment and low upfront investment.

**Features:**

- **Quick Deployment**: No complex installation and configuration; get up and running in minutes.
- **Low Upfront Investment**: No need to purchase and maintain hardware; provides one free Agent instance and pay-as-you-go [pricing](../billing/billing-overview.md).
- **Automated Operations**: The system automatically updates and maintains versions, allowing you to focus on business development.
- **High Availability**: Cloud architecture provides high availability and scalability, ensuring the continuity and security of data integration services.

**Applicable Scenarios:**

- In the early stages of exploring data integration and synchronization, requiring a low-cost, high-efficiency data integration platform.
- Scenarios requiring rapid adaptation to business scale expansion and flexible response to load changes without significant investment in infrastructure.

</TabItem>

<TabItem value=" TapData Community">

TapData Community is an open-source data integration platform that provides basic data synchronization and transformation functions. It supports one-click deployment via Docker. As projects or enterprises grow, you can seamlessly upgrade to TapData Cloud or TapData Enterprise for more advanced features or service support.

**Features:**

- **Open Source & Free**: Free to use, with open-source community support; users can freely customize and extend functionalities.
- **Quick Deployment**: One-click deployment via Docker simplifies the installation process.
- **Basic Functions**: Provides basic data synchronization and transformation functions to meet initial data integration needs.
- **Smooth Upgrade**: Users can smoothly upgrade to TapData Cloud or TapData Enterprise based on project needs to gain more advanced features and service support.

**Applicable Scenarios:**

- Initial exploration and implementation of data integration projects.
- Low-cost initiation of data integration projects.
- Developers and data enthusiasts learning and practicing through the open-source platform.

</TabItem>

</Tabs>

## Features Comparison

Building on the free offerings of TapData Community for developers, TapData Enterprise and TapData Cloud provide more powerful features and characteristics to enhance data flow efficiency and meet various scenario requirements.

<table><thead>
  <tr>
    <th>Category</th>
    <th>Feature</th>
    <th>TapData Enterprise</th>
    <th>TapData Cloud</th>
    <th>TapData Community</th>
  </tr></thead>
<tbody>
  <tr>
    <td rowspan="4">Basic Features</td>
    <td><a href="../quick-start/install">Deployment Method</a></td>
    <td>Local</td>
    <td><a href="https://cloud.tapdata.net/console/v3/">Register and Use</a></td>
    <td>Local</td>
  </tr>
  <tr>
    <td><a href="../production-admin/install-tapdata-ha">Horizontal Scaling of Processing Engine</a></td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
  </tr>
  <tr>
    <td><a href="../prerequisites">Data Source Connection Management</a></td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
<tr>
  <td><a href="../prerequisites/supported-databases">Supported Databases</a></td>
  <td><span style={{ color: 'blue' }}>100+</span></td>
  <td><span style={{ color: 'blue' }}>100+</span></td>
  <td><span style={{ color: 'grey' }}>16</span></td>
</tr>
  <tr>
    <td rowspan="5">Data Pipeline</td>
    <td><a href="../user-guide/copy-data">Data Replication</a></td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td><a href="../user-guide/data-development">Data Transformation</a></td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td><a href="user-guide/data-development/create-materialized-view">Real-time Materialized Views</a></td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td><a href="../user-guide/data-development/process-node">Table Processing Nodes</a></td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td><a href="../user-guide/copy-data/create-task#310-table-model">Node Alerts</a></td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
  </tr>
  <tr>
    <td rowspan="4"><a href="../user-guide/real-time-data-hub">Real-time Data Center</a></td>
    <td><a href="../user-guide/real-time-data-hub/etl-mode">Data Integration Platform Mode</a></td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
  </tr>
  <tr>
    <td><a href="../user-guide/real-time-data-hub/daas-mode">Data Service Platform Mode</a></td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
  </tr>
  <tr>
    <td><a href="../user-guide/real-time-data-hub/daas-mode/daas-mode-dashboard">Table Lineage</a></td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
  </tr>
  <tr>
    <td><a href="../user-guide/real-time-data-hub/daas-mode/daas-mode-dashboard">Switch Directory View</a></td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
  </tr>
  <tr>
    <td rowspan="6">Advanced Features</td>
    <td><a href="../user-guide/verify-data">Data Verification</a></td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
  </tr>
  <tr>
    <td><a href="../user-guide/advanced-settings/share-cache">Shared Cache</a></td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td><a href="../user-guide/advanced-settings/manage-function">Function Management</a></td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td><a href="../user-guide/advanced-settings/custom-node">Custom Nodes</a></td>
    <td>✅</td>
    <td>➖</td>
    <td>✅</td>
  </tr>
  <tr>
    <td><a href="../user-guide/advanced-settings/share-mining">Shared Mining</a></td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
  </tr>
  <tr>
    <td><a href="../best-practice/heart-beat-task">Heartbeat Task Management</a></td>
    <td>✅</td>
    <td>✅</td>
    <td>➖</td>
  </tr>
  <tr>
  <td rowspan="3">Data API Services</td>
  <td><a href="../user-guide/data-service/create-api-service">API Publishing</a></td>
  <td>✅</td>
  <td>➖</td>
  <td>➖</td>
  </tr>
  <tr>
  <td><a href="../user-guide/data-service/audit-api">API Audit</a><a href="../user-guide/data-service/monitor-api-request">Statistics</a></td>
  <td>✅</td>
  <td>➖</td>
  <td>➖</td>
  </tr>
  <tr>
  <td><a href="../user-guide/data-service/create-api-service#release330-export-api">API Documentation Generation</a></td>
  <td>✅</td>
  <td>➖</td>
  <td>➖</td>
  </tr>
  <tr>
  <td rowspan="5">Platform Management</td>
  <td><a href="../user-guide/manage-system/manage-role">Role and Permission Management</a></td>
  <td>✅</td>
  <td>➖</td>
  <td>➖</td>
  </tr>
  <tr>
  <td><a href="../user-guide/manage-system/manage-cluster">Cluster Management</a></td>
  <td>✅</td>
  <td>Not Required</td>
  <td>➖</td>
  </tr>
  <tr>
  <td><a href="../user-guide/manage-system/manage-cluster">Component Management</a></td>
  <td>✅</td>
  <td>✅</td>
  <td>➖</td>
  </tr>
  <tr>
  <td><a href="../user-guide/manage-system/manage-external-storage">External Storage Management</a></td>
  <td>✅</td>
  <td>✅</td>
  <td>✅</td>
  </tr>
  <tr>
  <td><a href="../user-guide/other-settings/system-settings">System Settings</a></td>
  <td>✅</td>
  <td>➖</td>
  <td>➖</td>
  </tr>
  <tr>
  <td rowspan="2">Monitoring and Alerts</td>
  <td><a href="../user-guide/notification">Custom Notifications</a></td>
  <td>✅</td>
  <td>✅</td>
  <td>✅</td>
  </tr>
  <tr>
  <td><a href="../../user-guide/notification">Custom Monitoring</a></td>
  <td>✅</td>
  <td>✅</td>
  <td>➖</td>
  </tr>
  <tr>
  <td rowspan="2">Technical Support</td>
  <td>Support Methods</td>
  <td>Online Support, Tickets</td>
  <td>Online Support, Tickets</td>
  <td><a href="https://20778419.s21i.faiusr.com/4/2/ABUIABAEGAAg-JPfhwYonMrzlwEwZDhk.png">WeChat Group</a>, <a href="https://join.slack.com/t/tapdatacommunity/shared_invite/zt-1biraoxpf-NRTsap0YLlAp99PHIVC9eA">Slack</a>, <a href="https://github.com/tapdata/tapdata/issues">GitHub Issues</a></td>
  </tr>
  <tr>
  <td>Support Team</td>
  <td>Senior Expert Engineers</td>
  <td>Expert Engineers</td>
  <td>Engineers/Community Members</td>
  </tr>
  </tbody></table>