import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useLockBodyScroll } from 'react-use';

import { MobileMenu } from './components';
import { SOCIAL } from '../../../config';

import * as S from './styles';

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { pathname } = useRouter();

  useLockBodyScroll(menuVisible);

  return (
    <>
      <S.Header>
        <S.Navigation>
          <S.NavList>
            <S.NavListItem>
              <Link href="/">ПРО ПРО</Link>
            </S.NavListItem>
            <S.Links>
              <S.NavListItem $isCurrent={pathname === '/map'}>
                <Link href="/map">карта</Link>
              </S.NavListItem>
              <S.NavListItem $isCurrent={pathname === '/'}>
                <Link href="/">статьи</Link>
              </S.NavListItem>
              <S.NavListItem $isCurrent={pathname === '/gurtour'}>
                <Link href="/gurtour">гуртур</Link>
              </S.NavListItem>
              <S.NavListItem $isCurrent={pathname === '/about-us'}>
                <Link href="/about-us">о проекте</Link>
              </S.NavListItem>
            </S.Links>
            <S.NavListSocials>
              <Link target="_blank" href={SOCIAL.instagram}>
                инст
              </Link>
            </S.NavListSocials>
            <S.MenuIcon
              $cross={menuVisible}
              onClick={() => setMenuVisible(!menuVisible)}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </S.MenuIcon>
          </S.NavList>
        </S.Navigation>
      </S.Header>
      <MobileMenu isVisible={menuVisible} />
    </>
  );
};
