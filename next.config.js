/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: [],
  },
  images: {
    remotePatterns: [
      { hostname: "lh3.googleusercontent.com", protocol: "https", port: "" },
      { hostname: "maps.googleapis.com", protocol: "https", port: "" },
    ],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

module.exports = nextConfig;
