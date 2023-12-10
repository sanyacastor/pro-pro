import Head from 'next/head';

import { Announcement } from '../components/Announcement';
import { Layout } from '../components/Layout';
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
        <Announcement />
        <Articles />
        <GurtourBanner />
        <SingleArticleAnnouncement />
        <ZineBanner />
        <MapBanner />
      </Layout>
    </>
  );
}

export default Home;
