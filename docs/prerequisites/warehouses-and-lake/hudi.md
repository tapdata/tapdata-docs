# Hudi

import Content from '../../reuse-content/_all-features.md';

<Content />

[Apache Hudi](https://hudi.apache.org/cn/docs/overview) is a storage format for data lakes that provides the ability to update, delete, and consume change data on top of the Hadoop file system. TapData supports using Hudi as a **target database** to build data transfer pipelines.

## Environment Requirements

The machine running the compute engine should have Hadoop environment variables configured. The Hadoop version should match the version installed on your server. You can check if your machine meets the requirements by running the `hadoop -version` command.

## Supported Version

Hudi 0.11.0

## Parameter Descriptions

- Cluster Address: Format should be ip:port.
- Database: Name of the database.
- Kerberos Authentication
  - Keytab File: Upload the user.keytab file.
  - Configuration File: Upload the krb5.conf file.
  - Hive Principal Configuration: `spark2x/hadoop.[hadoop.com@HADOOP.COM](mailto:hadoop.com@HADOOP.COM)` (corresponds to the value of principal).
- Account and Password: Fill in the database username and password.
- Server-side Hadoop Configuration File: core-site.xml, usually located in the etc/Hadoop directory of the Hadoop installation on the server.
- Server-side HDFS Configuration File: hdfs-site.xml, usually located in the etc/Hadoop directory of the Hadoop installation on the server.
- Server-side Hive Configuration File: hive-site.xml, usually located in the configuration file directory of the Hive installation on the server.
- Connection Parameters: `sasl.qop=auth-conf;auth=KERBEROS`