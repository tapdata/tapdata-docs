# Architecture and Working Principles

As a next-generation real-time data service platform, Tapdata facilitates the easy breakage of data silos for businesses through real-time data collection technology, flexible data processing methods, comprehensive data governance capabilities, and convenient data publishing methods. It provides real-time and accurate data for analytical and transactional operations, supporting businesses in achieving more agile innovation.

Tapdata is structured into four layers, from left to right:

- **Data Collection Layer**: Leveraging log parsing capabilities through an open Plugin Framework, it collects changes in the data source in real-time and standardizes them. After standardizing, the data enters the stream processing framework as standardized events.
- **Stream Data Processing Layer**: Utilizing Tapdata's proprietary solutions, data calculations, modeling, and transformations are completed in-process, quickly producing results that move to the storage layer.
- **Storage Layer**: By the time data enters the storage layer, a logical model has already been formed. Users need only focus on the data required for their business, without worrying about where it is stored.
- **Service Layer**: In the service layer, there are two mainstream data service models: Pull and Push. APIs support low-code publishing and can be published according to specific requirements. When the required data is already stored in the business system, REVERSE ETL can be used to push the organized and governed data back to users.

:::tip

If you do not require Tapdata to be deployed locally, you can opt for the [Tapdata Cloud](../../cloud/what-is-tapdata-cloud.md) (the basic version is available for a free trial). For more details, see [Version Comparison](https://tapdata.net/pricing.html).

:::