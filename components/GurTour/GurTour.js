import React from 'react';
import Image from 'next/image';
import * as S from './styles';

import Logo from '../../public/images/gurtour/gur_tour_logo.svg';
import Link from 'next/link';

export const GurTour = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Logo>
          <Image priority src={Logo} alt="Gur tour logo" />
        </S.Logo>

        <S.ReviewList>
          <S.ReviewLink>
            <Link href="/gurtour/staraya-melnitsa">
              Старая
              <br />
              мельница
            </Link>
          </S.ReviewLink>
          <S.ReviewLink>
            <Link href="/gurtour/cream-coffee">
              крем-
              <br />
              коффе
            </Link>
          </S.ReviewLink>
        </S.ReviewList>
      </S.Container>
    </S.Wrapper>
  );
};
