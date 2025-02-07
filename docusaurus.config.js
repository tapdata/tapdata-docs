// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TapData Documentation',
  tagline: 'TapData Cloud, a Live Data Platform',
  url: 'https://docs.tapdata.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tapdata', // Usually your GitHub org/user name.
  projectName: 'docs-en', // Usually your repo name.


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/tapdata/docs-en/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // Google Analytics
         gtag: {
          trackingID: 'G-PVNR6DP305', // Measurement ID, which can be find in Data streams page on Google Analytics platform.
         },
        blog: false, // Disable the blog plugin
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/reuse/**','/markdown-page'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

// An Image Zoom plugin for Docusaurus 2
  plugins: [
    'plugin-image-zoom',
    'docusaurus-plugin-hotjar'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
    // By enable hideable option, you can make the entire sidebar hideable, allowing users to better focus on the content.
      docs: {
        sidebar: {
        hideable: true,
        },
      },
    // Website announcement
    announcementBar: {
            id: 'announcementBar-1',
            content: `🎉️ More stable and user-friendly, build your real-time data platform with one click. Free trial with <a target="_blank" rel="noopener noreferrer" href="https://cloud.tapdata.io/">TapData Cloud</a> ! `,
            backgroundColor: '#1d4378',
            textColor: '#ffffff',
            },
    // SEO Configuration, this would become <meta name="keywords" content="cooking, blog"> in the generated HTML
      metadata: [{name: 'keywords', content: 'DaaS platform, data replication, data development,TapData'}],
      navbar: {
        logo: {
          alt: 'TapData',
          src: 'img/logo.png',
          href: 'https://tapdata.io/',
        },
        items: [
          {
            type: 'doc',
            docId: 'what-is-tapdata',
            position: 'left',
            label: 'TapData Documentation',
          },
          {
            href: 'https://cloud.tapdata.io',
            position: 'right',
            label: 'Log in TapData Cloud',
          },
          {
            href: 'https://github.com/tapdata/tapdata',
            label: 'GitHub⭐',
            position: 'right',
          },
        ],
      },
      // algolia search plugin
     algolia: {
      appId: 'QMWL076P1O',
      apiKey: '76c365bb35304a755c612e0d58b1df5e',
      indexName: 'tapdata-io',
      contextualSearch: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/quick-start',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/tapdatacommunity/shared_invite/zt-1biraoxpf-NRTsap0YLlAp99PHIVC9eA',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/tapdata_daas',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/tapdata/docs-en',
              },
            ],
          },
        ], 
        copyright: `Copyright © ${new Date().getFullYear()} TapData, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        theme: require('prism-react-renderer/themes/dracula'),
      },
      // Hotjar for Feedback
      hotjar: {
      applicationId: '3447165',
    },
    }),
  scripts: [
    '/js/iframe.js'
  ]
};

module.exports = config;
