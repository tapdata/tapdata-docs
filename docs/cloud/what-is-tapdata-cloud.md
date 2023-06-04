---
sidebar_position: 1
slug: /
---

# What is Tapdata Cloud?

Tapdata Cloud is a real-time data platform provided by Tapdata that integrates data replication and data development. It can provide millisecond-level real-time data synchronization and data fusion services in scenarios that span across clouds, regions, and multiple types of databases.

![](images/tapdata_cloud.gif)

## Why choose Tapdata Cloud?

Compared with traditional data migration/synchronization tools, Tapdata Cloud can provide a rich, easy-to-use, secure, and reliable data flow service to improve data development efficiency.

* **[Rich data sources support](introduction/supported-databases.md)**

  Support for mainstream data sources, including commercial databases, open source databases, cloud databases, SaaS platform data sources, file data sources, and custom data sources.

* **[Real time data capture & sync, data freshness guaranteed](quick-start/create-task.md)**

  Tapdata Cloud focuses on log-based real-time data integration solutions. By adapting various relational and non-relational databases one by one, it can realize real-time incremental event analysis with a delay of seconds and a performance of tens of thousands of levels. The delay is low and almost There is no intrusion into the source database. Tapdata Cloud has completed the collection and application of table structure changes (DDL) for common database types, ensuring that the data source and target are consistent in real time in terms of structure and data.

* **[Flexible & Adaptive Schema, Multi-source data consolidation in a snap](user-guide/data-console/daas-mode/enable-daas-mode.md)**

  Using the JSON model of the dynamic schema as the middle platform storage, the data import can be completed quickly without having to build a table in advance. When multi-source data is aggregated, for the same type of data from different sources and different structures, the model can be quickly merged without complex model design, which greatly improves the efficiency of data warehousing.

* **[Low Code / No Code Pipeline Development & Transformation](user-guide/workshop.md)**

  Simply [sign up for an account](https://cloud.tapdata.io/), deploy Tapdata Agent according to the platform with one click, and start data synchronization right away. For data filtering, cleaning, merging, supplementation, calculation, etc., Tapdata Cloud provides a drag-and-drop method to complete most of the data processing work. At the same time, it also supports users to use Javascript custom components, or directly use Javascript UDF for testing.



## Product Pricing

Tapdata Cloud charges based on the specifications and quantity of subscribed Agent instances, and you can create one SMALL specification Agent instance for free.

For more information, see [Billing Overview](billing/billing-overview.md).



## New to Tapdata Cloud?

No worries, with Tapdata Cloud's intuitive graphic interface, you can start quickly, and we have extensive tutorials to help you quickly meet your data flow requirements:

* [Deploy Tapdata Agent](cloud/quick-start/install-agent)
* [Connect Database](quick-start/connect-database.md)
* [Start Data Synchronization](/cloud/quick-start/create-task)



## See also

* [Architecture and Workflow](introduction/architecture.md)
* [Features](introduction/features.md)
* [Use Cases](introduction/use-cases.md)
* [FAQ](faq/README.md)
