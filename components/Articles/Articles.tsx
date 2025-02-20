import React from 'react';

import s from './articles.module.scss';

import * as Styled from './styles';
import Image from 'next/image';

const ArticleThumbnail = ({ url, title, author, thumbnail }) => (
  <Styled.ArticleThumbnail href={url}>
    <div className={s.articleThumbnail__image}>
      <Image alt="" src={thumbnail} height="330" width="500" />
    </div>
    <Styled.ThumbnailTitle>{title}</Styled.ThumbnailTitle>
    {author && <Styled.Author>АВТОР: {author}</Styled.Author>}
  </Styled.ArticleThumbnail>
);

export const Articles = () => {
  return (
    <Styled.ArticlesSection>
      <Styled.ArticlesContainer>
        <Styled.Articles>
          <ArticleThumbnail
            thumbnail="/article/chto-takoe-sovetsky-modernizm/thumbnail.png"
            url="/article/chto-takoe-sovetsky-modernizm"
            title="ПРО СОВеТСКИЙ МОдЕРНИЗМ"
            author="Аня Медведкова"
          />
          <ArticleThumbnail
            thumbnail="/article/uskoritel-v-protvino/thumbnail.png"
            url="/article/uskoritel-v-protvino"
            title="УСкОРИТЕЛЬ В&nbsp;ПРОТвИНО"
            author="Екатерина Алейникова"
          />
        </Styled.Articles>
      </Styled.ArticlesContainer>
    </Styled.ArticlesSection>
  );
};
