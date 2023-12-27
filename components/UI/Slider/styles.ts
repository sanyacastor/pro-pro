import { Swiper as SwiperLib } from 'swiper/react';
import styled from 'styled-components';

export const Swiper = styled(SwiperLib)``;

export const Wrapper = styled.div`
  position: relative;
`;

export const PrevSlideButton = styled.button<{ isDisabled: boolean }>`
  position: absolute;
  border: none;
  display: block;
  cursor: pointer;

  width: 25px;
  height: 45px;

  top: 50%;
  left: -60px;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="25" height="45" viewBox="0 0 25 45" fill="none"><path d="M24 1L2 22.5L24 44" stroke="%23534F4F" stroke-width="2"/></svg>');
  transform: translateY(-45px);

  @media (max-width: 960px) {
    left: 8px;
    z-index: 10;
  }
`;

export const NextSlideButton = styled.button`
  position: absolute;
  border: none;
  display: block;
  cursor: pointer;

  width: 25px;
  height: 45px;
  rotate: 180deg;

  top: 50%;
  right: -60px;
  transform: translateY(45px);
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="25" height="45" viewBox="0 0 25 45" fill="none"><path d="M24 1L2 22.5L24 44" stroke="%23534F4F" stroke-width="2"/></svg>');

  @media (max-width: 960px) {
    /* display: none; */

    right: 8px;
    z-index: 10;
  }
`;
