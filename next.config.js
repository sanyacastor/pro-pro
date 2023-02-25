const { withPlaiceholder } = require('@plaiceholder/next');

const config = {
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = withPlaiceholder(config);
