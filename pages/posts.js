import Head from "next/head";
import Link from "next/link";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import styles from "../styles/Home.module.css";

function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Про про | Статьи</title>
      </Head>

      <main className={styles.main}>
        {posts.map((p, i) => (
          <Link href={p.slug} key={i}>
            <a>{p.title}</a>
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

    const title = matter(md).data.title;
    const slug = "post/" + f.split(".md")[0];

    return { title, slug };
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
