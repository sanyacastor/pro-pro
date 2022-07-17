import React from "react";
import Link from "next/link";

import s from "../styles/announcements.module.scss";

function Announcement() {
  return (
    <div className={s.container}>
      <article className={s.announcementSection}>
        {/* <h2 className={s.announcementHeader}>У нас вышла статья:</h2> */}
        <Link href="/post/polyclinic">
          <a className={s.announcementContainer}>
            <h3 className={s.announcementTitle}>
              Поликлиника как архитектурный памятник
            </h3>
            <div className={s.announcementContent}></div>
            <small className={s.announcementAuthor}>
               Автор: Анна Медведкова
            </small>
            <ul className={s.announcementTags}>
              <li>история</li>
              <li>архитектура</li>
            </ul>
          </a>
        </Link>
      </article>
    </div>
  );
}

export default Announcement;
