import styled from 'styled-components';

export const Container = styled.div`
  width: 760px;
  margin: 0 auto;
  font-size: 18px;
  position: relative;

  @media (max-width: 760px) {
    max-width: 760px;

    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    padding: 0 8px;
  }
`;

export const ArticleContainer = styled.article`
  margin-top: 100px;
  margin-bottom: 100px;

  @media (max-width: 960px) {
    margin-top: 34px;
    margin-bottom: 34px;
  }
`;

export const Section = styled.section`
  margin-top: 98px;

  @media (max-width: 960px) {
    margin-top: 64px;
  }
`;

export const SectionSubtitle = styled.p`
  margin-top: 8px;
`;

export const Figure = styled.figure<{ pl: number }>`
  margin: 32px 0;

  padding-left: ${({ pl }) => pl && `${pl}px`};

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 960px) {
    margin: 32px 0;
    padding-left: 0;
  }
`;

export const AudioFigure = styled.figure`
  margin: 0;
  padding: 0;

  margin-top: 16px;

  audio {
    width: 100%;
  }
`;

export const Images = styled.div<{ gap?: number }>`
  display: flex;
  gap: ${({ gap }) => (gap ? `${gap}px` : '40px')};
  margin: 32px 0;

  figure {
    margin: 0;
  }

  img {
    width: 100%;
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Blockquote = styled.blockquote`
  text-align: center;
  font-family: 'Lack';
  font-size: 32px;
  font-weight: 400;
  line-height: 130%;

  border-bottom: 1px solid black;
  border-top: 1px solid black;

  padding: 16px 0;
  margin: 64px 0;

  @media (max-width: 960px) {
    margin: 32px 0;
    font-size: 24px;
    line-height: 130%;
  }
`;

export const Figcaption = styled.figcaption`
  color: #5f5f5f;

  font-family: 'Lack';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 16.8px */
  margin: 0;
  padding: 0;

  margin-top: 8px;
`;

export const SliderWrapper = styled.div`
  width: 840px;
  margin: 0 auto;
  padding: 0 100px;

  @media (max-width: 960px) {
    width: 640px;

    padding: 0;
    margin: 0 auto;
    max-width: 100%;
  }
`;

export const ImageContainer = styled.div`
  margin: 32px 0;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 960px) {
    margin: 32px 0;
    padding-left: 0;
  }
`;
