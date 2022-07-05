const nextConfig = {
  reactStrictMode: true,
  env: {
    DEV_API: 'http://localhost:3000',
    PRODUCTION_API: 'https://minimal-assets-api-dev.vercel.app',
  },
};

export default nextConfig;
