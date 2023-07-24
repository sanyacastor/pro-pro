import React from 'react';
import * as S from './styles';

export const Feature = ({ feature }) => (
  <S.FeatureTitle>{feature}</S.FeatureTitle>
);
export const Icon = ({ isExist }) =>
  isExist ? <S.AlowIcon /> : <S.CrossIcon />;

export const Features = ({ features }) => {
  return (
    <S.Features>
      {Object.keys(features)?.map((key) => (
        <S.FeatureWrapper key={key}>
          <Icon isExist={features[key]} />
          <Feature feature={key} />
        </S.FeatureWrapper>
      ))}
    </S.Features>
  );
};
