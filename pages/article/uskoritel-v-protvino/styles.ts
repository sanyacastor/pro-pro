import styled from 'styled-components';

import {
  ArticleSubtitle,
  ArticleTitle,
  PostAuthor,
} from '../../../components/UI/Article';

export const PostHero = styled.div<{ cover: string }>`
  background: ${({ cover }) => `url(${cover});`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  height: 430px;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 70px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  font-family: 'BASE&BLOOM';
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 88%;

  & ${ArticleSubtitle}, ${ArticleTitle}, ${PostAuthor} {
    color: #171f2e;
  }

  @media (max-width: 960px) {
    height: 280px;

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

export const Card = styled.div`
  padding: 36px;
  background: #f1e7e7;
  border-radius: 30px;

  font-family: 'Piazzolla';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 134.5%;

  margin-top: 32px;

  ul {
    list-style: '-';
  }
`;

export const CardTitle = styled.p`
  margin-bottom: 32px;
`;

export const PostHeroWrapper = styled.div`
  background: #d9d9d9;
`;
