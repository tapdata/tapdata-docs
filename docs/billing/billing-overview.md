# Billing Overview
import Content from '../reuse-content/_cloud-features.md';

<Content />

This article introduces billing information such as billing items, billing methods and price descriptions in TapData Cloud.

:::tip

If you choose the TapData Enterprise, it is paid annually and can be deployed to your local data center, suitable for scenarios with strict requirements on data sensitivity or network isolation. Before making a purchase, you can [apply for a trial](https://tapdata.net/tapdata-on-prem/demo.html).

:::

## Billing method

TapData Cloud charges based on the **specifications** and **number** of Agent instances you want to subscribe. You will get 1 Agent instance upon completing account registration, and you have the option to purchase additional Agent instances through monthly, annual, consecutive monthly, or consecutive annual subscriptions to meet your business requirements.

There are several subscription options available for TapData Cloud:

- **One Month Only**: This is a one-time purchase of a one-month service. The subscription will not automatically renew after the expiration and can be manually renewed if desired.
- **One Year Only**: This option allows for a one-time purchase of a one-year service. The subscription will not automatically renew after the expiration and can be manually renewed when needed.
- **Monthly**: With the monthly subscription option, you pay a monthly fee. The subscription fee for the next month will be automatically deducted before the due date, ensuring uninterrupted service.
- **Annually**: The annual subscription option requires paying the subscription fee once a year. Similar to the monthly option, the subscription fee for the next year will be automatically deducted before the due date, providing convenience and continuity.

:::tip

- When you select the recurring monthly or annual billing method, TapData Cloud will automatically deduct the subscription fee for the next billing cycle on the expiration date of each period. You can conveniently review the charge details in the **user center**, allowing you to stay informed about the payment information and have a clear understanding of the billing process for your TapData Cloud subscription.
- When selecting a **fully managed** instance, you will also need to pay for traffic based on the amount of synchronized data (charged monthly)

:::

## Payment Methods

You can pay for TapData Cloud by credit card.



## <span id="spec">Agent Specifications and Descriptions</span>

Please note that the performance of the following tables is provided for reference purposes only, as the data flow can be influenced by various factors such as the load performance of the Agent's machine, network transmission delay, network bandwidth, and the workload of the source and target databases.

<table>
<thead>
  <tr>
    <th rowspan="2">Specifications</th>
    <th rowspan="2">Running Tasks</th>
    <th colspan="2">Host hardware recommendation ①</th>
    <th rowspan="2">Performance Reference (RPS) </th>
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

① In order to ensure the maximum data flow performance, it is recommended that the machine deployed by the Agent (referred to as the **host** in the above table) has sufficient resources such as computing, storage and bandwidth. For more information, see [Install Agent](../installation/install-tapdata-agent.md).

:::

