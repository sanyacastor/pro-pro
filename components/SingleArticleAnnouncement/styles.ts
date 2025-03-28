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

export const Container = styled.div`
  background: #d8cbff;

  margin: 0 auto;
  width: 100%;
  max-width: 1160px;

  display: flex;
  flex-direction: row;
  gap: 60px;

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 0 8px;
    gap: 0;

    background: #f8f3f3;
  }
`;

export const ArticleImage = styled(Image)`
  height: auto;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const ArticleDescription = styled.div`
  @media (max-width: 960px) {
    padding: 0 26px;
    padding-bottom: 43px;
    background: #d8cbff;
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
    font-size: 32px;
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

  @media (max-width: 960px) {
    font-size: 28px;
  }

  ::before {
    content: '';
    position: absolute;
    left: -33px;
    width: 380px;
    height: 184px;
    background-image: url('/images/icons/preview_selection_icon.svg');
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 960px) {
      display: none;
      width: 305px;
      height: 148px;
    }
  }
`;

export const ArticleAuthor = styled.div`
  font-family: 'Lack';
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 134%;

  text-align: left;
  margin-top: 18px;

  text-transform: uppercase;

  @media (max-width: 1160px) {
    font-size: 12px;
    line-height: 89%;
  }
`;
