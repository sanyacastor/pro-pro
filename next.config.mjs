import { withPlaiceholder } from '@plaiceholder/next';

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

export default withPlaiceholder(nextConfig);
