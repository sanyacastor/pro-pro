import Head from "next/head";
import Events from "../components/events";

import { promises as fs } from "fs";
import path from "path";

import styles from "../styles/Home.module.scss";
import Announcement from "../components/announcement";

function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Про про | locals for locals</title>
      </Head>
      <main className={styles.main}>
        <Announcement />
        <Events events={posts} />
      </main>

      <footer className={styles.footer}>про протвино © 2021</footer>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "/public/assets/mockData.json");
  const fileContents = await fs.readFile(filePath, "utf-8");

  return {
    props: {
      posts: JSON.parse(fileContents),
    },
  };
}

export default Home;
