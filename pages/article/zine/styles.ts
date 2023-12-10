import styled from 'styled-components';

export const Images = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 64px;
  margin-bottom: 64px;

  figure {
    width: 100%;
    margin: 0;
  }

  @media (max-width: 960px) {
    flex-direction: column;

    img {
      width: 100%;
    }
  }
`;

export const Section = styled.section`
  margin-top: 64px;

  @media (max-width: 960px) {
    margin-top: 32px;
  }
`;

export const HeroInner = styled.div`
  background: #4aad7c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 960px) {
    width: 100%;

    img {
      width: 80px;
      height: auto;
    }
  }
`;

export default function () {}
