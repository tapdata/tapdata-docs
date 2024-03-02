# Manage Roles

A role is a collection of one or more permissions. You can grant multiple operation permissions to a role, and then grant the role to a [user](manage-user.md), who will inherit all the permissions within that role. Based on this design, you can pre-create roles based on business needs and then directly assign roles to users when creating them, without the need to configure permissions for each user, thereby simplifying operational management and enhancing security.

## Procedure

1. Log in to Tapdata as a system administrator.

2. In the left navigation bar, select **System** > **Roles**.

3. Create a new role.

    1. On the right side of the page, click **Create Roles**.

    2. In the pop-up dialog, fill in the role name and description, and set whether it is the default role.

4. If you need to manage existing roles, you can choose the operation to perform:

    * **Set Role Permissions**: Click **Set Permissions** for the target role. On the page that appears, select the permissions that the role will have.

      :::tip

        * As shown below, we only grant **Connections** permission. After this user logs into Tapdata, they can only see the connection management menu, and creating and copying connections are not allowed for this role.
        * The functionality modules that currently support fine-grained permission control are Connection Management and Data Pipeline.

      :::

      ![Set Role Permissions](../../images/grant_data_srouce.png)

    * **Associate Users**: Click **Associate Users** for the target role. In the pop-up dialog, select the target user(s) (multiple selections allowed) and click **Confirm**. The user(s) will automatically inherit all permissions of the current role.

    * **Edit**: Click **Edit** for the target role to set the role name, description, and whether it is the default role.

    * **Delete**: Ensure that the target role is not associated with any other roles, click **Delete** for the target role, and click **Confirm** in the pop-up dialog.

      :::caution

      Once a role is deleted, it cannot be recovered. Please proceed with caution.

      :::
