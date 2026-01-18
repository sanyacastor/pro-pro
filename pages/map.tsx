import { Header } from '../components/Layout';
import MapPage from '../components/mapPage/MapPage';
import Head from 'next/head';
import { POINTS_BY_TYPE, TAG_CONFIG } from '../components/mapPage/consts';

export default function Home({
  pointsByTypeGeoJSON,
  ogDescription,
  ogTitle,
  ogUrl,
  ogImage,
}) {
  return (
    <>
      <Head>
        <title>{ogTitle}</title>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="Propro.media" />

        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />

        <meta property="og:url" content={ogUrl} />

        <meta property="og:image:url" content={ogImage} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
      </Head>
      <Header />
      <MapPage pointsByTypeGeoJSON={pointsByTypeGeoJSON} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { tag } = context.query;

  const POINTS_BY_TYPE_GEOJSON = {};

  Object.keys(POINTS_BY_TYPE).forEach((tagKey) => {
    const points = POINTS_BY_TYPE[tagKey];
    const features = points.map((p) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: p.coordinates.reverse(), // reverse coordinates to match Mapbox format
      },
      properties: {
        exist: p.exist !== undefined ? p.exist : true,
        type: p.type,
        title: p.title,
        image: p?.image || null,
        description: p.description || '',
      },
    }));

    POINTS_BY_TYPE_GEOJSON[tagKey] = {
      type: 'FeatureCollection',
      features,
    };
  });

  // Determine OG meta tags based on tag parameter
  const defaultDescription = 'Карта интересных мест в окресностях Протвино';
  const defaultTitle = 'Про про | Карта';
  const defaultImage = '';

  let ogDescription = defaultDescription;
  let ogTitle = defaultTitle;
  let ogImage =
    'https://res.cloudinary.com/propromedia/image/upload/c_scale,w_1000/v1673030685/duotone_4_hndnpn.png';
  let ogUrl = 'https://propro.media/map';

  if (tag && TAG_CONFIG[tag]) {
    const tagConfig = TAG_CONFIG[tag];
    ogDescription = tagConfig.shortDescription || defaultDescription;
    ogTitle = `Про про | Карта - ${tagConfig.title}`;
    ogUrl = `https://propro.media/map?tag=${tag}`;
  }

  return {
    props: {
      pointsByTypeGeoJSON: POINTS_BY_TYPE_GEOJSON,
      ogDescription,
      ogTitle,
      ogUrl,
      ogImage,
    },
  };
}
