import React from "react";
import { TAG_CONFIG } from "./consts";
import { imageLoader } from "./helpers";

import "./AsideInfo.module.css";

type Props = {
  currentPoint: Record<string, any>;
  pointsByTypeGeoJSON: any;
  setCurrentPoint: (p: any) => void;
  myMap?: any;
  onClose?: () => void;
  visible: boolean;
};

export const AsideList = ({
  currentPoint,
  pointsByTypeGeoJSON,
  setCurrentPoint,
  myMap,
  onClose,
  visible,
}: Props) => {
  const { title, description, image, type } = currentPoint || {};
  const featureCollection = pointsByTypeGeoJSON[type] || { features: [] };
  const list = featureCollection.features;

  const asideClass = [
    "aside-info",
    `aside-info--${type}`,
    visible ? "" : "aside-info--hidden",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <aside className={asideClass}>
      <div className="aside-info__header">
        <button
          className="aside-info__close-button"
          onClick={onClose}
          aria-label="close"
        ></button>
        <div className={`aside-info__image aside-info__image--${type}`}>
          {(() => {
            const src = image || (TAG_CONFIG as any)[type]?.image;
            if (!src) return null;
            const finalSrc = imageLoader({ src });
            return (
              <img
                src={finalSrc}
                key={finalSrc}
                alt={title || ""}
                width={380}
                height={285}
              />
            );
          })()}
        </div>
        <h3>{title}</h3>
      </div>
      <div className="aside-info__description">
        <p>{description}</p>
        <ul className="aside-info__list">
          {list.map((el: any, ndx: number) => (
            <li
              className={`aside-info__list-item aside-info__list-item--${type}`}
              key={ndx}
              onClick={() => {
                setCurrentPoint({
                  title: el.properties.title,
                  description: el.properties.description,
                  image: el.properties.image,
                  type: el.properties.type,
                });
                if (myMap) {
                  myMap.flyTo({
                    center: [...el.geometry.coordinates],
                    zoom: 16,
                  });
                }
              }}
            >
              {el.properties.title}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
