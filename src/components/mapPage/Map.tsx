import React from "react";
import "./Map.module.css";

type Props = { mapNode: React.RefObject<HTMLDivElement | null> };

export const Map = ({ mapNode }: Props) => (
  <section className="map-wrapper">
    <div ref={mapNode} className="map-container" />
  </section>
);
