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
};

module.exports = nextConfig;
