import React from "react";
import styled from "styled-components";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";

const Wrapper = styled.a`
  display: block;
  font-family: "Base&Bloom";
  font-style: normal;
  font-weight: 400;
  font-size: 47px;
  line-height: 74px;
  width: 100%;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  color: inherit;
  @media (max-width: 760px) {
    font-size: 28px;
  }
`;

const BannerContainer = styled.div`
  max-width: 1600px;
  padding: 0 32px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 760px) {
    padding: 0 8px;
  }
`;

const ImageWrapper = styled.div`
  font-size: 12px;
  font-family: monospace;
  display: inline-block;
  img {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 760px) {
    width: 40px;
    height: 40px;
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

const CheburekImage = () => {
  const start = Math.floor(Math.random() * 360);
  const { ref } = useParallax<HTMLDivElement>({
    rotate: [start, start + 360],
  });
  return (
    <ImageWrapper ref={ref}>
      <img src="/images/content/cheburek.png" alt="Cheburek" />
    </ImageWrapper>
  );
};

export default function GurtourBanner() {
  return (
    <ParallaxProvider>
      <Wrapper href="/gurtour">
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
}
