import React from 'react';

import * as S from './styles';
import { CldImage } from 'next-cloudinary';

export const ArticleImage = ({ src, meta }) => {
  const substrings = meta?.split('{');
  const alt = substrings[0].trim();

  const width = substrings[1]?.match(/w\s*:\s*(\d+)/)[1] || 800;
  const height = substrings[1]?.match(/h\s*:\s*(\d+)/)[1] || 400;
  const pl = substrings[1]?.match(/pl\s*:\s*(\d+)/)
    ? substrings[1]?.match(/pl\s*:\s*(\d+)/)[1]
    : 0;

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
