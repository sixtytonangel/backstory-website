/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    "*.sisko.replit.dev",
    "*.replit.dev",
    "*.repl.co",
  ],
};

export default nextConfig;
