import Image from 'next/image';
import styled from 'styled-components';

import Link from 'next/link';

export const Wrapper = styled(Link)`
  width: 100%;
  display: flex;

  margin-top: 104px;
  margin-bottom: 104px;

  @media (max-width: 960px) {
    padding: 0 8px;

    margin-top: 45px;
    margin-bottom: 26px;

    overflow: hidden;
  }
`;

export const Container = styled.div<{ bgColor: string; color: string }>`
  background: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};

  margin: 0 auto;
  width: 100%;
  max-width: 1160px;

  display: flex;
  flex-direction: row;
  gap: 60px;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const ArticleImage = styled(Image)`
  height: auto;

  @media (max-width: 960px) {
    width: 100%;
    height: auto;
  }
`;

export const ArticleDescription = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 20px;

  @media (max-width: 960px) {
    padding: 0 8px;
    padding-bottom: 28px;
    max-width: 100%;
    padding-top: 32px;
  }
`;

export const ArticleTitle = styled.h3`
  font-family: 'Base&Bloom';
  font-style: normal;
  font-weight: 400;
  font-size: 46px;
  line-height: 90%;
  text-transform: uppercase;
  margin-top: 48px;
  margin-bottom: 0;
  max-width: 380px;

  @media (max-width: 960px) {
    margin-top: 0;
  }
`;

export const ArticleDescriptionText = styled.div`
  font-family: 'Piazzolla';
  font-style: italic;
  font-weight: 300;
  font-size: 32px;
  line-height: 105%;
  margin-top: 8px;
  position: relative;
  max-width: 380px;
`;

export const Author = styled.div`
  font-family: 'Lack';
  text-transform: uppercase;
  font-size: 12px;

  margin-top: auto;

  @media (max-width: 960px) {
    margin-top: 16px;
  }
`;
