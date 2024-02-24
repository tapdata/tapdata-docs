# MongoDB Atlas

MongoDB Atlas 是 MongoDB 提供的多云应用程序数据平台，Tapdata 支持将 MongoDB Atlas 作为源或目标库构建数据管道，本文介绍如何在 Tapdata 中添加 MongoDB Atlas 数据源。

## 支持版本

MongoDB Atlas 5.0.15

:::tip

为保障数据兼容性，MongoDB 间数据同步时，推荐源/目标库均为 5.0 及以上版本。

:::

## 准备工作

1. 登录 [MongoDB Atlas 平台](https://cloud.mongodb.com/v2)。

2. 设置网络访问控制，确保网络连通性。

    1. 在左侧导航栏，单击 **Network Access**。

    2. 单击右侧的 **ADD IP ADDRESS**。

    3. 在弹出的对话框中，填写 Tapdata 所属的公网地址（CIDR 格式）并单击 **Confirm**。

       ![设置网络白名单](../../images/atlas_add_ip_address.png)

3. 创建账号并授予权限，用于数据库连接。

    1. 在左侧导航栏，单击 **Database Access**。

    2. 在页面右侧，单击 **ADD NEW DATABASE USER**。

    3. 在弹出的对话框中，选择认证方式并设置权限。

       ![创建账号并授权](../../images/atlas_create_user.png)

       本案例中，我们以密码认证方式为例演示操作流程，权限选择说明如下

        * **作为源库**：选择 **Built-in Role** 为 **Only read any database**。

        * **作为目标库**：选择 **Built-in Role** 为 **Read and write to any database**。

    4. 单击 **Add User**。

4. 获取数据库连接信息。

    1. 在左侧导航栏，单击 **Database**。

    2. 找到目标数据库，单击 **Connect**。

    3. 在弹出的对话框中，选择 **Connect your application** 即可获取连接信息，该信息将在连接数据库时用到。

       ![获取连接信息](../../images/atlas_obtain_connection.png)

## 连接 MongoDB Atlas

1. 登录 Tapdata 平台。

2. 在左侧导航栏，单击**连接管理**。

3. 单击页面右侧的**创建**。

4. 在弹出的对话框中，搜索并选择 **MongoDB Atlas**。

5. 根据下述说明完成数据源配置。

   ![MongoDB Atlas 连接示例](../../images/mongodb_atlas_connection_setting.png)

    * 连接信息设置

        * **连接名称**：填写具有业务意义的独有名称。

        * **连接类型**：支持将 MongoDB Atlas 作为源或目标库。

        * **连接方式**：固定为**URI 模式**，选择该模式后，您需要填写数据库 URI 连接信息（需替换账号、密码并设置），获取方式见准备工作，
          
          例如：` mongodb+srv://tapdata:Tap123456@cluster****.mongodb.net/admin?retryWrites=true&w=majority`
          
          :::tip
          
          请务必在连接串中设置认证数据库，例如上述示例中设置为 **admin**，否则会导致连接失败并提示错误：“datbaseName can not be null”。
          
          :::
          
        * **使用 TLS/SSL 连接**：根据业务需求选择：
            * **TSL/SSL 连接**：Tapdata 将连接网络中的单独服务器，该服务器提供到数据库的 TSL/SSL 通道。如果您的数据库位于不可访问的子网中，则可尝试使用此方法并提供私钥文件、私钥密码等信息。
            * **直接连接**：Tapdata 将直接连接到数据库。

    * 高级设置
        * **包含表**：默认为**全部**，您也可以选择自定义并填写包含的表，多个表之间用英文逗号（,）分隔。
        
        * **排除表**：打开该开关后，可以设定要排除的表，多个表之间用英文逗号（,）分隔。
        
        * **Agent 设置**：默认为**平台自动分配**，您也可以手动指定 Agent。
        
        * **模型加载时间**：当数据源中模型数量小于 10,000 时，每小时刷新一次模型信息；如果模型数据超过 10,000，则每天按照您指定的时间刷新模型信息。
        
        * **开启心跳表**：当连接类型选择为**源头和目标**、**源头**时，支持打开该开关，由 Tapdata 在源库中创建一个名为 **_tapdata_heartbeat_table** 的心跳表并每隔 10 秒更新一次其中的数据（数据库账号需具备相关权限），用于数据源连接与任务的健康度监测。
          
          :::tip
          
          数据源需在数据复制/开发任务引用并启动后，心跳任务任务才会启动，此时您可以再次进入该数据源的编辑页面，即可单击**查看心跳任务**。
          
          :::

6. 单击**连接测试**，测试通过后单击**保存**。

   :::tip

   如提示连接测试失败，请根据页面提示进行修复。

   :::
