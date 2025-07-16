/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export', // Ensures Next.js builds a static HTML site
  images: {
    unoptimized: true, // Required for static export if using Next/Image
  },
  // GitHub Pages uses a subdirectory based on repository name
  // Uncomment and update this value if your repo is named differently than your domain root
  basePath: '/simplepills-canada-site', // Assuming your repository name is 'simple-health-solutions'
  trailingSlash: true,
};

export default nextConfig;
