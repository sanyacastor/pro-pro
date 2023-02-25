import React from 'react';
import s from '../../styles/post.module.scss';

export const Title = ({ children }) => (
  <h1 className={s.post__title}>{children}</h1>
);
