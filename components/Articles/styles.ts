import Link from 'next/link';
import styled from 'styled-components';

export const ArticlesSection = styled.div`
  width: 100%;
`;

export const ArticlesContainer = styled.section`
  width: 1160px;
  margin: 0 auto;

  padding: 0 8px;

  @media (max-width: 1160px) {
    width: 100%;
    min-width: 320px;
  }
`;

export const Articles = styled.div`
  padding: 104px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1060px) {
    padding: 32px 0;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const ArticleThumbnail = styled(Link)`
  max-width: 500px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 1060px) {
    max-width: 100%;
    margin-top: 40px;

    img {
      max-width: 100%;
    }
  }
`;

export const ThumbnailTitle = styled.h2`
  font-family: 'Base&Bloom';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 90%;
  color: #171f2e;
  margin-top: 16px;
  margin-bottom: 0;

  @media (max-width: 1060px) {
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 90%;
    text-transform: uppercase;
  }
`;
