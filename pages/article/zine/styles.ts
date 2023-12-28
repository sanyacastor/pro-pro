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
    margin-top: 30px;
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
      width: 48px;
      height: auto;
    }
  }
`;

export const PostHero = styled.div`
  background: #4aad7c;

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

  @media (max-width: 960px) {
    overflow: hidden;

    height: 240px;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    padding-top: 70px;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

export default function () {}
