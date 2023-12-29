import path from 'path';
import { promises as fs } from 'fs';

import { Header } from '../components/Layout';
import MapPage from '../components/mapPage/MapPage';
import Head from 'next/head';

export default function Home({ points }) {
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
      <MapPage places={points} />
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/public/assets/points.json');
  const fileContents = await fs.readFile(filePath, 'utf-8');
  const parsed = await JSON.parse(fileContents);

  const mapboxPoints = parsed.map((p) => ({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: p.coordinates,
    },
    properties: {
      exist: true,
      type: p.type,
      title: p.title,
      image: p?.image || null,
      description: p.description,
    },
  }));

  return {
    props: {
      points: {
        type: 'FeatureCollection',
        features: [...mapboxPoints],
      },
    },
  };
}
