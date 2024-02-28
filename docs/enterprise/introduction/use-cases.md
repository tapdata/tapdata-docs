# Use Cases
Tapdata is a next-generation real-time data platform that centralizes core enterprise data into a centralized data platform in real-time. It supports downstream interactive applications, microservices, or interactive analytics through APIs or reverse synchronization, providing real-time data.

## Building Real-time Data Pipelines

Traditional master data management retrieves source data from business systems in a T+1 manner, processes it into standardized enterprise data, and delivers it to business systems via export. This approach is limited by data lag. Building real-time data pipelines with CDC + Kafka + Flink encounters challenges like CDC data collection errors and Kafka blockages, making troubleshooting difficult.

Tapdata offers a one-stop real-time data synchronization experience, allowing for the construction of complete data collection and flow pipelines in just a few steps, with advantages such as:

- Support for a wide range of [data sources](supported-databases.md), enabling data synchronization between homogenous and heterogeneous data sources.
- Event-triggered data processing logic, various data check methods, ensuring high reliability and low latency.
- Powerful UDF functions for deduplication, rule judgment, and other master data governance functionalities.
- Low-code [API services](../user-guide/data-service/README.md) for end-to-end data consumption.

## Extract, Transform, Load (ETL)

Traditionally, tools like Kettle, Informatica, Python, etc., are used for processing and transporting data to new business system databases. Such ETL solutions often involve complex workflows, lack reusability, and can significantly impact source performance.

Tapdata's real-time data service can perform the last ETL, synchronizing data to a distributed data platform based on MongoDB. Combined with a no-code API, it can support rapid data API for numerous downstream businesses directly on the data platform, with advantages like:

- New-generation data development based on drag-and-drop is more convenient.
- Distributed deployment capabilities offer higher processing performance.
- JS or Python-based UDF functions can infinitely extend processing capabilities.
- Support for custom operators to quickly expand the platform's data processing and enhancement capabilities.

## Database Cloud Migration/Cross-cloud Sync

Tapdata provides seamless data migration and synchronization from offline to cloud, cloud to offline, and across cloud platforms.

## Enhancing Query Performance

In scenarios with high read but low write demands, a single database may not handle all read requests. Data can be synchronized to another database to distribute read requests to these read-only databases, horizontally expanding the overall read performance and alleviating the pressure on the primary database.

Furthermore, data can be synchronized to next-generation NoSQL databases like Redis, MongoDB, Elasticsearch, etc., providing high concurrency and low latency query capabilities for your system.

## Database Disaster Recovery

To avoid service continuity impacts from unexpected situations like power or network interruptions, you can continuously synchronize data between business centers and disaster recovery centers through Tapdata, offering remote data replication and backup capabilities.

## Building Materialized Views (Wide Tables)

From big data analytics to data warehouse construction to dashboards, data engineers often need to use batch processing tasks to display and analyze wide tables or views, which consumes considerable resources and has delayed data updates. Tapdata supports the construction of incremental wide tables with minimal cost, providing up-to-date data.

## Real-time Metric Calculation

Tapdata's real-time aggregation and calculation capabilities allow for streaming statistical calculations of logs, clickstreams, or database events, yielding various operational metrics such as login counts and conversion funnels.