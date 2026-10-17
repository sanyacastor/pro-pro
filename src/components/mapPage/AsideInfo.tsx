import React from "react";

import { AsideList } from "./AsideList";

import styles from "./AsideInfo.module.css";

type Props = {
  currentPoint: Record<string, any>;
  onClose: () => void;
  visible: boolean;
  pointsByTypeGeoJSON: any;
  setCurrentPoint: (p: any) => void;
  myMap?: any;
};

export default function AsideInfo({
  currentPoint,
  onClose,
  visible,
  pointsByTypeGeoJSON,
  setCurrentPoint,
  myMap,
}: Props) {
  // Render the desktop AsideList for both viewports (mobile sheet is a
  // progressive enhancement). This simplifies SSR and avoids runtime
  // dynamic-import gymnastics with react-modal-sheet.
  return (
    <AsideList
      visible={visible}
      currentPoint={currentPoint}
      pointsByTypeGeoJSON={pointsByTypeGeoJSON}
      setCurrentPoint={setCurrentPoint}
      myMap={myMap}
      onClose={onClose}
    />
  );
}
