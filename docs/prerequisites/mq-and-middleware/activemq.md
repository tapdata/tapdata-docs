# ActiveMQ

import Content from '../../reuse-content/_all-features.md';

<Content />

Please follow the instructions below to ensure successful addition and usage of ActiveMQ in TapData Cloud.

## Supported Versions

5.14.x

## ActiveMQ Configuration Instructions

- If the queue name is left empty, all queues are loaded by default. If specific queues need to be specified, they can be separated by commas.
- The format of the MQ connection string (BrokerUrl) is: tcp://[host]:[port].

## Usage Limitations

- Only JSON object string message format is supported (e.g., `{"id": 1, "name": "Jack"}`). Support for JSONBytes, XML, and other formats will be added later.
- It is not necessary to create queues in advance.
- There are limitations in the PDK framework, and the topic mode does not support full synchronization well. The topic mode is temporarily unavailable.

## Data Types

- OBJECT
- ARRAY
- NUMBER
- INTEGER
- BOOLEAN
- STRING (length up to 200)
- TEXT