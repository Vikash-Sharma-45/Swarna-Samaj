/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local images from /public are served by Next.js Image component natively
    // No external domain config needed for local assets
    formats: ["image/webp", "image/avif"],
  },
  // Improve build performance
  swcMinify: true,
};

export default nextConfig;
