import React from "react";
import styles from "./Map.module.css";

type Props = { mapNode: React.RefObject<HTMLDivElement | null> };

export const Map = ({ mapNode }: Props) => (
  <section className={styles["map-wrapper"]}>
    <div ref={mapNode} className={styles["map-container"]} />
  </section>
);
