import { Announcement } from '../components/Announcement';
import { Layout } from '../components/Layout';
import { Articles } from '../components/Articles/Articles';
import { GurtourBanner } from '../components/Banners';
import { SingleArticleAnnouncement } from '../components/SingleArticleAnnouncement';
import { Banner } from '../components/Banners';
import { PageMeta } from '../components/PageMeta';
import { ArticleThumbnailWide } from '../components/ArticleThumbnailWide';

function Home() {
  return (
    <>
      <PageMeta
        ogUrl="https://propro.media/"
        title="Про про | Локальное медиа про Протвино"
        ogTitle="Про про | Локальное медиа про Протвино"
        ogDescription="Вместе с вами исследуем Протвино, его наследие и развитие, создаем, поддерживаем и освещаем локальные инициативы."
      />
      <Layout>
        <Announcement />
        <SingleArticleAnnouncement />
        <GurtourBanner />
        <Articles />
        <ArticleThumbnailWide
          link="/article/dobrocake"
          title="Семейная кофейня доброкейк: "
          description="все началось с того, что я заказала маме на день рождения торт"
          author="Аня Медведкова"
          bgColor="#D8CBFF"
          textColor="#171F2E"
          imageUrl="/article/dobrocake/thumbnail.png"
        />
        <ArticleThumbnailWide
          link="/article/polyclinic"
          title="Поликлиника или архитектурный памятник"
          description="черный крест Малевича, архитектоны, утки и сараи – что это и при чем тут наша поликлиника?"
          author="Аня Медведкова"
          bgColor="#F3815A"
          textColor="#fff"
          imageUrl="/images/posts/preview_section_polyclinic.jpg"
        />
        <Banner
          heights={[180, 430]}
          imageUrls={[
            '/images/content/banner-zine_mobile.png',
            '/images/content/banner-zine.jpg',
          ]}
          link="/article/zine"
        />
        <Banner
          heights={[180, 430]}
          imageUrls={[
            '/images/content/banner-map_mobile.png',
            '/images/content/banner-map.jpg',
          ]}
          link="/map"
        />
      </Layout>
    </>
  );
}

export default Home;
