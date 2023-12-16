import React, { useEffect, useState } from 'react';
import { ArticleImage } from '../UI';

import { ReviewContainer } from '../UI/Container';
import { Paragraph } from '../UI/Article';
import { Stat } from './components/Stat';

import { Features } from './components/Features';
import { MDXRemote } from 'next-mdx-remote';

import * as S from './styles';

const components = {
  p: Paragraph,
  h3: S.Heading,
  img: ({ alt, src }) => <ArticleImage meta={alt} src={src} />,
  ImagesRow: S.ImagesRow,
};

export const Review = ({
  title,
  description,
  markdown,
  address,
  workingHours,
  avgPrice,
  features,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <ReviewContainer>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{description}</S.Subtitle>
      <S.StatsRow>
        <Stat title="Адрес" content={address} />
        <Stat title="Часы работы" content={workingHours} />
        <Stat title="Средний чек" content={avgPrice} />
      </S.StatsRow>
      <S.FeaturesRow>
        <Features features={features} />
      </S.FeaturesRow>
      <S.PostContainer>
        <MDXRemote {...markdown} components={components} />
      </S.PostContainer>
    </ReviewContainer>
  );
};
