import React from 'react';
import Image from 'next/image';
import * as S from './styles';

import Logo from '../../public/images/icons/gurtour-logo.svg';

export const GurTour = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>
          <Image priority src={Logo} alt="Gur tour logo" />
        </S.Title>
        <S.Subtitle>Авторский блог о еде в Протвино и окрестностях</S.Subtitle>
      </S.Container>
    </S.Wrapper>
  );
};
