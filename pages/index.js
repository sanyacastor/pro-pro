import Head from 'next/head';

import styles from '../styles/Home.module.scss';
import { Announcement } from '../components/Announcement';
import { Header, Footer } from '../components/Layout';
import { Articles } from '../components/Articles';

function Home() {
  return (
    <>
      <Head>
        <title>Про про | locals for locals</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <Announcement
          image="https://res.cloudinary.com/propromedia/image/upload/v1673032656/duotone_5_1_kkfjrd.webp"
          link="/post/polyclinic"
          subtitle="Может добавить небольшое описание"
          title={
            <>
              ПОЛИКЛИНИКА <br />
              ИлИ АРХиТЕКТУРНЫЙ <br />
              ПАМЯТНИК
            </>
          }
        />
        <Articles />
      </main>
      <Footer />
    </>
  );
}

export default Home;
