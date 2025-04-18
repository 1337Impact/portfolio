/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/linkedin",
        destination: "https://linkedin.com/in/AlzyWelzy",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/AlzyWelzy",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/AlzyWelzy",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/alzywelzyy/",
        permanent: true,
      },
      {
        source: "/facebook",
        destination: "https://www.facebook.com/AlzyWelzyy",
        permanent: true,
      },
      {
        source: "/esyconnect",
        destination: "https://esyconnect.com/candidate/alzywelzy/",
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
