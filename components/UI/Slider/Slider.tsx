import React, { useRef, useState } from 'react';
import { Swiper as SwiperCore } from 'swiper/types';

import { Navigation } from 'swiper/modules';
import { Swiper } from 'swiper/react';

import * as S from './styles';

import 'swiper/css';
import 'swiper/css/navigation';

export const Slider = ({ children }) => {
  const swiperRef = useRef<SwiperCore>();
  const [isBeginning, setIsBeginning] = useState(null);
  const [isEnd, setIsEnd] = useState(null);

  return (
    <S.Wrapper>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation]}
      >
        {children}
      </Swiper>
      <S.PrevSlideButton
        disabled={isBeginning}
        onClick={() => swiperRef.current?.slidePrev()}
      />
      <S.NextSlideButton
        disabled={isEnd}
        onClick={() => swiperRef.current?.slideNext()}
      />
    </S.Wrapper>
  );
};
