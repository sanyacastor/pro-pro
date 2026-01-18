import React from 'react';
import s from '../../styles/map/map.module.css';
import { TAG_CONFIG } from './consts';

export const Toolbar = ({ tags, types, filterPoints, isOpen }) => (
  <div className={`${s.mapToolBar} ${isOpen && s.mapToolBarOpen}`}>
    <div className={s.mapToolBarTagList}>
      {types.map((name) => (
        <span
          className={`${s.mapToolBarTag} ${tags && tags[name] ? '' : s.active}`}
          key={name}
          style={
            tags && tags[name]
              ? { borderColor: TAG_CONFIG[name].color }
              : { background: TAG_CONFIG[name].color }
          }
          onClick={() => filterPoints(name)}
        >
          {TAG_CONFIG[name].title}
        </span>
      ))}
    </div>
  </div>
);
