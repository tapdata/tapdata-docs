# Notification and Alert Settings

import Content from '../../reuse-content/_enterprise-features.md';

<Content />

:::tip

If you are using TapData Cloud, notification messages and configuration entry points are located at the top right of the page. You can set notification rules and alert recipients.

:::

TapData supports custom system and alert settings and integrates with third-party platforms via Webhook, helping you quickly grasp the status of task operations.

## Notification Settings

After [logging into the TapData platform](../log-in.md), click the ![setting_icon](../../images/setting_icon.png) > **Notification Settings** at the top right corner. You can set up custom notification rules to automatically trigger notification processes. The main types are task operation notifications and Agent notifications. The specific notification items include:

![Notification Settings](../../images/system_notification_1.png)

**System Notice Settings**

- The job was startedSystem
- Job pausedSystem
- Job deletedSystem
- Job state errorSystem
- Job encounter error
- CDC lag time
- Verify job count differenceSystem
- Verify job field value differenceSystem
- Verify job was deletedSystem
- Verify job errorSystem

**Agent Notice Settings**

- Server disconnectedSystem
- Agent startedSystem
- Agent stoppedSystem
- Agent createdSystem
- Agent deleted

## Alert Settings

Through alert settings, you can configure the notification method and sending interval for alert events:

![](../../images/system_notification_2.png)

## Webhook Alerts

With the Webhook alert feature, you can quickly integrate with your alert platform or third-party platform by simply providing the service URL. This allows for more notification methods, such as instant messaging platforms.

![Webhook Settings](../../images/webhook_settings.png)
