import mapboxgl from 'mapbox-gl';
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useRouter } from 'next/router';

import { TAG_CONFIG } from './consts';
import AsideInfo from './asideInfo';
import { Toolbar } from './Toolbar';
import { Map } from './map';

import 'mapbox-gl/dist/mapbox-gl.css';

function MapboxMap({ pointsByTypeGeoJSON }) {
  const router = useRouter();
  const [myMap, setMap] = useState();
  const [tags, setTags] = useState();

  const [currentPoint, setCurrentPoint] = useState({});
  const [asideVisible, setAsideVisible] = useState(false);

  const mapNode = useRef(null);

  const types = useMemo(
    () => Object.keys(pointsByTypeGeoJSON),
    [pointsByTypeGeoJSON]
  );

  const initializeMap = useCallback(
    (mapboxMap, urlTag) => {
      mapboxMap.once('load', (e) => {
        e.target.resize();
        setMap(mapboxMap);

        // Add sources and layers for each type
        types.forEach((type) => {
          const featureCollection = pointsByTypeGeoJSON[type];

          mapboxMap.addSource(`${type}-src`, {
            type: 'geojson',
            data: featureCollection,
          });

          mapboxMap.addLayer({
            id: type,
            type: 'circle',
            source: `${type}-src`,
            layout: {
              visibility: urlTag === type ? 'visible' : 'none',
            },
            paint: {
              'circle-radius': 8,
              'circle-color': TAG_CONFIG[type].color,
            },
          });
        });

        // Set initial point if URL tag is present
        if (urlTag && types.includes(urlTag)) {
          setCurrentPoint({
            title: TAG_CONFIG[urlTag].title,
            description: TAG_CONFIG[urlTag].description,
            type: urlTag,
          });
          setAsideVisible(true);
        }

        // Add event listeners for each layer
        types.forEach((tag) => {
          mapboxMap.on('click', tag, (e) => {
            const coordinates = e.features[0].geometry.coordinates.slice();

            setCurrentPoint({
              title: e.features[0].properties.title,
              description: e.features[0].properties.description,
              image: e.features[0].properties.image,
              type: e.features[0].properties.type,
            });

            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            setAsideVisible(true);
          });

          mapboxMap.on('mouseenter', tag, () => {
            mapboxMap.getCanvas().style.cursor = 'pointer';
          });

          mapboxMap.on('mouseleave', tag, () => {
            mapboxMap.getCanvas().style.cursor = '';
          });
        });
      });
    },
    [types, pointsByTypeGeoJSON, setCurrentPoint, setAsideVisible]
  );

  useEffect(() => {
    const node = mapNode.current;
    const tagObj = {};

    types.forEach((t) => (tagObj[t] = true));

    // Initialize tags from URL if present
    const urlTag = router.query.tag;
    if (urlTag && types.includes(urlTag)) {
      types.forEach((t) => {
        tagObj[t] = t !== urlTag;
      });
    }

    setTags(tagObj);

    if (typeof window === 'undefined' || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [37.215213, 54.872224],
      zoom: 13,
    });

    initializeMap(mapboxMap, urlTag);

    return () => {
      mapboxMap.remove();
    };
  }, [router.query.tag, pointsByTypeGeoJSON, types, initializeMap]);

  const filterPoints = (name) => {
    const updatedTags = { ...tags };
    const isCurrentlySelected = !updatedTags[name];

    Object.keys(tags).forEach((key) => {
      if (name === key) {
        myMap.setLayoutProperty(
          key,
          'visibility',
          isCurrentlySelected ? 'none' : 'visible'
        );
        updatedTags[key] = isCurrentlySelected;
      } else {
        myMap.setLayoutProperty(key, 'visibility', 'none');
        updatedTags[key] = true;
      }
    });

    setTags(updatedTags);

    // Update URL parameter
    if (isCurrentlySelected) {
      // Deselecting - remove from URL
      router.replace({ pathname: router.pathname }, undefined, {
        shallow: true,
      });
      setAsideVisible(false);
    } else {
      // Selecting - add to URL
      router.replace(
        { pathname: router.pathname, query: { tag: name } },
        undefined,
        { shallow: true }
      );
      setCurrentPoint({
        title: TAG_CONFIG[name].title,
        description: TAG_CONFIG[name].description,
        type: name,
      });
      setAsideVisible(true);
    }
  };

  return (
    <>
      <AsideInfo
        currentPoint={currentPoint}
        onClose={() => setAsideVisible(false)}
        visible={asideVisible}
        pointsByTypeGeoJSON={pointsByTypeGeoJSON}
        setCurrentPoint={setCurrentPoint}
        myMap={myMap}
      />
      <Toolbar
        tags={tags}
        types={types}
        filterPoints={filterPoints}
        isOpen={asideVisible}
      />
      <Map mapNode={mapNode} />
    </>
  );
}

export default MapboxMap;
