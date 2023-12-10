import React from 'react';

import {
  ArticleSubtitle,
  Paragraph,
  PostHero,
  SectionTitle,
} from '../../components/UI';
import {
  ArticleContainer,
  Container,
  Section,
} from '../../components/UI/Generic';
import { Header, Layout } from '../../components/Layout';

export default function GurTourPage() {
  return (
    <Layout>
      <PostHero cover="/article/chto-takoe-sovetsky-modernizm/hero.png" />
      <ArticleContainer>
        <Container>
          <ArticleSubtitle>
            Протвино в кармане — у города есть зин!
          </ArticleSubtitle>
          <Paragraph>
            Так звучал заголовок газеты «Протвино Сегодня» в августе 2022-го.
          </Paragraph>
          <Section>
            <SectionTitle>О протвинском зине</SectionTitle>
            <Paragraph>
              Зин, он&nbsp;же zine (сокращение от&nbsp;англ.
              Magazine)&nbsp;&mdash; это малотиражный журнал, любительское
              независимое издание о&nbsp;чем-либо, которое выпускается
              энтузиастами. Скорее это предмет искусства, чем периодическое
              издание. Ценность зина в&nbsp;его уникальности, дизайне
              и&nbsp;личном отношении к&nbsp;производству, ведь каждый экземпляр
              складывается и&nbsp;нумеруется вручную. Зин, который
              мы&nbsp;сделали, про Протвино&nbsp;&mdash; город, в&nbsp;котором
              мы&nbsp;родились и&nbsp;выросли, город, который сильно изменился
              за&nbsp;последние годы. У&nbsp;Протвино множество уникальных
              и&nbsp;самобытных аспектов: архитектурных, визуальных,
              исторических. Но&nbsp;с&nbsp;каждым годом они все меньше заметны,
              и&nbsp;мы&nbsp;все реже говорим о&nbsp;них. В&nbsp;нашем зине
              мы&nbsp;собрали основные факты про историю Протвино и&nbsp;его
              особенности. А&nbsp;ещё рассказали про места, которые пока еще
              можно посетить&nbsp;&mdash; подготовили маршрут для
              самостоятельной прогулки и&nbsp;взаимодействия с&nbsp;городом.
              Таким образом для тех, кто никогда не&nbsp;был в&nbsp;Протвино,
              эта маленькая книжечка может стать путеводителем, а&nbsp;жителям
              она напомнит о&nbsp;том, какая интересная история у&nbsp;нашего
              уютного городка.
            </Paragraph>
          </Section>
        </Container>
      </ArticleContainer>
    </Layout>
  );
}
