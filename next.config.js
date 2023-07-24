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
};

const configWithMdx = withMDX(nextConfig);
module.exports = withPlaiceholder(configWithMdx);
