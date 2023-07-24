import React from 'react';
import { StatContainer, StatContent, StatTitle } from './styles';

export const Stat = ({ title, content }) => {
  return (
    <StatContainer>
      <StatTitle>{title}</StatTitle>
      <StatContent>{content}</StatContent>
    </StatContainer>
  );
};
