# Manage Functions

Tapdata supports a wide range of functions to facilitate the definition of processing steps, allowing for their use in [JavaScript (JS) nodes](../data-pipeline/data-development/process-node#js-process). Additionally, you can freely define custom functions or import third-party JAR packages to introduce new functions as needed.

## Procedure

1. Log in to Tapdata platform.

2. In the left navigation bar, select **Data Pipeline** > **Function Management**.

3. On this page, you can see the functions currently available. For example, click **View** next to a system function to learn more about it.

   ![View Functions](../../images/view_functions.png)

4. If the existing functions do not meet your needs, you can click **Create** in the upper right corner to define a new function. Click **Save** once setup is complete.

   :::tip

   Alternatively, you can click **Import JAR Package** and then import functions from the package (which must comply with Tapdata standards). Subsequently, functions from that JAR package can be used in JS nodes using the general format: function name.method name (specific parameters).

   :::

   ![](../../images/create_function.png)

   - **Code Details**: You can write your own function logic here.
   - **Description**: A description of what the custom function does.
   - **Command Format**: The command format for the custom function, useful for prompting when calling the function.
   - **Parameter Explanation**: Specific explanations for the supported input parameter types and the return parameter types.
   - **Return Value**: The return value of the custom function.

5. For custom functions, you can select them to export for backup or share with other team members. You can also import custom functions.

   ![Import/Export Functions](../../images/import_export_functions.png)