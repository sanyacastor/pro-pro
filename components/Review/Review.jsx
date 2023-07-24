import React from 'react';
import { CldImage } from 'next-cloudinary';

import { ReviewContainer } from '../UI/Container';
import { Paragraph } from '../UI/Article';
import { Stat } from './components/Stat';

import { Features } from './components/Features';
import { MDXRemote } from 'next-mdx-remote';

import * as S from './styles';
import 'swiper/css';

const PostImage = ({ children }) => <S.Image>{children}</S.Image>;

const components = {
  PostImage,
  p: ({ children }) => <Paragraph>{children}</Paragraph>,
  h3: ({ children }) => <S.Heading>{children}</S.Heading>,
  img: ({ ...props }) => {
    const substrings = props.alt?.split('{');
    const alt = substrings[0].trim();

    const width = substrings[1]
      ? substrings[1].match(/(?<=w:\s?)\d+/g)[0]
      : 800;
    const height = substrings[1]
      ? substrings[1].match(/(?<=h:\s?)\d+/g)[0]
      : 400;

    return (
      <CldImage
        src={props.src}
        alt={alt}
        height={height}
        width={width}
        sizes="100vw"
      />
    );
  },
};

export const Review = ({
  title,
  description,
  markdown,
  address,
  workingHours,
  avgPrice,
  features,
}) => (
  <ReviewContainer>
    <S.Title>{title}</S.Title>
    <S.Subtitle>{description}</S.Subtitle>
    <S.StatsRow>
      <Stat title="Адресс" content={address} />
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
