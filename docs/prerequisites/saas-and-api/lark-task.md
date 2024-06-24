# Lark Task

import Content from '../../reuse-content/_enterprise-and-cloud-features.md';

<Content />

This article serves as a comprehensive guide, providing step-by-step instructions on adding Lark Task data sources to TapData Cloud, enabling efficient data synchronization and development for your projects.

## Preparation

1. Log in to https://open.feishu.cn/app.
1. Locate the corresponding application and find it in the ***voucher and basic information*** of the application.
1. Get **App ID** and **App Secret**, we will fill these in TapData Cloud.


## Use Lark to Creation Quest

The creation task must contain the following fields：：

```json
[
  {
    "richSummary": "Here is the title of the task",
    "richDescription": "Here is the task description",
    "time": "Here is the task expiration time, need to pass in the timestamp",
    "collaboratorIds": "Here is the task leader's phone number or email address",
    "followerIds": "Here the task focuses on the person's phone number or email address",
    "title": "Here is the linkable title in the task description, which can be used with the following url",
    "url": "Here's a link to the title above"
  }
]
```

- cUserIds/fUserIds is the ***mobile phone number*** or ***email address*** of the task owner/task follower. The APP uses these two fields to create a task or add a task.
- You need to use the user's registered phone number or email address to obtain the user_id to create tasks for the user.
- You need to ensure that the user with the current mobile phone number or email address is in the visible range of this application. If not in the visible range of the current application version, you will not be able to send messages to this user. If necessary, you can check the visible range under the latest version in the application version management and publishing, and create a new version and add this user to the visible range.