export const imageLoader = ({ src }) => {
  const local = src.includes('/images/');
  const url = local
    ? src
    : `https://res.cloudinary.com/propromedia/image/upload/c_scale,w_1000/${src}`;

  return url;
};
