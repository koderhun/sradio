import type {NextConfig} from 'next'

// конфиг для pwa
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
})

// конфиги для nextjs
const nextConfig: NextConfig = withPWA({
  reactStrictMode: true,
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
})

export default nextConfig
