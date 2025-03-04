/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'us-west-2.graphassets.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        pathname: '**',
      },
    ],
  },
  // Optimizaciones de compilación
  swcMinify: true,
  // Optimizaciones de producción
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Webpack configuration for static files
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    });
    return config;
  },

  // Trailing slash for better static hosting
  trailingSlash: true,

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
