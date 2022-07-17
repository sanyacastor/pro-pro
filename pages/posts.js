import Head from "next/head";
import Link from "next/link";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import styles from "../styles/Home.module.scss";

function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Про про | Статьи</title>
      </Head>

      <main className={styles.main}>
        <h2 className={styles.post}>Все Статьи: </h2>
        {posts.map((p, i) => (
          <Link href={p.slug} key={i}>
            <div className={styles.post}>
              <a>{p.title}</a>
              {p.author && <span>[{p.author}]</span>} ➝
            </div>
          </Link>
        ))}
      </main>

      <footer className={styles.footer}>про протвино © 2021</footer>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("content/posts");

  const meta = files.map((f) => {
    const md = fs.readFileSync(path.join("content/posts/" + f)).toString();

    const { title, author } = matter(md).data;
    const slug = "post/" + f.split(".md")[0];

    return { title, slug, author: author || "" };
    // return { data, content } = matter(markdownWithMetadata)
  });

  // const { data, content } = matter(markdownWithMetadata);

  return {
    props: {
      posts: meta,
    },
  };
}

export default Home;
