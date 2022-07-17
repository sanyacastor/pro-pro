import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";

import s from "../../styles/post.module.scss";

import ReactMarkdown from "react-markdown";

const renderers = {
  image: (image) => {
    return <Image src={image.src} alt={image.alt} height="200" width="300" />;
  },
};

export default function Post({ content, frontmatter }) {
  return (
    <article>
      <div className={s.post__container}>
        <ReactMarkdown components={renderers}>{content}</ReactMarkdown>
      </div>
    </article>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("content/posts");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMetadata = fs
    .readFileSync(path.join("content/posts/" + slug + ".md"))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  // Convert post date to format: Month day, Year
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = data.date.toLocaleDateString("en-US", options);

  const frontmatter = {
    ...data,
    date: formattedDate,
  };

  return {
    props: {
      content: `# ${data.title}\n${content}`,
      frontmatter,
    },
  };
}
