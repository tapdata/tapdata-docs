# Deploy High-Availability Tapdata

To ensure reliability in production environments, we recommend deploying Tapdata in a high-availability setup. This guide will show you how to quickly deploy a high-availability Tapdata service on a local Linux platform.

## Software and Hardware Requirements

* CPU: 8 cores
* Memory: 16 GB
* Storage Space: 100 GB
* Operating System: CentOS 7+ or Ubuntu 16.04+

import AsciinemaPlayer from '@site/src/components/AsciinemaPlayer/AsciinemaPlayer.tsx';


## Deployment Architecture

In this example, assume we have two servers (A and B), each configured with an IP. We aim to deploy the complete Tapdata service, including the management service, sync governance service, and API service, on both servers to achieve high availability.

:::tip

In this environment, we have already deployed a [MongoDB replica set](install-replica-mongodb.md), which provides storage services for running data for Tapdata services.

:::

![Deployment Architecture](../images/tapdata_ha_architecture.png)



This guide uses CentOS 7 as an example to demonstrate the deployment process for Servers A and B.

## Preparation

Before deployment, we need to perform the following operations on both servers.

1. Log into the server and execute the following commands to adjust file access numbers, firewall, and other system parameters.

   ```bash
   ulimit -n 1024000 
   echo "* soft nofile 1024000" >> /etc/security/limits.conf 
   echo "* hard nofile 1024000" >> /etc/security/limits.conf 
   systemctl disable firewalld.service 
   systemctl stop firewalld.service 
   setenforce 0 
   sed -i "s/enforcing/disabled/g" /etc/selinux/config 
   ```

2. Install environment dependencies.

   1. Execute the following command to install Java 1.8 version.

      ```bash
      yum -y install java-1.8.0-openjdk
      ```

   2. Install MongoDB (version 4.0 or above) as an intermediary library to store task data and more. For detailed steps, see the [official documentation](https://www.mongodb.com/docs/v4.4/administration/install-on-linux/).

3. Download the Tapdata installation package (you can [contact us](mailto:team@tapdata.io) to obtain it), and upload it to the device to be deployed.

4. On the device to be deployed, execute the following command to unzip the installation package and enter the unzipped path.

   ```bash
   tar -zxvf installation_package_name && cd tapdata
   ```

   Example: `tar -zxvf tapdata-release-v2.14.tar.gz && cd tapdata `



## Server A Deployment Process

1. Obtain the License file.

   1. Execute the following command to obtain the required SID information for application.

      ```bash
      java -cp components/tm.jar -Dloader.main=com.tapdata.tm.license.util.SidGenerator org.springframework.boot.loader.PropertiesLauncher
      ```

   2. Provide the printed SID information to the Tapdata support team to complete the License application process.

   3. Upload the obtained License file to the unzipped directory (**tapdata**).

2. In the tapdata directory, execute `./tapdata start`, following command line prompts to set Tapdata's login address, API service port, MongoDB connection information, etc., as shown below:

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

   * **Please enter backend url**: Set the Tapdata platform login address, default is `http://127.0.0.1:3030/`
   * **Please enter tapdata port**: Set the Tapdata platform login port, default is `3030`.
   * **Please enter api server port**: Set the API Server service port, default is `3080`.
   * **Does MongoDB require username/password?**: If MongoDB database has not enabled security authentication, enter **n**; if enabled, enter **y** and follow prompts to enter username, password, and authentication database (default is `admin`).
   * **Does MongoDB require TLS/SSL?(y/n)**: If MongoDB database has not enabled TSL/SSL encryption, enter **n**; if enabled, enter **y** and follow prompts to enter the absolute path of CA certificate and Certificate Key files, as well as the file password for the Certificate Key.
   * **Please enter MongoDB host, port, database name**: Set the MongoDB database URI connection information, default is `127.0.0.1:27017/tapdata`.
   * **Does API Server response error code?**: Whether to enable the API Server response error code feature.

   After successful deployment, the command line returns an example as follows:

   ```bash
   deployed connector.
   Waiting for the flow engine to start \
   FlowEngine is startup at : 2023-04-01 23:00
   API service started
   ```

   An example of the Server A deployment process:
   <AsciinemaPlayer
   src="/asciinema_playbook/install_tapdata.cast"
   poster="npt:0:20"
   rows={25}
   speed={1.8}
   preload={true}
   terminalFontSize="14px"
   fit={false}
   />

3. Log into the Tapdata platform through a browser; the local login address is [http://127.0.0.1:3030](http://127.0.0.1:3030). Change the password promptly after the first login for security.

   :::tip
   To access the Tapdata service from other devices on the same internal network, ensure network interconnectivity.
   :::

4. Set Tapdata service to start on boot.

   1. Navigate to the `/usr/lib/systemd/system` directory and use a text editor (e.g., `vim`) to create a new service file named `tapdata.service`. Paste the following content into the file.

      ```bash
      # Replace ExecStart and ExecStop paths with the correct tapdata installation path
      [Unit]
      Description=Tapdata Service
      After=network.target
      
      [Service]
      Type=simple
      User=root
      ExecStart=/root/tapdata/tapdata start
      ExecStop=/root/tapdata/tapdata stop
      Restart=on-failure
      
      [Install]
      WantedBy=multi-user.target
      ```

   2. Load the new service file and enable it to start on boot:

      ```bash
      sudo systemctl daemon-reload
      sudo systemctl enable tapdata.service
      ```

   3. (Optional) Restart the machine during off-peak hours and check if the Tapdata service started normally with the `systemctl status tapdata.service` command.



## Server B Deployment Process

1. Obtain the License file.

   1. Execute the following command to obtain the required SID information for application.

      ```bash
      java -cp components/tm.jar -Dloader.main=com.tapdata.tm.license.util.SidGenerator org.springframework.boot.loader.PropertiesLauncher
      ```

   2. Provide the printed SID information to the Tapdata support team to complete the License application process.

   3. Upload the obtained License file to the unzipped directory (**tapdata**).

2. In the tapdata directory, execute `./tapdata start`, following command line prompts to set Tapdata's login address, API service port, MongoDB connection information, etc., as shown below:

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
   ✔ Please enter backend url, comma separated list. e.g.:http://127.0.0.1:3030/ (Default: http://127.0.0.1:3030/):  … http://192.168.1.200:3030,http://192.168.1.201:3030
   ✔ Please enter tapdata port. (Default: 3030):  … 
   ✔ Please enter api server port. (Default: 3080):  … 
   ✔ Does MongoDB require username/password?(y/n):  … no
   ✔ Does MongoDB require TLS/SSL?(y/n):  … no
   ✔ Please enter MongoDB host, port, database name(Default: 127.0.0.1:27017/tapdata):  … 192.168.1.200:27017/tapdata
   ✔ Does API Server response error code?(y/n):  … yes
   MongoDB uri:  mongodb://192.168.1.200:27017/tapdata
   MongoDB connection command: mongo  mongodb://192.168.1.200:27017/tapdata
   System initialized. To start Tapdata, run: tapdata start
   WORK DIR:/root/tapdata
   Testing JDK...
   java version:1.8
   Java environment OK.
   Unpack the files...
   frontend server started.begin deploy init
   Try to connect to TM for deploy connector...
   deploy connector...
   ```

   * **Please enter backend url**: Set the Tapdata platform login addresses for both Servers A and B, separated by a comma, e.g., `http://192.168.1.200:3030,http://192.168.1.201:3030`.
   * **Please enter tapdata port**: Set the Tapdata platform login port, default is `3030`.
   * **Please enter api server port**: Set the API Server service port, default is `3080`.
   * **Does MongoDB require username/password?**: If MongoDB database has

not enabled security authentication, enter **n**; if enabled, enter **y** and follow prompts to enter username, password, and authentication database (default is `admin`).
* **Does MongoDB require TLS/SSL?(y/n)**: If MongoDB database has not enabled TSL/SSL encryption, enter **n**; if enabled, enter **y** and follow prompts to enter the absolute path of CA certificate and Certificate Key files, as well as the file password for the Certificate Key.
* **Please enter MongoDB host, port, database name**: Set the MongoDB database URI connection information, in this case, `mongodb://192.168.1.200:27017/tapdata`.
* **Does API Server response error code?**: Whether to enable the API Server response error code feature.

After successful deployment, the command line returns an example as follows:

   ```bash
   deployed connector.
   Waiting for the flow engine to start \
   FlowEngine is startup at : 2023-04-01 23:10
   API service started
   ```

An example of the Server B deployment process:
<AsciinemaPlayer
src="/asciinema_playbook/install-tapdata-ha.cast"
poster="npt:0:10"
rows={25}
speed={1.8}
preload={true}
terminalFontSize="13px"
fit={false}
/>

3. With Tapdata services deployed on both servers, devices on the same internal network can access the management page via http://192.168.1.200:3030 or http://192.168.1.201:3030.

   :::tip
   Change the password promptly after the first login for security.
   :::

   After successful login, in System Management > Cluster Management, you can view the status of Tapdata services on both servers.

   ![Cluster Status](../images/tapdata_cluster_ha.png)

4. Set Tapdata service to start on boot.

   1. Navigate to the `/usr/lib/systemd/system` directory and use a text editor (e.g., `vim`) to create a new service file named `tapdata.service`. Paste the following content into the file.

      ```bash
      # Ensure ExecStart and ExecStop point to the correct tapdata installation path
      [Unit]
      Description=Tapdata Service
      After=network.target
      
      [Service]
      Type=simple
      User=root
      ExecStart=/root/tapdata/tapdata start
      ExecStop=/root/tapdata/tapdata stop
      Restart=on-failure
      
      [Install]
      WantedBy=multi-user.target
      ```

   2. Load the new service file and enable it to start on boot:

      ```bash
      sudo systemctl daemon-reload
      sudo systemctl enable tapdata.service
      ```

   3. (Optional) Restart the machine during off-peak hours and check if the Tapdata service started normally with the `systemctl status tapdata.service` command.



## Next Steps

[Connect to a Database](../quick-start/connect-database.md)