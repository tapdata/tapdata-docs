---
sidebar_position: 1
slug: /
---

# What is TapData?

TapData is a real-time data platform provide by TapData that integrates data replication and data transformation. It can provide millisecond-level real-time data synchronization and data fusion services in scenarios that span across clouds, regions, and multiple types of databases.

<iframe width="100%" height="539" src="https://www.youtube.com/embed/hlJKo6u3UnA?si=6Df9Yzv8jXf5EFE9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## Why Choose TapData

Compared to traditional data migration/synchronization tools, TapData offers a feature-rich, easy-to-use, secure, and reliable data flow service. It also supports instant API publishing to enhance data development efficiency.

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

TapData offers two deployment modes, **Cloud**, **Enterprise** and **Community** , to meet your diversified needs:

| Product         | Applicable Scenarios                                                                                                                                                                                                                                                                                                                                  | Pricing Details                                               |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| TapData Cloud   | Using the SaaS (Software as a Service) model, sign up for a [TapData Cloud](https://cloud.tapdata.net/console/v3/) account for use. Suitable for scenarios requiring rapid deployment and low initial investment, helping you focus more on business development rather than infrastructure management.                                               | Provides 1 SMALL specification Agent instance for free (semi-managed mode). You can also subscribe to higher specifications or more Agent instances according to business needs. For more information, see [Product Billing](billing/billing-overview.md). |
| TapData Enterprise | Supports deployment to local data centers. Suitable for scenarios with strict requirements on data sensitivity or network isolation, such as financial institutions, government departments, or large enterprises that want full control over their data.                                                                                             | Pay the subscription fee annually based on the number of deployed server nodes. Before purchasing, you can click “[Apply for a Trial](https://tapdata.net/tapdata-on-prem/demo.html)” and a TapData engineer will contact you and assist with the trial. For more information, see [Product Pricing](https://tapdata.net/pricing.html). |
| TapData Community | An open-source data integration platform that provides basic data synchronization and transformation capabilities. This helps you quickly explore and implement data integration projects. As your project or business grows, you can seamlessly upgrade to TapData Cloud or TapData Enterprise to access more advanced features and service support. | [Open Source](https://github.com/tapdata/tapdata) |

:::tip

For more information, see [Edition Comparison](introduction/compare-editions).

:::

## New to TapData?

No worries, with TapData's graphical operation platform, follow our [Quick Start](quick-start/README.md) tutorial, and you can easily get started in just a few minutes. Moreover, we have prepared a wealth of tutorials to help you quickly meet your data flow requirements.

:::tip

While browsing the documentation, please pay attention to the "**Applicable to**" badge at the top of each document to ensure the information you read corresponds to the version you require.

:::


## See also

- [Product Architecture and Workflow](introduction/architecture.md)
- [Features](introduction/features.md)
- [Use Cases](introduction/use-cases.md)
- [Supported Databases](introduction/supported-databases.md)
- [FAQ](faq/README.md)