# Data Security and Network Configuration

import Content from '../reuse-content/_cloud-features.md';

<Content />

This article lists common problems related to data security and network configuration.

## How does data flow when using TapData Cloud?

The data flow is managed by the TapData Agent, which is installed on your local machine or cloud storage and serves as the execution instance for the TapData Cloud data synchronization service. TapData Cloud is primarily responsible for configuring, distributing, and monitoring synchronization tasks. It communicates with the TapData Agent to provide scheduling information and coordinate the data synchronization process.

![](../images/architecture.png)



## Does TapData Cloud retain user data during the data synchronization process?

No, the data will not be uploaded or saved to the TapData Cloud during synchronization, it will only pass through the Agent you deployed.



## How do I synchronize data without port mapping?

External network access is only required for the TapData Agent.



## Source database without fixed IP, how to synchronize data?

To address the absence of a fixed IP address for the source database, one solution is to install the TapData Agent locally and configure it to use a private address. By deploying the TapData Agent directly to the source database without a public IP, you can establish synchronization capabilities.



