/** @type {import('next').NextConfig} */
const nextConfig = {
  
  // Images configuration
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'us-west-2.graphassets.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'us-west-2.cdn.hygraph.com',
        port: '',
        pathname: '/**',
      }
    ]
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
