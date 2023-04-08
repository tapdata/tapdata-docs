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

// Tapdata Cloud docs list
  cloud: [
    'cloud/what-is-tapdata-cloud',
    {
     type: 'category',
     label: '产品简介',
     link: {type: 'doc', id: 'cloud/introduction/README'},
     items: [
            'cloud/introduction/architecture',
            'cloud/introduction/features',
            'cloud/introduction/benefits',
            'cloud/introduction/use-cases',
            'cloud/introduction/supported-databases',
            'cloud/introduction/terms',
     ]
    },
{
     type: 'category',
     label: '产品计费',
     link: {type: 'doc', id: 'cloud/billing/README'},
     items: [
            'cloud/billing/billing-overview',
            'cloud/billing/purchase',
            'cloud/billing/renew-subscribe',
            'cloud/billing/refund',
     ]
    },
    {
     type: 'category',
     label: '快速入门',
     link: {type: 'doc', id: 'cloud/quick-start/README'},
     items: [
            {
             type: 'category',
             label: '步骤一：安装 Agent',
             link: {type: 'doc', id: 'cloud/quick-start/install-agent/README'},
             items: [
                    'cloud/quick-start/install-agent/agent-on-linux',
                    'cloud/quick-start/install-agent/agent-on-windows',
                    'cloud/quick-start/install-agent/agent-on-docker',
                    'cloud/quick-start/install-agent/agent-on-mac-m1',
                    'cloud/quick-start/install-agent/agent-on-compute-nest',
             ]
            },
            'cloud/quick-start/connect-database',
            'cloud/quick-start/create-task',
     ]
    },
    {
     type: 'category',
     label: '准备工作',
     link: {type: 'doc', id: 'cloud/prerequisites/README'},
     items: [
             'cloud/prerequisites/allow-access-network',
            {
             type: 'category',
             label: '调整数据配置并授权账号',
             link: {type: 'doc', id: 'cloud/prerequisites/config-database/README'},
             items: [
                    {
                       type: 'category',
                       label: '认证数据源',
                       link: {type: 'doc', id: 'cloud/prerequisites/config-database/certified/README'},
                       items: [
                              'cloud/prerequisites/config-database/certified/clickhouse',
                              'cloud/prerequisites/config-database/certified/kafka',
                              'cloud/prerequisites/config-database/certified/mysql',
                              'cloud/prerequisites/config-database/certified/mongodb',
                              'cloud/prerequisites/config-database/certified/oracle',
                              'cloud/prerequisites/config-database/certified/postgresql',
                              'cloud/prerequisites/config-database/certified/sqlserver',
                       ]
                      },
             ]
            },
     ]
    },
    {
     type: 'category',
     label: '用户指南',
     link: {type: 'doc', id: 'cloud/user-guide/README'},
     items: [
             'cloud/user-guide/workshop',
             'cloud/user-guide/manage-agent',
             {
              type: 'category',
              label: '连接数据库',
              link: {type: 'doc', id: 'cloud/user-guide/connect-database/README'},
              items:[
                    {
                     type: 'category',
                     label: '认证数据源',
                     link: {type: 'doc', id: 'cloud/user-guide/connect-database/certified/README'},
                     items:[
                            'cloud/user-guide/connect-database/certified/connect-clickhouse',
                            'cloud/user-guide/connect-database/certified/connect-kafka',
                            'cloud/user-guide/connect-database/certified/connect-mysql',
                            'cloud/user-guide/connect-database/certified/connect-mongodb',
                            'cloud/user-guide/connect-database/certified/connect-oracle',
                            'cloud/user-guide/connect-database/certified/connect-postgresql',
                            'cloud/user-guide/connect-database/certified/connect-sqlserver',
                           ]
                    }, 
                    {
                     type: 'category',
                     label: 'Beta 数据源',
                     link: {type: 'doc', id: 'cloud/user-guide/connect-database/beta/README'},
                     items:[
                            'cloud/user-guide/connect-database/beta/connect-bigquery',
                           ]
                    },
                    {
                     type: 'category',
                     label: 'Alpha 数据源',
                     link: {type: 'doc', id: 'cloud/user-guide/connect-database/alpha/README'},
                     items:[
                            'cloud/user-guide/connect-database/alpha/connect-tablestore',
                           ]
                    }, 
              ]
             },
             'cloud/user-guide/manage-connection',
             {
              type: 'category',
              label: '数据复制',
              link: {type: 'doc', id: 'cloud/user-guide/copy-data/README'},
              items:[
                    'cloud/user-guide/copy-data/create-task',
                    'cloud/user-guide/copy-data/manage-task',
                    'cloud/user-guide/copy-data/monitor-task',
                    ]
            },
            {
             type: 'category',
             label: '数据开发（Beta）',
             link: {type: 'doc', id: 'cloud/user-guide/data-development/README'},
             items:[
                   'cloud/user-guide/data-development/create-task',
                   'cloud/user-guide/data-development/manage-task',
                   'cloud/user-guide/data-development/process-node',
                   'cloud/user-guide/data-development/monitor-task',
                   ]
             },
             'cloud/user-guide/custom-node',
             'cloud/user-guide/operation-log',
             'cloud/user-guide/trouble-shooting-connection',
             'cloud/user-guide/no-supported-data-type',
            ]
    },
    {
     type: 'category',
     label: '最佳实践',
     link: {type: 'doc', id: 'cloud/best-practice/README'},
     items: [
            'cloud/best-practice/mysql-to-bigquery',
            'cloud/best-practice/oracle-to-tablestore',
            
        ]
        },
     {
      type: 'category',
      label: '常见问题',
      link: {type: 'doc', id: 'cloud/faq/README'},
      items:[
             'cloud/faq/data-security',
             'cloud/faq/agent-installation',
             'cloud/faq/database',
             'cloud/faq/task',
      ]
     },
     {
      type: 'category',
      label: '附录',
      link: {type: 'doc', id: 'cloud/appendix/README'},
      items: [
              'cloud/appendix/standard-js',
              'cloud/appendix/enhanced-js'
              ]
     },
     'cloud/faq/support',
  ],
};


module.exports = sidebars;
