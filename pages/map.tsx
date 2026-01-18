import { Header } from '../components/Layout';
import MapPage from '../components/mapPage/MapPage';
import Head from 'next/head';
import { POINTS_BY_TYPE } from '../components/mapPage/consts';

export default function Home({ pointsByTypeGeoJSON }) {
  return (
    <>
      <Head>
        <title>Про про | Карта</title>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="Propro.media" />

        <meta property="og:title" content="Про про | Карта" />
        <meta
          property="og:description"
          content="Карта интересных мест в окресностях Протвино"
        />

        <meta property="og:url" content="https://propro.media/map" />

        <meta property="og:image:url" content="" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
      </Head>
      <Header />
      <MapPage pointsByTypeGeoJSON={pointsByTypeGeoJSON} />
    </>
  );
}

export async function getStaticProps() {
  const POINTS_BY_TYPE_GEOJSON = {};

  Object.keys(POINTS_BY_TYPE).forEach((tag) => {
    const points = POINTS_BY_TYPE[tag];
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

    POINTS_BY_TYPE_GEOJSON[tag] = {
      type: 'FeatureCollection',
      features,
    };
  });

  return {
    props: {
      pointsByTypeGeoJSON: POINTS_BY_TYPE_GEOJSON,
    },
  };
}
