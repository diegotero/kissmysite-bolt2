import path from 'path';

/** @type {import('next').NextConfig} */

// Configuración base de imágenes
const imageConfig = {
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
    },
  ],
  minimumCacheTTL: 60,
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  formats: ['image/webp'],
  dangerouslyAllowSVG: true,
  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: true,
    serverActions: true
  },
  transpilePackages: ['next', 'react', 'react-dom'],
  modularizeImports: {
    '@/components': {
      transform: '@/components/{{member}}',
    },
    '@/lib': {
      transform: '@/lib/{{member}}',
    }
  },
  // Configuración de imágenes
  images: {
    ...imageConfig,
    domains: ['us-west-2.graphassets.com', 'us-west-2.cdn.hygraph.com'],
  },
  // Configuración de API
  async rewrites() {
    return [
      {
        source: '/api/hygraph/:path*',
        destination: `${process.env.NEXT_PUBLIC_HYGRAPH_API_URL}/:path*`,
      },
    ];
  },

  // Configuración de webpack para manejar archivos estáticos
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[path][name].[ext]',
      },
    });

    return config;
  },

  // Experimental features
  experimental: {
    scrollRestoration: true
  },

  // Configuración de caché y rendimiento
  generateEtags: true,
  compress: true,
  poweredByHeader: false
};

export default nextConfig;
