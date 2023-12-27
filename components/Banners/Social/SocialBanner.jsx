import React from 'react';
import { Wrapper, BannerContainer, Subtitle, Title } from './styles';

import { SOCIAL } from '../../../config';

export const SocialBanner = () => (
  <Wrapper href={SOCIAL.telegram} target="blank">
    <BannerContainer>
      <Title>Подписывайтесь на наши соцсети,</Title>
      <Subtitle>
        там мы будем анонсировать новые <br />
        материалы и рассказывать <br />о деятельности ПроПро
      </Subtitle>
    </BannerContainer>
  </Wrapper>
);
