import React from 'react';
import Sheet from 'react-modal-sheet';
import { useWindowSize } from 'usehooks-ts';

import { AsideList } from './AsideList';

import * as S from './styles';

export default function AsideInfo({
  currentPoint,
  onClose,
  visible,
  places,
  setCurrentPoint,
  myMap,
}) {
  const size = useWindowSize();
  const snapPoint = size?.height - 70;

  return size.width < 768 ? (
    <S.SheetWrapper isOpen={visible} onClose={onClose} snapPoints={[snapPoint]}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content disableDrag>
          <AsideList
            currentPoint={currentPoint}
            places={places}
            setCurrentPoint={setCurrentPoint}
            myMap={myMap}
            visible
          />
        </Sheet.Content>
      </Sheet.Container>
    </S.SheetWrapper>
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
