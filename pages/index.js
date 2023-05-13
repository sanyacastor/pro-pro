import Head from 'next/head';

import styles from '../styles/Home.module.scss';
import { Announcement } from '../components/Announcement';
import { Layout } from '../components/Layout/Layout';
import { Articles } from '../components/Articles/Articles';
import { GurtourBanner, MapBanner, ZineBanner } from '../components/Banners';
import { SingleArticleAnnouncement } from '../components/SingleArticleAnnouncement';

function Home() {
  return (
    <>
      <Head>
        <title>Про про | locals for locals</title>
      </Head>
      <Layout>
        <main className={styles.main}>
          <Announcement />
          <Articles />
          <GurtourBanner />
          <SingleArticleAnnouncement />
          <ZineBanner />
          <MapBanner />
        </main>
      </Layout>
    </>
  );
}

export default Home;
