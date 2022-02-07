import React, { useState } from "react";
import s from "../../styles/map/asideInfo.module.css";

export default function AsideInfo({
  title,
  description,
  image,
  onClose,
  visible,
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
