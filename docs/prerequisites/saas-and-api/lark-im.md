# Lark IM

import Content from '../../reuse-content/_enterprise-and-cloud-features.md';

<Content />

This article serves as a comprehensive guide, providing step-by-step instructions on adding Lark IM data sources to TapData Cloud, enabling efficient data synchronization and development for your projects.

## Preparation

1. Log in to https://open.feishu.cn/app.
1. Locate the corresponding application and find it in the ***voucher and basic information*** of the application.
1. Get **App ID** and **App Secret**, we will fill these in TapData Cloud.


## Use Lark to send message

If you need to send a message using FeiShu, the message body structure should be as follows：

```json
[
  {
    "receiveType": "{{user | email | phone | chat}}",
    "receiveId": "{{user_open_id | user_email | user_phone | chat_id}}",
    "contentType": "text",
    "content": "{\"text\":\"Hello! This is lark message! \"}"
  }
]
```

- receiveType is used to represent the type of message receiver. The value range is [ user | chat | email | phone ], represent users, groups and default users respectively.
- contentType contain ***text*** | ***post*** | ***image*** | ***interactive*** | ***share_chat*** | ***share_user*** | ***audio*** | ***media*** | ***file*** | ***sticker***，default is ***text***. For specific message types, see the description on the official document: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/im-v1/message/create_json
- receiveId is the ***open_id*** or ***phone*** or ***email*** or ***chat_id*** of the message receiver，APP sends messages to specified users or group chat through this field.

You need to use the user's registered mobile phone number to send the specified message to this person;

You need to ensure that the user of the current mobile phone number exists in the visible range of this application. If it is not in the visible range of the current application version, you cannot send messages to this user. If necessary, you can view the visible range of the latest version in the application version management and release, and create a new version and add this user to the visible range.