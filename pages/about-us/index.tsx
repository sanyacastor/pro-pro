import React from 'react';

import { Paragraph } from '../../components/UI';
import { ArticleContainer, Container } from '../../components/UI/Generic';
import { Layout } from '../../components/Layout';

import * as S from './styles';
import { FeedbackBanner, SocialBanner } from '../../components/Banners';
import Image from 'next/image';

export default function GurTourPage() {
  return (
    <Layout>
      <S.Hero>
        <S.HeroTitle>ПРОПРО</S.HeroTitle>
        <S.HeroSubtitle>
          ЛОКАлЬнОЕ МЕдИА
          <br /> О ПРОТВиНО
        </S.HeroSubtitle>
      </S.Hero>
      <ArticleContainer>
        <S.Container>
          <S.SectionTitle>кто мы</S.SectionTitle>
          <Paragraph>
            Всех нас, создателей этого локального медиа, объединяет одно: мы
            выросли в&nbsp;Протвино. Наши родители приехали сюда сразу после
            института в&nbsp;новую жизнь.
          </Paragraph>
          <Paragraph>
            Здесь все были так или иначе связаны с&nbsp;физикой. Здесь дружили
            семьями. Детьми мы&nbsp;шагали по&nbsp;тропам среди сосен
            в&nbsp;школу и&nbsp;музыкалку. Все окружающее казалось естественным.
            Невозможно было представить, что где-то живут по-другому.
          </Paragraph>
          <Paragraph>
            Что где-то нет деревьев и&nbsp;сосен прямо в&nbsp;твоем дворе. Что
            нельзя пройти весь город пешком и&nbsp;дойти в&nbsp;любую точку
            за&nbsp;15&nbsp;минут. Что нет пентагона, муравейников, пил
            и&nbsp;других замысловатых домов.
          </Paragraph>

          <S.ImagesContainer>
            <S.DashaImage>
              <Image
                src="/images/about-us/d.png"
                width={184}
                height={184}
                alt=""
              />
            </S.DashaImage>
            <S.AnnImage>
              <Image
                src="/images/about-us/andn.png"
                width={184}
                height={184}
                alt=""
              />
            </S.AnnImage>
            <S.SanyaImage>
              <Image
                src="/images/about-us/s.png"
                width={184}
                height={184}
                alt=""
              />
            </S.SanyaImage>
            <S.NadyaImage>
              <Image
                src="/images/about-us/n.png"
                width={184}
                height={184}
                alt=""
              />
            </S.NadyaImage>
          </S.ImagesContainer>

          <S.SectionTitle>что вы найдете на сайте</S.SectionTitle>
          <Paragraph>
            Наш амбициозный план – собрать и визуализировать информацию о
            Протвино, а также дать возможность другим людям узнать про него
            больше и поделиться своими воспоминания и впечатлениями. Тут вы не
            найдете энциклопедию о городе, но найдете опыт как прошлого, так и
            настоящего.
          </Paragraph>
        </S.Container>
        <S.Banners>
          <FeedbackBanner />
          <SocialBanner />
        </S.Banners>
      </ArticleContainer>
    </Layout>
  );
}
