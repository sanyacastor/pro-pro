import React from 'react';
import Link from 'next/link';

import { SOCIAL } from '../../../../config';

import * as S from './styles';
import { useRouter } from 'next/router';

export const MobileMenu = ({ isVisible }) => {
  const { pathname } = useRouter();

  return (
    <S.MenuContainer $isVisible={isVisible}>
      <S.Links>
        {pathname !== '/map' && (
          <S.NavListItem>
            <Link href="/map">карта</Link>
          </S.NavListItem>
        )}
        {pathname !== '/' && (
          <S.NavListItem>
            <Link href="/">статьи</Link>
          </S.NavListItem>
        )}
        {pathname !== '/gurtour' && (
          <S.NavListItem>
            <Link href="/gurtour">гуртур</Link>
          </S.NavListItem>
        )}
        {pathname !== '/about-us' && (
          <S.NavListItem>
            <Link href="/about-us">о проекте</Link>
          </S.NavListItem>
        )}
        <S.NavListSocials>
          <Link target="_blank" href={SOCIAL.instagram}>
            Инстаграм
          </Link>
        </S.NavListSocials>
        <S.NavListSocials>
          <Link target="_blank" href={SOCIAL.telegram}>
            Телеграм
          </Link>
        </S.NavListSocials>
        <S.NavListSocials>
          <Link target="_blank" href={SOCIAL.youtube}>
            Ютуб
          </Link>
        </S.NavListSocials>
      </S.Links>
    </S.MenuContainer>
  );
};
