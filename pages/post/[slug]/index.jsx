import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';

const renderers = {
  image: (image) => {
    return <Image src={image.src} alt={image.alt} height="200" width="300" />;
  },
};

export async function getStaticProps({ params }) {
  const { slug } = params;

  const folder = 'content/posts/';
  const markdownWithMetadata = fs
    .readFileSync(`${folder}${slug}.md`, 'utf-8')
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  return {
    props: {
      slug,
      content: content,
    },
  };

  // // Convert post date to format: Month day, Year
  // const options = { year: 'numeric', month: 'long', day: 'numeric' };
  // const formattedDate = data.date.toLocaleDateString('en-US', options);

  // return frontmatter;

  // // const frontmatter = {
  // //   ...data,
  // //   date: formattedDate,
  // // };

  // // return {
  // //   props: {
  // //     content: `# ${data.title}\n${content}`,
  // //     frontmatter,
  // //   },
  // // };
}

export default function Post({ content }) {
  return (
    <article>
      <div>
        {/* {query?.slug} */}
        {content && (
          <ReactMarkdown components={renderers}>{content}</ReactMarkdown>
        )}
      </div>
    </article>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync('content/posts');

  console.log('FILES', files);

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
