/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Conditionally set basePath and assetPrefix for production (GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? "https://digitechvault.com" : '', 
  assetPrefix: process.env.NODE_ENV === 'production' ? "https://digitechvault.com" : '',
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
};

module.exports = nextConfig;
