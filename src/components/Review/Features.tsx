import React from "react";
import styled from "styled-components";

const AlowIcon = styled.span`
  background-image: url("/images/icons/allow_icon.svg");
  width: 18px;
  height: 18px;
  display: block;
`;
const CrossIcon = styled.span`
  background-image: url("/images/icons/cross_icon.svg");
  width: 18px;
  height: 18px;
  display: block;
`;
const FeatureTitle = styled.span`
  font-family: "Lack";
  font-style: normal;
  font-weight: 400;
  margin-left: 9px;
  font-size: 12px;
  line-height: 30px;
`;
const FeatureWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 185px;
`;
const FeaturesBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 32px;
  margin-bottom: 64px;
  column-gap: 100px;
`;

const Icon = ({ isExist }: { isExist: boolean }) =>
  isExist ? <AlowIcon /> : <CrossIcon />;

export const Features = ({ features }: { features: Record<string, boolean> }) => (
  <FeaturesBox>
    {Object.keys(features ?? {})?.map((key) => (
      <FeatureWrapper key={key}>
        <Icon isExist={!!features[key]} />
        <FeatureTitle>{key}</FeatureTitle>
      </FeatureWrapper>
    ))}
  </FeaturesBox>
);
