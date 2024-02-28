# Http Receiver

With Tapdata's HTTP Receiver data source, you can receive data pushed from platforms such as SaaS to quickly bridge data silos and build a unified data platform. This article explains how to add an HTTP Receiver data source in Tapdata.

## Connect to HTTP Receiver

1. Log in to the [Tapdata platform](https://cloud.tapdata.net/console/v3/).

2. In the left navigation pane, click on **Connection Management**.

3. Click on **Create** on the right-hand side of the page.

4. In the popup dialog, search for and select **HTTP Receiver**.

5. Follow the instructions below to complete the data source <span id="320-http-receiver">configuration</span>:

    * **Name**: Provide a unique name that has business significance.
    * **Type**: Support using HTTP Receiver as the source.
    * **Table Name**: Enter a table name for receiving data. Avoid using special characters.
    * **Service URL Addr**: This is a fixed value. You can use the service URL to push data to the current data source. The pushed data will be written as incremental data into the table you configured.
    * **Token Expiration Time**: Default is **3600** seconds. When pushing data for the first time or when the service token expires, you need to use the **Service Token Retrieval Link** below to obtain a new service token.
    * **Supplier List**: Can be used to distinguish different supplier. Click **Add Vendor** to configure an independent service token retrieval link for each supplier to enhance security.
    * **Enable Data Processing Scripts**: Turn on this switch and design relevant processing scripts based on the third-party platform's message data format to extract the required data. After completing the setup, you can click **Dry Run** below to confirm that the script is functioning properly.
      Suppose a platform pushes data like the example below:
      
      ```js
      {
        "eventType": "ADD_MESSAGE",
        "time": 1256467862232000,
        "message": {
          "title": "This is sample message",
          "context": "Sample message for everyone.",
          "sender": "Jack",
          "to": "Sam",
          "time": 1256467862232000
        },
        "sender": {
          "name": "Jack",
          "id": "12354-5664-2130-45-460",
          "dept": "OpenDept"
        }
      }
      ```
      If we only need the data from the **message** field, the data processing script would look like this:
      ```js
      function handleEvent(eventData, supplierId) {
          let eventType = eventData.eventType;
          // Convert event type to a unified identifier (i: insert, u: update, d: delete)
          let type = "i";
          switch(eventType){
              case "ADD_MESSAGE" : type = "i";break;
              case "UPDATE_MESSAGE": type = "u";break;
              case "DELETE_MESSAGE": type = "d";break;
          }
          return {
              "before": eventData.message, // Data before the event, required for delete events
              "after": eventData.message,  // Result after the event, required for insert and update events
              "opType": type,              // Event type: i (insert), u (update), d (delete)
              "time": eventData.time       // Time when the event occurred, timestamp value
          }
      }
      ```
      After the data processing script, you will get the following data and write it to our table:
      ```js{
        "title": "This is sample message",
        "context": "Sample message for everyone.",
        "sender": "Jack",
        "to": "Sam",
        "time": 1256467862232000
      }
      ```
    * **Agent Settings**: Default is **Platform Automatic Allocation**, but you can also specify it manually.
    * **Model Load Time**: When the number of models in the data source is less than 10,000, refresh the model information every hour. If the model data exceeds 10,000, refresh the model information according to the specified time.
   
6. Click on **Test**, and once successful, click **Save**.

   :::tip

   If the connection test fails, follow the on-page instructions to troubleshoot.

   :::



## Dry Run Instructions

After completing the above steps, when you attempt to run this link for testing:

* Ensure that the third-party platform is using the service URL configured here and has set up a valid message push service.

* If the third-party platform has just configured the message push service, there might be no historical message data. In this case, you can trigger the third-party platform's message push by performing relevant data operations on the platform. If the message service configuration is valid, you can obtain corresponding data for dry run testing from historical data.

  Additionally, you can manually construct relevant message data to test your data processing script and verify whether it meets your expectations.
