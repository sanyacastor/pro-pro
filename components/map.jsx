import mapboxgl from "mapbox-gl";
import { useState, useEffect, useRef } from "react";

import "mapbox-gl/dist/mapbox-gl.css";
import s from "../styles/map.module.css";

function MapboxMap({ places }) {
  const [map, setMap] = useState();
  const [loading, setLoading] = useState(true);

  const mapNode = useRef(null);

  useEffect(() => {
    const node = mapNode.current;

    if (typeof window === "undefined" || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/navigation-night-v1",
      center: [37.215213, 54.872224],
      zoom: 13,
    });

    setMap(mapboxMap);
    addPiontsToMap(mapboxMap);

    mapboxMap.once("load", (e) => {
      e.target.resize();

      // map.addSource("places", {
      //   type: "geojson",
      //   data: places,
      // });

      // for (const place of places) {
      //   // const symbol = feature.properties.icon;
      //   const layerID = `poi-${place.type}`;

      //   if (!map.getLayer(layerID)) {
      //     map.addLayer({
      //       id: layerID,
      //       type: "symbol",
      //       source: "places",
      //       layout: {
      //         // These icons are a part of the Mapbox Light style.
      //         // To view all images available in a Mapbox style, open
      //         // the style in Mapbox Studio and click the "Images" tab.
      //         // To add a new image to the style at runtime see
      //         // https://docs.mapbox.com/mapbox-gl-js/example/add-image/
      //         // "icon-image": `${symbol}-15`,
      //         "icon-allow-overlap": true,
      //       },
      //       filter: ["==", "type", layerID],
      //     });
      //   }
      // }

      setLoading(false);
    });

    return () => {
      mapboxMap.remove();
    };
  }, []);

  const addPiontsToMap = (map) => {
    places
      .filter((p) => p.coordinates[0])
      .map((p) => {
        const lat = Number(p.coordinates.split(",")[0]);
        const lon = Number(p.coordinates.split(",")[1]);

        new mapboxgl.Marker({ color: "#fbb03b" })
          .setLngLat([lon, lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3>${p.title}</h3>`)
          )
          .addTo(map);
      });
  };

  const types = Array.from(new Set(places.map((p) => p.type)));

  return (
    <>
      <div className={s.mapToolBar}>
        {types.map((name) => (
          <span className={s.mapToolBarTag}>{name}</span>
        ))}
      </div>
      <section className={s.mapWrapper}>
        <div ref={mapNode} className={s.mapContainer} />
      </section>
    </>
  );
}

export default MapboxMap;