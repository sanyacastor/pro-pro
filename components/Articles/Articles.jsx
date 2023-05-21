import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import s from './articles.module.scss';

export const Articles = () => {
  return (
    <div className={s.articlesSection}>
      {/* <div className={s.articlesContainer}>
        <div className={s.articleColumn}>
          <a className={s.articleThumbnail}>
            <div className={s.articleThumbnail__image}>
              <Image alt="image caption" />
            </div>
            <h4 className={s.articleThumbnail__title}>
              ПРО СОВЕТСКИЙ МОДЕРНИЗМ
            </h4>
            <p className={s.articleThumbnail__author}>анна медведкова</p>
          </a>
        </div>
        <div className={s.articleColumn}>
          <a className={s.articleThumbnail}>
            <div className={s.articleThumbnail__image}>
              <Image alt="image caption" />
            </div>
            <h4 className={s.articleThumbnail__title}>ФИЗИКА В ПРОТВИНО</h4>
            <p className={s.articleThumbnail__author}>анна медведкова</p>
          </a>
        </div>
      </div> */}
    </div>
  );
};
