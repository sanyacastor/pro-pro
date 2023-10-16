import { SwiperSlide, Swiper } from 'swiper/react';

import * as S from './style';

import {
  Bullet,
  PostSubtitle,
  PostTitle,
  ArticleImage,
  Paragraph,
} from '../UI';

export const components = {
  h1: PostTitle,
  h3: PostSubtitle,
  Bullet,
  Slider: ({ children }) => (
    <S.SliderWrapper>
      <Swiper spaceBetween={0} slidesPerView={1} navigation={true}>
        {children}
      </Swiper>
    </S.SliderWrapper>
  ),
  Slide: SwiperSlide,
  p: ({ children, ...restProps }) => (
    <Paragraph $mb={32} {...restProps}>
      {children}
    </Paragraph>
  ),
  img: ({ alt, src }) => {
    return <ArticleImage meta={alt} src={src} />;
  },
};
