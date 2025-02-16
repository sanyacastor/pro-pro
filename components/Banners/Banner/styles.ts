import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled(Link)``;

export const Banner = styled.div<{
  heights: [number, number];
  bgImages: [string, string];
}>`
  height: ${({ height }) => height[1]}px;
  width: 100%;

  background-image: ${({ bgImages }) => `url('${bgImages[1]}')`};
  background-repeat: no-repeat;
  background-size: cover;

  background-position: 50%;

  @media (max-width: 820px) {
    height: ${({ height }) => height[0]}px;
    background-image: ${({ bgImages }) => `url('${bgImages[0]}')`};
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
