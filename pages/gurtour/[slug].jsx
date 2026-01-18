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
  slug,
}) {
  return (
    <>
      <Head>
        <title>{`Гур тур | ${title}`}</title>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="Propro.media" />

        <meta property="og:title" content={`Гур тур | ${title}`} />
        <meta property="og:description" content={description} />

        <meta
          property="og:url"
          content={`https://propro.media/gurtour/${slug}`}
        />

        <meta property="og:image:url" content="" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
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
