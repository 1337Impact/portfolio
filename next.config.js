/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/mohammed-benkhattab",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/1337Impact",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://x.com/intent/follow?screen_name=BenkhattabMo",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/mohammed_benkhattab",
        permanent: true,
      },
      {
        source: "/upwork",
        destination: "https://www.upwork.com/freelancers/mohammedbenkhattab",
        permanent: true,
      },
      {
        source: "/hackerrank",
        destination: "http://hackerrank.com/profile/mobenkhattab",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
