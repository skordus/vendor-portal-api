const nextConfig = {
  reactStrictMode: true,
  env: {
    DEV_API: 'http://localhost:3000',
    PRODUCTION_API: 'https://vendor-portal-api.vercel.app/',
  },
};

export default nextConfig;
