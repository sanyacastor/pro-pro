import styled from 'styled-components';

export const FullWidthImage = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 32px auto;

  img {
    width: 100%;
    height: auto;
  }
`;

export const ImagesGridOfFour = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const Quote = styled.div`
  margin-top: 32px;

  p + p {
    margin-top: 0;
  }
`;

export const Thanks = styled.p`
  margin: 32px 0 0;
  font-family: 'Piazzolla';
  font-style: italic;
  font-size: 20px;
  line-height: 130%;
`;

export const SliderBlock = styled.div`
  margin: 32px 0;

  figure {
    margin: 0;
    width: 100%;
  }
`;
