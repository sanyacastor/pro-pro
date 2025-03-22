import React from 'react';
import {
  Wrapper,
  Container,
  ArticleAuthor,
  ArticleImage,
  ArticleTitle,
  ArticleDescription,
  ArticleDescriptionText,
} from './styles';

export const SingleArticleAnnouncement = () => {
  return (
    <Wrapper href="/article/istorii-vybora">
      <Container>
        <ArticleImage
          src="/images/posts/preview_selection_history.jpg"
          width={600}
          height={480}
        />
        <ArticleDescription>
          <ArticleTitle>истории выбора:</ArticleTitle>
          <ArticleDescriptionText>
            как молодые девушки принимали решение переехать в&nbsp;маленький
            городок в&nbsp;лесу
          </ArticleDescriptionText>
          <ArticleAuthor>Автор: Аня Медведкова</ArticleAuthor>
        </ArticleDescription>
      </Container>
    </Wrapper>
  );
};
