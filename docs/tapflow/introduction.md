# Introduction to TapFlow

**TapFlow** is a streaming data processing development framework based on [Change Data Capture](../introduction/change-data-capture-mechanism.md) (CDC) technology. In addition to using TapData through a [graphical interface](../user-guide/data-development/create-task.md), TapFlow provides a rich set of APIs and command-line tools for building real-time processing tasks across homogeneous or heterogeneous data sources, meeting flexible and automated needs for data integration and streaming processing.

## How It Works

![TapFlow Workflow](../images/tapflow_introduction.png)

Typical application scenarios for TapFlow involve the following main data processing steps:

- **Data Collection**: Using Tap CDC, it connects to and monitors update events (such as insert, update, and delete operations) in data sources, transforming them into data streams.
- **Data Stream Processing**: Allows users to perform real-time processing on data streams via API or graphical interface, including complex operations like data merging, cleansing, and transformation.
- **Data Storage or Output**: The processed data streams can be saved to materialized views to support fast queries and application services or sent directly to downstream databases or message queues (such as Kafka) for rapid data transmission.

## Key Features

* **Extensive Data Source Support**: Easily connects to popular relational databases (e.g., Oracle, DB2, MySQL), NoSQL databases (e.g., MongoDB), message queues (e.g., Kafka), and leading domestic databases (e.g., Dameng, GaussDB, Kingbase).
* **High-Performance Real-Time Collection and Processing**: Uses CDC for real-time monitoring of data source updates, supporting high-throughput data processing with the capability to handle hundreds of thousands of events per second and millisecond-level latency.
* **Flexible Deployment**: Supports cloud, on-premises, and hybrid deployments, catering to diverse security and cost requirements.
* **Ease of Use**: Task configuration requires only a few lines of code, with support for JavaScript and Python user-defined functions (UDFs) within data flows, enabling flexible business processing logic.

## Typical Use Cases

As a TapData management tool, **TapFlow** enables easy management of data synchronization tasks through API and command-line methods, particularly suited for real-time data updates in the following scenarios:

- **Balance Updates in Financial Transaction Systems**  
  TapFlow enables real-time updates to account balances upon transaction completion, allowing users to instantly view the latest account status, meeting high consistency requirements.

- **Real-Time Inventory in Inventory Management Systems**  
  E-commerce platforms use TapFlow to manage cross-platform inventory updates, ensuring that displayed inventory reflects recent sales or returns, preventing overselling.

- **Real-Time Monitoring and Alert Systems**  
  In IT and production monitoring systems, TapFlow promptly synchronizes monitoring metrics, ensuring that alert systems operate on the latest data to quickly respond to anomalies.

- **Customer Real-Time Status in CRM Systems**  
  TapFlow enables real-time updates of customer interactions and order status in CRM systems, allowing sales teams to make timely decisions and respond based on up-to-date customer information.

- **User Behavior Updates in Recommendation Systems**  
  E-commerce and content recommendation platforms use TapFlow to process real-time user behavior data, dynamically generating personalized recommendations that reflect users’ current interests and preferences.
