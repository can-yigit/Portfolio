import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `$var: red;`,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
}
 
export default nextConfig