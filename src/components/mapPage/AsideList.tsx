import React from "react";
import { TAG_CONFIG } from "./consts";
import { imageLoader } from "./helpers";
import styles from "./AsideInfo.module.css";

type Props = {
  currentPoint: Record<string, any>;
  pointsByTypeGeoJSON: any;
  setCurrentPoint: (p: any) => void;
  myMap?: any;
  onClose?: () => void;
  visible: boolean;
};

function cn(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

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

  const asideClass = cn(
    styles.aside,
    (styles as any)[`aside${type ? `--${type}` : ""}`],
    !visible && styles.hidden
  );

  const imgClass = cn(
    styles["image"],
    (styles as any)[`image${type ? `--${type}` : ""}`]
  );

  const itemClass = cn(
    styles["listItem"],
    (styles as any)[`listItem${type ? `--${type}` : ""}`]
  );

  return (
    <aside className={asideClass}>
      <div className={styles.header}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="close"
        ></button>
        <div className={imgClass}>
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
      <div className={styles.description}>
        <p>{description}</p>
        <ul className={styles.list}>
          {list.map((el: any, ndx: number) => (
            <li
              className={itemClass}
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
