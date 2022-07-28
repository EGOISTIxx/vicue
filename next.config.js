/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['*', 'images.punkapi.com'],
    loader: 'akamai',
    path: '',
  },
  basePath: '/vicue',
  assetPrefix: '/vicue',
  exportPathMap: () => {
    return {
      '/': { page: '/' },
    }
  },
}

module.exports = nextConfig
