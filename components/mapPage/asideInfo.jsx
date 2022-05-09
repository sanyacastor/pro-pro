import React, { useState } from "react";
import s from "../../styles/map/asideInfo.module.css";
import Image from "next/image";

export default function AsideInfo({
  title,
  description,
  image,
  onClose,
  visible,
  bgColor,
  bgImage,
}) {
  return (
    <aside
      className={
        visible ? `${s.asideInfo}` : `${s.asideInfo} ${s.asideInfo_hidden}`
      }
    >
      <article className={s.asideInfo__inner}>
        <div
          className={s.asideInfo__header}
          style={{
            background: `${bgColor}`,
            //linearGradient(360deg, ${bgColor} 0%, rgba(255, 122, 122, 0) 75%),url(${bgImage})
          }}
        >
          <h3>{title}</h3>
        </div>
        {image && (
          <div className={s.asideInfo__image}>
            <Image
              src={`/images/map/${image}`}
              key={image}
              alt={title}
              width={550}
              height={420}
              quality={100}
              objectFit="cover"
              priority
            />
          </div>
        )}
        <div className={s.asideInfo__description}>
          <p>{description}</p>
        </div>
      </article>
      <button
        className={s.asideInfo__closeButton}
        onClick={() => onClose()}
      ></button>
    </aside>
  );
}
