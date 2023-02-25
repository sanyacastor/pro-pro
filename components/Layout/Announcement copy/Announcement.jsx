import React from 'react';
import Link from 'next/link';

import s from './announcements.module.scss';

export const Announcement = ({ link, image, title, subtitle }) => {
  return (
    <div
      className={s.announcementSection}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={s.announcementContainer}>
        <Link href={link} className={s.announcementHeader}>
          <h3 className={s.announcementTitle}>{title}</h3>
          <div className={s.announcementSubtitle}>{subtitle}</div>
        </Link>
      </div>
    </div>
  );
};
