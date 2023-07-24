const { withPlaiceholder } = require('@plaiceholder/next');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    loaders: ['cloudinary'],
    path: 'https://res.cloudinary.com/propromedia/image/upload',
  },
  async headers() {
    return [
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

const configWithMdx = withMDX(nextConfig);
module.exports = withPlaiceholder(configWithMdx);
