# 数据服务平台界面介绍

开启数据服务平台模式后，页面将基于我们前面[介绍的层级](enable-daas-mode.md)进行分类展示，您只需要简单地拖动表至下一层级，即可自动完成数据复制任务的创建，轻松完成数据的流转。本文介绍如何使用数据服务平台模式的界面，帮助您快速了解各功能模块。

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## 操作步骤

1. 登录 Tapdata 平台。

2. 在左侧导航栏，单击**实时数据中心**。

3. 在本页面，您可以直观地看到您已录入的数据源信息，接下来，我们将介绍各模块的<span id="release320-daas">具体作用</span>。

   ![数据集成模式界面](../../../images/daas_dashboard.png)


```mdx-code-block
<Tabs className="unique-tabs">
<TabItem value="① 切换视图">
```
单击![](/img/switch_icon.png)图标，以目录结构的形式展现数据源信息（再次单击可切换回 Console 视图）。

在**目录视图**下，如果选中具体的表，您还可以在页面右侧看到表详情信息，各标签页介绍如下：

![数据目录](/img/data_category_view.png)



* **概览**：可查看表的基本信息，例如表大小、行数、列类型、列注释、列描述（默认来源为注释信息）、样本数据等。

* **Schema**：可查看表的列详情，如列类型、主键、外键、默认值等。

* **任务**：可查看该表相关的任务及其状态，您也可以在该页签中创建新的任务。 

* **血缘**：以图的形式直观展现数据血缘关系，帮助您更好地管控数据质量，单击任务节点可直接跳转至相关任务的监控页面。
  

![数据血缘](/img/data_lineage.png)

</TabItem>

<TabItem value="② 添加数据源">

单击 **+** 图标，在弹出的对话框，我们可以添加数据源，选中某个数据源后将跳转至连接配置页面，具体配置方法，见[连接数据源](../../../prerequisites/README.md)。

</TabItem>

<TabItem value="③ 搜索表">
单击放大镜图标，输入表名的关键词，可帮助您快速定位到具体的表，该操作也支持在其他层级中使用。

![搜索表](/img/search_table.png)

</TabItem>

<TabItem value="④ 数据源详情">

在数据连接的右侧，单击![](/img/detail_icon.png)图标，页面右侧将展示该数据源的连接信息和关联的任务。

![数据源详情](/img/data_source_detail.png)

</TabItem>

<TabItem value="⑤ 表详情">

在表名的右侧，单击![](/img/detail_icon.png)图标，页面右侧将展示该表关联的任务和表的基本信息，包含表大小、行数、列信息、样本数据、Scheme（如主键/外键） 等，该操作在其他层级的模块中也可使用。

此外，当平台加工层的某个表不再需要时，您可以单击该表并在弹出的面板中单击删除（需删除关联的任务）。

![查看表详情](/img/cache_table_detail.png)

</TabItem>

<TabItem value="⑥ 表溯源">

单击![](/img/trace.png)图标，即可查看到表的血缘关系，可快速数据表产生的链路关系，帮助您更好管理表。

![表的血缘关系](/img/trace_source.png)

</TabItem>

<TabItem value="⑦ 切换模式">

单击![](/img/setting_icon.png)图标，在弹出的对话框中，可选择切换回[数据集成模式](../etl-mode/README.md)。

</TabItem>
</Tabs>

