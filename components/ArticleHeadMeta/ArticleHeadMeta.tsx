import Head from 'next/head';
import React from 'react';

type ArticleHeadMetaProps = {
  title: string;
  ogDescription: string;
  ogUrl: string;
  ogImageUrl: string;
  articleSchema?: Record<string, any>;
};

export const ArticleHeadMeta = ({
  title,
  ogDescription,
  ogImageUrl,
  ogUrl,
  articleSchema,
}: ArticleHeadMetaProps) => {
  const metaTitle = `Про про | ${title}`;

  return (
    <Head>
      {/* <!-- HTML Meta Tags --> */}
      <title>{metaTitle}</title>
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:site_name" content="propro.media" />
      <meta name="description" content={ogDescription} />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImageUrl} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="propro.media" />
      <meta property="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImageUrl} />

      {articleSchema && <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />}
    </Head>
  );
};
