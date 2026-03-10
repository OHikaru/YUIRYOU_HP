import path from "node:path";

const nextConfig = {
  reactStrictMode: true,
  distDir: ".next-release",
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