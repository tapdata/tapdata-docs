/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

// TapData Documentation docs list
  TapData: [
  'what-is-tapdata',
    {
     type: 'category',
     label: 'Introduction',
     link: {type: 'doc', id: 'introduction/README'},
     items: [
             'introduction/architecture',
             'introduction/features',
             'introduction/benefits',
             'introduction/use-cases',
             'introduction/compare-editions',
             'introduction/change-data-capture-mechanism',
             'introduction/security',
             'introduction/terms',
       ]
    },
    {
     type: 'category',
     label: 'Quick Start',
     link: {type: 'doc', id: 'quick-start/README'},
     items: [
            {
             type: 'category',
             label: 'Step1: Provision TapData',
             link: {type: 'doc', id: 'quick-start/install/README'},
             items: [
                    'quick-start/install/install-tapdata-agent',
                    {
                     type: 'category',
                     label: 'TapData Enterprise',
                     link: {type: 'doc', id: 'quick-start/install/install-tapdata-enterprise/README'},
                     items: [
                     'quick-start/install/install-tapdata-enterprise/install-tapdata-stand-alone',
                     'quick-start/install/install-tapdata-enterprise/install-on-windows',
                     ]
                     },
                     'quick-start/install/install-tapdata-community',
             ]
            },
            'quick-start/connect-database',
            'quick-start/create-task',
     ]
    },
    {
     type: 'category',
     label: 'Billing',
     link: {type: 'doc', id: 'billing/README'},
     items: [
             'billing/billing-overview',
             'billing/purchase',
             'billing/renew-subscribe',
             'billing/expiration',
             'billing/refund',
       ]
    },
{
         type: 'category',
         label: 'Connect Data Sources',
         link: {type: 'doc', id: 'prerequisites/README'},
         items: [
                 'prerequisites/supported-databases',
                 {
                  type: 'category',
                  label: 'Warehouses and Lakes',
                  link: {type: 'doc', id: 'prerequisites/warehouses-and-lake/README'},
                  items: [
                          'prerequisites/warehouses-and-lake/big-query',
                          'prerequisites/warehouses-and-lake/clickhouse',
                          'prerequisites/warehouses-and-lake/databend',
                          'prerequisites/warehouses-and-lake/doris',
                          'prerequisites/warehouses-and-lake/gaussdb',
                          'prerequisites/warehouses-and-lake/greenplum',
                          'prerequisites/warehouses-and-lake/hudi',
                          'prerequisites/warehouses-and-lake/selectdb',
                          'prerequisites/warehouses-and-lake/tablestore',
                          'prerequisites/warehouses-and-lake/yashandb',
                         ]
                  },
                 {
                  type: 'category',
                  label: 'On-Prem Databases',
                  link: {type: 'doc', id: 'prerequisites/on-prem-databases/README'},
                  items: [
                          'prerequisites/on-prem-databases/dameng',
                          'prerequisites/on-prem-databases/db2',
                          'prerequisites/on-prem-databases/elasticsearch',
                          'prerequisites/on-prem-databases/gbase-8a',
                          'prerequisites/on-prem-databases/gbase-8s',
                          'prerequisites/on-prem-databases/hive1',
                          'prerequisites/on-prem-databases/hive3',
                          'prerequisites/on-prem-databases/informix',
                          'prerequisites/on-prem-databases/kingbase-es-r3',
                          'prerequisites/on-prem-databases/kingbase-es-r6',
                          'prerequisites/on-prem-databases/mariadb',
                          'prerequisites/on-prem-databases/mongodb',
                          'prerequisites/on-prem-databases/mongodb-below34',
                          'prerequisites/on-prem-databases/mrs-hive3',
                          'prerequisites/on-prem-databases/mysql',
                          'prerequisites/on-prem-databases/mysql-pxc',
                          'prerequisites/on-prem-databases/oceanbase',
                          'prerequisites/on-prem-databases/opengauss',
                          'prerequisites/on-prem-databases/oracle',
                          'prerequisites/on-prem-databases/postgresql',
                          'prerequisites/on-prem-databases/redis',
                          'prerequisites/on-prem-databases/sqlserver',
                          'prerequisites/on-prem-databases/sybase',
                          'prerequisites/on-prem-databases/tdengine',
                          'prerequisites/on-prem-databases/tidb',
                          'prerequisites/on-prem-databases/vastbase',
                          ]
                  },
                  {
                   type: 'category',
                   label: 'Cloud Databases',
                   link: {type: 'doc', id: 'prerequisites/cloud-databases/README'},
                   items: [
                           'prerequisites/cloud-databases/aliyun-adb-mysql',
                           'prerequisites/cloud-databases/aliyun-adb-postgresql',
                           'prerequisites/cloud-databases/aliyun-mongodb',
                           'prerequisites/cloud-databases/aliyun-rds-for-mariadb',
                           'prerequisites/cloud-databases/aliyun-rds-for-mongodb',
                           'prerequisites/cloud-databases/aliyun-rds-for-mysql',
                           'prerequisites/cloud-databases/aliyun-rds-for-pg',
                           'prerequisites/cloud-databases/aliyun-rds-for-sql-server',
                           'prerequisites/cloud-databases/amazon-rds-mysql',
                           'prerequisites/cloud-databases/huawei-cloud-gaussdb',
                           'prerequisites/cloud-databases/mongodb-atlas',
                           'prerequisites/cloud-databases/polardb-mysql',
                           'prerequisites/cloud-databases/polardb-postgresql',
                           'prerequisites/cloud-databases/tencentdb-for-mariadb',
                           'prerequisites/cloud-databases/tencentdb-for-mongodb',
                           'prerequisites/cloud-databases/tencentdb-for-mysql',
                           'prerequisites/cloud-databases/tencentdb-for-pg',
                           'prerequisites/cloud-databases/tencentdb-for-sql-server',
                          ]
                   },
                  {
                   type: 'category',
                   label: 'MQ and Middleware',
                   link: {type: 'doc', id: 'prerequisites/mq-and-middleware/README'},
                   items: [
                           'prerequisites/mq-and-middleware/activemq',
                           'prerequisites/mq-and-middleware/ai-chat',
                           'prerequisites/mq-and-middleware/bes-channels',
                           'prerequisites/mq-and-middleware/hazelcast-cloud',
                           'prerequisites/mq-and-middleware/kafka-enhanced',
                           'prerequisites/mq-and-middleware/kafka',
                           'prerequisites/mq-and-middleware/rabbitmq',
                           'prerequisites/mq-and-middleware/rocketmq',
                          ]
                   },
                   {
                   type: 'category',
                   label: 'CRM and Sales Analytics',
                   link: {type: 'doc', id: 'prerequisites/crm-and-sales-analytics/README'},
                   items: [
                           'prerequisites/crm-and-sales-analytics/hubspot',
                           'prerequisites/crm-and-sales-analytics/metabase',
                           'prerequisites/crm-and-sales-analytics/salesforce',
                           'prerequisites/crm-and-sales-analytics/zoho-crm',
                          ]
                   },
                   {
                    type: 'category',
                    label: 'SaaS and APIs',
                    link: {type: 'doc', id: 'prerequisites/saas-and-api/README'},
                    items: [
                            'prerequisites/saas-and-api/coding',
                            'prerequisites/saas-and-api/feishu-bitable',
                            'prerequisites/saas-and-api/github',
                            'prerequisites/saas-and-api/lark-approval',
                            'prerequisites/saas-and-api/lark-doc',
                            'prerequisites/saas-and-api/lark-im',
                            'prerequisites/saas-and-api/lark-task',
                            'prerequisites/saas-and-api/quick-api',
                            'prerequisites/saas-and-api/vika',
                            'prerequisites/saas-and-api/zoho-desk',
                           ]
                   },
                   {
                    type: 'category',
                    label: 'E-Commerce',
                    link: {type: 'doc', id: 'prerequisites/e-commerce/README'},
                    items: [
                            'prerequisites/e-commerce/alibaba-1688',
                            'prerequisites/e-commerce/shein',
                           ]
                   },
                   {
                    type: 'category',
                    label: 'Files',
                    link: {type: 'doc', id: 'prerequisites/files/README'},
                    items: [
                            'prerequisites/files/csv',
                            'prerequisites/files/excel',
                            'prerequisites/files/json',
                            'prerequisites/files/xml',
                           ]
                   },
                   {
                    type: 'category',
                    label: 'Others',
                    link: {type: 'doc', id: 'prerequisites/others/README'},
                    items: [
                            'prerequisites/others/custom-connection',
                            'prerequisites/others/dummy',
                            'prerequisites/others/http-receiver',
                            'prerequisites/others/mock-source',
                            'prerequisites/others/mock-target',
                           ]
                   },
         ]
    },
    {
     type: 'category',
     label: 'User Guide',
     link: {type: 'doc', id: 'user-guide/README'},
     items: [
             'user-guide/log-in',
             'user-guide/workshop',
             'user-guide/manage-agent',
             'user-guide/manage-connection',
             {
              type: 'category',
              label: 'Real-time Data Hub',
              link: {type: 'doc', id: 'user-guide/real-time-data-hub/README'},
              items:[
                    {
                     type: 'category',
                     label: 'Data Integration Mode',
                     link: {type: 'doc', id: 'user-guide/real-time-data-hub/etl-mode/README'},
                     items:[
                            'user-guide/real-time-data-hub/etl-mode/etl-mode-dashboard',
                            'user-guide/real-time-data-hub/etl-mode/create-etl-task',
                           ]
                    },
                    {
                     type: 'category',
                     label: 'Data as Sevice Mode',
                     link: {type: 'doc', id: 'user-guide/real-time-data-hub/daas-mode/README'},
                     items:[
                            'user-guide/real-time-data-hub/daas-mode/enable-daas-mode',
                            'user-guide/real-time-data-hub/daas-mode/daas-mode-dashboard',
                            'user-guide/real-time-data-hub/daas-mode/create-daas-task',
                           ]
                    },
                    ]
             },
             {
              type: 'category',
              label: 'Data Replication',
              link: {type: 'doc', id: 'user-guide/copy-data/README'},
              items:[
                     'user-guide/copy-data/create-task',
                     'user-guide/copy-data/quick-create-task',
                     'user-guide/copy-data/manage-task',
                     'user-guide/copy-data/process-node',
                     'user-guide/copy-data/monitor-task',
                    ]
              },
              {
               type: 'category',
               label: 'Data Transformation',
               link: {type: 'doc', id: 'user-guide/data-development/README'},
               items:[
                      'user-guide/data-development/create-task',
                      'user-guide/data-development/create-materialized-view',
                      'user-guide/data-development/manage-task',
                      'user-guide/data-development/process-node',
                      'user-guide/data-development/monitor-task',
                     ]
               },
             'user-guide/verify-data',
             'user-guide/pre-check',
             {
              type: 'category',
              label: 'Advanced Settings',
              link: {type: 'doc', id: 'user-guide/advanced-settings/README'},
              items:[
                     'user-guide/advanced-settings/share-cache',
                     'user-guide/advanced-settings/manage-function',
                     'user-guide/advanced-settings/custom-node',
                     'user-guide/advanced-settings/share-mining',
                     'user-guide/advanced-settings/manage-external-storage',
                    ]
             },
             {
              type: 'category',
              label: 'Data Services',
              link: {type: 'doc', id: 'user-guide/data-service/README'},
              items:[
                     'user-guide/data-service/manage-app',
                     'user-guide/data-service/create-api-service',
                     'user-guide/data-service/create-api-client',
                     'user-guide/data-service/create-api-server',
                     'user-guide/data-service/audit-api',
                     'user-guide/data-service/monitor-api-request',
                     'user-guide/data-service/api-auth',
                     'user-guide/data-service/query-via-restful',
                     'user-guide/data-service/query-via-graphql',
                     'user-guide/data-service/api-query-params',
                    ]
             },
             {
              type: 'category',
              label: 'Manage System',
              link: {type: 'doc', id: 'user-guide/manage-system/README'},
              items:[
                     'user-guide/manage-system/manage-role',
                     'user-guide/manage-system/manage-user',
                     'user-guide/manage-system/manage-cluster',
                     'user-guide/manage-system/manage-external-storage',
                    ]
             },
             {
              type: 'category',
              label: 'Other Settings',
              link: {type: 'doc', id: 'user-guide/other-settings/README'},
              items:[
                     'user-guide/other-settings/system-settings',
                     'user-guide/other-settings/manage-license',
                     'user-guide/other-settings/check-version',
                    ]
             },
             'user-guide/operation-log',
             'user-guide/notification',
             'user-guide/no-supported-data-type',
        ]
    },
    {
     type: 'category',
     label: 'Deployment & Maintenance',
     link: {type: 'doc', id: 'production-admin/README'},
     items: [
            'production-admin/capacity-planning',
            'production-admin/install-tapdata-ha',
            'production-admin/install-tapdata-ha-with-3-node',
            'production-admin/install-replica-mongodb',
            'production-admin/operation',
            'production-admin/emergency-plan',
        ]
    },
    {
     type: 'category',
     label: 'Data Pipeline Tutorial',
     link: {type: 'doc', id: 'pipeline-tutorial/README'},
     items: [
            'pipeline-tutorial/mysql-bi-directional-sync',
            'pipeline-tutorial/excel-to-mysql',
            'pipeline-tutorial/mysql-to-aliyun',
            'pipeline-tutorial/mysql-to-bigquery',
            'pipeline-tutorial/mysql-to-redis',
            'pipeline-tutorial/oracle-to-kafka',
            'pipeline-tutorial/oracle-to-tablestore',
            'pipeline-tutorial/extract-array',
        ]
    },
    {
     type: 'category',
     label: 'Best Practices',
     link: {type: 'doc', id: 'best-practice/README'},
     items: [
            'best-practice/data-sync',
            'best-practice/handle-schema-changes',
            'best-practice/heart-beat-task',
            'best-practice/alert-via-qqmail',
            'best-practice/full-breakpoint-resumption',
            'best-practice/raw-logs-solution',
        ]
    },
    {
     type: 'category',
     label: 'Troubleshooting',
     link: {type: 'doc', id: 'troubleshooting/README'},
     items: [
            'troubleshooting/error-code',
            'troubleshooting/error-and-solutions',
        ]
    },
    {
     type: 'category',
     label: 'FAQs',
     link: {type: 'doc', id: 'faq/README'},
     items: [
            'faq/use-product',
            'faq/data-pipeline',
            'faq/agent-installation',
            'faq/data-security',
        ]
    },
    {
     type: 'category',
     label: 'Reference',
     link: {type: 'doc', id: 'appendix/README'},
     items: [
            'appendix/standard-js',
            'appendix/enhanced-js',
            'appendix/benchmark'
        ]
    },
    {
     type: 'category',
     label: 'Release Notes',
     link: {type: 'doc', id: 'release-notes/README'},
     items: [
            'release-notes/release-notes-cloud',
            'release-notes/release-notes-on-prem',
            'release-notes/release-notes-community'
        ]
    },
  'support',
 ]
};

module.exports = sidebars;
