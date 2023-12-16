import styled from 'styled-components';

export const ArticleImage = styled.figure<{
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
`;

export const SliderImage = styled.figure<{
  $pl?: number;
  $mt?: number;
}>`
  margin: 0;
  padding: 0;
  padding-left: ${({ $pl }) => $pl && `${$pl}px`};
  margin-top: ${({ $mt }) => ($mt ? '0px' : `${$mt}px`)};

  @media (max-width: 1160px) {
    padding-left: 0;

    img {
      max-width: 100%;
      height: auto;
      width: 100%;
    }
  }
`;

export const Caption = styled.figcaption`
  font-family: 'Lack';
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  color: #5f5f5f;
  margin-top: 8px;
`;
