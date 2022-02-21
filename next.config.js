/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Used to solve image optimization issue when exporting the app

  images: {
    loader: 'akamai',
    path: ''
  }
}

module.exports = nextConfig
