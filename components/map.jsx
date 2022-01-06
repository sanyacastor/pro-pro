import mapboxgl from "mapbox-gl";
import { useState, useEffect, useRef } from "react";

import "mapbox-gl/dist/mapbox-gl.css";
import s from "../styles/map.module.css";

function MapboxMap({ places }) {
  const [myMap, setMap] = useState();
  const [tags, setTags] = useState();

  const mapNode = useRef(null);

  const types = Array.from(
    new Set(places.features.map((p) => p.properties.type))
  );

  useEffect(() => {
    const node = mapNode.current;
    const tagObj = {};

    types.forEach((t) => (tagObj[t] = true));
    setTags(tagObj);

    if (typeof window === "undefined" || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/navigation-night-v1",
      center: [37.215213, 54.872224],
      zoom: 13,
    });

    mapboxMap.once("load", (e) => {
      e.target.resize();
      setMap(mapboxMap);

      places.features.map((p) => {
        const t1 = p.geometry.coordinates[0];
        const t2 = p.geometry.coordinates[1];

        const newPoint = { ...p };
        newPoint.geometry.coordinates = [t2, t1];
        return newPoint;
      });

      types.map((type) => {
        const filteredPoints = places.features.filter((p) => {
          return p.geometry.coordinates[0] && p.properties.type === type;
        });

        mapboxMap.addSource(`${type}-src`, {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: filteredPoints,
          },
        });

        mapboxMap.addLayer({
          id: type,
          type: "circle",
          source: `${type}-src`,
          layout: {
            visibility: "visible",
          },
          paint: {
            "circle-radius": 5,
            "circle-color": "greenyellow",
          },
        });
      });
    });

    types.map((tag) => {
      mapboxMap.on("click", tag, (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.title;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(mapboxMap);
      });

      mapboxMap.on("mouseenter", tag, () => {
        mapboxMap.getCanvas().style.cursor = "pointer";
      });

      mapboxMap.on("mouseleave", tag, () => {
        mapboxMap.getCanvas().style.cursor = "";
      });
    });

    return () => {
      mapboxMap.remove();
    };
  }, []);

  const filterPoints = (name) => {
    const visibility =
      myMap.getLayoutProperty(name, "visibility") === "none"
        ? "visible"
        : "none";
    myMap.setLayoutProperty(name, "visibility", visibility);

    const updatedTags = { ...tags };
    updatedTags[name] = visibility === "visible" ? true : false;

    setTags(updatedTags);
  };

  return (
    <>
      <div className={s.mapToolBar}>
        {types.map((name) => (
          <span
            className={`${s.mapToolBarTag} ${
              tags && tags[name] ? "" : s.active
            }`}
            key={name}
            onClick={() => filterPoints(name)}
          >
            {name}
          </span>
        ))}
      </div>
      <section className={s.mapWrapper}>
        <div ref={mapNode} className={s.mapContainer} />
      </section>
    </>
  );
}

export default MapboxMap;
