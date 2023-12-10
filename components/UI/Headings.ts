import styled from 'styled-components';

export const Title = styled.h2`
  font-family: 'BASE&BLOOM';
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 80%;
  text-transform: uppercase;
  margin-bottom: 0;
`;

export const Subtitle = styled.p`
  font-family: 'Piazzolla';
  font-style: italic;
  font-weight: 400;
  font-size: 50px;
  line-height: 48px;
  margin-top: 8px;
`;

export const SectionTitle = styled.h3`
  font-family: 'Piazzolla';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 48px;
  line-height: 100%;
`;

export const Bullet = styled.span<{ mt?: number }>`
  display: block;
  text-transform: uppercase;
  font-family: 'Lack';
  font-size: 24px;
  line-height: 100%;
  margin-top: ${(props) => props.mt}px;
  margin-bottom: 8px;
`;
