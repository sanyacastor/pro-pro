import React from 'react';
import { Wrapper, BannerContainer, Subtitle, Title } from './styles';

export const SocialBanner = () => (
  <Wrapper href="#">
    <BannerContainer>
      <Title>Подписывайтесь на наши соцсети,</Title>
      <Subtitle>
        там мы будем анонсировать новые <br />
        материалы и рассказывать <br />о деятельности ПроПро
      </Subtitle>
    </BannerContainer>
  </Wrapper>
);
