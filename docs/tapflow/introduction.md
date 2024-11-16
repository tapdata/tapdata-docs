# Introduction to TapFlow

**TapFlow** is a streaming data processing development framework based on [Change Data Capture](../introduction/change-data-capture-mechanism.md) (CDC) technology. In addition to using TapData through a [graphical interface](../user-guide/data-development/create-task.md), TapFlow provides a rich set of APIs and command-line tools for building real-time processing tasks across homogeneous or heterogeneous data sources, meeting flexible and automated needs for data integration and streaming processing.

## How It Works

![TapFlow Workflow](../images/tapflow_introduction.png)

Typical application scenarios for TapFlow involve the following main data processing steps:

- **Data Collection**: Using Tap CDC, it connects to and monitors update events (such as insert, update, and delete operations) in data sources, transforming them into data streams.
- **Data Stream Processing**: Allows users to perform real-time processing on data streams via API or graphical interface, including complex operations like data merging, cleansing, and transformation.
- **Data Storage or Output**: The processed data streams can be saved to materialized views to support fast queries and application services or sent directly to downstream databases or message queues (such as Kafka) for rapid data transmission.
