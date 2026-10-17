import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import type { Map as MapboxMapInstance } from "mapbox-gl";

import { TAG_CONFIG } from "./consts";
import AsideInfo from "./AsideInfo";
import { Toolbar } from "./Toolbar";
import { Map } from "./Map";

import "mapbox-gl/dist/mapbox-gl.css";

type Feature = {
  type: "Feature";
  geometry: { type: "Point"; coordinates: [number, number] };
  properties: {
    exist: boolean;
    type: string;
    title: string;
    image: string | null;
    description: string;
  };
};

type FeatureCollection = {
  type: "FeatureCollection";
  features: Feature[];
};

type Props = {
  pointsByTypeGeoJSON: Record<string, FeatureCollection>;
};

function MapboxMap({ pointsByTypeGeoJSON }: Props) {
  const [myMap, setMap] = useState<MapboxMapInstance | undefined>(undefined);
  const [tags, setTags] = useState<Record<string, boolean>>();

  const [currentPoint, setCurrentPoint] = useState<Record<string, any>>({});
  const [asideVisible, setAsideVisible] = useState(false);
  const [urlTag, setUrlTag] = useState<string | null>(null);
  const [tokenAvailable, setTokenAvailable] = useState(false);

  const mapNode = useRef<HTMLDivElement>(null);

  const types = useMemo(
    () => Object.keys(pointsByTypeGeoJSON),
    [pointsByTypeGeoJSON]
  );

  // Read URL tag from query string on mount + popstate.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    setUrlTag(params.get("tag"));
    const handler = () =>
      setUrlTag(new URLSearchParams(window.location.search).get("tag"));
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  // Detect whether a Mapbox token is available at runtime.
  // The token may be injected by Astro's server runtime (PUBLIC_MAPBOX_TOKEN)
  // or by Cloudflare env binding once the site is live.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const envToken =
      (window as any).__MAPBOX_TOKEN__ ||
      (import.meta as any).env?.PUBLIC_MAPBOX_TOKEN ||
      "";
    setTokenAvailable(!!envToken);
  }, []);

  const initializeMap = useCallback(
    async (mapboxMap: MapboxMapInstance, tag: string | null) => {
      // Dynamic import keeps mapbox-gl out of the SSR bundle (mapbox-gl
      // currently throws during server-side evaluation in some bundlers).
      const mapboxgl = (await import("mapbox-gl")).default;
      mapboxMap.once("load", () => {
        mapboxMap.resize();
        setMap(mapboxMap);

        types.forEach((type) => {
          const featureCollection = pointsByTypeGeoJSON[type];
          mapboxMap.addSource(`${type}-src`, {
            type: "geojson",
            data: featureCollection as any,
          });
          mapboxMap.addLayer({
            id: type,
            type: "circle",
            source: `${type}-src`,
            layout: {
              visibility: tag === type ? "visible" : "none",
            },
            paint: {
              "circle-radius": 8,
              "circle-color": (TAG_CONFIG as any)[type].color,
            },
          });
        });

        if (tag && types.includes(tag)) {
          setCurrentPoint({
            title: (TAG_CONFIG as any)[tag].title,
            description: (TAG_CONFIG as any)[tag].description,
            type: tag,
          });
          setAsideVisible(true);
        }

        types.forEach((layerId) => {
          mapboxMap.on("click", layerId, (e) => {
            const f = e.features?.[0];
            if (!f) return;
            const coords = (f.geometry as any).coordinates.slice() as [
              number,
              number
            ];
            setCurrentPoint({
              title: f.properties!.title,
              description: f.properties!.description,
              image: f.properties!.image,
              type: f.properties!.type,
            });
            while (Math.abs(e.lngLat.lng - coords[0]) > 180) {
              coords[0] += e.lngLat.lng > coords[0] ? 360 : -360;
            }
            setAsideVisible(true);
          });

          mapboxMap.on("mouseenter", layerId, () => {
            mapboxMap.getCanvas().style.cursor = "pointer";
          });

          mapboxMap.on("mouseleave", layerId, () => {
            mapboxMap.getCanvas().style.cursor = "";
          });
        });
      });
    },
    [types, pointsByTypeGeoJSON]
  );

  useEffect(() => {
    if (!mapNode.current) return;
    const envToken =
      (window as any).__MAPBOX_TOKEN__ ||
      (import.meta as any).env?.PUBLIC_MAPBOX_TOKEN ||
      "";
    if (!envToken) {
      setTokenAvailable(false);
      return;
    }
    setTokenAvailable(true);

    let mapboxMap: MapboxMapInstance | null = null;
    let cancelled = false;

    (async () => {
      const mapboxgl = (await import("mapbox-gl")).default;
      mapboxgl.accessToken = envToken;
      if (cancelled || !mapNode.current) return;
      mapboxMap = new mapboxgl.Map({
        container: mapNode.current,
        style: "mapbox://styles/mapbox/light-v10",
        center: [37.215213, 54.872224],
        zoom: 13,
      });
      initializeMap(mapboxMap, urlTag);
    })();

    return () => {
      cancelled = true;
      if (mapboxMap) mapboxMap.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlTag, pointsByTypeGeoJSON, types, initializeMap]);

  const filterPoints = (name: string) => {
    if (!tags || !myMap) return;
    const updatedTags = { ...tags };
    const isCurrentlySelected = !updatedTags[name];
    Object.keys(tags).forEach((key) => {
      if (name === key) {
        myMap.setLayoutProperty(
          key,
          "visibility",
          isCurrentlySelected ? "none" : "visible"
        );
        updatedTags[key] = isCurrentlySelected;
      } else {
        myMap.setLayoutProperty(key, "visibility", "none");
        updatedTags[key] = true;
      }
    });
    setTags(updatedTags);

    if (typeof window === "undefined") return;
    if (isCurrentlySelected) {
      const url = new URL(window.location.href);
      url.searchParams.delete("tag");
      window.history.replaceState({}, "", url.toString());
      setAsideVisible(false);
    } else {
      const url = new URL(window.location.href);
      url.searchParams.set("tag", name);
      window.history.replaceState({}, "", url.toString());
      setCurrentPoint({
        title: (TAG_CONFIG as any)[name].title,
        description: (TAG_CONFIG as any)[name].description,
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
      {!tokenAvailable && (
        <div className="map-token-missing">
          <div className="map-token-missing__inner">
            <h3>Карта временно недоступна</h3>
            <p>
              Чтобы отобразить карту, добавьте публичный ключ Mapbox в
              переменную окружения <code>PUBLIC_MAPBOX_TOKEN</code> и
              пересоберите сайт.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default MapboxMap;
