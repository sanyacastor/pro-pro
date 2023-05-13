import React, { useState } from 'react';
import Link from 'next/link';
import { SOCIAL } from '../../../config';

import * as S from './styles';

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(true);

  return (
    <header>
      <S.Header>
        <S.Navigation>
          <S.NavList>
            <S.NavListItem>
              <Link href="/">ПРО ПРО</Link>
            </S.NavListItem>
            <S.Links>
              <S.NavListItem>
                <Link href="/map">крта</Link>
              </S.NavListItem>
              <S.NavListItem>
                <Link href="/">статьи</Link>
              </S.NavListItem>
              <S.NavListItem>
                <Link href="/">гуртур</Link>
              </S.NavListItem>
              <S.NavListItem>
                <Link href="/">о проекте</Link>
              </S.NavListItem>
            </S.Links>
            <S.NavListSocials>
              <Link target="_blank" href={SOCIAL.instagram}>инст</Link>
            </S.NavListSocials>
            <S.MenuIcon
              $cross={menuVisible}
              onClick={() => setMenuVisible(!menuVisible)}
            >
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </S.MenuIcon>
          </S.NavList>
        </S.Navigation>
      </S.Header>
    </header>
  );
};
