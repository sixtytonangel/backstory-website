/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    "*.sisko.replit.dev",
    "*.replit.dev",
    "*.repl.co",
  ],
  async redirects() {
    return [
      { source: "/showcase", destination: "/organisations#projects", permanent: false },
    ];
  },
};

export default nextConfig;
