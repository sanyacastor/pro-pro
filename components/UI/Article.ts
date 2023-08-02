import styled from 'styled-components';
import { Tooltip as ReactTooltip } from 'react-tooltip';

export const PostContainer = styled.div`
  width: 1160px;
  margin: 0 auto;
  font-size: 18px;

  a {
    cursor: pointer;
    text-decoration: underline;
  }

  @media (max-width: 1160px) {
    width: 100%;
    padding: 8px;
    overflow: hidden;
  }
`;

export const PostGrid = styled.div`
  margin-top: 64px;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 100px;

  @media (max-width: 1160px) {
    padding: 0 28px;
    padding-bottom: 70px;
  }
`;

export const PostHero = styled.div<{ cover: string }>`
  background: ${({ cover }) =>
    `linear-gradient(180deg, rgba(217, 217, 217, 0) -8.33%, rgba(51, 0, 0, 0.29) 55.43%, rgba(51, 0, 0, 0.42) 99.44%), url(${cover});`};
  background-size: cover;
  background-position: center;
  text-align: center;
  padding-top: 130px;
  padding-bottom: 53px;

  font-family: 'BASE&BLOOM';
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 88%;

  color: #ebe6da;
`;

export const PostTitle = styled.h1`
  font-family: 'Base&Bloom';
  text-transform: uppercase;
  line-height: 120%;
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 70px;
  margin: 0;
  grid-column: 3/21;

  @media (max-width: 1160px) {
    font-size: 36px;
    line-height: 32px;
  }
`;

export const PostSubtitle = styled.h2`
  margin-top: 56px;
  margin-bottom: 32px;
  grid-column: 3/21;

  font-family: 'Piazzolla';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 100%;
`;

export const SectionTitle = styled.h3`
  margin-top: 128px;
  margin-bottom: 0;
  grid-column: 3/21;

  font-family: 'Piazzolla';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 100%;
`;

export const PostAuthor = styled.span`
  margin-top: 16px;
  display: block;
  grid-column: 3/20;

  font-family: 'Piazzolla';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  text-transform: uppercase;

  text-align: center;

  color: #eceaea;
`;

export const Paragraph = styled.p<{
  $size?: number;
  $indent?: number;
  $mt?: number;
  $mb?: number;
}>`
  position: relative;
  font-family: 'Piazzolla';
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  font-size: ${({ $size }) => ($size ? `${$size}px` : `20px`)};
  padding: 0;
  margin: 0;

  max-width: ${({ $indent }) =>
    $indent ? `${$indent * 100 + 760}px` : `760px`};

  padding-left: ${({ $indent }) => $indent && `${$indent * 100}px`};
  margin-top: ${({ $mt }) => ($mt ? `${$mt}px` : `0`)};
  margin-bottom: ${({ $mb }) => ($mb ? `${$mb}px` : `0`)};
  z-index: 11;

  @media (max-width: 1160px) {
    padding-left: 0;
  }
`;

export const Tooltip = styled(ReactTooltip)`
  padding: 18px 25px;
  background: #f2ecec;
  border-radius: 15px;
  opacity: 100%;

  font-family: 'Piazzolla';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 131.5%;
  color: #000;

  max-width: 300px;
`;

export const PostImage = styled.figure<{
  $size?: number;
  $indent?: number;
  $mt?: number;
}>`
  margin: 0;
  padding: 0;
  margin-top: ${({ $mt }) => ($mt ? `${$mt}px` : `0`)};
  padding-left: ${({ $indent }) => $indent && `${$indent * 100}px`};

  img {
    background-color: rgba(0, 0, 0, 0.1);
  }

  img + img {
    margin-left: 40px;
  }

  @media (max-width: 1160px) {
    padding-left: 0;

    img {
      max-width: 100%;
      height: auto;
      width: 100%;
    }

    img + img {
      margin-left: 0;
      margin-top: 16px;
    }
  }

  figcaption {
    font-family: 'Lack';
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    color: #5f5f5f;
    margin-top: 8px;
  }
`;

export const ParagraphWithBackground = styled.div<{
  $mt?: number;
}>`
  margin-top: ${({ $mt }) => ($mt ? `${$mt}px` : `0`)};
  position: relative;
`;

export const CirceSquareCross = styled.div`
  background-image: url('/images/posts/policlinic/circe-square-cross.svg');
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  width: 1057px;
  height: 300px;
  z-index: 1;
  margin-left: -40px;
`;

export const SquareFigure = styled.div`
  background-image: url('/images/posts/policlinic/square-figure.svg');
  background-size: cover;
  background-position: center;
  position: absolute;
  top: -133px;
  left: -149px;
  width: 377px;
  height: 412px;
  z-index: 1;
`;

export const Cross = styled.div`
  background-image: url('/images/posts/policlinic/3d-cross.svg');
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 49px;
  right: -130px;
  width: 366px;
  height: 370px;
  z-index: 1;
`;

export const RedCrosses = styled.div`
  background-image: url('/images/posts/policlinic/crosses.svg');
  background-size: cover;
  background-position: center;
  width: 1160px;
  height: 104px;
  margin-left: -100px;
  margin-top: 64px;
  z-index: 1;
`;

export const ItalicAccent = styled.span`
  font-family: 'Piazzolla';
  font-style: italic;
  color: #e07031;
`;

export const PoliclinicCollage = styled.div`
  grid-column: 3/21;
  display: grid;
  grid-template-rows: min-content min-content;
  grid-template-columns: repeat(11, 1fr 40px) 1fr;
  margin-top: 245px;
  margin-bottom: 115px;

  figure:nth-child(1) {
    margin-top: 120px;
    grid-row: 1/3;
    grid-column: 3/12;
  }

  figure:nth-child(2) {
    grid-row: 1/1;
    grid-column: 15/20;
  }

  figure:nth-child(3) {
    margin-top: 24px;
    grid-row: 2/2;
    grid-column: 15/22;
  }

  figcaption {
    font-family: 'Lack';
    font-weight: 400;
    font-size: 14px;
    line-height: 80%;
    color: #5f5f5f;
    margin-top: 8px;
  }

  @media (max-width: 1160px) {
    display: flex;
    flex-direction: column;
    margin-top: 32px;

    figure {
      width: 100%;
      margin: 0;
      padding: 0;
    }

    figure + figure {
      margin-top: 16px;
    }
  }
`;
