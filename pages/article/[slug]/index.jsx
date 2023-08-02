import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

import { Article } from '../../../components/Article/Article';

export default function Post({ markdown, title, author, heroImage }) {
  return (
    <Article
      markdown={markdown}
      title={title}
      author={author}
      heroImage={heroImage}
    />
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const folder = 'content/articles/';

  const markdownWithMetadata = fs
    .readFileSync(`${folder}${slug}.mdx`, 'utf-8')
    .toString();

  const { content, data } = matter(markdownWithMetadata);
  const mdxSource = await serialize(content);

  const { title, author, heroImage } = data;

  return {
    props: {
      slug,
      title,
      author,
      heroImage,
      markdown: mdxSource,
    },
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync('content/articles/');

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
