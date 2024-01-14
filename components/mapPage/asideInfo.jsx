import React from 'react';
import Sheet from 'react-modal-sheet';
import { useWindowSize } from 'usehooks-ts';

import { AsideList } from './AsideList';

export default function AsideInfo({
  currentPoint,
  onClose,
  visible,
  places,
  setCurrentPoint,
  myMap,
}) {
  const size = useWindowSize();
  const snapPoint = size?.height - 65;

  return size.width < 768 ? (
    <Sheet isOpen={visible} onClose={onClose} snapPoints={[snapPoint]}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <AsideList
            currentPoint={currentPoint}
            places={places}
            setCurrentPoint={setCurrentPoint}
            myMap={myMap}
            visible
          />
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  ) : (
    <AsideList
      visible={visible}
      currentPoint={currentPoint}
      places={places}
      setCurrentPoint={setCurrentPoint}
      myMap={myMap}
      onClose={onClose}
    />
  );
}
