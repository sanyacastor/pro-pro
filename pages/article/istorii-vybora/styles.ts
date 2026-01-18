import styled from 'styled-components';

import { ArticleTitle } from '../../../components/UI/Article';

export const NavigationWrapper = styled.div`
  width: 760px;
  margin: 0 auto;
  transform: translateX(-150px) translateY(180px);
  position: sticky;
  top: 0;
  height: 0;
`;

export const Navigation = styled.div`
  color: #000;

  font-family: 'Piazzolla';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 250%;

  width: 114px;

  a {
    text-decoration: underline;
    margin-bottom: 24px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    position: relative;
  }

  li::before {
    content: '';
    position: absolute;
    left: -40px;
    top: 13px;

    width: 26px;
    height: 26px;

    border-radius: 50%;
  }

  #olga-link::before {
    background: #f5e9dd;
  }

  #galina-link::before {
    background: #e4ebe5;
  }

  #natalia-link::before {
    background: #f1e4fb;
  }

  @media (max-width: 1160px) {
    display: none;
  }
`;

export const GradientSectionYellow = styled.div`
  background: linear-gradient(
    180deg,
    rgba(245, 233, 221, 0) 0%,
    #f5e9dd 8.85%,
    #f5e9dd 89.06%,
    rgba(245, 233, 221, 0) 100%
  );
`;

export const GradientSectionGreen = styled.div`
  background: linear-gradient(
    180deg,
    rgba(228, 235, 229, 0) 0%,
    #e4ebe5 8.85%,
    #e4ebe5 82.81%,
    rgba(228, 235, 229, 0) 100%
  );
`;

export const GradientSectionPurple = styled.div`
  background: linear-gradient(
    180deg,
    rgba(241, 228, 251, 0) 0%,
    #f1e4fb 8.85%,
    #f1e4fb 82.81%,
    rgba(241, 228, 251, 0) 100%
  );
`;

export const CustomArticleTitle = styled(ArticleTitle)`
  color: #232323;
`;

export const CustomArticleSubtitle = styled.h2`
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

    margin-top: 8px;
    margin-bottom: 16px;
  }
`;

export const TopHeaderSection = styled.div`
  margin-bottom: 56px;

  @media (max-width: 960px) {
    margin-bottom: 32px;
  }
`;
