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

  border-top: 2px solid #283428;
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
  white-space: nowrap;

  font-family: 'Base&Bloom';
  font-style: normal;
  font-weight: 400;
`;

export const LogoSubtitle = styled.div`
  text-transform: uppercase;
  font-size: 30px;
  line-height: 30px;

  @media (max-width: 1160px) {
    font-size: 20px;
    line-height: 20px;
  }
`;

export const LogoText = styled.span`
  font-size: 80px;
  line-height: 1;

  @media (max-width: 1160px) {
    font-size: 40px;
    display: block;
    border-top: 1px solid #283428;
    padding-top: 8px;
  }
`;

export const DescriptionColumn = styled.div`
  font-family: 'Piazzolla';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 134.5%;
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
    gap: 36px;
    margin-top: 26px;
  }
`;

export const SocialLink = styled(Link)`
  font-family: 'Lack';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  text-align: center;

  padding: 22px 42px;

  border: 1px solid #000;
  border-radius: 50%;

  & + & {
    margin-top: 16px;
  }

  @media (max-width: 1160px) {
    width: 142px;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 22px 0;

    & + & {
      margin-top: 0;
    }
  }
`;
