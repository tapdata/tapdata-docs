# Alibaba 1688

import Content from '../../reuse-content/_enterprise-and-cloud-features.md';

<Content />

This article describes how to connect to Alibaba 1688 data sources on TapData Cloud.

## Connect to Alibaba 1688

1. [Log in to TapData Platform](../../user-guide/log-in.md).

2. In the left navigation panel, click **Connections**.

3. On the right side of the page, click **Create**.

4. In the pop-up dialog, select **Alibaba 1688**.

5. Fill in the connection information for Alibaba 1688 on the redirected page, following the instructions provided below.

    * **Name**: Fill in a unique name that has business significance.
    * **Type**: Currently only supported as a **Source**.
    * **App Key**: Fill in the App Key of Alibaba 1688.
    * **App Secret**: Fill in the App Secret.
    * **Agent settings**: Defaults to **Platform automatic allocation**, you can also manually specify an agent.
    * **Model load time**: If there are less than 10,000 models in the data source, their information will be updated every hour. But if the number of models exceeds 10,000, the refresh will take place daily at the time you have specified.

6. Click **Test Connection**, and when passed, click **Save**.

   :::tip

   If the connection test fails, follow the prompts on the page to fix it.

   :::
