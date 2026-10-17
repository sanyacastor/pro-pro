import React from "react";
import { useWindowSize } from "usehooks-ts";
import Sheet from "react-modal-sheet";

import { AsideList } from "./AsideList";

import "./AsideInfo.module.css";

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
  const size = useWindowSize();
  const snapPoint = size?.height ? size.height - 70 : 600;

  if (!size) return null;

  if (size.width < 768) {
    return (
      <Sheet isOpen={visible} onClose={onClose} snapPoints={[snapPoint]}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content disableDrag>
            <AsideList
              currentPoint={currentPoint}
              pointsByTypeGeoJSON={pointsByTypeGeoJSON}
              setCurrentPoint={setCurrentPoint}
              myMap={myMap}
              visible
            />
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    );
  }

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
