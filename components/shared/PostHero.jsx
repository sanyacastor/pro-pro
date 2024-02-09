import React from 'react';
import styled from 'styled-components';

import Logo from '../../public/images/gurtour/gur_tour_logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const PostHero = styled.div`
  background: ${() => ` linear-gradient(180deg, rgba(217, 217, 217, 0) -8.33%, rgba(51, 0, 0, 0.29) 55.43%, rgba(51, 0, 0, 0.42) 99.44%), url('/images/content/gur_tour_background.webp');
`};
  background-size: cover;
  text-align: center;
  padding-top: 105px;
  padding-bottom: 53px;

  font-family: 'BASE&BLOOM';
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 88%;

  color: #ebe6da;

  img {
    max-width: 200px;
    height: auto;
  }
`;

export const Hero = () => {
  return (
    <PostHero>
      <Link href="/gurtour">
        <Image priority src={Logo} alt="Gur tour logo" />
      </Link>
    </PostHero>
  );
};
