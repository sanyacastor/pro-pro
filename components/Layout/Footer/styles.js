import styled from 'styled-components';
import Link from 'next/link';

export const Footer = styled.footer`
  padding-bottom: 104px;

  @media (max-width: 1160px) {
    padding-bottom: 33px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 150px;
  margin: 0 auto;
  max-width: 1340px;

  border-top: 1px solid #283428;
  padding: 0 70px;
  padding-top: 74px;

  @media (max-width: 1160px) {
    border-top: none;
    flex-direction: column;
    gap: 8px;
    padding-top: 8px;

    padding: 0 8px;
  }
`;

export const LogoColumn = styled.div`
  display: flex;
  flex-direction: column;

  font-family: 'Base&Bloom';
  font-style: normal;
  font-weight: 400;

  @media (max-width: 1160px) {
    padding: 16px 0;

    width: 100%;
    justify-content: center;
    align-items: center;

    border-top: 1px solid #283428;
    border-bottom: 1px solid #283428;
  }
`;

export const LogoSubtitle = styled.div`
  text-transform: uppercase;
  max-width: 340px;

  font-size: 30px;
  line-height: 30px;

  @media (max-width: 1160px) {
    max-width: 100%;
    text-align: center;

    font-size: 20px;
    line-height: 20px;
    margin-top: 16px;
  }
`;

export const LogoText = styled.span`
  font-size: 80px;
  line-height: 1;

  @media (max-width: 1160px) {
    font-size: 74px;
    line-height: 1;

    display: block;
  }
`;

export const DescriptionColumn = styled.div`
  font-family: 'Piazzolla';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;

  max-width: 360px;

  @media (max-width: 1160px) {
    font-size: 16px;
    margin: 0 auto;
    margin-top: 16px;
    text-align: center;
  }
`;

export const AboutUs = styled(Link)`
  display: block;
  margin-top: 23px;
  font-style: italic;

  text-decoration-line: underline;

  @media (max-width: 1160px) {
    margin-top: 16px;
  }
`;

export const Paragraph = styled.div``;

export const SocialColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1160px) {
    flex-direction: row;
    justify-content: center;
    gap: 12px;
    margin-top: 68px;
  }
`;

export const SocialLink = styled(Link)`
  font-family: 'Piazzolla';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 120%;
  text-align: left;

  text-decoration: underline;

  & + & {
    margin-top: 6px;
  }

  @media (max-width: 1160px) {
    font-size: 16px;

    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    & + & {
      margin-top: 0;
    }
  }
`;
