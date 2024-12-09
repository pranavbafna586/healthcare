/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'assets.example.com','i.pravatar.cc'], // Add your domains here
    // Remote patterns for specific configurations
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        port: '',
        pathname: '/account123/**', // Replace with your specific path pattern
      },
    ],
  },
};

export default nextConfig;
