import styled from 'styled-components';

export const StatContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
`;

export const StatTitle = styled.span`
  font-family: 'Piazzolla';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  border-bottom: 1px solid #000000;
  text-transform: uppercase;
`;

export const StatContent = styled.span`
  font-family: 'Lack';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 15px;
  margin-top: 8px;
  line-height: 20px;
`;
