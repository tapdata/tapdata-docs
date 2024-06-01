# Manage Users
import Content from '../../reuse-content/_enterprise-and-community-features.md';

<Content />

After TapData is deployed, a system administrator named `admin@admin.com` will be automatically created. To better manage platform operation permissions, you can log into the TapData platform with this account and perform management operations, such as creating users and granting permissions, for other members within the organization.

## Procedure

1. [Log in to TapData Platform](../log-in.md) as a system administrator.

2. In the left navigation bar, select **System** > **Users**.

3. Create a new user.

    1. Click **Create** on the right side of the page.

    2. In the pop-up dialog, complete the setup according to the instructions below.

        * **Username**: Fill in the username for easy business identification.
        * **Email**: Fill in a unique email address, which will be used for logging in subsequently.
        * **Password**: Set the user password, recommending the inclusion of uppercase and lowercase letters, numbers, and special characters.
        * **Associated Role**: A role is a collection of one or more permissions. Selecting a role to associate with the user means inheriting the permissions that the role possesses. For more introduction, see [Create Role](manage-role.md).
        * **Status**: Set to **Activated**.
        * **Access Code**: No need to set, it can be used to integrate the TapData platform.

4. If you need to manage existing users, choose the operation to perform:

    * **Freeze/Activate User**: If you need to temporarily control whether a user can log in to the TapData platform, click **Freeze** or **Activate**.
    * **Edit User**: Click **Edit** for the target user, and in the pop-up dialog, adjust user configurations like password, role, and status, etc.
    * **Delete User**: Click **Delete** for the target user, and click **Confirm** in the pop-up dialog.
      :::caution   
      Once a user is deleted, it cannot be recovered. Please proceed with caution.   
      :::