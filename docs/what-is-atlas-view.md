---
sidebar_position: 1
slug: /
---

# What is Atlas-View?
<div>
<div style={{ float: 'left', width: '65%' }}>
Atlas-View is a managed real-time platform designed for MongoDB Atlas

<br/> &nbsp;

By leveraging CDC (Change Data Capture) technology and the ETL (Extract, Transform, Load) process, Atlas-View efficiently captures real-time data changes from various databases and transforms the data into formats compatible with MongoDB’s data structure

Atlas-View is deeply integrated with MongoDB’s document and array models, fully utilizing MongoDB’s schema-free capabilities to handle complex data models and real-time data updates effectively.
</div>

<div style={{ float: 'left', width: '35%' }}>
<img src='/img/product-architecture.png'></img>
</div>
</div>

<div style={{ clear: 'both' }}></div>

## Core Features
### Document-Oriented Model Building Capability
Atlas-View utilizes functionality similar to traditional database JOIN operations to integrate data from multiple tables across various sources based on relational conditions. This results in the creation of a rich, wide-table structure within MongoDB. By fully leveraging MongoDB’s document-oriented storage capabilities, data can be seamlessly and intuitively consolidated into materialized views, simplifying data access and analysis.

### Real-Time Data Capture (CDC)
Atlas-View employs CDC (Change Data Capture) technology to capture real-time data changes from various relational databases. Regardless of whether it involves inserts, updates, or deletions in any table, or the order in which these events occur, the final data model generated in MongoDB remains accurate and up-to-date.

### Support for Data Transformation
During the creation of materialized views, both primary and associated tables can undergo transformations, such as data filtering, renaming fields, or deleting fields. Additionally, complex data transformations can be implemented using Python or JavaScript code to meet specific data model requirements.

### End-to-End Visual Operation
From data source creation and connection testing to task building, model creation, task execution, speed monitoring, and log review, Atlas-View provides a fully visualized UI experience. This enables users to operate the system conveniently without requiring specialized technical knowledge.


## Supported Data Sources
<table>
<thead>
  <tr>
    <th style={{ width: '15%' }}>Name</th>
    <th style={{ width: '10%' }}>Logo</th>
    <th style={{ width: '40%' }}>Version</th>
    <th style={{ width: '15%' }}>Status</th>
    <th style={{ width: '20%' }}>Replication Modes</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Oracle</td>
    <td><img src='/img/oracle.png' width="60%" style={{ display: 'block', margin: 'auto' }}></img></td>
    <td>9i, 10g, 11g, 12c - 21c+, RAC supported</td>
    <td>Stable</td>
    <td>Full, CDC</td>
  </tr>
  <tr>
    <td>MySQL</td>
    <td><img src='/img/mysql.png' width="60%" style={{ display: 'block', margin: 'auto' }}></img></td>
    <td>5.x, 8.x, 9.x</td>
    <td>Stable</td>
    <td>Full, CDC</td>
  </tr>
  <tr>
    <td>MariaDB</td>
    <td><img src='/img/mariadb.svg' width="75%" style={{ display: 'block', margin: 'auto' }}></img></td>
    <td>5.x, 10.x</td>
    <td>Stable</td>
    <td>Full, CDC</td>
  </tr>
  <tr>
    <td>MongoDB</td>
    <td><img src='/img/mongodb.svg' width="65%" style={{ display: 'block', margin: 'auto' }}></img></td>
    <td>3.x, 4.x, 5.x, 6.x, 7.x</td>
    <td>Stable</td>
    <td>Full, CDC</td>
  </tr>
  <tr>
    <td>PostgreSQL</td>
    <td><img src='/img/pg.png' width="65%" style={{ display: 'block', margin: 'auto' }}></img></td>
    <td>9.x - 16.x</td>
    <td>Stable</td>
    <td>Full, CDC</td>
  </tr>
  <tr>
    <td>SQL Server</td>
    <td><img src='/img/sql.png' width="75%" style={{ display: 'block', margin: 'auto' }}></img></td>
    <td>2008 - 2022</td>
    <td>Stable</td>
    <td>Full, CDC</td>
  </tr>
  <tr>
    <td>SYBASE</td>
    <td><img src='/img/sybase.webp' width="75%" style={{ display: 'block', margin: 'auto' }}></img></td>
    <td>16, Linux and AIX supported</td>
    <td>Stable</td>
    <td>Full, CDC</td>
  </tr>
  <tr>
    <td>Kafka</td>
    <td><img src='/img/kafka.png' width="50%" style={{ display: 'block', margin: 'auto' }}></img></td>
    <td>2.0 - 2.5</td>
    <td>Stable</td>
    <td>Stream</td>
  </tr>
  <tr>
    <td>File</td>
    <td><img src='/img/file.png' width="55%" style={{ display: 'block', margin: 'auto' }}></img></td>
    <td>CSV, with FTP/SFTP/SMB/S3/OSS</td>
    <td>Beta</td>
    <td>Full, Incremental File Monitoring</td>
  </tr>
  <tr>
    <td>DB2</td>
    <td><img src='/img/db2.svg' width="55%" style={{ display: 'block', margin: 'auto' }}></img></td>
    <td>9.7 - 11.x</td>
    <td>Beta</td>
    <td>Full, CDC(Soon)</td>
  </tr>
</tbody>
</table>

## Deployment Regions(managed agents)
<table>
<thead>
  <tr>
    <th style={{ width: '30%' }}>Region</th>
    <th style={{ width: '70%' }}>Static IPS</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>asia-southeast1</td>
    <td>34.92.78.86, 39.106.147.20, 47.242.39.227</td>
  </tr>
</tbody>
</table>

## Pricing
Atlas-View adopts a Pay-As-You-Go billing model. Upon registration, you will receive a 14-day free trial during which shared computing resources will be provided. During the trial period, you can use Atlas-View to transfer and process up to 2GB of data. After the trial ends, you will need to purchase dedicated computing resources to continue the service. The hourly cost will vary depending on the specifications of the computing resources. Additionally, if the amount of data transferred exceeds the limit included with the computing resources, the excess data will be charged separately. For a detailed pricing list, please refer to <a href="https://atlas-view.co/#pricing">https://atlas-view.co/#pricing</a>

By default, your billing information is recorded and updated hourly. Charges are processed on a fixed schedule each month. If your spending during the billing cycle exceeds a certain threshold, based on internal risk control policies, we may conduct one or more early charge attempts. If a payment attempt fails, the platform will be unable to process any new data generated. Please ensure that your payment information remains valid.
