/** @type {import('next').NextConfig} */
const nextConfig = {
  // At the moment, the 4 lines below must exist to be deployed to github pages
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
