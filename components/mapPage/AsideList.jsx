import React from 'react';
import Image from 'next/image';

import { imageLoader } from './helpers';
import { TAG_CONFIG } from './consts';

import s from '../../styles/map/asideInfo.module.css';

export const AsideList = ({
  currentPoint,
  pointsByTypeGeoJSON,
  setCurrentPoint,
  myMap,
  onClose,
  visible,
}) => {
  const { title, description, image, type } = currentPoint;
  const featureCollection = pointsByTypeGeoJSON[type] || { features: [] };
  const list = featureCollection.features;
  return (
    <aside
      className={
        visible
          ? `${s.asideInfo} ${s[`asideInfo--${type}`]}`
          : `${s.asideInfo} ${s[`asideInfo--${type}`]} ${s.asideInfo_hidden}`
      }
    >
      <div className={`${s.asideInfo__header}`}>
        <button className={s.asideInfo__closeButton} onClick={onClose}></button>
        <div
          className={[
            `${s.asideInfo__image} ${s[`asideInfo__image--${type}`]}}`,
          ]}
        >
          <Image
            loader={imageLoader}
            src={image || TAG_CONFIG[type]?.image}
            key={image || TAG_CONFIG[type]?.image}
            alt={title}
            width={380}
            height={285}
            objectFit="cover"
            priority
          />
        </div>
        <h3>{title}</h3>
      </div>
      <div className={s.asideInfo__description}>
        <p>{description}</p>
        <ul className={s.asideInfo__list}>
          {list.map((el, ndx) => (
            <li
              className={`${s.asideInfo__listItem} ${
                s[`asideInfo__listItem--${type}`]
              }`}
              key={ndx}
              onClick={() => {
                setCurrentPoint({
                  title: el.properties.title,
                  description: el.properties.description,
                  image: el.properties.image,
                  type: el.properties.type,
                });
                myMap.flyTo({
                  center: [...el.geometry.coordinates],
                  zoom: 16,
                });
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
