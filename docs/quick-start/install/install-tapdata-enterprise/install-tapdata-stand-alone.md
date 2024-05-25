# Install on Linux

import Content from '../../../reuse-content/_enterprise-features.md';

<Content />

This document explains how to quickly deploy Tapdata service on a Linux platform.

:::tip

Stand-alone deployment is suitable for functional testing scenarios. For production environments, it is recommended to use [high availability deployment](../../../production-admin/install-tapdata-ha.md).

:::

## Hardware & Software Requirements

* CPU: 8 cores
* Memory: 16 GB
* Storage Space: 100 GB
* Operating System: CentOS 7+ or Ubuntu 16.04+

## Procedure

This guide uses CentOS 7 as an example to demonstrate the deployment process.

1. Log in to the target device and execute the following commands to set system parameters such as file access numbers and firewall.

   ```bash
   ulimit -n 1024000
   echo "* soft nofile 1024000" >> /etc/security/limits.conf
   echo "* hard nofile 1024000" >> /etc/security/limits.conf
   systemctl disable firewalld.service
   systemctl stop firewalld.service
   setenforce 0
   sed -i "s/enforcing/disabled/g" /etc/selinux/config
   ```

2. Install environmental dependencies.

    1. Install Java 1.8 version.

       ```bash
       yum -y install java-1.8.0-openjdk
       ```

    2. Install MongoDB (version 4.0 and above), which will serve as the storage system for Tapdata to run related data, such as logs and metadata. For more information, see [Deploy MongoDB Replica Set](../../../production-admin/install-replica-mongodb.md).

3. Download the Tapdata installation package (contact us at [team@tapdata.io](mailto:team@tapdata.io) to obtain it) and upload it to the target device.

4. On the target device, execute the command below to unzip the package and enter the unzipped directory.

   ```bash
   tar -zxvf package_name && cd tapdata
   ```

   For example: `tar -zxvf tapdata-release-v2.14.tar.gz && cd tapdata`

5. Prepare the License file.

    1. Execute the following command to obtain the SID information required for the application.

       ```bash
       java -cp components/tm.jar -Dloader.main=com.tapdata.tm.license.util.SidGenerator org.springframework.boot.loader.PropertiesLauncher
       ```

    2. Provide the printed SID information to the Tapdata support team to complete the License application process.

    3. Upload the acquired License file to the unzipped directory (**tapdata**).

6. Execute `./tapdata start` and follow the command-line prompts to set Tapdata's login address, API service port, MongoDB connection information, etc. The example and explanation are as follows:

   :::tip

   If deploying with a non-root user, avoid using `sudo` to elevate privileges to prevent installation failure. Before executing commands, use `sudo chown -R <your-username>:<your-group> <installation-dir>` or `sudo chmod -R 777 <installation-dir>` to grant full permissions to the installation directory for the current user.

   :::

   ```bash
    ./tapdata start
    _______       _____  _____       _______
   |__   __|/\   |  __ \|  __ \   /\|__   __|/\    
      | |  /  \  | |__) | |  | | /  \  | |  /  \   
      | | / /\ \ |  ___/| |  | |/ /\ \ | | / /\ \  
      | |/ ____ \| |    | |__| / ____ \| |/ ____ \ 
      |_/_/    \_\_|    |_____/_/    \_\_/_/    \_\ 
   
   WORK DIR:/root/tapdata
   Init tapdata...
   ✔ Please enter backend url, comma separated list. e.g.:http://127.0.0.1:3030/ (Default: http://127.0.0.1:3030/):  …
   ✔ Please enter tapdata port. (Default: 3030):  …
   ✔ Please enter api server port. (Default: 3080):  …
   ✔ Does MongoDB require username/password?(y/n):  … no
   ✔ Does MongoDB require TLS/SSL?(y/n):  … no
   ✔ Please enter MongoDB host, port, database name(Default: 127.0.0.1:27017/tapdata):  …
   ✔ Does API Server response error code?(y/n):  … yes
   MongoDB uri:  mongodb://127.0.0.1:27017/tapdata
   MongoDB connection command: mongo  mongodb://127.0.0.1:27017/tapdata
   System initialized. To start Tapdata, run: tapdata start
   WORK DIR:/root/tapdata
   Testing JDK...
   java version:1.8
   Java environment OK.
   Unpack the files...
   Restart TapdataAgent ...:
   TapdataAgent starting ...:
   ```

    * **Please enter backend url**: Set the login address for the Tapdata platform, by default `http://127.0.0.1:3030/`
    * **Please enter tapdata port**: Set the login port for the Tapdata platform, by default `3030`.
    * **Please enter api server port**: Set the service port for the API Server, by default `3080`.
    * **Does MongoDB require username/password?**: If MongoDB database has security authentication enabled, enter **y** then follow the prompts to enter the username, password, and the authentication database (default `admin`).
    * **Does MongoDB require TLS/SSL?(y/n)**: If MongoDB database has TLS/SSL encryption enabled, enter **y** then follow the prompts to enter the absolute path addresses of the CA certificate and Certificate Key files, as well as the file password for the Certificate Key.
    * **Please enter MongoDB host, port, database name**: Set the URI connection information for the MongoDB database, by default `127.0.0.1:27017/tapdata`.
    * **Does API Server response error code?**: Whether to enable the API Server to respond with error codes.

   After successful deployment, the command line will return a message similar to the following:

   ```bash
   deployed connector.
   Waiting for the flow engine to start \
   FlowEngine is startup at : 2023-04-01 23:00
   API service started
   ```

7. Log in to the Tapdata platform through a browser. The login address for this machine is [http://127.0.0.1:3030](http://127.0.0.1:3030).

Please change your password promptly upon first login to ensure security.

:::tip

If you need to access the Tapdata service from other devices in the same network, ensure network interoperability.

:::



## Next Steps

[Connect to Databases](../../connect-database.md)