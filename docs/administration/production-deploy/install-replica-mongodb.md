# Deploy MongoDB Replica Set

import Content from '../../reuse-content/_enterprise-and-community-features.md';

<Content />

To ensure high availability in production environments, deploying a MongoDB replica set is required before deploying TapData, as it stores essential configurations, shared cache, and other information in MongoDB databases. This document outlines the deployment process.

## Deployment Architecture

We recommend using MongoDB version 4.0 or higher. This example uses CentOS 7 to deploy a replica set consisting of 1 primary and 2 secondary nodes:

| Role              | IP          | Service     | Port          |
|-------------------|-------------|-------------|---------------|
| Primary Node      | 172.16.1.10 | mongod      | 27017         |
| Secondary Node    | 172.16.1.11 | mongod      | 27017         |
| Secondary Node    | 172.16.1.12 | mongod      | 27017         |

## Procedure

1. Execute the following commands on all servers to adjust file access numbers, disable firewall, and set other system parameters.

   ```bash
   ulimit -n 1024000
   echo "* soft nofile 1024000" >> /etc/security/limits.conf
   echo "* hard nofile 1024000" >> /etc/security/limits.conf
   systemctl disable firewalld.service
   systemctl stop firewalld.service
   setenforce 0
   sed -i "s/enforcing/disabled/g" /etc/selinux/config
   ```

2. Download the required MongoDB package from the [official MongoDB website](https://www.mongodb.com/try/download/community).

3. Extract and install MongoDB on all servers. This example uses version **4.4.28**.

   ```bash
   tar zxvf mongodb-linux-x86_64-rhel70-4.4.28.tgz
   cp mongodb-linux-x86_64-rhel70-4.4.28/bin/* /usr/local/bin/
   ```

4. Create data and log directories on all servers and perform the necessary permissions setup.

   ```bash
   sudo mkdir -p /var/lib/mongo
   sudo chown -R mongodb:mongodb /var/lib/mongo
   sudo mkdir -p /var/log/mongodb
   sudo chown -R mongodb:mongodb /var/log/mongodb
   ```

5. Generate a key file for node authentication.

   1. Install OpenSSL and generate a key file on the primary node's machine.

      ```bash
      sudo yum install openssl -y
      mkdir /etc/mongodb
      openssl rand -base64 756 > /etc/mongodb/repl.key
      chmod 400 /etc/mongodb/repl.key
      ```

   2. Copy the key file to the other nodes using `scp`.

6. Create a `mongod.yml` configuration file in the `/etc/mongodb` directory on all servers. Example configuration:

   ```yaml
   systemLog:
     destination: file
     path: /var/log/mongodb/mongod.log
     logAppend: true
   storage:
     dbPath: /var/lib/mongo
     journal:
       enabled: true
     directoryPerDB: true
      syncPeriodSecs: 60
      engine: wiredTiger
      wiredTiger:
         engineConfig:
            cacheSizeGB: 8
            journalCompressor: snappy
            directoryForIndexes: false
         collectionConfig:
            blockCompressor: snappy
         indexConfig:
            prefixCompression: true
   net:
     port: 27017
     bindIp: 0.0.0.0
        maxIncomingConnections: 20000
   replication:
      oplogSizeMB: 512000
     replSetName: repl
   security:
     authorization: enabled
     keyFile: /etc/mongodb/repl.key
   ```

   :::tip

   In the configuration file above, we have specified the log file, storage directory, service port, authentication, and other details. The `cacheSizeGB` can be set to 30% of the total memory. You can also add or adjust more parameters based on your business needs. For detailed information about these parameters, see [MongoDB Configuration File Options](https://www.mongodb.com/docs/v4.4/reference/configuration-options).

   :::

7. Start the MongoDB service on all servers.

   ```bash
   mongod -f /etc/mongodb/mongod.yml --fork
   ```

8. Configure the replica set from the primary node.

   1. Connect to the primary MongoDB node.

      ```bash
      mongo --host 127.0.0.1 --port 27017
      ```

   2. Initiate the replica set.

      ```bash
      rs.initiate({
        _id: "repl",
        members: [
          { _id: 0, host: "172.16.1.10:27017" },
          { _id: 1, host: "172.16.1.11:27017" },
          { _id: 2, host: "172.16.1.12:27017" }
        ]
      })
      ```

   3. Create a root user.

      ```bash
      use admin
      db.createUser({
        user: "root",
        pwd: "Tap@123456",
        roles: ["root"]
      })
      ```

9. Set MongoDB service to start on boot on all servers.

   1. In `/usr/lib/systemd/system`, create a `mongod.service` file.

      ```bash
      [Unit]
      Description=MongoDB Database Service
      After=network.target
      
      [Service]
      Type=forking
      ExecStart=/usr/local/bin/mongod -f /etc/mongodb/mongod.yml
      ExecStop=/usr/local/bin/mongod --shutdown --config /etc/mongodb/mongod.yml
      Restart=on-failure
      RestartSec=5
      
      [Install]
      WantedBy=multi-user.target
      ```

   2. Enable the service to start at boot.

      ```bash
      sudo systemctl daemon-reload
      sudo systemctl enable mongod.service
      ```

## Next Steps

[Deploying High-Availability TapData](install-tapdata-ha.md)

## See Also

* [Security](https://www.mongodb.com/docs/v4.4/security/#security): Secure MongoDB data with authentication, access control, encryption, etc.
* [Backup](https://www.mongodb.com/docs/v4.4/core/backups/): Implement regular backup strategies to prevent data loss.
* [Monitoring](https://www.mongodb.com/docs/v4.4/administration/monitoring/): Configure monitoring tools to track performance metrics and anomalies.
* [Stay Updated](https://www.mongodb.com/docs/v4.4/release-notes/4.4/): Regularly check and apply MongoDB security updates and patches.