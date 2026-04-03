/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Use webpack instead of turbopack
  experimental: {
    turbo: undefined,
  },
}

export default nextConfig
