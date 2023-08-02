import { SwiperSlide, Swiper } from 'swiper/react';

import {
  Bullet,
  PostSubtitle,
  PostTitle,
  ArticleImage,
  Paragraph,
} from 'components/UI';

export const components = {
  h1: PostTitle,
  h3: PostSubtitle,
  Bullet,
  Slider: ({ children }) => (
    <div style={{ width: '640px', marginLeft: '60px' }}>
      <Swiper spaceBetween={0} slidesPerView={1} navigation={true}>
        {children}
      </Swiper>
    </div>
  ),
  Slide: SwiperSlide,
  p: ({ children, ...restProps }) => (
    <Paragraph $mb={32} {...restProps}>
      {children}
    </Paragraph>
  ),
  img: ({ alt, src }) => <ArticleImage meta={alt} src={src} />,
};
