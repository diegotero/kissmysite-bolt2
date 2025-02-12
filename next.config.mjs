/** @type {import('next').NextConfig} */
    const nextConfig = {
      // Optimiza el manejo de fuentes
      optimizeFonts: true,
      
      // Configuración de imágenes
      images: {
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
          {
            protocol: "https",
            hostname: "vercel.app",
            port: "",
            pathname": "/**",
          }
        ]
      },
      
      // Configuración de webpack para manejar archivos estáticos
      webpack: (config) => {
        config.module.rules.push({
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          // Add a loader that handles the fonts
          generator: {
            filename: 'static/media/[path][name].[ext]'
          },
        });
        return config;
      },

      // Experimental features
      experimental: {
        // Disable memory watcher to prevent manual restart messages
      }
    };

    export default nextConfig;
