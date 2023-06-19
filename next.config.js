const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: false },
  outputFileTracing: false,
  webpack: (config, ctx) => {
    // Add assets loaders for images and other static files
    if (!config.module) config.module = {};
    if (!config.module.rules) config.module.rules = [];

    config.module.rules.push(      {
      test: /\.(eot|ttf|woff|woff2)$/,
      type: 'asset/resource',
      generator: {
        filename: `static/fonts/[name]-[contenthash:8][ext]`
      }
    });

    return config
  }
}

module.exports = withVanillaExtract(nextConfig)
