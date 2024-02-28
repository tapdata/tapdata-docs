# Informix

Informix is a product family within IBM's Information Management division that is centered on several relational database management system and Multi-model database offerings.

This article describes how to connect to Informix data sources on Tapdata.

## Connect to Informix

1. Log in to Tapdata Platform.

2. In the left navigation panel, click **Connections**.

3. On the right side of the page, click **Create**.

4. In the pop-up dialog, select **Informix**.

5. Fill in the connection information for Informix on the redirected page, following the instructions provided below.

    * **Connection name**: Fill in a unique name that has business significance.
    * **Connection type**: Supports Informix as a source or target database.
    * **Host**: Fill in the database connection address.
    * **Port**: Fill in the service port of database.
    * **Server**: Fill in the Server info
    * **Database**: Fill in the database name.
    * **Password**: The database password.
    * **Connection Parameter String**: Additional connection parameters, default empty.
    * **Timezone**: By default, Tapdata utilizes the time zone used by the database. However, you also have the flexibility to manually specify the time zone based on your business requirements.
    * **Agent settings**: Defaults to **Platform automatic allocation**, you can also manually specify an agent.
    * **Model load time**: If there are less than 10,000 models in the data source, their information will be updated every hour. But if the number of models exceeds 10,000, the refresh will take place daily at the time you have specified.

6. Click **Test Connection**, and when passed, click **Save**.

   :::tip

   If the connection test fails, follow the prompts on the page to fix it.

   :::
