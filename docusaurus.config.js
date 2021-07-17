const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Booster Labs',
  tagline: 'Serverless reverse proxy and load balancer library built for Cloudflare Workers.',
  url: 'https://booster.js.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'booster-labs', // Usually your GitHub org/user name.
  projectName: 'booster.js.org', // Usually your repo name.
  trailingSlash: true,
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter&display=swap',
  ],
  themeConfig: {
    algolia: {
      apiKey: '8bf676a18a51f6832092853bf43fa683',
      indexName: 'booster-js',
    },
    gtag: {
      trackingID: 'G-TJRVK94CTH',
      anonymizeIP: true,
    },
    navbar: {
      title: 'Booster Labs',
      logo: {
        alt: 'Booster Labs',
        src: 'img/logo.png',
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
          href: 'https://github.com/booster-labs/rocket-booster',
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
              href: 'https://github.com/booster-labs/rocket-booster',
            },
            {
              label: 'GitHub Issue Tracker',
              href: 'https://github.com/booster-labs/rocket-booster/issues',
            },
            {
              label: 'Code Coverage',
              href: 'https://app.codecov.io/gh/booster-labs/rocket-booster/',
            },
            {
              label: 'Build Status',
              href: 'https://github.com/booster-labs/rocket-booster/actions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Template',
              href: 'https://github.com/booster-labs/rocket-booster-template',
            },
            {
              label: 'Live Demo',
              href: 'https://mozilla.readme.workers.dev',
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
          // Please change this to your repo.
          editUrl:
            'https://github.com/booster-labs/booster.js.org/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
