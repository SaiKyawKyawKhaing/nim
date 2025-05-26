/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export',  // Set output to 'export'
  basePath: process.env.NODE_ENV === 'production' ? "" : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? "" : '',
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
};

module.exports = nextConfig;
