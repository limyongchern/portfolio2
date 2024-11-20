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
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pb.codedsolution.tech',
        port: '',
        pathname: '/**',
      },
    ],
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
      {
        source: '/',
        destination: '/maintenance',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
