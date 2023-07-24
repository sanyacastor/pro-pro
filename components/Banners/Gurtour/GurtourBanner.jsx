import React from 'react';
import Image from 'next/image';
import { ParallaxProvider, useParallax } from 'react-scroll-parallax';
import { Wrapper, BannerContainer, ImageWrapper } from './styles';

const CheburekImage = () => {
  const start = Math.floor(Math.random() * 360);
  const { ref } = useParallax({
    rotate: [start, start + 360],
  });

  return (
    <ImageWrapper ref={ref}>
      <Image
        src="/images/content/cheburek.png"
        width={100}
        height={100}
        alt="Cheesy cheburek"
        loader={({ src }) => src}
      />
    </ImageWrapper>
  );
};

export const GurtourBanner = () => (
  <ParallaxProvider>
    <Wrapper href={'/gurtour'}>
      <BannerContainer>
        Г<CheburekImage />
        У<CheburekImage />
        Р<CheburekImage />
        Т<CheburekImage />
        У<CheburekImage />Р
      </BannerContainer>
    </Wrapper>
  </ParallaxProvider>
);
