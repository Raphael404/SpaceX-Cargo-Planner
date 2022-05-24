/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ships",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
