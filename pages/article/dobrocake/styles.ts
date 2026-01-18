import styled from 'styled-components';
import { Paragraph } from '../../../components/Typography';

export const Intro = styled(Paragraph)`
  font-family: 'Piazzolla';
  font-style: italic;
  font-weight: 300;
`;

export const FullWidthImage = styled.div`
  width: 100%;
  max-width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImagesRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
`;

export const ImagesGridOfFour = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 4px;
`;

export const ArticleContainer = styled.article`
  margin-top: 32px;
  margin-bottom: 100px;

  @media (max-width: 960px) {
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;

export const ArticleSubtitle = styled.p`
  font-family: 'Piazzolla';
  font-weight: 300;

  font-size: 48px;
  line-height: 100%;

  margin: 0;
  margin-bottom: 32px;

  @media (max-width: 960px) {
    font-size: 24px;
    line-height: 100%;

    margin: 0;
    margin-bottom: 16px;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;

  max-width: 1000px;
  width: 100%;

  text-align: left;
  padding: 0 8px;

  @media (max-width: 1040px) {
    text-align: center;
  }
`;
