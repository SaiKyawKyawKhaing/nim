/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  // Set base configuration for production environment
  basePath: '',
  assetPrefix: '',
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  i18n,
};

module.exports = nextConfig;
