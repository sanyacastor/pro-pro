export const imageLoader = ({ src }) => {
  const local = src.includes('/images/');
  const url = local
    ? src
    : `https://res.cloudinary.com/propromedia/image/upload/c_scale,w_1000/${src}`;

  return url;
};

export const filterPlacesByType = (places, type) =>
  places.features.filter((place) => place.properties.type === type);
