import React from 'react';
import { HERO } from '../../config';

import { Container, Section, Title, Subtitle, Header, Author } from './styles';
import Link from 'next/link';

const bg = '/article/gleb-garage/thumbnail.jpg';
const bgMobile = '/article/gleb-garage/thumbnail-mobile.jpg';

export const Announcement = () => {
  const { link, image, title, author } = HERO;

  return (
    <Link href={link}>
      <Section bgImage={bg} bgImageMobile={bgMobile}>
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
