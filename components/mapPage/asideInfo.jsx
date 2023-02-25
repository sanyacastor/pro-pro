import React, { useState } from 'react';
import s from '../../styles/map/asideInfo.module.scss';
import Image from 'next/image';
import { images } from './consts';

export default function AsideInfo({
  currentPoint,
  onClose,
  visible,
  places,
  setCurrentPoint,
  myMap,
}) {
  const { title, description, image, type } = currentPoint;

  const list = places.features.filter(
    (place) => place.properties.type === type
  );

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
          className={`${s.asideInfo__image} ]
          }`}
        >
          <Image
            src={image || images[type]}
            key={image + images[type]}
            alt={title}
            width={380}
            height={285}
            quality={100}
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
                myMap.flyTo({ center: [...el.geometry.coordinates], zoom: 16 });
              }}
            >
              {el.properties.title}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
