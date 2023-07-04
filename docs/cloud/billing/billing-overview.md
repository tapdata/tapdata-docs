# Billing Overview

This article introduces billing information such as billing items, billing methods and price descriptions in Tapdata Cloud.

## Billing method

Tapdata Cloud charges based on the **specifications** and **number** of Agent instances you want to subscribe. You will get 1 Agent instance upon completing account registration, and you have the option to purchase additional Agent instances through monthly, annual, consecutive monthly, or consecutive annual subscriptions to meet your business requirements.

There are several subscription options available for Tapdata Cloud:

- **One Month Only**: This is a one-time purchase of a one-month service. The subscription will not automatically renew after the expiration and can be manually renewed if desired.
- **One Year Only**: This option allows for a one-time purchase of a one-year service. The subscription will not automatically renew after the expiration and can be manually renewed when needed.
- **Monthly**: With the monthly subscription option, you pay a monthly fee. The subscription fee for the next month will be automatically deducted before the due date, ensuring uninterrupted service.
- **Annually**: The annual subscription option requires paying the subscription fee once a year. Similar to the monthly option, the subscription fee for the next year will be automatically deducted before the due date, providing convenience and continuity.

:::tip

When you select the recurring monthly or annual billing method, Tapdata Cloud will automatically deduct the subscription fee for the next billing cycle on the expiration date of each period. You can conveniently review the charge details in the **user center**, allowing you to stay informed about the payment information and have a clear understanding of the billing process for your Tapdata Cloud subscription.

:::

## Payment Methods

You can pay for Tapdata Cloud by credit card.

## Product Pricing

Please select the appropriate Agent specifications according to the amount of data and the number of tasks, the specifications are priced as follows, the unit is dollar($):

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="unique-tabs">
    <TabItem value=" full-managed" label="Fully-Managed Mode" default>
<p>In Fully-Managed Mode, Tapdata Cloud will provide the necessary computing/storage resources for running the Agent and deploys it automatically. It offers unified operational maintenance and resource monitoring to enhance operational reliability, enabling one-click delivery and usage, allowing users to focus on their core business.</p>

<table>
<thead>
  <tr>
    <th>Specifications</th>
    <th>Monthly</th>
    <th>One Month Only</th>
    <th>Annually</th>
    <th>One Year Only</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>LARGE</td>
    <td>220</td>
    <td>232</td>
    <td>2,508</td>
    <td>2,508</td>
  </tr>
  <tr>
    <td>XLARGE</td>
    <td>440</td>
    <td>464</td>
    <td>5,016</td>
    <td>5,016</td>
  </tr>
  <tr>
    <td>2XLARGE</td>
    <td>880</td>
    <td>928</td>
    <td>10,032</td>
    <td>10,032</td>
  </tr>
  <tr>
    <td>3XLARGE</td>
    <td>1,320</td>
    <td>1,392</td>
    <td>15,048</td>
    <td>15,048</td>
  </tr>
  <tr>
    <td>4XLARGE</td>
    <td>1,764</td>
    <td>1,856</td>
    <td>20,064</td>
    <td>20,064</td>
  </tr>
  <tr>
    <td>8XLARGE</td>
    <td>3,528</td>
    <td>3,172</td>
    <td>40,128</td>
    <td>40,128</td>
  </tr>
</tbody>
</table>
</TabItem>
   <TabItem value="semi-managed" label="Semi-Managed Mode">
   <p>In Semi-Managed Mode,  you need to provide the equipment for deploying and maintaining the Agent, which allows for the full utilization of existing hardware resources. This approach enables you to benefit from lower prices while further enhancing security.</p>
    <table>
<thead>
  <tr>
    <th>Specifications</th>
    <th>Monthly</th>
    <th>One Month Only</th>
    <th>Annually</th>
    <th>One Year Only</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>SMALL</td>
    <td colspan="4">Free (1 Agent Instance)&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>LARGE</td>
    <td>110</td>
    <td>116</td>
    <td>1,254</td>
    <td>1,254</td>
  </tr>
  <tr>
    <td>XLARGE</td>
    <td>220</td>
    <td>232</td>
    <td>2,508</td>
    <td>2,508</td>
  </tr>
  <tr>
    <td>2XLARGE</td>
    <td>440</td>
    <td>464</td>
    <td>5,016</td>
    <td>5,016</td>
  </tr>
  <tr>
    <td>3XLARGE</td>
    <td>660</td>
    <td>696</td>
    <td>7,524</td>
    <td>7,524</td>
  </tr>
  <tr>
    <td>4XLARGE</td>
    <td>882</td>
    <td>928</td>
    <td>10,032</td>
    <td>10,032</td>
  </tr>
  <tr>
    <td>8XLARGE</td>
    <td>1,764</td>
    <td>1,856</td>
    <td>20,064</td>
    <td>20,064</td>
  </tr>
</tbody>
</table>
   </TabItem>
  </Tabs>




## Agent Specifications and Descriptions

Please note that the performance of the following tables is provided for reference purposes only, as the data flow can be influenced by various factors such as the load performance of the Agent's machine, network transmission delay, network bandwidth, and the workload of the source and target databases.

<table>
<thead>
  <tr>
    <th rowspan="2">Specifications</th>
    <th rowspan="2">Running Tasks</th>
    <th colspan="2">Host hardware recommendation ①</th>
    <th rowspan="2">Performance Reference (QPS) </th>
  </tr>
  <tr>
    <th>CPU cores</th>
    <th>RAM</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>SMALL</td>
    <td>3</td>
    <td>1 core</td>
    <td>4 GB</td>
    <td>2,000</td>
  </tr>
  <tr>
    <td>LARGE</td>
    <td>5</td>
    <td>2 cores</td>
    <td>6 GB</td>
    <td>4,000</td>
  </tr>
  <tr>
    <td>XLARGE</td>
    <td>10</td>
    <td>4 cores</td>
    <td>10 GB</td>
    <td>8,000</td>
  </tr>
  <tr>
    <td>2XLARGE</td>
    <td>20</td>
    <td>8 cores</td>
    <td>19 GB</td>
    <td>16,000</td>
  </tr>
  <tr>
    <td>3XLARGE</td>
    <td>30</td>
    <td>12 cores</td>
    <td>28 GB</td>
    <td>24,000</td>
  </tr>
  <tr>
    <td>4XLARGE</td>
    <td>40</td>
    <td>16 cores</td>
    <td>37 GB</td>
    <td>32,000</td>
  </tr>
  <tr>
    <td>8XLARGE</td>
    <td>80</td>
    <td>32 cores</td>
    <td>72 GB</td>
    <td>64,000</td>
  </tr>
</tbody>
</table>




:::tip

① When purchasing Agent instances, if you choose the **Semi-Managed Mode**, you will need to provide the host machine for [deploying the Agent](../quick-start/install-agent/README.md). Additionally, to ensure maximum data transfer performance, it is essential to ensure that the host machine has sufficient computing, storage, and bandwidth resources. On the other hand, if you choose the **Fully-Managed Mode**, Tapdata Cloud will provide all the necessary computing and storage resources.

:::

