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
  }
};

module.exports = nextConfig;
