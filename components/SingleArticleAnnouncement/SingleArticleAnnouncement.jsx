import React from 'react';
import {
  Wrapper,
  Container,
  ArticleDescription,
  ArticleImage,
  ArticleTitle,
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
          loader={({ src }) => src}
        />
        <ArticleDescription>
          <ArticleTitle>
            истории
            <br />
            выбора:
          </ArticleTitle>
          <ArticleDescriptionText>
            как молодые девушки принимали решение переехать в&nbsp;маленький
            городок в&nbsp;лесу
          </ArticleDescriptionText>
        </ArticleDescription>
      </Container>
    </Wrapper>
  );
};
