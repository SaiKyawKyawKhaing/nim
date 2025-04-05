/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  // Conditionally set basePath and assetPrefix for production (GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? "https://nextitmyanmar.com" : '', 
  assetPrefix: process.env.NODE_ENV === 'production' ? "https://nextitmyanmar.com" : '',
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  i18n,
};

module.exports = nextConfig;
