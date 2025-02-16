import React, { ReactNode } from 'react';
import * as S from './styles';

type ArticleThumbnailProps = {
  bgColor?: string;
  textColor?: string;
  link: string;
  imageUrl: string;
  title: string | ReactNode;
  description: string | ReactNode;
  author: string;
};

// link="/article/istorii-vybora"
// imageUrl = /images/posts/preview_selection_history.jpg

export const ArticleThumbnailWide = ({
  title,
  description,
  author,
  link,
  imageUrl = '',
  bgColor = 'white',
  textColor = 'black',
}: ArticleThumbnailProps) => {
  return (
    <S.Wrapper href={link}>
      <S.Container bgColor={bgColor} color={textColor}>
        <S.ArticleImage src={imageUrl} width={600} height={480} />
        <S.ArticleDescription>
          <S.ArticleTitle>{title}</S.ArticleTitle>
          <S.ArticleDescriptionText>{description}</S.ArticleDescriptionText>
          <S.Author>Автор: {author}</S.Author>
        </S.ArticleDescription>
      </S.Container>
    </S.Wrapper>
  );
};
