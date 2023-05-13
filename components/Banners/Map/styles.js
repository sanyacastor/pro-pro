import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  background-image: url('/images/content/map_banner.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  padding-top: 110px;
  padding-bottom: 180px;

  margin-bottom: 104px;
  overflow: hidden;
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
  font-size: 36px;

  color: #ffffff;
`;

export const Title = styled.div`
  font-family: 'Base&Bloom';
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 106.5%;

  color: #ffffff;
`;

export const ColorDot = styled.div`
  position: absolute;
  top: ${({ $top }) => `${$top}%`};
  left: ${({ $left }) => `${$left}%`};
  width: 35px;
  height: 35px;
  border-radius: 50%;

  background-color: ${({ $color }) => $color};
`;
