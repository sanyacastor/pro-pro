import React from 'react';
import { HERO } from '../../config';

import { Container, Section, Title, Subtitle, Header } from './styles';

export const Announcement = () => {
  const { link, image, title, subtitle } = HERO;

  return (
    <Section $bgImage={image}>
      <Container>
        <Header href={link}>
          <Title dangerouslySetInnerHTML={{ __html: title }} />
          <Subtitle>{subtitle}</Subtitle>
        </Header>
      </Container>
    </Section>
  );
};
