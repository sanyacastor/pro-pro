import { SwiperSlide, Swiper } from 'swiper/react';

import * as S from './style';

import {
  Bullet,
  PostSubtitle,
  ArticleImage,
  Paragraph,
  SectionTitle,
  ArticleTitle,
} from '../UI';

export const components = {
  h1: ArticleTitle,
  h2: PostSubtitle,
  h3: SectionTitle,
  Section: ({ children, color }) => (
    <section style={{ background: color }}>{children}</section>
  ),
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
