import React from 'react';
import { SOCIAL } from '../../../config';

import * as S from './styles';

export const Footer = () => (
  <S.Footer>
    <S.FooterContainer>
      <S.LogoColumn>
        <S.LogoText>ПРОПРО</S.LogoText>
        <S.LogoSubtitle>
          локальное медиа о&nbsp;прошлом, настоящем и&nbsp;будущем
        </S.LogoSubtitle>
      </S.LogoColumn>

      <S.DescriptionColumn>
        <S.Paragraph>
          Вместе с вами исследуем Протвино, его наследие и развитие, создаем,
          поддерживаем и освещаем локальные инициативы.
        </S.Paragraph>
        <S.AboutUs href={'/about-us'}>Подробнее о проекте</S.AboutUs>
      </S.DescriptionColumn>

      <S.SocialColumn>
        <S.SocialLink href={SOCIAL.telegram} target="_blank">
          Телеграм
        </S.SocialLink>
        <S.SocialLink href={SOCIAL.instagram} target="_blank">
          Инстаграм
        </S.SocialLink>
        <S.SocialLink href={SOCIAL.youtube} target="_blank">
          Ютуб
        </S.SocialLink>
      </S.SocialColumn>
    </S.FooterContainer>
  </S.Footer>
);
