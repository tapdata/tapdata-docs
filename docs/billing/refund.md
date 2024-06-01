# Unsubscribe Instance

import Content from '../reuse-content/_cloud-features.md';

<Content />

If you no longer need to use the Agent instance, you can follow the process to unsubscribe from the instance in this article while ensuring that its associated tasks do not affect your business.

## Procedure

1. Log in to [TapData Cloud](https://cloud.tapdata.io/).

2. In the left navigation panel, click **Resource Management**.

3. In the **Agent Resource** tab, ensure that the Agent is not associated with a running task.

   1. Locate the target Agent to see if any running task is associated, skip this step if the there is not running task associated.

   2. As shown in the figure below, this Agent instance associates 1 running instance, then clicks the task number.

      ![Associated Task(s)](../images/agent_related_tasks.png)

   3. Once redirected to the Task List page, please locate the related task to stop it.

4. Back to the **Agent Management** page, locate the target Agent and click **Stop** on the right.

5. After the Agent stopped, click **Unsubscribe**.

6. In the pop-up dialog, confirm the refund amount and select the reason for unsubscribing, click Unsubscribe.

   :::tip

   This operation is irreversible, in order to avoid affecting the business, please carefully evaluate the operation.

   :::


## Refund Policy

When you initiate the unsubscribe operation, TapData Cloud will execute the refund according to the use of time. For example, if you order for 1 month of the instance, after 10 days of use to initiate the unsubscription, the default refund on the original payment amount of the remaining 20 days, the calculation formula is as follows:

(Subscribed cycle end date **－**Unsubscribe date) **/** (Subscribed cycle end date **－** Subscribed cycle start date) **x** Actual payment amount (excluding coupon amount)

:::tip

To view the start and end dates of your subscribed cycle, click on your username located in the upper right corner of the page, then select **Subscription Center**.

:::

