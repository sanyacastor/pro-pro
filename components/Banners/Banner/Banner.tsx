import React from 'react';

import * as S from './styles';

type BannerProps = {
  heights: [number, number];
  imageUrls: [string, string];
  link: string;
};

export const Banner = ({ heights, imageUrls, link }: BannerProps) => {
  return (
    <S.Wrapper href={link}>
      <S.Banner height={heights} bgImages={imageUrls}></S.Banner>
    </S.Wrapper>
  );
};
