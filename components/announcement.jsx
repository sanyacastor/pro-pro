import React from "react";
import Link from "next/link";

import s from "../styles/announcements.module.css";

function Announcement() {
  return (
    <article className={s.announcementSection}>
      <h2 className={s.announcementHeader}>У нас вышла статья:</h2>

      <Link href="/post/polyclinic">
        <a>
          <div className={s.announcementContent}></div>
          <p className={s.announcementTitle}>
            Поликлиника как архитектурный памятник
          </p>
          <small>Анна Медведкова</small>
        </a>
      </Link>
    </article>
  );
}

export default Announcement;
