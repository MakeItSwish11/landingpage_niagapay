module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['niagapay.click'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'niagapay.click',
      },
    ],
  },
  target: 'server',
  outputFileTracing: false,
  productionBrowserSourceMaps: false,
  optimizeFonts: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.maxSize = 200000;
      config.module.rules.push({
        test: /\.next\/(cache|trace)\/.+$/,
        use: 'null-loader',
      });
    }
    return config;
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/redirect/payment/:slug*',
  //       destination: '/payment',
  //     },
  //   ];
  // },
};
