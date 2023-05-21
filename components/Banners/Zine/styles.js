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
  background: #d9d9d9;
  padding-top: 145px;
  padding-bottom: 157px;

  background-image: url('/images/icons/zine_figure.svg');
  background-repeat: no-repeat;
  background-size: 90%;
  background-position: 50% 20%;

  @media (max-width: 1160px) {
    padding-top: 52px;
    padding-bottom: 52px;
  }
`;

export const BannerContainer = styled.div`
  text-align: center;
  max-width: 1160px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1160px) {
    flex-direction: column-reverse;
  }
`;

export const Subtitle = styled.div`
  font-family: 'Piazzolla';
  font-style: italic;
  font-weight: 500;
  font-size: 36px;

  @media (max-width: 1160px) {
    font-size: 18px;
    line-height: 105%;
  }
`;

export const Title = styled.div`
  font-family: 'Base&Bloom';
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 106.5%;
  text-transform: uppercase;

  @media (max-width: 1160px) {
    font-size: 36px;
    line-height: 90%;
  }
`;
