import Link from 'next/link';
import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  height: 100vh;

  background: ${({ $bgImage }) => `url(${$bgImage})`};

  background-position: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1160px) {
    width: 100%;
    padding: 0 28px;
  }
`;

export const Header = styled(Link)`
  width: 100%;
  display: block;
  color: #fff;
  padding-bottom: 42px;
`;

export const Title = styled.div`
  font-family: 'Base&Bloom';
  font-size: 90px;
  font-weight: 400;
  line-height: 74px;

  text-align: center;
  margin: 0;
  width: 100%;

  @media (max-width: 1160px) {
    font-size: 36px;
    line-height: 89%;
    text-align: left;
  }
`;

export const Subtitle = styled.div`
  font-family: 'Piazzolla';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 74px;

  text-align: center;
  margin-top: 32px;
`;
