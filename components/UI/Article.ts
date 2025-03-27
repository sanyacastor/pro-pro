import styled from 'styled-components';
import { Tooltip as ReactTooltip } from 'react-tooltip';

export const PostGrid = styled.div`
  padding: ${({ padding = 1 }) => `0 ${padding * 100}px`};
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 960px) {
    padding: 0;
    padding-bottom: 70px;
  }
`;

export const PostHero = styled.div<{
  cover: string;
  mobileCover?: string;
  bgColor?: string;
  color?: string;
}>`
  background: ${({ bgColor, cover }) => (bgColor ? bgColor : cover)};
  background-size: cover;
  background-position: center;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-top: 70px;
  height: 430px;

  font-family: 'BASE&BLOOM';
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 88%;

  color: #ebe6da;

  @media (max-width: 960px) {
    background: ${({ mobileCover, cover, bgColor }) =>
      mobileCover || cover || bgColor};
    background-size: cover;
    background-position: center;

    min-height: 375px;

    margin-top: 0;
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 8px;
  }
`;

export const ArticleTitle = styled.h1`
  font-family: 'Base&Bloom';
  text-transform: uppercase;
  line-height: 120%;
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 70px;
  margin: 0;

  color: #f8f3f3;

  @media (max-width: 960px) {
    font-size: 36px;
    line-height: 32px;
  }
`;

export const PostSubtitle = styled.h2`
  margin: 0;
  margin-bottom: 32px;
  grid-column: 3/21;

  font-family: 'Piazzolla';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 100%;
`;

export const PostAuthor = styled.span`
  margin-top: 12px;
  display: block;

  font-family: 'Lack';
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
  italic?: boolean;
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

  font-style: ${({ italic }) => italic && `italic`};

  & + & {
    margin-top: 32px;
  }

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

  @media (max-width: 960px) {
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

export const Accent = styled.span`
  font-family: 'Piazzolla';
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

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    margin-top: 32px;

    figure {
      text-align: center;
      width: 100%;
      margin: 0;
      padding: 0;
    }

    figure + figure {
      margin-top: 16px;
    }

    img {
      max-width: 100%;
      height: auto;
    }
  }
`;

export const ArticleSubtitle = styled.h2`
  font-family: 'Piazzolla';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 100%;

  margin: 0;
  margin-bottom: 32px;

  @media (max-width: 960px) {
    font-size: 36px;
    line-height: 100%;

    margin: 0;
    margin-bottom: 16px;
  }
`;
