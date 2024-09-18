/** @type {import('next').NextConfig} */
const CopyWebpackPlugin = require('copy-webpack-plugin');

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: 'loose',
  },
  webpack: (config, options) => {
    Object.defineProperty(config, 'devtool', {
      get() {
        return 'source-map';
      },
      set() {},
    });
    return config;
  },
  i18n: {
    locales: ['en', 'cn'],
    defaultLocale: 'cn', // Change this to your desired default locale
    localeDetection: false, // Disable automatic locale detection
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/app',
        destination: '/download',
        permanent: true,
      },
      // Wildcard path matching
      {
        source: '/app/:slug',
        destination: '/download',
        permanent: true,
      },
      {
        source: '/app/:slug/:slug',
        destination: '/download',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
