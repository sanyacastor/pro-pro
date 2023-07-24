import styled from 'styled-components';

export const AlowIcon = styled.span`
  background-image: url('/images/icons/allow_icon.svg');
  width: 18px;
  height: 18px;
  display: block;
`;

export const CrossIcon = styled.span`
  background-image: url('/images/icons/cross_icon.svg');
  width: 18px;
  height: 18px;
  display: block;
`;

export const FeatureTitle = styled.span`
  font-family: 'Lack';
  font-style: normal;
  font-weight: 400;
  margin-left: 9px;
  font-size: 12px;
  line-height: 30px;
`;

export const FeatureWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 185px;
`;

export const Features = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 32px;
  margin-bottom: 64px;
  column-gap: 100px;
`;
