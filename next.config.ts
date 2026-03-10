import path from "node:path";

const nextConfig = {
  reactStrictMode: true,
  distDir: process.env.VERCEL ? ".next" : ".next-release",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
