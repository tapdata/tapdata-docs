# Terminology
This document introduces common terminologies in Tapdata, aiming to help you quickly understand the concepts of products and functionalities.

## Data Replication

Also referred to as database replication or cloning. In data flow tasks, it involves the full or real-time incremental migration of data between various library-level data sources, suitable for instance data migration, data cloud migration, database splitting, and expansion business scenarios.

## Data Transformation

In data flow tasks, real-time synchronization of data between multiple tables or other types of data through specific associations or processing, applicable to scenarios like data analysis, processing, and disaster recovery without affecting user operations.

## Data Service

In data flow tasks, generating a new model with different fields from one or more tables and publishing it externally via an API, allowing users to proactively retrieve data content.

## Connection

Also known as the data source, referring to the databases that connect externally to the Tapdata system. Currently supported connections include MySQL, Oracle, MongoDB, SQL Server, PostgreSQL, Kafka, Redis, etc.

## Node

Refers to the general term for the data sources and processing methods selected in the data task orchestration page.

## Processing Node

Refers to nodes that offer various processing functionalities to meet data synchronization requirements, including JavaScript/Java processing, database table filtering, field processing, row-level processing, etc.

## Source Node

In data tasks, it refers to any of two adjacent connected nodes, where the position is at the source or originating end of the connection.

## Target Node

In data tasks, it refers to any of two adjacent connected nodes, where the position is at the target or the end being connected to.

## Shared Mining

Refers to the sharing of incremental logs. When this feature is enabled, shared mining will extract incremental logs, avoiding the need to start the log collection process repeatedly for multiple incremental tasks from the same source, significantly relieving the resource consumption and waste on the source database.

## Shared Cache

Refers to storing part of the frequently used data from the table in the cache for different tasks to call and process, improving efficiency by eliminating the need to fetch data from the source.

## Initialization

In data migration or synchronization tasks, it refers to the mode of migrating or synchronizing already existing data from the data source node.

## Schema

The connection model for source and target data.

## Database Name

The connection name of the source and target databases.