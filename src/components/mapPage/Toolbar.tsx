import React from "react";
import { TAG_CONFIG } from "./consts";
import "./Toolbar.module.css";

type Props = {
  tags?: Record<string, boolean>;
  types: string[];
  filterPoints: (name: string) => void;
  isOpen: boolean;
};

export const Toolbar = ({ tags, types, filterPoints, isOpen }: Props) => {
  return (
    <div className={`map-tool-bar ${isOpen ? "map-tool-bar--open" : ""}`}>
      <div className="map-tool-bar__list">
        {types.map((name) => (
          <span
            key={name}
            className={`map-tool-bar__tag ${tags && tags[name] ? "" : "active"}`}
            style={
              tags && tags[name]
                ? { borderColor: (TAG_CONFIG as any)[name].color }
                : { background: (TAG_CONFIG as any)[name].color }
            }
            onClick={() => filterPoints(name)}
          >
            {(TAG_CONFIG as any)[name].title}
          </span>
        ))}
      </div>
    </div>
  );
};
