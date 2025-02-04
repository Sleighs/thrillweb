/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add a rule for video files
    config.module.rules.push(
      {
        test: /\.(mp4|webm)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Convert videos below this size to base64 strings
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'static/media/[name].[hash].[ext]',
                  publicPath: '/_next/static/media/',
                  outputPath: 'static/media/',
                },
              },
            },
          },
        ],
      }
    );

    // Return the modified config
    return config;
  },
};

export default nextConfig;