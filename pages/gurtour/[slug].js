import React from 'react';
import Head from 'next/head';
import remarkUnwrapImages from 'remark-unwrap-images';
import { Layout } from '../../components/Layout';
import { Hero } from '../../components/shared/PostHero';

import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { Review } from '../../components/Review/Review';

export default function GurTourPage({
  content = '',
  avgPrice,
  workingHours,
  address,
  title,
  description,
  features,
}) {
  return (
    <>
      <Head>
        <title>Про про | Гур тур</title>
      </Head>
      <Layout>
        <Hero />
        <Review
          title={title}
          description={description}
          markdown={content}
          address={address}
          avgPrice={avgPrice}
          workingHours={workingHours}
          features={features}
        />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const folder = 'content/gurtour/';

  const markdownWithMetadata = fs
    .readFileSync(`${folder}${slug}.mdx`, 'utf-8')
    .toString();

  const { content, data } = matter(markdownWithMetadata);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkUnwrapImages],
    },
  });

  const { avgPrice, workingHours, address, title, description, features } =
    data;

  return {
    props: {
      slug,
      title,
      description,
      avgPrice,
      workingHours,
      address,
      content: mdxSource,
      features,
    },
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync('content/gurtour');

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
