# Log in to TapData Platform
import Content from '../reuse-content/_all-features.md';

<Content />

TapData provides a user-friendly interface, allowing you to set up and manage data pipelines easily through simple drag-and-drop actions. Before starting, you need to log in to the TapData platform according to the product series you have chosen by following the guidelines below.

## TapData Cloud

TapData Cloud is ideal for scenarios requiring quick deployment and low initial investment, helping you focus more on business development rather than infrastructure management. You can simply visit the [TapData Cloud](https://cloud.tapdata.net/console/v3/) platform and sign up to log in, with support for registration and login via email/phone number, WeChat QR code, and third-party accounts (GitHub/Google).

![Log in to TapData Cloud](../images/login-cloud.png)

## TapData Enterprise

TapData Enterprise supports deployment to local data centers and is suitable for scenarios with strict requirements on data sensitivity or network isolation. The TapData Enterprise platform is set up by administrators [following deployment steps](../quick-start/install/install-tapdata-enterprise/README.md), who then [assign accounts](../user-guide/manage-system/manage-user.md) and [grant permissions](../user-guide/manage-system/manage-role.md) based on business needs for users within the enterprise. Regular users need to contact their administrators to obtain the login URL and credentials.

![Log in to TapData Enterprise](../images/login-on-prem.png)

## TapData Community

TapData Community is an open-source data integration platform that offers basic data synchronization and transformation capabilities. It can be deployed with a single command using Docker, helping you to quickly explore and implement data integration projects. The default login is admin@admin.com with the password admin. Please change your password promptly after logging in to ensure security. Based on your business needs, you can also [assign accounts](../user-guide/manage-system/manage-user.md) to other users.

![Login to TapData Community](../images/login-on-prem.png)