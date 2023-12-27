import React, { useRef } from 'react';
import { Swiper as SwiperCore } from 'swiper/types';

import { Navigation } from 'swiper/modules';
import { Swiper } from 'swiper/react';

import * as S from './styles';

import 'swiper/css';
import 'swiper/css/navigation';

export const Slider = ({ children }) => {
  const swiperRef = useRef<SwiperCore>();

  const onBeforeInit = (swiper: SwiperCore) => {
    swiperRef.current = swiper;
  };

  return (
    <S.Wrapper>
      <Swiper
        onBeforeInit={onBeforeInit}
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation]}
      >
        {children}
      </Swiper>
      <S.PrevSlideButton
        disabled={swiperRef.current?.isEnd}
        onClick={() => swiperRef.current?.slidePrev()}
      />
      <S.NextSlideButton
        disabled={swiperRef.current?.isBeginning}
        onClick={() => swiperRef.current?.slideNext()}
      />
    </S.Wrapper>
  );
};
