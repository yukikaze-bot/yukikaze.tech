const bundleAnalyzer = require('@next/bundle-analyzer');
const runtimeCaching = require('next-pwa/cache');
const pwa = require('next-pwa');

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
    pwa({
        reactStrictMode: true,
        pwa: {
            dest: 'public',
            runtimeCaching,
        },
        webpack: (config) => config,
        redirects: () => [
            {
                source: '/discord',
                destination: 'https://discord.gg/zGvtAnGhdP',
                permanent: false,
            },
            {
                source: '/github',
                destination: 'https://github.com/yukikaze-bot',
                permanent: false,
            },
        ],
    }),
);
