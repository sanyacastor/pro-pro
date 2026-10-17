import React from "react";
import { TAG_CONFIG } from "./consts";
import styles from "./Toolbar.module.css";

type Props = {
  tags?: Record<string, boolean>;
  types: string[];
  filterPoints: (name: string) => void;
  isOpen: boolean;
};

function cn(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export const Toolbar = ({ tags, types, filterPoints, isOpen }: Props) => {
  return (
    <div
      className={cn(styles.bar, isOpen && styles.barOpen)}
    >
      <div className={styles.list}>
        {types.map((name) => (
          <span
            key={name}
            className={cn(
              styles.tag,
              !(tags && tags[name]) && styles.active
            )}
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
