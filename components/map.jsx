import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { useState, useEffect, useRef } from "react";

import s from "../styles/map.module.css";

function MapboxMap({ points }) {
  const [map, setMap] = useState();
  const [loading, setLoading] = useState(true);

  const mapNode = useRef(null);

  useEffect(() => {
    const node = mapNode.current;

    if (typeof window === "undefined" || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [37.215213, 54.872224],
      zoom: 12,
    });

    setMap(mapboxMap);
    addPiontsToMap(mapboxMap);

    mapboxMap.once("load", (e) => {
      e.target.resize();
      setLoading(false);
    });

    return () => {
      mapboxMap.remove();
    };
  });

  const addPiontsToMap = (map) => {
    points
      .filter((p) => p.position[0])
      .map((p) => {
        const lat = Number(p.position.split(",")[0]);
        const lon = Number(p.position.split(",")[1]);

        new mapboxgl.Marker()
          .setLngLat([lon, lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3>${p.title}</h3>`)
          )
          .addTo(map);
      });
  };

  return (
    <section className={s.mapWrapper}>
      <div ref={mapNode} className={s.mapContainer} />
    </section>
  );
}

export default MapboxMap;
