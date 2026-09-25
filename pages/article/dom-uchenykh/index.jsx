'use client';

import React from 'react';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';

import {
  ArticleSubtitle,
  ArticleTitle,
  PostAuthor,
  PostHero,
} from '../../../components/UI/Article';

import { ArticleHeadMeta } from '../../../components';
import { Slider } from '../../../components/UI';

import {
  Container,
  ArticleContainer,
  ImageContainer,
  Figcaption,
  Section,
} from '../../../components/UI/Generic';

import { Paragraph } from '../../../components/Typography';
import { Layout } from '../../../components/Layout';
import { COVERS } from '../../../config';

import {
  FullWidthImage,
  ImagesGridOfFour,
  Quote,
  Thanks,
  SliderBlock,
} from './styles';
import { Tooltip } from '../../../components/UI/Tooltip';

const IMAGES = '/article/dom-uchenykh';

const Gallery = ({ images, caption }) => (
  <SliderBlock>
    <Slider>
      {images.map(({ src, alt, width, height }) => (
        <SwiperSlide key={src}>
          <figure>
            <Image
              quality={100}
              src={`${IMAGES}/${src}`}
              width={width}
              height={height}
              alt={alt}
            />
          </figure>
        </SwiperSlide>
      ))}
    </Slider>
    {caption && <Figcaption>{caption}</Figcaption>}
  </SliderBlock>
);

const slide = (src, alt, width = 760, height = 507) => ({
  src,
  alt,
  width,
  height,
});

const HALL = [
  slide('hall.webp', 'Холл Дома учёных'),
  slide('svet-1.webp', 'Светильники в холле Дома учёных'),
  slide('svet-2.webp', 'Светильники в холле Дома учёных'),
  slide('svet-3.webp', 'Светильники в холле Дома учёных'),
];

const BANQUET = [
  slide('banquet-2.webp', 'Банкетный зал Дома учёных'),
  slide('banquet-3.webp', 'Бар в банкетном зале Дома учёных'),
  slide('banquet-4.webp', 'Банкетный зал Дома учёных'),
];

const FIREPLACE = [
  slide('zal-1.webp', 'Каминный зал Дома учёных'),
  slide('zal-2.webp', 'Каминный зал Дома учёных'),
  slide('zal-3.webp', 'Каминный зал Дома учёных'),
];

const DETAILS = [
  slide('details.webp', 'Детали интерьера Дома учёных'),
  slide('details-1.webp', 'Детали интерьера Дома учёных'),
  slide('details-2.webp', 'Детали интерьера Дома учёных'),
  slide('details-3.webp', 'Детали интерьера Дома учёных'),
  slide('details-4.webp', 'Детали интерьера Дома учёных'),
  slide('details-5.webp', 'Детали интерьера Дома учёных'),
];

const ALBUM = [
  slide('album.webp', 'Альбом с автографами гостей Дома учёных'),
  ...Array.from({ length: 10 }, (_, i) =>
    slide(`album-${i + 1}.webp`, 'Страница альбома гостей Дома учёных')
  ),
];

const STOOLS = [
  slide('bar-stools.webp', 'Барные стулья в Доме учёных'),
  slide('stoolya-1.webp', 'Барные стулья в Доме учёных'),
];

const PAPER = [
  slide('clubs.webp', 'Памятные записи гостей Дома учёных', 760, 570),
  ...Array.from({ length: 7 }, (_, i) =>
    slide(`paper-${i + 1}.webp`, 'Памятные записи гостей Дома учёных', 760, 570)
  ),
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Экскурсия в Дом ученых',
  image: `https://propro.media${IMAGES}/thumbnail.webp`,
  datePublished: '2026-09-22',
  dateModified: '2026-09-22',
  author: {
    '@type': 'Organization',
    name: 'Про про',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Про про',
    url: 'https://propro.media',
    logo: {
      '@type': 'ImageObject',
      url: 'https://propro.media/icon.svg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://propro.media/article/dom-uchenykh',
  },
};

export default function Article() {
  return (
    <>
      <ArticleHeadMeta
        title="Экскурсия в Дом ученых"
        ogDescription="Самое таинственное здание Протвино: архитектура, монументальное искусство и подлинные интерьеры Дома учёных ИФВЭ"
        ogImageUrl={`${IMAGES}/thumbnail.webp`}
        ogUrl="https://propro.media/article/dom-uchenykh"
        articleSchema={articleSchema}
      />
      <Layout>
        <PostHero
          cover={`url(${COVERS.domUchenykh})`}
          mobileCover={`url(${COVERS.domUchenykhMobile})`}
        >
          <ArticleTitle>
            Экскурсия <br />в Дом ученых
          </ArticleTitle>
          <PostAuthor>автор: Аня Медведкова</PostAuthor>
        </PostHero>
        <ArticleContainer>
          <Container>
            <Paragraph>
              Дом учёных&nbsp;&mdash; строгое, ритмичное здание с&nbsp;плоской
              крышей&nbsp;&mdash; скромно затаилось в&nbsp;одном из&nbsp;жилых
              кварталов. С&nbsp;момента постройки и&nbsp;по&nbsp;текущий день
              оно&nbsp;находится в&nbsp;ведении Института физики высоких энергий
              имени А.А. Логунова (сейчас&nbsp;&mdash; НИЦ &laquo;Курчатовский
              институт&raquo;&nbsp;&mdash; ИФВЭ). Благодаря этому, а&nbsp;также
              бережному отношению к&nbsp;объекту, здесь прекрасно сохранились
              подлинные интерьеры.
            </Paragraph>
            <Paragraph>
              Для посторонних вход в&nbsp;Дом Учёных закрыт, и, пожалуй, можно
              сказать: это самое таинственное здание в&nbsp;городе.
              По&nbsp;согласованию с&nbsp;руководством института нам удалось
              туда попасть, чтобы запечатлеть интерьеры.
            </Paragraph>
            <Section>
              <ArticleSubtitle>О здании</ArticleSubtitle>
              <Paragraph>
                Здание построено по&nbsp;индивидуальному проекту архитектора
                Льва Владимировича Лилье.
              </Paragraph>
              <Paragraph>
                Среди его работ&nbsp;&mdash; жилые и&nbsp;административные
                здания в&nbsp;Москве, Глазове, Дубне, Обнинске,
                Усть-Каменогорске, Челябинске, а&nbsp;также в&nbsp;Академгородке
                под Новосибирском. Он&nbsp;автор станций Московского
                метрополитена&nbsp;&mdash; радиальной &laquo;Киевской&raquo;
                и&nbsp;&laquo;Университета&raquo;, санаториев в&nbsp;Адлере,
                Пятигорске, Ессентуках и&nbsp;дома отдыха &laquo;Судак&raquo;.
                В&nbsp;последние годы жизни архитектор работал в&nbsp;Протвино,
                где проектировал жилые и&nbsp;административные здания.
              </Paragraph>
            </Section>
          </Container>

          <FullWidthImage>
            <Image
              quality={100}
              src={`${IMAGES}/facade.webp`}
              width="1280"
              height="822"
              alt="Фасад Дома учёных в Протвино"
            />
            <Figcaption>Дом Ученых, г. Протвино</Figcaption>
          </FullWidthImage>

          <Container>
            <Quote>
              <Paragraph mb={26}>
                <b>Лиза Арестова, архитектор:</b>
              </Paragraph>
              <Paragraph>
                &laquo;Когда я&nbsp;думаю про архитектуру Протвино, на&nbsp;ум
                приходит много разных подходов, которые можно встретить
                в&nbsp;зарубежных и&nbsp;отечественных архитектурных школах:
                Райт, школа Баухаус, Корбюзье, авангард, модернизм. Внешне Дом
                ученых напоминает станции метро, которые спроектировал Лилье.
                Те&nbsp;же массивные формы и&nbsp;ритм колонн. Интересен
                творческий путь автора. Он&nbsp;закончил МАРХИ в&nbsp;1951 году,
                учился, скорее всего, преимущественно на&nbsp;классической
                архитектуре, но&nbsp;учили его те, кто застал авангард и,
                вероятно, работал в&nbsp;это время.
                <Tooltip id="decree-1955" />
                <a
                  data-tooltip-id="decree-1955"
                  data-tooltip-content="Постановление № 1871 «Об устранении излишеств в проектировании и строительстве» было принято ЦК КПСС и Советом Министров СССР 4 ноября 1955 года"
                >
                  В&nbsp;1955 году
                </a>
                * отменяют излишества и&nbsp;начинают искать новый язык, смотря
                в&nbsp;том числе и&nbsp;на&nbsp;запад. Примерно
                в&nbsp;это&nbsp;же время происходит вторая волна авангарда
                в&nbsp;архитектуре и&nbsp;искусстве. К&nbsp;60-м уже освоили
                хороший модернизм и&nbsp;очень талантливо его применили
                на&nbsp;Доме Ученых к&nbsp;началу 70-х. У&nbsp;здания интересная
                форма в&nbsp;плане, а&nbsp;еще пространства внутри обеспечивают
                связь с&nbsp;природой через двор и&nbsp;большие объемы
                остекления&raquo;.
              </Paragraph>
            </Quote>

            <ImageContainer>
              <Image
                quality={100}
                src={`${IMAGES}/illustration.webp`}
                width="569"
                height="363"
                alt="Дом Ученых, иллюстрация Лукерьи Баталовой"
              />
              <Figcaption>Дом Ученых, иллюстрация Лукерьи Баталовой</Figcaption>
            </ImageContainer>

            <Paragraph>
              Дом ученых лишь скромно называют домом&nbsp;&mdash; фактически это
              целый комплекс. Внутри расположены конференц-зал для семинаров
              и&nbsp;концертов, кафе, банкетный зал с&nbsp;баром, каминный зал
              и&nbsp;просторный холл.
            </Paragraph>
            <Paragraph>
              Находясь внутри, обращаешь внимание на&nbsp;несколько
              особенностей. Во-первых, на&nbsp;планировку: как ловко здесь всё
              скомпоновано, сколько разных зон&nbsp;&mdash; и&nbsp;при этом
              никакой тесноты или разобщённости. Во-вторых, здесь возникает
              ощущение единства с&nbsp;природой&nbsp;&mdash; деревья
              и&nbsp;окружающий ландшафт словно становятся продолжением
              интерьера.
            </Paragraph>

            <ImageContainer>
              <Image
                quality={100}
                src={`${IMAGES}/interior-view.webp`}
                width="760"
                height="507"
                alt="Дом учёных, вид изнутри"
              />
              <Figcaption>Дом учёных, вид изнутри</Figcaption>
            </ImageContainer>

            <Paragraph>
              Существует подход в&nbsp;архитектуре, когда здание проектируют
              &laquo;изнутри наружу&raquo;. В&nbsp;таком случае внутреннее
              пространство определяет внешний облик. Такие постройки нередко
              выглядят необычно, но&nbsp;их&nbsp;главная цель, чтобы человеку
              внутри было комфортно и&nbsp;удобно. В&nbsp;этой концепции функция
              определяет форму: планировка, свет, движение людей первичны,
              а&nbsp;фасад лишь отражает внутреннюю структуру. Такой подход
              характерен для музеев, культурных центров и&nbsp;пространств, где
              важен не&nbsp;столько внешний вид здания, сколько опыт пребывания
              в&nbsp;нем.
            </Paragraph>
            <Paragraph>
              В&nbsp;Доме ученых такое ощущение гармонии и&nbsp;продуманности
              пространства сочетается с&nbsp;лаконичным внешним видом. Более
              того, по&nbsp;свидетельству очевидцев, панорамные окна в&nbsp;пол
              в&nbsp;зале ресторана спроектированы с&nbsp;раздвижным механизмом.
              Таким образом полностью стиралась граница: окна раздвигались
              и&nbsp;отдыхающие могли выйти на&nbsp;площадь перед входом
              и&nbsp;на&nbsp;задний двор напрямую.
            </Paragraph>

            <Section>
              <ArticleSubtitle>Монументальное искусство</ArticleSubtitle>
              <Paragraph>
                Особенность архитектуры советского модернизма в&nbsp;сочетании
                строгих форм и&nbsp;монументального искусства. Это отличает его
                от&nbsp;западного модернизма и&nbsp;хорошо заметно по&nbsp;всему
                городу Протвино. Важные общественные и&nbsp;уникальные здания,
                например, школы, обязательно чем-то украшены. Дом Ученых украшен
                керамическими панно. Композиции &laquo;Букет&raquo;
                и&nbsp;&laquo;Калейдоскоп&raquo; выполнены в&nbsp;1973 году
                керамистками Любовью Ненашевой и&nbsp;ее&nbsp;ученицей Галиной
                Одинокой и&nbsp;располагаются во&nbsp;внутреннем дворике
                и&nbsp;на&nbsp;внешней стене конференц-зала. В&nbsp;обоих
                случаях керамику видно в&nbsp;первую очередь через стекло
                изнутри здания, из&nbsp;банкетного и&nbsp;конференц залов,
                а&nbsp;не&nbsp;снаружи.
              </Paragraph>

              <ImageContainer>
                <Image
                  quality={100}
                  src={`${IMAGES}/panno-1.webp`}
                  width="760"
                  height="570"
                  alt="Керамическое панно «Калейдоскоп»"
                />
                <Figcaption>
                  Керамическое панно &laquo;Калейдоскоп&raquo;, авт. Надежда
                  Ненашева и&nbsp;Галина Одинокова, 1973 (фото: Ольга Ажгирей)
                </Figcaption>
              </ImageContainer>

              <ImageContainer>
                <Image
                  quality={100}
                  src={`${IMAGES}/panno-2.webp`}
                  width="760"
                  height="571"
                  alt="Керамическое панно «Калейдоскоп»"
                />
                <Figcaption>
                  Керамическое панно &laquo;Калейдоскоп&raquo;, авт. Надежда
                  Ненашева и&nbsp;Галина Одинокова, 1973 (фото: Ольга Ажгирей)
                </Figcaption>
              </ImageContainer>
            </Section>

            <Section>
              <ArticleSubtitle>Экскурсия</ArticleSubtitle>
              <Paragraph>
                Предлагаем в&nbsp;формате экскурсии вместе прогуляться
                по&nbsp;Дому ученых.
              </Paragraph>
              <Paragraph>
                Заходим через прозрачные двери парадного входа и&nbsp;попадаем
                в&nbsp;просторный холл. Стены внутри облицованы штукатуркой
                &laquo;шуба&raquo; не&nbsp;только классического для Протвино
                серого, а&nbsp;также коричневого и&nbsp;черного цветов. Стены
                также украшены световым акцентным ритмичным декором
                из&nbsp;алюминиевых ламп. Светильники были изготовлены
                специально для Дома ученых в&nbsp;ИФВЭ в&nbsp;отделе ЦЭМ.
              </Paragraph>

              <Gallery images={HALL} caption="Фото: Ольга Акимова" />

              <Paragraph>
                Из&nbsp;холла мы&nbsp;можем пройти сразу
                и&nbsp;в&nbsp;конференц, и&nbsp;в&nbsp;банкетный зал,
                и&nbsp;в&nbsp;каминный залы. Пройдем в&nbsp;банкетный зал
                с&nbsp;баром.
              </Paragraph>
            </Section>
          </Container>

          <FullWidthImage>
            <Image
              quality={100}
              src={`${IMAGES}/banquet-hall.webp`}
              width="1280"
              height="853"
              alt="Банкетный зал Дома учёных"
            />
            <Figcaption>Фото: Ольга Акимова</Figcaption>
          </FullWidthImage>

          <Container>
            <Gallery images={BANQUET} caption="Фото: Ольга Акимова" />

            <ImageContainer>
              <ImagesGridOfFour>
                <Image
                  quality={100}
                  src={`${IMAGES}/bar-1.webp`}
                  width="378"
                  height="252"
                  alt="Бар в банкетном зале Дома учёных"
                />
                <Image
                  quality={100}
                  src={`${IMAGES}/bar-2.webp`}
                  width="378"
                  height="252"
                  alt="Бар в банкетном зале Дома учёных"
                />
                <Image
                  quality={100}
                  src={`${IMAGES}/bar-3.webp`}
                  width="378"
                  height="252"
                  alt="Бар в банкетном зале Дома учёных"
                />
                <Image
                  quality={100}
                  src={`${IMAGES}/bar-4.webp`}
                  width="378"
                  height="252"
                  alt="Бар в банкетном зале Дома учёных"
                />
              </ImagesGridOfFour>
              <Figcaption>Фото: Ольга Акимова</Figcaption>
            </ImageContainer>

            <Paragraph>
              Бар сейчас не&nbsp;работает как бар, но&nbsp;мы&nbsp;можем увидеть
              фотогеничные барные стулья.
            </Paragraph>

            <Gallery images={STOOLS} caption="Фото: Ольга Акимова" />

            <Paragraph>
              Из&nbsp;банкетного зала мы&nbsp;можем пройти в&nbsp;каминный зал
              (а&nbsp;выйдя оттуда, оказаться опять в&nbsp;холле).
            </Paragraph>
          </Container>

          <FullWidthImage>
            <Image
              quality={100}
              src={`${IMAGES}/fireplace-hall.webp`}
              width="1280"
              height="853"
              alt="Каминный зал Дома учёных"
            />
            <Figcaption>Фото: Ольга Акимова</Figcaption>
          </FullWidthImage>
          <Container>
            <Gallery images={FIREPLACE} caption="Фото: Ольга Акимова" />

            <Paragraph>
              Вернувшись в&nbsp;холл, заглянем отсюда в&nbsp;конференц-зал:
            </Paragraph>

            <ImageContainer>
              <Image
                quality={100}
                src={`${IMAGES}/conference-hall.webp`}
                width="760"
                height="507"
                alt="Конференц-зал Дома учёных"
              />
              <Figcaption>Фото: Аня Медведкова</Figcaption>
            </ImageContainer>

            <Section>
              <ArticleSubtitle>Детали</ArticleSubtitle>
              <Paragraph>
                Отдельно собрали карусель с&nbsp;характерными деталями
                интерьеров.
              </Paragraph>

              <Gallery images={DETAILS} caption="Фото: Аня Медведкова" />
            </Section>

            <Section>
              <ArticleSubtitle>Культурная жизнь</ArticleSubtitle>
              <Paragraph>
                В&nbsp;разное время в&nbsp;Доме ученых бывали многие известные
                люди: президент Франции Жорж Помпиду, учёный и&nbsp;общественный
                деятель Андрей Сахаров, поэт Арсений Тарковский и&nbsp;многие
                другие.
              </Paragraph>
              <Paragraph>
                Мы&nbsp;с&nbsp;вами можем заглянуть в&nbsp;альбом,
                в&nbsp;котором гости ДУ&nbsp;оставляли автографы и&nbsp;памятные
                надписи. Объем и&nbsp;список знаменитостей поражает: кажется,
                что здесь побывали все артисты и&nbsp;знаменитости союза.
                Вы&nbsp;можете посмотреть на&nbsp;часть из&nbsp;них
                в&nbsp;карусели.
              </Paragraph>

              <Gallery images={ALBUM} />

              <Paragraph>
                Здесь бывали не&nbsp;только артисты, но&nbsp;и&nbsp;другие
                выдающиеся личности&nbsp;&mdash; летчики, космонавты,
                иностранные делегации. В&nbsp;Доме ученых найдены
                и&nbsp;сохранены прямые свидетельства&nbsp;&mdash; впечатления
                и&nbsp;памятные слова, написанные после посещения.
              </Paragraph>

              <Gallery images={PAPER} />

              <Paragraph>
                Для ученых по&nbsp;информации от&nbsp;Т.&nbsp;В.&nbsp;Соловьевой
                при Доме учёных работало несколько клубов. Во&nbsp;внутреннем
                дворе располагались спортивный и&nbsp;музыкальный,
                а&nbsp;в&nbsp;доме напротив на&nbsp;1-м этаже&nbsp;&mdash;
                шахматный клуб. В&nbsp;спортклубе можно было брать любой
                необходимый инвентарь, а&nbsp;в&nbsp;музыкальном была целая
                музыкальная база, где собирались музыканты-любители. Послушали
                воспоминания и&nbsp;кажется, что о&nbsp;культурной жизни Дома
                ученых можно писать отдельную статью.
              </Paragraph>
            </Section>
          </Container>

          <FullWidthImage>
            <Image
              quality={100}
              src={`${IMAGES}/outro.webp`}
              width="1280"
              height="853"
              alt="Дом учёных в Протвино"
            />
          </FullWidthImage>

          <Container>
            <Thanks>
              Благодарим Брагина А.А. и&nbsp;Соловьеву Т.В. за&nbsp;содействие
              при подготовке материала.
            </Thanks>
          </Container>
        </ArticleContainer>
      </Layout>
    </>
  );
}
