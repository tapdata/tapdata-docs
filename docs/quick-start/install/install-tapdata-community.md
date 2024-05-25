# Tapdata Community

import Content from '../../reuse-content/_community-features.md';

<Content />

Tapdata Community is an open-source real-time data platform that facilitates data synchronization and transformation. This guide demonstrates how to quickly install and start Tapdata Community.

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## Prerequisites

Before you begin, ensure your environment meets the following requirements:

- Hardware specifications: 8-core CPU (x86 architecture), 16 GB of memory
- Storage specifications: 100 GB
- Operating System: CentOS 7+ or Ubuntu 16.04+

## Component Overview

Tapdata Community includes the following main components:

- **Data Connectors**: Allow Tapdata Community to connect to various data sources, such as databases, data warehouses, and message queues.
- **Data Processing Engine**: Responsible for performing tasks such as data transformation, cleaning, and processing.
- **Monitoring and Management Interface**: Provides an easy-to-use graphical platform for configuring, managing, and monitoring data flows.

## Install Tapdata Community

```mdx-code-block
<Tabs className="unique-tabs">
<TabItem value="Deploy on Docker Platform">
```
1. Ensure [Docker](https://docs.docker.com/get-docker/) is installed and running.

2. Open a terminal or command line interface and run the following command to pull the latest Tapdata Docker image:

   ```bash
   docker pull ghcr.io/tapdata/tapdata:latest
   ```

3. Run the following command to start the Tapdata container:

   ```bash
   docker run -d -p 3000:3000 --restart always --name tapdata ghcr.io/tapdata/tapdata:latest
   ```

   Explanation of parameters:

   - `-d`: Run the container in the background.
   - `-p 3000:3000`: Map port 3000 of the container to port 3000 on the host machine, allowing access to Tapdata through a browser.
   - `--name tapdata`: Assign a name to your container, in this case, **tapdata**.
   - `--restart always`: Automatically start this container when Docker services restart.

   :::tip

   By default, Tapdata Community uses an internal MongoDB to store metadata, task configurations, etc. If you want to use your own MongoDB, specify the MongoDB [URI connection string](https://www.mongodb.com/docs/v5.0/reference/connection-string/#standard-connection-string-format) during container startup with the `-e` parameter, for example: `docker run -d -p 3000:3000 --name tapdata -e MONGO_URI='mongodb://root:Tap123456@192.168.1.18:29917/tapdata_community?authSource=admin' --restart always ghcr.io/tapdata/tapdata:latest`.

   :::

4. (Optional) Run `docker logs -f tapdata` to view container startup logs. Key logs after successful startup should indicate:

   ```bash
   <<< Start Server [SUCCESS]
   All Done, Please Visit http://localhost:3000
   ```

5. Access the Tapdata platform via a browser at http://localhost:3000. The default login is admin@admin.com with the password admin. Promptly change your password after the first login to ensure security.

   :::tip

   To access Tapdata services from other devices on the same network, ensure the network is interconnected.

   :::

</TabItem>

<TabItem value="Deploy on Linux Platform">

1. Visit the [Tapdata Community Release page](https://github.com/tapdata/tapdata/releases), download the latest installation package, and upload it to the device where you intend to deploy it.

2. On the deployment device, execute the following commands to extract the installation package and enter the extracted directory:

   ```shell
   tar -zxvf installation-package-name && cd tapdata
   ```

   For example, for version 3.5.16, the command would be: `tar -zxvf tapdata-v3.5.16-663b7b11.tar.gz && cd tapdata`

3. Execute the following command to specify the MongoDB [URI connection string](https://www.mongodb.com/docs/v5.0/reference/connection-string/#standard-connection-string-format). Tapdata will use this MongoDB to store metadata and task configurations:

   ```bash
   export MONGO_URI='mongodb://{admin}:{password}@{host}:{port}/{database_name}?replicaSet={replica_name}&authSource=admin'
   ```

   Example: `export MONGO_URI='mongodb://root:Tap123456@192.168.1.18:29917/tapdata_community?replicaSet=rs1&authSource=admin'`

4. Run `./start.sh` to start the Tapdata service. Key logs after successful startup should indicate:

   :::tip

   If deploying with a non-root user, avoid using `sudo` to elevate privileges to prevent installation failure. Before executing commands, use `sudo chown -R <your-username>:<your-group> <installation-dir>` or `sudo chmod -R 777 <installation-dir>` to grant full permissions to the installation directory for the current user.

   :::

   ```bash
   <<< Start Server [SUCCESS]
   All Done, Please Visit http://localhost:3000
   ```

5. Access the Tapdata platform via a browser at http://localhost:3000. The default login is admin@admin.com with the password admin. Promptly change your password after the first login to ensure security.

   :::tip

   To access Tapdata services from other devices on the same network, ensure the network is interconnected.

   :::

</TabItem>
</Tabs>

## Next Steps

[Connect to a Database](../connect-database.md)