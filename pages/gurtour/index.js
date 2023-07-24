import Head from 'next/head';
import React from 'react';
import { Header } from '../../components/Layout';
import { GurTour } from '../../components/GurTour';

export default function GurTourPage() {
  return (
    <>
      <Head>
        <title>Про про | Гур тур</title>
      </Head>
      <Header />
      <GurTour />
    </>
  );
}
