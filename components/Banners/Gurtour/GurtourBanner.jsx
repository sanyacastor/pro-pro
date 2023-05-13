import React from 'react';
import { Wrapper, BannerContainer } from './styles';
import Image from 'next/image';
import { ParallaxProvider, useParallax } from 'react-scroll-parallax';

const CheburekImage = () => {
  const start = Math.floor(Math.random() * 360);
  const { ref } = useParallax({
    rotate: [start, start + 360],
  });

  return (
    <div ref={ref}>
      <Image
        src="/images/content/cheburek.png"
        width={126}
        height={126}
        alt="cheesy cheburek"
      />
    </div>
  );
};

export const GurtourBanner = () => (
  <ParallaxProvider>
    <Wrapper href={'/'}>
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
