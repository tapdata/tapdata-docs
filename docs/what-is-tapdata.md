---
sidebar_position: 1
slug: /
---

# What is Tapdata?

Tapdata is a real-time data platform provide by Tapdata that integrates data replication and data transformation. It can provide millisecond-level real-time data synchronization and data fusion services in scenarios that span across clouds, regions, and multiple types of databases.

<iframe width="100%" height="539" src="https://www.youtube.com/embed/hlJKo6u3UnA?si=6Df9Yzv8jXf5EFE9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## Why Choose Tapdata

Compared to traditional data migration/synchronization tools, Tapdata offers a feature-rich, easy-to-use, secure, and reliable data flow service. It also supports instant API publishing to enhance data development efficiency.

* **[Rich Database Support](introduction/supported-databases.md)**

  Supports mainstream databases, including commercial databases, open-source databases, cloud databases, SaaS platform data sources, file data sources, and allows for custom data sources.

* **[Reliable Data Consistency](user-guide/data-pipeline/verify-data.md)**

  Ensures high consistency between target data and source data through various proprietary technologies, supports multiple verification methods, and meets the stringent requirements of production environments.

* **[Low-latency Collection Performance](user-guide/advanced-settings/share-mining.md)**

  Based on proprietary CDC log parsing technology, it enables real-time data collection with zero intrusion and virtually no impact on the source database. Every new piece of data that enters the platform is responded to, computed, processed, and written into the target table within seconds. Additionally, it supports sharing incremental data to avoid repeated reads of source database incremental logs.

* **[Unified Real-Time Data Hub](user-guide/real-time-data-hub/README.md)**

  Based on the concept of layered data governance, it synchronizes data scattered across different business systems to a unified platform cache layer. This minimizes the impact of data extraction on business and provides foundational data for subsequent data processing and business, thus building a consistent, real-time data platform and bridging data silos.

* **[No-code Operation Page](user-guide/workshop.md)**

  Say goodbye to SQL and coding. Simple mouse drag-and-drop actions can quickly complete table renaming and other transformation rules. Additionally, UDF (User-Defined Functions) based on Javascript are supported.

## Product Pricing

Tapdata offers two deployment modes, **Cloud** and **Enterprise**, to meet your diversified needs:

| Product         | Applicable Scenarios                                                | Pricing Details                                               |
|-----------------|----------------------------------------------------------------------|---------------------------------------------------------------|
| Tapdata Cloud   | Sign up for a [Tapdata Cloud](https://cloud.tapdata.net/console/v3/) account for use. Suitable for scenarios requiring rapid deployment and low initial investment, helping you focus more on business development rather than infrastructure management. | Provides 1 SMALL specification Agent instance for free (semi-managed mode). You can also subscribe to higher specifications or more Agent instances according to business needs. For more information, see [Product Billing](billing/billing-overview.md). |
| Tapdata Enterprise | Supports deployment to local data centers. Suitable for scenarios with strict requirements on data sensitivity or network isolation, such as financial institutions, government departments, or large enterprises that want full control over their data. | Pay the subscription fee annually based on the number of deployed server nodes. Before purchasing, you can click “[Apply for a Trial](https://tapdata.net/tapdata-on-prem/demo.html)” and a Tapdata engineer will contact you and assist with the trial. For more information, see [Product Pricing](https://tapdata.net/pricing.html). |

## New to Tapdata?

No worries, with Tapdata's graphical operation platform, follow our [Quick Start](quick-start/README.md) tutorial, and you can easily get started in just a few minutes. Moreover, we have prepared a wealth of tutorials to help you quickly meet your data flow requirements.


## See also

- [Product Architecture and Workflow](introduction/architecture.md)
- [Features](introduction/features.md)
- [Use Cases](introduction/use-cases.md)
- [Supported Databases](introduction/supported-databases.md)
- [FAQ](faq/README.md)