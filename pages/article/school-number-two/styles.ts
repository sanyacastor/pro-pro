import styled from 'styled-components';

export const FullWidthImage = styled.div`
  width: 100%;
  max-width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImagesRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
`;

export const ImagesGridOfFour = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 4px;
`;

export const VideoContainer = styled.video`
  width: 100%;
`;

export const Materials = styled.div`
  font-size: 14px;
  li {
    font-style: italic;
  }
`;

export default function () {}
