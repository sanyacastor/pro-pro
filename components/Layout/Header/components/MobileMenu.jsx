import React from 'react';
import Link from 'next/link';

import { SOCIAL } from '../../../../config';

import * as S from './styles';

export const MobileMenu = ({ isVisible }) => (
  <S.MenuContainer $isVisible={isVisible}>
    <S.Links>
      <S.NavListItem>
        <Link href="/map">карта</Link>
      </S.NavListItem>
      <S.NavListItem>
        <Link href="/">статьи</Link>
      </S.NavListItem>
      <S.NavListItem>
        <Link href="/gurtour">гуртур</Link>
      </S.NavListItem>
      <S.NavListItem>
        <Link href="/">о проекте</Link>
      </S.NavListItem>
      <S.NavListSocials>
        <Link target="_blank" href={SOCIAL.instagram}>
          инст
        </Link>
      </S.NavListSocials>
      <S.NavListSocials>
        <Link target="_blank" href={SOCIAL.telegram}>
          телеграм
        </Link>
      </S.NavListSocials>
    </S.Links>
  </S.MenuContainer>
);
