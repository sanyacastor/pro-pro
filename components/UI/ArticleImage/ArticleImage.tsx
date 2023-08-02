import React from 'react';

import * as S from './styles';
import { CldImage } from 'next-cloudinary';

export const ArticleImage = ({ src, meta }) => {
  const substrings = meta?.split('{');
  const alt = substrings[0].trim();

  const width = substrings[1]?.match(/(?<=w:\s?)\d+/g)[0] || 800;
  const height = substrings[1]?.match(/(?<=h:\s?)\d+/g)[0] || 400;
  const pl = substrings[1]?.match(/(?<=pl:\s?)\d+/g) || 0;

  return (
    <S.SliderImage $pl={pl}>
      <CldImage
        src={src}
        alt={alt}
        height={height}
        width={width}
        quality={100}
        sizes="100vw"
      />
      <S.Caption>{alt}</S.Caption>
    </S.SliderImage>
  );
};
