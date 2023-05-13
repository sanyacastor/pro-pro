import React from 'react';
import { Wrapper, BannerContainer, Subtitle, Title, ColorDot } from './styles';
import { ParallaxProvider, useParallax } from 'react-scroll-parallax';
import { colors } from '../../mapPage/consts';

const Circle = ({ color, index }) => {
  const { ref } = useParallax({
    translateY: [-Math.random() * 300, Math.random() * 300],
    easing: 'easeInQuad',
  });

  return (
    <ColorDot
      ref={ref}
      $color={color}
      $top={Math.random() * 100}
      $left={index * 15}
    />
  );
};

export const MapBanner = () => (
  <ParallaxProvider>
    <Wrapper href={'/map'}>
      {Object.keys(colors).map((key, index) => (
        <Circle key={key} color={colors[key]} index={index} />
      ))}

      <BannerContainer>
        <Subtitle>Изучите</Subtitle>
        <Title>КАРтУ ГОРОдА</Title>
      </BannerContainer>
    </Wrapper>
  </ParallaxProvider>
);
