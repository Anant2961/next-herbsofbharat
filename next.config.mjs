/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@headlessui/react"],
  transpilePackages: ["lucide-react"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
};

export default nextConfig;
