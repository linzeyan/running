module.exports = {
  pathPrefix: process.env.PATH_PREFIX || '/',
  siteMetadata: {
    siteTitle: 'Running Page',
    siteUrl: 'https://linzeyan.github.io',
    logo: 'https://avatars.githubusercontent.com/u/28521870?v=4',
    description: 'Personal running',
    navLinks: [
      {
        name: 'Home',
        url: 'https://linzeyan.github.io',
      },
      {
        name: 'Activities',
        url: 'https://linzeyan.github.io/activities',
      },
      {
        name: 'Running',
        url: 'https://linzeyan.github.io/running',
      },
    ],
  },
  plugins: [
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-cloudflare-web-analytics',
      options: {
        // You need to provide your site token. You get this from the Cloudflare dashboard
        token: '27a0cd9f0e3b46909879cf99f7cc6878',
        // You can add or overwrite attributes of the analytics script tag (optional)
        // attributes: [
        //   {
        //     name: ATTRIBUTE_NAME,
        //     value: ATTRIBUTE_VALUE,
        //   }
        // ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/static/',
      },
    },
    {
      resolve: "gatsby-plugin-vercel",
      options: {
        // (optional) Prints metrics in the console when true
        debug: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-alias-imports',
      options: {
        rootFolder: './',
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#e1e1e1',
        theme_color: '#e1e1e1',
        display: 'standalone',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        runtimeCaching: [
          {
            urlPattern: /^https?:.*\/icons\/.*\.png/,
            handler: `CacheFirst`,
          },
          {
            urlPattern:
              /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `StaleWhileRevalidate`,
          },
          {
            urlPattern: /^https?:\/\/api\.mapbox\.com\//,
            handler: `StaleWhileRevalidate`,
          },
          {
            urlPattern: /^https?:.*\/page-data\/.*\.json/,
            handler: `StaleWhileRevalidate`,
          },
        ],
        skipWaiting: true,
        clientsClaim: true,
      },
    },
  ],
};
