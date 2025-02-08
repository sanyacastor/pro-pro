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
        <title>Про про | Локальное медиа про Протвино</title>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="propro.media" />

        <meta
          property="og:title"
          content="Про про | Локальное медиа про Протвино"
        />
        <meta
          property="og:description"
          content="Вместе с вами исследуем Протвино, его наследие и развитие, создаем, поддерживаем и освещаем локальные инициативы."
        />

        <meta property="og:url" content="https://propro.media/" />

        <meta property="og:image:url" content="" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
      </Head>
      <Layout>
        <Announcement />
        <SingleArticleAnnouncement />
        <GurtourBanner />
        <Articles />
        <ZineBanner />
        <MapBanner />
      </Layout>
    </>
  );
}

export default Home;
