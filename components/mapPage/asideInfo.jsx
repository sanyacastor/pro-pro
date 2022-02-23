import React, { useState } from "react";
import s from "../../styles/map/asideInfo.module.css";
import Image from "next/image";

export default function AsideInfo({
  title,
  description,
  image,
  onClose,
  visible
}) {
  return (
    <aside
      className={
        visible ? `${s.asideInfo}` : `${s.asideInfo} ${s.asideInfo_hidden}`
      }
    >
      <article className={s.asideInfo__inner}>
        <div className={s.asideInfo__header}>
          <h3>{title}</h3>
        </div>
        <div className={s.asideInfo__image}>
          <Image
            src={`/images/map/${image}`}
            alt={title}
            width={350}
            height={250}
            quality={50}
          />
        </div>
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
