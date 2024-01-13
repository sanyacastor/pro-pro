import React from 'react';
import s from '../../styles/map/map.module.css';
import { colors, titles } from './consts';

export const Toolbar = ({ tags, types, filterPoints, isOpen }) => (
  <div className={`${s.mapToolBar} ${isOpen && s.mapToolBarOpen}`}>
    <div className={s.mapToolBarTagList}>
      {types.map((name) => (
        <span
          className={`${s.mapToolBarTag} ${tags && tags[name] ? '' : s.active}`}
          key={name}
          style={
            tags && tags[name]
              ? { borderColor: colors[name] }
              : { background: colors[name] }
          }
          onClick={() => filterPoints(name)}
        >
          {titles[name]}
        </span>
      ))}
    </div>
  </div>
);
