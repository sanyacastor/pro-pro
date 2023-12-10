import React, { useEffect, useState } from 'react';

import { Layout } from '../Layout';
// import { PostAuthor, PostHero, PostGrid } from '../UI/Article';
// import { MDXRemote } from 'next-mdx-remote';
// import { components } from './helpers';

import 'swiper/css';

export const Article = ({ markdown, title, author, heroImage }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Layout>
      {/* <PostHero cover={heroImage}>
        <PostContainer>
          {title && <PostTitle>{title}</PostTitle>}
          {author && <PostAuthor>АВТОР: {author}</PostAuthor>}
        </PostContainer>
      </PostHero>
      <PostContainer>
        <PostGrid padding={2}>
          <MDXRemote {...markdown} components={components} />
        </PostGrid>
      </PostContainer> */}
    </Layout>
  );
};
