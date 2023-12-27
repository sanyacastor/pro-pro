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
  background: #d8cbff;
  padding-top: 80px;
  padding-bottom: 80px;

  background-image: url('/images/icons/social_net.svg');
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: contain;

  @media (max-width: 1160px) {
    padding-top: 52px;
    padding-bottom: 52px;
  }
`;

export const BannerContainer = styled.div`
  text-align: center;
  max-width: 760px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Subtitle = styled.div`
  font-family: 'Piazzolla';
  font-style: italic;
  font-size: 32px;
  font-weight: 500;
  line-height: 105%;

  @media (max-width: 1160px) {
    font-size: 18px;
  }
`;

export const Title = styled.div`
  font-family: 'Base&Bloom';
  font-size: 80px;
  line-height: 70px;

  font-weight: 400;
  text-transform: uppercase;

  margin-bottom: 17px;

  @media (max-width: 1160px) {
    font-size: 36px;
    line-height: 26px;

    margin-bottom: 17px;
  }
`;
