import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  background-image: url('/images/content/write_us_banner.png');
  background-repeat: no-repeat;
  background-size: cover;

  padding-top: 110px;
  padding-bottom: 150px;

  overflow: hidden;

  @media (max-width: 1160px) {
    margin-bottom: 32px;
    padding-top: 52px;
    padding-bottom: 52px;
  }
`;

export const BannerContainer = styled.div`
  max-width: 1160px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

export const Subtitle = styled.div`
  font-family: 'Piazzolla';
  font-style: italic;
  font-weight: 500;

  font-size: 26px;
  line-height: 35px;

  color: #ffffff;

  @media (max-width: 1160px) {
    font-size: 18px;
    line-height: 105%;
  }
`;
