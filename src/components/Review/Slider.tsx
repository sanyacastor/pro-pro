import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const ImageWrapper = styled.div`
  margin-top: 64px;
  margin-bottom: 64px;
  position: relative;
`;

export const Slider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ImageWrapper>
      <Swiper modules={[Navigation]} navigation>
        {React.Children.map(children, (child, ndx) => (
          <SwiperSlide key={ndx}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </ImageWrapper>
  );
};
