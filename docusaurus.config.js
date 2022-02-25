const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Reflare',
  tagline: 'Lightweight and scalable reverse proxy and load balancing library built for Cloudflare Workers',
  url: 'https://reflare.js.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'xiaoyang-sde',
  projectName: 'reflare.js.org',
  trailingSlash: true,
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter&display=swap',
  ],
  themeConfig: {
    algolia: {
      appId: 'FTQF0IPUV1',
      apiKey: '93cd9eeda627ed901ba3b2063d633f70',
      indexName: 'reflare-js',
    },
    navbar: {
      title: 'Reflare',
      logo: {
        alt: 'Reflare',
        src: 'img/favicon.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: 'examples',
          position: 'left',
          label: 'Examples',
        },
        {
          href: 'https://github.com/xiaoyang-sde/reflare',
          label: 'GitHub',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/',
            },
            {
              label: 'Build and Deploy',
              to: '/deploy',
            },
            {
              label: 'Examples',
              to: '/examples',
            },
          ],
        },
        {
          title: 'Open Source',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/xiaoyang-sde/reflare',
            },
            {
              label: 'GitHub Issue Tracker',
              href: 'https://github.com/xiaoyang-sde/reflare/issues',
            },
            {
              label: 'Code Coverage',
              href: 'https://app.codecov.io/gh/xiaoyang-sde/reflare/',
            },
            {
              label: 'Build Status',
              href: 'https://github.com/xiaoyang-sde/reflare/actions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Template',
              href: 'https://github.com/xiaoyang-sde/reflare-template',
            },
            {
              label: 'Live Demo',
              href: 'https://mozilla.reflare.workers.dev',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Booster Labs.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/xiaoyang-sde/booster.js.org/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-TJRVK94CTH',
          anonymizeIP: true,
        },
      },
    ],
  ],
};
