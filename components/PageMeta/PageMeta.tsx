import React from 'react';
import Head from 'next/head';

type PageMetaProps = {
  title: string;
  ogUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImageUrl?: string;
};

export const PageMeta = ({
  title,
  ogUrl,
  ogTitle,
  ogDescription,
  ogImageUrl = '',
}: PageMetaProps) => (
  <Head>
    <title>{title}</title>
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="ru_RU" />
    <meta property="og:site_name" content="propro.media" />

    <meta property="og:url" content={ogUrl} />
    <meta property="og:title" content={ogTitle} />
    <meta property="og:description" content={ogDescription} />

    <meta property="og:image:url" content={ogImageUrl} />
    <meta property="og:image:width" content="800" />
    <meta property="og:image:height" content="600" />
  </Head>
);
