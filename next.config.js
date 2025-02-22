/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    metadataBase: new URL("https://zerotiger.ca"),
  },
};

module.exports = nextConfig
