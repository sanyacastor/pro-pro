import React from 'react';
import s from '../../styles/map/map.module.css';

export const Map = ({ mapNode }) => (
  <section className={s.mapWrapper}>
    <div ref={mapNode} className={s.mapContainer} />
  </section>
);
