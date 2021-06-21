const bundleAnalyzer = require('@next/bundle-analyzer');
const runtimeCaching = require('next-pwa/cache');
const pwa = require('next-pwa');

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
    pwa({
        reactStrictMode: true,
        target: 'serverless',
        pwa: {
            dest: 'public',
            runtimeCaching,
        },
        webpack: (config) => config,
    }),
);
