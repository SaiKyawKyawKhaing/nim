/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  // Configure assetPrefix for production
  basePath: '',
  assetPrefix: process.env.NODE_ENV === 'production' ? "https://nextitmyanmar.com" : '',
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  i18n,
};

module.exports = nextConfig;
