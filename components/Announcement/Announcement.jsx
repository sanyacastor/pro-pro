import React from 'react';
import { HERO } from '../../config';

import { Container, Section, Title, Subtitle, Header, Author } from './styles';
import Link from 'next/link';

export const Announcement = () => {
  const { link, image, title, author } = HERO;

  return (
    <Link href={link}>
      <Section $bgImage={image}>
        <Container>
          <Header>
            <Title dangerouslySetInnerHTML={{ __html: title }} />
            <Author>Автор: {author}</Author>
          </Header>
        </Container>
      </Section>
    </Link>
  );
};
