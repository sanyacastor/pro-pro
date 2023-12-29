import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import {
  ArticleContainer,
  Container,
  Figure,
} from '../../../components/UI/Generic';
import { ArticleSubtitle, ArticleTitle } from '../../../components/UI';
import { Paragraph, SectionTitle } from '../../../components/Typography';
import { Layout } from '../../../components/Layout';

import TreeIcon from '../../../public/images/icons/zin-tree.svg.svg';
import * as S from './styles';

export default function GurTourPage() {
  return (
    <>
      <Head>
        <title>Про про | Зин-путеводитель</title>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="propro.media" />

        <meta property="og:title" content="Про про | Зин-путеводитель" />
        <meta
          property="og:description"
          content="Как мы напечатали и презентовали зин про Протвино"
        />

        <meta property="og:url" content="https://propro.media/article/zine" />

        <meta property="og:image:url" content="" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
      </Head>
      <Layout>
        <S.PostHero>
          <S.HeroInner>
            <Image src={TreeIcon} width="184" height="232" alt="" />
            <ArticleTitle>
              ЗИн-путеводитель
              <br /> по протвино
            </ArticleTitle>
            <Image src={TreeIcon} width="184" height="232" alt="" />
          </S.HeroInner>
        </S.PostHero>
        <ArticleContainer>
          <Container>
            <ArticleSubtitle>
              Протвино в кармане — у города есть зин!
            </ArticleSubtitle>
            <Paragraph>
              Так звучал заголовок газеты «Протвино Сегодня» в августе 2022-го.
            </Paragraph>
            <S.Images>
              <Figure>
                <Image
                  src="/article/zine/ZIN1.jpeg"
                  width="248"
                  height="330"
                  alt=""
                />
              </Figure>
              <Figure>
                <Image
                  src="/article/zine/ZIN2.png"
                  width="249"
                  height="330"
                  alt=""
                />
              </Figure>
              <Figure>
                <Image
                  src="/article/zine/ZIN3.png"
                  width="244"
                  height="330"
                  alt=""
                />
              </Figure>
            </S.Images>
            <S.Section>
              <SectionTitle mb>О протвинском зине</SectionTitle>
              <Paragraph>
                Зин, он&nbsp;же zine (сокращение от&nbsp;англ.
                Magazine)&nbsp;&mdash; это малотиражный журнал, любительское
                независимое издание о&nbsp;чем-либо, которое выпускается
                энтузиастами. Скорее это предмет искусства, чем периодическое
                издание. Ценность зина в&nbsp;его уникальности, дизайне
                и&nbsp;личном отношении к&nbsp;производству, ведь каждый
                экземпляр складывается и&nbsp;нумеруется вручную.
              </Paragraph>
              <Paragraph>
                Зин, который мы&nbsp;сделали, про Протвино&nbsp;&mdash; город,
                в&nbsp;котором мы&nbsp;родились и&nbsp;выросли, город, который
                сильно изменился за&nbsp;последние годы. У&nbsp;Протвино
                множество уникальных и&nbsp;самобытных аспектов: архитектурных,
                визуальных, исторических. Но&nbsp;с&nbsp;каждым годом они все
                меньше заметны, и&nbsp;мы&nbsp;все реже говорим о&nbsp;них.
              </Paragraph>
              <Paragraph>
                В&nbsp;нашем зине мы&nbsp;собрали основные факты про историю
                Протвино и&nbsp;его особенности. А&nbsp;ещё рассказали про
                места, которые пока еще можно посетить&nbsp;&mdash; подготовили
                маршрут для самостоятельной прогулки и&nbsp;взаимодействия
                с&nbsp;городом. Таким образом для тех, кто никогда не&nbsp;был
                в&nbsp;Протвино, эта маленькая книжечка может стать
                путеводителем, а&nbsp;жителям она напомнит о&nbsp;том, какая
                интересная история у&nbsp;нашего уютного городка.
              </Paragraph>
              <Figure>
                <Image
                  src="/article/zine/ZIN4.jpeg"
                  width="760"
                  height="569"
                  alt=""
                />
              </Figure>
            </S.Section>
            <SectionTitle mb>Презентация</SectionTitle>
            <Paragraph>
              Официальная презентация первого тиража зина прошла 6&nbsp;августа
              2022 года в&nbsp;Кислинском лесу за&nbsp;Мельницей. Это произошло
              на&nbsp;Кинолесе&nbsp;&mdash; уютном фестивале наших друзей.
              На&nbsp;фестивале кроме презентации зина, была протвинская музыка,
              кино, творческая лаборатория и&nbsp;диджей-воркшоп.
            </Paragraph>
            <Paragraph>
              Презентация прошла на&nbsp;все 100: стояла жара 30&nbsp;градусов,
              а&nbsp;поляна расположена там, куда доберутся только самые
              отчаянные. Мы&nbsp;угощали гостей чаем из&nbsp;самовара, эклерами
              и&nbsp;пирогом из&nbsp;Орбиты&nbsp;&mdash; приветы старейшему
              и&nbsp;сохранившемуся до&nbsp;наших дней протвинскому общепиту.
            </Paragraph>
            <S.Images>
              <Figure>
                <Image
                  src="/article/zine/ZIN5.jpeg"
                  width="368"
                  height="277"
                  alt=""
                />
              </Figure>
              <Figure>
                <Image
                  src="/article/zine/ZIN7.png"
                  width="376"
                  height="277"
                  alt=""
                />
              </Figure>
            </S.Images>

            <S.Section>
              <SectionTitle mb>Тиражи</SectionTitle>
              <Paragraph>
                Первый тираж мы&nbsp;сделали небольшим. Зины уже в&nbsp;первую
                неделю разошлись по&nbsp;домам в&nbsp;Протвино, Москве, Пущино,
                Питере и&nbsp;даже в&nbsp;Латвии. В&nbsp;декабре
                мы&nbsp;выпустили тираж в&nbsp;новом исполнении.
                Мы&nbsp;не&nbsp;меняли кардинально наполнение, еще раз проверили
                все факты, но&nbsp;добавили новогоднего настроения
                и&nbsp;розового цвета! Техпроцесс так&nbsp;же остался прежним,
                все по&nbsp;канонам самиздата: печатали на&nbsp;ризографе,
                резали и&nbsp;складывали руками.
              </Paragraph>
              <Paragraph>
                По&nbsp;итогу второй зин получился ярким, можно сказать,
                новогодним. Мы&nbsp;продавали его на&nbsp;предновогодней
                барахолке в&nbsp;Протвино, а&nbsp;часть отложили и&nbsp;теперь
                зин про Протвино можно купить в&nbsp;Москве в&nbsp;Книжном
                в&nbsp;Клубе.
              </Paragraph>
              <Paragraph>
                Зины уже есть у&nbsp;наукоградов Пущино, Троицка
                и&nbsp;Черноголовки, теперь есть и&nbsp;у&nbsp;Протвино.
              </Paragraph>
            </S.Section>
            <Figure>
              <Image
                src="/article/zine/ZIN8.png"
                width="760"
                height="510"
                alt=""
              />
            </Figure>
            <Figure>
              <Image
                src="/article/zine/ZIN9.png"
                width="760"
                height="542"
                alt=""
              />
            </Figure>
          </Container>
        </ArticleContainer>
      </Layout>
    </>
  );
}
