import Head from 'next/head';
import React from 'react';
import { Header } from '../../components/Layout';
import { GurTour } from '../../components/GurTour';

export default function GurTourPage() {
  return (
    <>
      <Head>
        <title>Про про | Гур тур</title>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="Propro.media" />

        <meta property="og:title" content="Про про | Гур тур" />
        <meta
          property="og:description"
          content="Авторски блог о еде в Протвино и окресностях"
        />

        <meta property="og:url" content="https://propro.media/gurtour" />

        <meta property="og:image:url" content="" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
      </Head>
      <Header />
      <GurTour />
    </>
  );
}
