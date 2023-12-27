import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
  display: block;
  font-family: 'Base&Bloom';
  font-style: normal;
  font-weight: 400;
  font-size: 47px;
  line-height: 74px;
  width: 100%;

  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;

  @media (max-width: 760px) {
    font-size: 28px;
  }
`;

export const ImageWrapper = styled.div`
  font-size: 12px;
  font-family: monospace;

  @media (max-width: 760px) {
    width: 40px;
    height: 40px;

    img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const BannerContainer = styled.div`
  max-width: 1600px;
  padding: 0 32px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 760px) {
    padding: 0 8px;
  }
`;
