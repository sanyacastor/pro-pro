import styled from 'styled-components';

export const Paragraph = styled.p<{
  font?: 'lack' | 'piazzolla';
  size?: number;
  indent?: number;
  mt?: number;
  mb?: number;
}>`
  position: relative;
  font-family: ${({ font = 'piazzolla' }) =>
    font === 'lack' ? 'Lack' : 'Piazzolla'};
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  font-size: ${({ size }) => (size ? `${size}px` : `20px`)};

  padding: 0;
  margin: 0;

  max-width: ${({ indent }) => (indent ? `${indent * 100 + 760}px` : `760px`)};

  padding-left: ${({ indent }) => indent && `${indent * 100}px`};
  margin-top: ${({ mt }) => (mt ? `${mt}px` : `0`)};
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : `0`)};
  z-index: 11;

  & + p {
    margin-top: 32px;
  }

  a {
    border-bottom: 1px solid #000;
  }

  @media (max-width: 1160px) {
    padding-left: 0;
  }
`;

export const SubSection = styled.div`
  margin-top: 32px;

  @media (max-width: 1160px) {
    margin-top: 32px;
  }
`;

export const SectionTitle = styled.h3<{ mb: boolean }>`
  font-family: 'Piazzolla';
  font-size: 48px;
  font-weight: 500;
  line-height: 100%;
  margin: 0;

  margin-bottom: ${({ mb }) => mb && `32px`};

  @media (max-width: 1160px) {
    font-size: 36px;
    margin-bottom: 16px;
    font-weight: 500;
  }
`;

export const SubSectionTitle = styled.h4`
  font-family: 'Lack';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 14px;

  @media (max-width: 1160px) {
    font-size: 20px;
    margin-bottom: 6px;
    font-weight: 500;
  }
`;
