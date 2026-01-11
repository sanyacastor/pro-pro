import React from 'react';
import Image from 'next/image';

import { imageLoader, filterPlacesByType } from './helpers';
import { images } from './consts';

import s from '../../styles/map/asideInfo.module.css';

export const AsideList = ({
  currentPoint,
  places,
  setCurrentPoint,
  myMap,
  onClose,
  visible,
}) => {
  const { title, description, image, type } = currentPoint;
  const list = filterPlacesByType(places, type);
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
            src={image || images[type]}
            key={image || images[type]}
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
