# Enable Real-Time Data Hub

import Content from '../../../reuse-content/_enterprise-and-cloud-features.md';

<Content />

Due to digital transformation, the presence of isolated data, data fragmentation, or data silos has emerged as a significant challenge. Moreover, there is a growing demand for data in business operations. However, traditional data delivery methods pose limitations, such as lengthy processes and substantial resource requirements. This situation calls for a solution that enables organizations to swiftly establish data flow pipelines and unlock the value of their data.

TapData Cloud's Real-Time Data Hub offers a powerful solution. By synchronizing data from diverse business systems to a unified platform cache layer, it enables the consolidation of data sources and facilitates seamless data processing and analysis. This unified and real-time data platform helps enterprises overcome data silos and promotes data-driven decision-making, ultimately enhancing their competitiveness in the market.


```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## Background

In today's digital age, one of the greatest challenges for enterprises is how to efficiently process and analyze vast amounts of real-time data. Traditional methods of data handling, such as batch processing or manually writing data ETL scripts, often fail to provide timely data analysis and processing. This limitation restricts businesses' ability to make prompt decisions in a rapidly changing market environment. Moreover, performing data operations directly on production databases can impact their stability and security, affecting overall business efficiency.

The introduction of a Real-Time Data Hub aims to resolve these issues. It provides an efficient and reliable platform that helps businesses process and analyze data in real time, quickly responding to market and customer demands. For example:

* By integrating TapData's Real-Time Data Hub, a company successfully built a data dashboard to monitor cloud-based user behavior. They streamed database data in real time to TapData’s platform cache layer, allowing real-time processing of cache layer data to generate key business metrics without affecting the source databases. This provided the freshest data for necessary BI reports, offering immediate business insights and analysis.
* In another case, a retail enterprise utilized the Real-Time Data Hub to build a data portal. This portal enabled front-end business developers to quickly discover and process data through self-service, allowing them to build and publish APIs. Using TapData's data catalog, they could rapidly locate necessary data, enabling self-service processing and modeling. This not only enhanced development efficiency but also reduced reliance on specialized data teams, saving the enterprise substantial costs.

These cases collectively demonstrate how the Real-Time Data Center can help businesses overcome the limitations of traditional data handling, offering more efficient and flexible data management solutions. Through real-time data processing, enterprises can better grasp market dynamics, quickly respond to customer needs, and maintain a competitive edge.

## <span id="intro">Real-Time Data Hub Introduction</span>

With the increase in the tasks carried by the source database, in order to minimize the impact of data extraction on the source database and adhere to the organization's concept of data hierarchical governance, TapData organizes the data service platform in a layered manner based on the data flow order. This hierarchical arrangement ensures efficient and structured data processing, allowing for better data management and seamless integration across different systems.

![Data Service Platform Architecture](../../../images/ldp_architecture.png)

| Hierarchy | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------- |------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Sources** | TapData consolidates data sources from various business systems into a centralized data source layer, which serves as the initial step in bridging data silos. This abstraction of data sources enables a unified and streamlined approach to accessing and utilizing data. For more detailed instructions, please refer to the [Connect Data Sources](../../../prerequisites/README.md) section for comprehensive information on establishing connections with your data sources. |
| **FDM (Foundation Data Model)** | By synchronizing the table from the source database to the **FDM** beforehand, the data can be readily accessed by the business through the FDM, thus eliminating the need to directly read or manipulate the data in the source database, such as performing union operations, during data processing. This approach significantly minimizes the impact on the business operations of the source database.                                         |
| **MDM (Master Data Model)** | If there is a need for extensive customization of data processing or operations, such as generating a wide table, it is possible to extract the data table from the FDM and perform the required operations within the **MDM**. This allows for the generation of model data that can be used in the final business processes.                                                                                                                      |
| **Targets & Service** | TapData provides a centralized platform that aggregates and presents various data sources, allowing them to be utilized as targets for data processing. This enables the provision of processed data to the business, facilitating the creation of a unified data service platform for enterprises.                                                                                                                                                                                |



## Procedure

In the Real-Time Data Hub, we need to prepare a MongoDB database as a data repository for the Data Cache Layer and Data Processing Layer.

1. [Log in to TapData Platform](../../log-in.md).

2. In the left navigation panel, click **Real-Time Data Hub**.

3. Choose the steps based on your product series:

<Tabs className="unique-tabs">
<TabItem value="TapData Cloud" default>

1. View the introduction to the Real-Time Data Center and scroll down to the bottom of the page, click **Subscribe Storage**.

2. Choose the provider for MongoDB Atlas services, deployment region, specification, and subscription period as follows:
   ![Purchase MongoDB Atlas and Storage](../../../images/purchase_storage.png)

   * **Cloud Provider**: Currently supported: Google Cloud.
   * **Region**: Select the deployment region. Choose a region close to your data source for minimal network latency.
   * **Specification**: Pick the **specification** and **storage size** for MongoDB Atlas.
     :::tip
     TapData offers a free trial option with specifications that you can select. You can choose the **Free Trial** option to get started.
     :::

     <details><summary>Specifications Description</summary>
     <ul>
     <li>M10: 2 vCPUs, 2 GB RAM</li>
     <li>M20: 2 vCPUs, 4 GB RAM</li>
     <li>M30: 2 vCPUs, 8 GB RAM</li>
     <li>M40: 4 vCPUs, 16 GB RAM</li>
     <li>M50: 8 vCPUs, 32 GB RAM</li>
     <li>M60: 16 vCPUs, 64 GB RAM</li>
     </ul>
     </details>
   * **Subscription Period**: Select the desired subscription <span id="atlas">period</span>.
   <details><summary>Want to use an existing MongoDB Atlas?</summary>
     At the top of the page, click on <b>click here to privede the connection information</b>, and fill in the MongoDB Atlas connection URL.
   </details>

3. Click **Subscription**, on the following page, carefully review and confirm the specifications you wish to purchase. Ensure that the selected billing method aligns with your preferences. Additionally, verify that the email address provided is accurate and where you would like to receive the bill.

4. Once you have double-checked all the information, click on the **Pay Now** button to proceed with the purchase.

5. You will redirected to payment page. Please follow the instructions on the payment page to complete the payment process.

   After the payment is completed, the page will return to the **Real-Time Data Hub** page. Once the instance is automatically deployed, the page will be organized and displayed according to the [hierarchy we introduced before](#intro). For information on how to use it, see [Real-Time Data Hub Dashboard Introduction](daas-mode-dashboard.md).

</TabItem>

<TabItem value="TapData Enterprise">

1. Prepare a MongoDB database (version 4.0 or above), then [connect this database](../../../prerequisites/on-prem-databases/mongodb.md) on the TapData platform, using it as the storage engine for the platform cache layer/platform processing layer. Deployment details can be seen in [deployment examples](../../../administration/production-deploy/install-replica-mongodb.md) or on the [MongoDB official website](https://www.mongodb.com/docs/manual/administration/install-on-linux/).

   :::tip

   To ensure business high availability, it is recommended that MongoDB uses a replica set/sharded cluster architecture. Additionally, based on the data scale of the source layer, sufficient storage space and Oplog space (recommended 14 days or more) should be reserved.

   :::

2. On the right side of the TapData platform page, click the ![setting_icon](../../../images/setting_icon.png) icon.

3. Select Data Services Platform Mode, then set the storage engine used for the platform cache layer/platform processing layer, which we have prepared as the MongoDB data source.

   ![Enable Data Services Platform Mode](../../../images/enable_daas_mode.png)

   :::tip

   Once the storage engine is selected and saved, it cannot be modified later, so please operate with caution.

   :::

4. Click **Save**.

</TabItem>
</Tabs>

