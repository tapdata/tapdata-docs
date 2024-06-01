# Terminology

import Content from '../reuse-content/_all-features.md';

<Content />

This article introduces common terms used in TapData to help you quickly understand product and feature concepts.

## Full Data Synchronization

Database migration or cloning, within the data flow task, is ideal for business scenarios involving complete data migration between different library-level data sources. This includes instances where data needs to be migrated, moved up or down the cloud, or when databases need to be split and expanded.

## Incremental Data Synchronization

In the data flow task, the real-time synchronization of data among multiple data sources through specific association relationships or processing is suitable for meeting user scenarios such as data analysis, processing, and disaster recovery without impacting user business operations.

## Data Source

The data sources that can be connected to the TapData system from external sources include databases, and in the future, there are plans to gradually expand the support for other types such as files, GridFS, RestAPI, Dummy, Custom, UDP, Cache, and more.

## Data Replication
Also known as database replication/cloning, involves full or real-time incremental migration of data between various levels of data sources in data flow tasks. Applicable for instance data migration, cloud migration, database splitting, and expansion scenarios.

## Data Transformation
In data flow tasks, real-time synchronization of data between multiple tables or other types of data through specific association or processing. Suitable for scenarios such as data analysis, processing, and disaster recovery without affecting user operations.

## Data Service
In data flow tasks, generating a new model from one or more tables' different fields and publishing it externally via an API. Users can obtain data content through the API.



## Connection
Also known as a data source, it refers to the database that connects externally to the TapData system. Currently supported connections include: MySQL, Oracle, MongoDB, SQL Server, PostgreSQL, Kafka, Redis, etc.

## Node
Refers to the general term for data sources and processing methods selected in the data task arrangement page.

## Processing Node
Refers to nodes for various processing functions to meet data synchronization needs. Currently supported processing nodes include: JavaScript/Java processing, database table filtering, field processing, row-level processing, etc.

## Source Node
In data tasks, among any two adjacent connected nodes, it refers to the node that is at the source/end generating the connection.

## Target Node
In data tasks, among any two adjacent connected nodes, it refers to the node that is at the target/end being pointed to by the connection.

## Shared Mining
Refers to the sharing of incremental logs. When the feature is enabled, shared mining extracts incremental logs, eliminating the need for multiple incremental tasks to start a log collection process from the same source, significantly alleviating resource consumption and wastage on the source database.

## Shared Cache
Refers to storing some commonly used data from tables into the cache for different tasks to call and process, eliminating the need to retrieve data from the source, thereby improving efficiency.

## Initialization
In data migration or synchronization tasks, the mode of migrating or synchronizing existing data in the data source node.

## TapData Agent

Refers to the execution program that runs the synchronization task, and is responsible for obtaining the task from the management side, connecting the source data source, performing data conversion, and outputting to the target data source.

## TCM Management Side

The TapData management console enables users to define custom orchestration synchronization tasks and deploy these tasks to synchronization instances for execution.