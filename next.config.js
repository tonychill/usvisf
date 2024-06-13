/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.usvisoftballfederation.org",
      },
      {
        protocol: "https",
        hostname: "stthomassource.com",
      },
      {
        protocol: "https",
        hostname: "viconsortium.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "bloximages.newyork1.vip.townnews.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
