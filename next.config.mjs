/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages uses a subdirectory based on repository name
  // If your repo is named differently, update this value
  // basePath: '/simple-health-solutions',
  trailingSlash: true,
};

export default nextConfig;
