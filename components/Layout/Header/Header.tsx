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

  const isGurTourPage = pathname.includes('/gurtour');
  const mode = isGurTourPage ? 'gurTour' : null;

  return (
    <>
      <S.Header mode={mode}>
        <S.Container>
          <S.Navigation>
            <S.NavList>
              <S.NavListItem>
                <Link href="/">ПРО ПРО</Link>
              </S.NavListItem>

              <S.Links>
                <S.NavListItem isUnderlined={pathname.includes('/map')}>
                  <Link href="/map">карта</Link>
                </S.NavListItem>
                <S.NavListItem isUnderlined={pathname.includes('/article')}>
                  <Link href="/">статьи</Link>
                </S.NavListItem>
                <S.NavListItem
                  mode={mode}
                  isUnderlined={pathname.includes('/gurtour')}
                >
                  <Link href="/gurtour">гуртур</Link>
                </S.NavListItem>
                <S.NavListItem isUnderlined={pathname === '/about-us'}>
                  <Link href="/about-us">о проекте</Link>
                </S.NavListItem>
              </S.Links>

              <S.NavListSocials mode={mode}>
                <Link target="_blank" href={SOCIAL.instagram}>
                  инст
                </Link>
              </S.NavListSocials>

              <S.MenuIcon
                cross={menuVisible}
                mode={mode}
                onClick={() => setMenuVisible(!menuVisible)}
              >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </S.MenuIcon>
            </S.NavList>
          </S.Navigation>
        </S.Container>
      </S.Header>
      <MobileMenu isVisible={menuVisible} />
    </>
  );
};
