/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimiza el manejo de fuentes
  optimizeFonts: true,
  
  // Configuración de imágenes
  images: {
    unoptimized: true,
    domains: [
      'us-west-2.graphassets.com',
      'us-west-2.cdn.hygraph.com'
    ],
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
  
  // Configuración de webpack para manejar archivos estáticos
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    });
    return config;
  },

  // Static export configuration
  output: 'export',
  
  // Disable server components for static export
  experimental: {
    appDir: true
  },

  // Trailing slash for better static hosting
  trailingSlash: true,

  // Disable image optimization warnings
  images: {
    unoptimized: true,
  }
};

export default nextConfig;