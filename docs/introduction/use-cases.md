# Application Scenarios

import Content from '../reuse-content/_all-features.md';

<Content />

TapData is a next-generation real-time data platform that centralizes core enterprise data in real-time into a centralized data platform. It supports downstream interactive applications, microservices, or interactive analytics by providing real-time data through APIs or reverse synchronization.

## Build Real-time Data Pipelines

Traditional master data management retrieves source data from business systems in a T+1 manner, processes it into standard enterprise data, and delivers it to business systems via export. This approach's limitation lies in the lag in data updates. Challenges such as CDC data collection errors and Kafka blockages make troubleshooting difficult in real-time data pipeline constructions using CDC + Kafka + Flink.

TapData offers a one-stop real-time data synchronization experience, enabling you to build complete data collection and flow pipelines in just a few steps, with the following advantages:

* Supports a rich array of [data sources](../prerequisites/supported-databases.md) for data synchronization between homogeneous/heterogeneous data sources.
* Supports event-triggered data processing logic and multiple data verification methods to ensure high reliability and low latency.
* Enables deduplication, rule judgment, and other master data governance functions through powerful UDF capabilities.
* Supports low-code [API services](../user-guide/data-service/README.md) deployment for end-to-end data consumption.

## Extract/Transform/Load Data (ETL)

Traditional approaches use tools like Kettle, Informatica, or Python to process and transfer data to new business system databases. These ETL solutions often have complex links, are non-reusable, and can significantly impact source system performance.

TapData's real-time data services can perform a final ETL of data, synchronizing it to a distributed data platform based on MongoDB. Combined with no-code APIs, it provides quick data API support directly from the data platform for many downstream businesses, offering the following advantages:

* Drag-and-drop-based next-generation data development simplifies processes.
* Distributed deployment capabilities provide higher processing performance.
* JS or Python-based UDF features infinitely extend processing capabilities.
* Supports rapid expansion of data processing and refining capabilities through custom operators.


## Seamless Database Migration with Zero Downtime

Traditional migration methods often require stopping data writing to the source database, resulting in downtime during the migration process to ensure data consistency. This downtime can last for hours or even days, significantly impacting business operations.

TapData offers a downtime-free migration solution that minimizes the impact on your business. The downtime only occurs when switching from the source instance to the target instance, and the rest of the time your business can continue to operate normally, with downtime reduced to the minute level. The migration process consists of two stages: full data synchronization and incremental data synchronization. During the incremental data synchronization stage, data from the source instance is continuously synchronized to the target instance in real-time. You can validate your business in the target database and once verified, smoothly switch your operations to the target database for a seamless migration.

## Cloud Migration/Cross-cloud Synchronization

For scenarios from offline to cloud, cloud to offline, or across cloud platforms, TapData can provide seamless data migration and synchronization.

## Enhance Query Performance

In scenarios with heavy read and light write operations, a single database may not handle all read pressures. By synchronizing data to another database and routing read requests to these read-only databases, you can horizontally expand overall read performance and relieve pressure on the primary database.

Moreover, you can choose to synchronize data to Redis, MongoDB, ElasticSearch, and other next-generation NoSQL databases to provide high-concurrency, low-latency query capabilities for your system.

## Accelerate Full-text Searching

Traditional relational databases accelerate data retrieval by indexing, but cannot support the need for full-text data retrieval. TapData offers a solution by enabling seamless data synchronization from relational databases to Elastic-Search, empowering users to effortlessly retrieve data using full-text search capabilities.

## Cache Update Without Development

To enhance business efficiency and optimize user experience, it is a common practice to introduce a cache layer in the business architecture, improving access speed and read concurrency. However, as cache data cannot be permanently stored, abnormal cache exits can result in data loss, impacting business stability and reliability. TapData's data synchronization function addresses this challenge by enabling real-time synchronization from the business database to the cached database. This facilitates a lightweight cache update strategy, simplifies the application architecture, and ensures both simplicity and safety.


## Accelerate Access with Read/Write Separation

In cross-regional/cross-border businesses, relying on a single-region deployment in traditional architectures leads to significant access delays and poor user experiences when users access services from different regions. To address this, TapData optimizes the deployment architecture and adjusts access logic. All write requests from users across regions are directed to the main business center, while real-time synchronization via TapData ensures that the data is replicated to the respective sub-business centers. Furthermore, read requests from users in various regions are routed to the nearest sub-business center, eliminating remote access and greatly enhancing the speed of business access.



## Empower Reading Capacity with Horizontal Scaling

In scenarios with a high volume of read requests, a single database instance may not be able to handle the entire read load effectively. To address this, you can utilize the real-time synchronization feature of DFS (Distributed File System) to establish read-only instances. By redirecting read requests to these read-only instances, you can achieve elastic scalability of the read capacity while reducing the load on the primary database instance.


## Offsite Data Disaster Recovery

In order to mitigate the risk of business unavailability resulting from service disruptions, many enterprises are adopting a multi-region or multi-cloud deployment strategy. By spreading their business across different regions or public clouds, they can minimize the impact of any single point of failure. To further enhance service availability and mitigate risks at the Availability Zone level, establishing off-site Disaster Recovery Centers is a recommended approach. These centers serve as backup locations and are equipped to quickly restore service in the event of a failure at the primary business center. Real-time data synchronization through DFS ensures data consistency between the disaster recovery center and the primary business center.

You can seamlessly redirect the business traffic to the Disaster Recovery Center, enabling a swift restoration of services. This proactive measure helps minimize downtime and ensures uninterrupted service delivery.



## Geo-redundancy

With the rapid development of the business and the growth of the number of users, if the business is deployed in a single region, it may face the following problems:

- The user is widely distributed in the geographical location, and the user access delay is higher in the geographical distance, which affects the user experience.
- The capacity of the infrastructure of a single geography limits business expansion, such as power supply capacity, network bandwidth building capacity, and so on.

To solve the above problems, you can use TapData to synchronize data in real time between multiple business units built in the same city/off-site to ensure global data consistency. When any unit fails, just switch the traffic to other available units automatically, effectively guaranteeing the high availability of the service.

## Build Materialized Views (Wide Tables)

From big data analysis to data warehouse construction to data dashboards, data engineers often need to use batch processing tasks to display and analyze wide tables or views, consuming significant resources and causing data updates to lag. TapData supports incremental wide table construction capabilities to provide the latest data at minimal cost.

## Real-time Metrics Calculation

Utilize TapData's real-time aggregation calculation capabilities for statistical calculations on logs, click streams, or database events in a streaming manner, producing various operational metrics such as login counts and conversion funnels.





## **Balance Updates in Financial Transaction Systems**  
TapData enables real-time updates to account balances upon transaction completion, allowing users to instantly view the latest account status, meeting high consistency requirements.

## Real-Time Inventory Management Systems
E-commerce platforms use TapData to manage cross-platform inventory updates, ensuring that displayed inventory reflects recent sales or returns, preventing overselling.

## Real-Time Monitoring and Alert Systems
In IT and production monitoring systems, TapData promptly synchronizes monitoring metrics, ensuring that alert systems operate on the latest data to quickly respond to anomalies.

## Customer Real-Time Status in CRM Systems
TapData enables real-time updates of customer interactions and order status in CRM systems, allowing sales teams to make timely decisions and respond based on up-to-date customer information.

## User Behavior Updates in Recommendation Systems
E-commerce and content recommendation platforms use TapData to process real-time user behavior data, dynamically generating personalized recommendations that reflect users’ current interests and preferences.