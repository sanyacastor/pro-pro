import React from 'react';

import { SwiperSlide } from 'swiper/react';

import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';

import {
  PostHero,
  ArticleSubtitle,
  Accent,
  ArticleTitle,
  PostAuthor,
} from '../../../components/UI/Article';

import {
  Container,
  ArticleContainer,
  Section,
  Figure,
  Figcaption,
  SliderWrapper,
} from '../../../components/UI/Generic';

import {
  Paragraph,
  SubSection,
  SectionTitle,
  SubSectionTitle,
} from '../../../components/Typography';

import { Layout } from '../../../components/Layout';
import { Slider } from '../../../components/UI/Slider/Slider';

export default function Article() {
  return (
    <Layout>
      <PostHero cover="/article/chto-takoe-sovetsky-modernizm/hero.png">
        <ArticleTitle>
          Про советский <br /> модернизм
        </ArticleTitle>
        <PostAuthor>автор: Аня Медведкова</PostAuthor>
      </PostHero>
      <ArticleContainer>
        <Container>
          <ArticleSubtitle>Что такое советский модернизм</ArticleSubtitle>
          <Paragraph>
            Современный российский город эклектичен: Сталинки, Хрущевки,
            Брежневки, конструктивизм, модернизм, классицизм. Это естественно:
            за&nbsp;последние 150 лет не&nbsp;раз кардинально менялась система
            государственного устройства. Российская Империя, СССР, Российская
            Федерация&nbsp;&mdash; у&nbsp;каждой эпохи было свое лицо, своя
            специфика в&nbsp;абсолютно разных сферах жизни. Как следствие,
            менялось жизнеустройство и&nbsp;внешний облик городов. И&nbsp;даже
            внутри одного исторического пласта были абсолютно разные периоды.
          </Paragraph>
          <Paragraph>
            Советская архитектура дважды пережила смену вех. Первый раз это
            случилось в&nbsp;начале 1930-х годов, второй &mdash; в&nbsp;середине
            1950‐х. Период с&nbsp;1955 по&nbsp;1991 год был выведен
            в&nbsp;отдельное архитектурное направление&nbsp;&mdash;{' '}
            <Accent>
              <i>советский архитектурный модернизм (совмод)</i>
            </Accent>
            . В&nbsp;ноябре 1955-го вышло постановление
            &laquo;Об&nbsp;устранении излишеств в&nbsp;проектировании
            и&nbsp;строительстве&raquo;&nbsp;&mdash; это и&nbsp;принято считать
            переходом к&nbsp;модернизму.
          </Paragraph>
          <Figure>
            <Image
              src="/article/chto-takoe-sovetsky-modernizm/sovmod1.png"
              width="760"
              height="506"
              alt=""
            />
            <Figcaption>Газета «Правда», 1955 г.</Figcaption>
          </Figure>
          <Paragraph>
            В&nbsp;документе были подробно описаны новые принципы архитектуры
            и&nbsp;строительства в&nbsp;СССР. Основная идея такова: быстрое,
            дешевое, типовое строительство&nbsp;&mdash; это хорошо,
            а&nbsp;индивидуальные проекты с&nbsp;дорогими декоративными
            элементами&nbsp;&mdash; плохо. &laquo;Советской архитектуре должна
            быть свойственна простота, строгость форм и&nbsp;экономичность
            решений&raquo;,&nbsp;&mdash; говорится в&nbsp;тексте.
          </Paragraph>
          <Paragraph>
            В&nbsp;соответствии с&nbsp;постановлением, архитектурными
            излишествами считались такие элементы, как башни, колонны,
            декоративные колоннады, портики, сложные эркеры, искусственный
            мрамор, бронза, лепные украшения, облицовка полированным гранитом,
            гранитные шары, дорогая металлическая ограда и&nbsp;так далее.
          </Paragraph>
          <Paragraph>
            Такой резкий курс на&nbsp;отказ от&nbsp;&laquo;излишеств&raquo;
            и&nbsp;отказ от&nbsp;бытовавшей ранее архитектуры повлекли
            за&nbsp;собой полную реорганизацию основ проектирования.
            По&nbsp;сути было изменено строительное дело в&nbsp;стране:
            архитекторы нач&sect;али создавать новую архитектуру&nbsp;&mdash;
            экономичную, удобную для каждого.
          </Paragraph>
          <Paragraph>
            Придумать &laquo;новый город&raquo; предстояло архитекторам, многие
            из&nbsp;которых только что выпустились из&nbsp;МАРХИ. Пережившие
            войну в&nbsp;детстве, все они стремились создать удобный для каждого
            город, эстетически устремленный в&nbsp;будущее.
          </Paragraph>
          <Paragraph>
            Сам этот период иногда называют эпохой &laquo;исторического
            оптимизма&raquo;, так как характерными паттернами было стремление
            к&nbsp;открытости и&nbsp;свободе. Именно в&nbsp;такое время
            проектировали и&nbsp;строили Протвино&nbsp;&mdash; чётко
            в&nbsp;период с&nbsp;1960-х по&nbsp;1990-е годы.
          </Paragraph>
          <Paragraph>
            Сомвод примечателен еще и&nbsp;тем, что до&nbsp;сих пор нет точных
            критериев этого стиля, кроме сравнительно четко определённого
            периода. Но&nbsp;некоторые особенности тем не&nbsp;менее выделяют.
            Мы&nbsp;покажем некоторые из&nbsp;них на&nbsp;примере Протвино.
          </Paragraph>

          <Section>
            <SectionTitle>Особенности стиля</SectionTitle>
            <Paragraph>
              Мы&nbsp;выделили четыре стилеобразующих элемента, которые
              указывают на&nbsp;то, что перед нами постройка в&nbsp;стиле
              совмод.
            </Paragraph>
            <SubSection>
              <SubSectionTitle>1. формы.</SubSectionTitle>
              <Paragraph>
                Это достаточно массивные формы и&nbsp;конструкции, остекление
                поверхностей зданий, функциональный подход к&nbsp;организации
                пространства и&nbsp;выбору внешней формы, светлый цвет фасадов,
                стен.
              </Paragraph>
              <SliderWrapper>
                <Slider>
                  <SwiperSlide>
                    <Figure>
                      <Image
                        alt="Дом культуры «Протон», г. Протвино"
                        src="/article/chto-takoe-sovetsky-modernizm/sovmod2.png"
                        width="640"
                        height="435"
                      />
                      <Figcaption>
                        Дом культуры «Протон», г. Протвино
                      </Figcaption>
                    </Figure>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Figure>
                      <Image
                        alt="Теоркорпус ИФВЭ, г. Протвино."
                        src="/article/chto-takoe-sovetsky-modernizm/sovmod3.png"
                        width="640"
                        height="435"
                      />
                      <Figcaption>Теоркорпус ИФВЭ, г. Протвино.</Figcaption>
                    </Figure>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Figure>
                      <Image
                        alt="Дом учёных ИФВЭ, г. Протвино."
                        src="/article/chto-takoe-sovetsky-modernizm/sovmod4.png"
                        width="640"
                        height="435"
                      />
                      <Figcaption>Дом учёных ИФВЭ, г. Протвино.</Figcaption>
                    </Figure>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Figure>
                      <Image
                        alt="Фасад Дома учёных ИФВЭ, г. Протвино."
                        src="/article/chto-takoe-sovetsky-modernizm/sovmod5.png"
                        width="640"
                        height="435"
                      />
                      <Figcaption>
                        Фасад Дома учёных ИФВЭ, г. Протвино.
                      </Figcaption>
                    </Figure>
                  </SwiperSlide>
                </Slider>
              </SliderWrapper>
            </SubSection>
            <SubSectionTitle>2. Декор.</SubSectionTitle>
            <Paragraph>
              Для этого архитектурного стиля не&nbsp;характерна избыточная
              декоративность, в&nbsp;качестве украшающих элементов использовали
              монументальное искусство: мозаичные панно, барельефы,
              металлоконструкции и&nbsp;прочее.
            </Paragraph>
            <SliderWrapper>
              <Slider>
                <SwiperSlide>
                  <Figure>
                    <Image
                      alt="Металлическая скульптура на фасаде Теоркорпуса ИФВЭ «Гармония физики и
                        живой природы», автор Николай Станиславский, г. Протвино."
                      src="/article/chto-takoe-sovetsky-modernizm/sovmod6.png"
                      width="640"
                      height="435"
                    />
                    <Figcaption>
                      Металлическая скульптура на фасаде Теоркорпуса ИФВЭ
                      «Гармония физики и живой природы», автор Николай
                      Станиславский, г. Протвино.
                    </Figcaption>
                  </Figure>
                </SwiperSlide>
                <SwiperSlide>
                  <Figure>
                    <Image
                      alt="Металлическая скульптура на фасаде Детской школы искусств «Три трубадура»,
                        автор Николай Станиславский, г. Протвино"
                      src="/article/chto-takoe-sovetsky-modernizm/sovmod7.png"
                      width="640"
                      height="435"
                    />
                    <Figcaption>
                      Металлическая скульптура на фасаде Детской школы искусств
                      «Три трубадура», автор Николай Станиславский, г. Протвино
                    </Figcaption>
                  </Figure>
                </SwiperSlide>
                <SwiperSlide>
                  <Figure>
                    <Image
                      alt="Барельеф на фасаде Лицея №2, г. Протвино."
                      src="/article/chto-takoe-sovetsky-modernizm/sovmod8.png"
                      width="640"
                      height="435"
                    />
                    <Figcaption>
                      Барельеф на фасаде Лицея №2, г. Протвино.
                    </Figcaption>
                  </Figure>
                </SwiperSlide>
                <SwiperSlide>
                  <Figure>
                    <Image
                      alt="Керамическое мозаичное панно на фасаде Дома учёных ИФВЭ «Букет», автор
                        Любовь Ненашева, г. Протвино. "
                      src="/article/chto-takoe-sovetsky-modernizm/sovmod9.png"
                      width="640"
                      height="435"
                    />
                    <Figcaption>
                      Керамическое мозаичное панно на фасаде Дома учёных ИФВЭ
                      «Букет», автор Любовь Ненашева, г. Протвино.
                    </Figcaption>
                  </Figure>
                </SwiperSlide>
              </Slider>
            </SliderWrapper>

            <SubSectionTitle>3. материалы.</SubSectionTitle>
            <Paragraph>
              Типично использование монолитного железобетона, а&nbsp;также
              мрамора, песчаника, ракушечника, керамики и&nbsp;т.д. как
              облицовочных материалов. В&nbsp;Протвино монолитный железобетон
              используется даже для литых форм на&nbsp;детских площадках
              (например, сфера, паук, черепаха).
            </Paragraph>
            <SliderWrapper>
              <Slider>
                <SwiperSlide>
                  <Figure>
                    <Image
                      alt="Детская площадка «Сыр»/«Луна» (местные/локальные названия), ул.Московская, 14, г. Протвино"
                      src="/article/chto-takoe-sovetsky-modernizm/sovmod10.png"
                      width="640"
                      height="435"
                    />
                    <Figcaption>
                      Детская площадка «Сыр»/«Луна» (местные/локальные
                      названия), ул.Московская, 14, г. Протвино
                    </Figcaption>
                  </Figure>
                </SwiperSlide>
                <SwiperSlide>
                  <Figure>
                    <Image
                      alt="Детская площадка «Паук», Парковый пр., 4, г. Протвино"
                      src="/article/chto-takoe-sovetsky-modernizm/sovmod_pauk_crop.png"
                      width="640"
                      height="435"
                    />
                    <Figcaption>
                      Детская площадка «Паук», Парковый пр., 4, г. Протвино
                    </Figcaption>
                  </Figure>
                </SwiperSlide>
                <SwiperSlide>
                  <Figure>
                    <Image
                      alt="Детская площадка «Черепаха», г. Протвино (утрачено)"
                      src="/article/chto-takoe-sovetsky-modernizm/sovmod11.png"
                      width="640"
                      height="435"
                    />
                    <Figcaption>
                      Детская площадка «Черепаха», г. Протвино (утрачено)
                    </Figcaption>
                  </Figure>
                </SwiperSlide>
              </Slider>
            </SliderWrapper>
            <Paragraph>
              Ракушечник можно встретить в&nbsp;отделке фойе гостиницы
              &laquo;Протва&raquo;, которое пока сохранилось
              в&nbsp;первоначальном виде.
            </Paragraph>
            <SliderWrapper>
              <Slider>
                <SwiperSlide>
                  <Figure>
                    <Image
                      alt="Фойе гостиницы «Протва», г. Протвино"
                      src="/article/chto-takoe-sovetsky-modernizm/sovmod12.png"
                      width="640"
                      height="435"
                    />
                    <Figcaption>
                      Фойе гостиницы «Протва», г. Протвино
                    </Figcaption>
                  </Figure>
                </SwiperSlide>
                <SwiperSlide>
                  <Figure>
                    <Image
                      alt="Фойе гостиницы «Протва», г. Протвино"
                      src="/article/chto-takoe-sovetsky-modernizm/sovmod13.png"
                      width="640"
                      height="435"
                    />
                    <Figcaption>
                      Фойе гостиницы «Протва», г. Протвино
                    </Figcaption>
                  </Figure>
                </SwiperSlide>
              </Slider>
            </SliderWrapper>
            <Paragraph>
              Изюминкой в&nbsp;облицовке фасадов зданий в&nbsp;Протвино является
              штукатурка шуба с&nbsp;вкраплением камней и&nbsp;слюды,
              за&nbsp;счет которых фасады блестят на&nbsp;солнце (примеры: ДУ,
              Теоркорпус, Поликлиника до&nbsp;ремонта и&nbsp;так далее).
            </Paragraph>
            <Figure pl="60">
              <Image
                alt="Теоретический Корпус ГНЦ ИФВЭ, г. Протвино."
                src="/article/chto-takoe-sovetsky-modernizm/sovmod_dom_uchenyh.png"
                width="640"
                height="375"
              />
              <Figcaption>
                Теоретический Корпус ГНЦ ИФВЭ, г. Протвино.
              </Figcaption>
            </Figure>

            <Paragraph>
              А&nbsp;внутри Дома Ученых есть даже черная &laquo;шуба&raquo;,
              находится в&nbsp;районе входной группы и&nbsp;выглядит очень
              торжественно.
            </Paragraph>

            <Figure pl="160">
              <Image
                alt="Теоретический Корпус ГНЦ ИФВЭ, г. Протвино"
                src="/article/chto-takoe-sovetsky-modernizm/sovmod15.jpeg"
                width="440"
                height="557"
              />
              <Figcaption>
                Теоретический Корпус ГНЦ ИФВЭ, г. Протвино
              </Figcaption>
            </Figure>
          </Section>
          <Section>
            <SubSectionTitle>4. малые формы.</SubSectionTitle>
            <Paragraph>
              В&nbsp;нашей стране модернизм оставил, кроме масштабных объектов,
              так называемую архитектуру малых форм (МАФ)&nbsp;&mdash; павильоны
              летних кафе, магазины, танцплощадки, автобусные остановки, детские
              площадки, бензозаправки и&nbsp;даже вертолетные станции.
              В&nbsp;нашем городе это такие магазины как Русь, Юбилейный, Ока,
              Восход, Дружба, а&nbsp;также летняя танцплощадка.
            </Paragraph>

            <SliderWrapper>
              <Slider>
                <SwiperSlide>
                  <Figure>
                    <Image
                      alt="Магазин «Русь», г. Протвино "
                      src="/article/chto-takoe-sovetsky-modernizm/sovmod16.png"
                      width="640"
                      height="435"
                    />
                    <Figcaption>Магазин «Русь», г. Протвино</Figcaption>
                  </Figure>
                </SwiperSlide>
                <SwiperSlide>
                  <Figure>
                    <Image
                      alt="Магазин «Юбилейный», г. Протвино"
                      src="/article/chto-takoe-sovetsky-modernizm/sovmod17.png"
                      width="640"
                      height="435"
                    />
                    <Figcaption>Магазин «Юбилейный», г. Протвино</Figcaption>
                  </Figure>
                </SwiperSlide>
                <SwiperSlide>
                  <Figure>
                    <Image
                      alt="Кафе «Рябинка», г. Протвино"
                      src="/article/chto-takoe-sovetsky-modernizm/sovmod18.png"
                      width="640"
                      height="435"
                    />
                    <Figcaption>Кафе «Рябинка», г. Протвино</Figcaption>
                  </Figure>
                </SwiperSlide>
                <SwiperSlide>
                  <Figure>
                    <Image
                      alt="Магазин/кафе «Ока», г. Протвино"
                      src="/article/chto-takoe-sovetsky-modernizm/sovmod19.png"
                      width="640"
                      height="435"
                    />
                    <Figcaption>Магазин/кафе «Ока», г. Протвино</Figcaption>
                  </Figure>
                </SwiperSlide>
              </Slider>
            </SliderWrapper>
            <Paragraph>
              Несмотря на&nbsp;то, что в&nbsp;рамках периода советского
              модернизма были рождены настоящие архитектурные шедевры,
              а&nbsp;также выработан определенный стиль, явление до&nbsp;сих пор
              недостаточно изучено и&nbsp;оценено. По&nbsp;сути весь наш
              город&nbsp;&mdash; это памятник эпохи и&nbsp;слепок архитектурной
              мысли того времени. Мы&nbsp;хотим привлечь внимание к&nbsp;красоте
              и&nbsp;показать ценность уникальных артефактов времени,
              в&nbsp;котором они создавались. Призываем обращать внимание
              на&nbsp;тонкости и&nbsp;мелочи, которым в&nbsp;то&nbsp;время
              уделяли внимание и&nbsp;из&nbsp;которых соткан город. Мы&nbsp;сами
              с&nbsp;каждым годом замечаем их&nbsp;все больше и&nbsp;больше
              и&nbsp;не&nbsp;перестаем удивляться.
            </Paragraph>
          </Section>
        </Container>
      </ArticleContainer>
    </Layout>
  );
}
