# Lark-IM

飞书是一款协作与管理平台，支持即时通讯、音视频会议等功能。完成 Agent 部署后，您可以跟随本文教程在 Tapdata 中添加  Lark-IM（飞书聊天消息）数据源，后续可将其作为目标库来构建数据管道。

## <span id="prerequisite">准备工作</span>

1. 以管理员的身份登录[飞书开放平台](https://open.feishu.cn/app)。

2. 在开发平台首页，进入企业自建的应用。

   :::tip

   关于企业自建应用的创建方法，见[开发流程](https://open.feishu.cn/document/home/introduction-to-custom-app-development/self-built-application-development-process)。

   :::

3. 在左侧导航栏，单击**凭证与基础信息**，获取 App ID 和 App Secret 信息，后续将在连接数据源时使用。

   ![](../../images/obtain_feishu_app_ak.png)

## 注意事项

### 飞书发消息

如您需要使用飞书发消息：

***消息体结构应该如下***：

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

其中：

- receiveType用来表示消息接收者类型，取值范围为[ user | chat | email | phone ], 分别表示用户、群组，默认用户。
- contentType ***text*** | ***post*** | ***image*** | ***interactive*** | ***share_chat*** | ***share_user*** | ***audio*** | ***media*** | ***file*** | ***sticker***，默认***text***。 具体的消息类型可查看官方文档上的描述：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/im-v1/message/create_json
- receiveId 为消息接收者的***open_id***或***手机号***或***邮箱***或***群聊的chat_id***，APP通过这个字段来发送消息到指定的用户或群聊。

1. 您需要使用用户的注册手机号或邮箱发送指定消息到此人；
2. 您需要保证当前手机号或邮箱的使用者存在于此应用的可见范围，如不在当前应用版本的可见范围，将无法发送消息到这个用户，如有必要，您可在应用版本管理与发布中查看最新版本下的可见范围，并创建新的版本并将此用户添加到可见范围。

![img](https://tapdata-bucket-01.oss-cn-beijing.aliyuncs.com/FeiShu/doc/version.PNG)

![img](https://tapdata-bucket-01.oss-cn-beijing.aliyuncs.com/FeiShu/doc/rang.PNG)

![img](https://tapdata-bucket-01.oss-cn-beijing.aliyuncs.com/FeiShu/doc/createdVersion.PNG)

![img](https://tapdata-bucket-01.oss-cn-beijing.aliyuncs.com/FeiShu/doc/modifyRang.PNG)