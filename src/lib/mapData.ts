import {
  POINTS_BY_TYPE,
  TAG_CONFIG,
} from "../components/mapPage/consts";

export type MapFeature = {
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

export type FeatureCollection = {
  type: "FeatureCollection";
  features: MapFeature[];
};

export function buildGeoJSON(): Record<string, FeatureCollection> {
  const out: Record<string, FeatureCollection> = {};
  Object.keys(POINTS_BY_TYPE).forEach((tagKey) => {
    const points = (POINTS_BY_TYPE as any)[tagKey] as any[];
    out[tagKey] = {
      type: "FeatureCollection",
      features: points.map((p) => ({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [...p.coordinates].reverse() as [number, number],
        },
        properties: {
          exist: p.exist !== undefined ? p.exist : true,
          type: p.type,
          title: p.title,
          image: p?.image || null,
          description: p.description || "",
        },
      })),
    };
  });
  return out;
}

export function ogForTag(tag: string | null) {
  if (tag && (TAG_CONFIG as any)[tag]) {
    const cfg = (TAG_CONFIG as any)[tag];
    return {
      title: `Про про | Карта - ${cfg.title}`,
      description: cfg.shortDescription || "Карта интересных мест в окресностях Протвино",
      ogImage:
        "https://res.cloudinary.com/propromedia/image/upload/c_scale,w_1000/v1673030685/duotone_4_hndnpn.png",
      ogUrl: `https://pro-pro.ru/map?tag=${tag}`,
    };
  }
  return {
    title: "Про про | Карта",
    description: "Карта интересных мест в окресностях Протвино",
    ogImage:
      "https://res.cloudinary.com/propromedia/image/upload/c_scale,w_1000/v1673030685/duotone_4_hndnpn.png",
    ogUrl: "https://pro-pro.ru/map",
  };
}
