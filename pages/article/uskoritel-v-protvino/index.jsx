import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import {
  ArticleSubtitle,
  ArticleTitle,
  PostAuthor,
} from '../../../components/UI/Article';

import {
  Container,
  ArticleContainer,
  Section,
  Figure,
} from '../../../components/UI/Generic';

import { Paragraph, SectionTitle } from '../../../components/Typography';
import { Layout } from '../../../components/Layout';

import * as S from './styles';

export default function Article() {
  return (
    <>
      <Head>
        <title>Про про | Ускоритель в Протвино</title>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="propro.media" />

        <meta property="og:title" content="Про про | Ускоритель в Протвино" />
        <meta
          property="og:description"
          content="Протвинский ускоритель элеметарных частиц У-70"
        />

        <meta
          property="og:url"
          content="https://propro.media/article/uskoritel-v-protvino"
        />

        <meta property="og:image:url" content="" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
      </Head>
      <Layout>
        <S.PostHeroWrapper>
          <S.PostHero cover="/article/uskoritel-v-protvino/hero.png">
            <ArticleTitle>
              ускоритель <br />в протвино
            </ArticleTitle>
            <PostAuthor>АВТОР: КАТЯ АЛЕЙНИКОВА</PostAuthor>
          </S.PostHero>
        </S.PostHeroWrapper>
        <ArticleContainer>
          <Container>
            <ArticleSubtitle>Частицы</ArticleSubtitle>
            <Paragraph>
              Все сложное многообразие мира состоит из&nbsp;частиц, в&nbsp;том
              числе мы&nbsp;сами. Физики постепенно продвигаются вглубь строения
              вещества: от&nbsp;молекул к&nbsp;атомам, от&nbsp;атомов
              к&nbsp;ядру, от&nbsp;ядра к&nbsp;элементарным частицам, которые
              на&nbsp;данный момент на&nbsp;практике невозможно поделить
              на&nbsp;составные части.
            </Paragraph>
            <Paragraph>
              В&nbsp;погоне за&nbsp;новыми частицами и&nbsp;изучением
              их&nbsp;свойств используют уникальные установки и&nbsp;методы.
              Можно сказать, что создание первых ускорителей открыло новую эру
              в&nbsp;ядерной физике.
            </Paragraph>
            <Paragraph>
              Ускорители заряженных частиц изначально создавали для исследования
              строения вещества. Ведь если знать и&nbsp;понимать принципы,
              которые лежат в&nbsp;основе строения материи, можно научиться
              этими процессами управлять. Например, мы&nbsp;знаем, что такое
              кирпич&nbsp;&mdash; знаем его массу, геометрические размеры,
              знаем, как их&nbsp;скреплять между собой&nbsp;&mdash; эти знания
              позволяют нам строить здания. В&nbsp;основе строения веществ тоже
              есть свои кирпичи&nbsp;&mdash; молекулы, атомы. Знания
              о&nbsp;молекулах позволили получить новые материалы&nbsp;&mdash;
              сплавы металлов, полимеры. Освоив атом, был открыт отдельный мир
              нанотехнологий. Ускоритель частиц позволяет заглянуть еще
              глубже&nbsp;&mdash; внутрь атома и&nbsp;атомного ядра.
            </Paragraph>
            <Paragraph>
              На&nbsp;ускорителях были получены важнейшие результаты
              в&nbsp;исследованиях микромира: ученые достигли глубокого
              понимания физических законов, которые управляют материей,
              энергией, пространством и&nbsp;временем. Были открыты новые
              частицы, установлены закономерности в&nbsp;изучении
              фундаментальных сил природы.
            </Paragraph>
            <Paragraph>
              В&nbsp;этой статье разберем, каким образом все это стало
              возможным, расскажем про ускорители в&nbsp;целом
              и&nbsp;Протвинский ускоритель и&nbsp;его достижения
              в&nbsp;частности.
            </Paragraph>

            <Figure>
              <Image
                src="/article/uskoritel-v-protvino/f4.png"
                width="760"
                height="450"
                alt=""
              />
            </Figure>

            <Section>
              <SectionTitle mb="32px">
                Физика микромира и зачем вообще нужны ускорители
              </SectionTitle>
              <Paragraph>
                Ускоренные частицы сравнительно низких энергий применяются
                в&nbsp;получении изображения на&nbsp;экране телевизора или
                электронного микроскопа, получении рентгеновских лучей
                (электронно-лучевые трубки), разрушении раковых клеток
                и&nbsp;уничтожении бактерий.
              </Paragraph>
              <Paragraph>
                Для изучения структуры микрообъектов (например, атомных ядер)
                и&nbsp;природы фундаментальных сил используют заряженные
                частицы, ускоренные до&nbsp;более высоких энергий. Рождение
                новых частиц происходит в&nbsp;результате преобразования
                кинетических энергий сталкивающихся частиц.
              </Paragraph>
            </Section>

            <Section>
              <SectionTitle mb="32px">
                Как изучить то, чего не видно глазами
              </SectionTitle>
              <Paragraph>
                В&nbsp;повседневной жизни для того, чтобы что-то рассмотреть,
                нам нужен источник излучения, объект исследования
                и&nbsp;приемник (наши глаза). Нельзя ничего исключить
                из&nbsp;этой цепочки. Без источника излучения, в&nbsp;темноте
                мы&nbsp;не&nbsp;сможем ничего увидеть. Без объекта исследования
                нечего будет наблюдать. Без приемника будет нечем наблюдать.
              </Paragraph>
              <Paragraph>
                Например, есть предмет, допустим это дом. Каким образом
                мы&nbsp;можем его изучить? С&nbsp;физической точки зрения это
                происходит так: солнце освещает дом лучом, фотоны отражаются
                от&nbsp;дома и&nbsp;наш глаз это фиксирует.
              </Paragraph>

              <Figure>
                <Image
                  src="/article/uskoritel-v-protvino/f2.png"
                  width="760"
                  height="450"
                  alt=""
                />
              </Figure>

              <Paragraph>
                Для того чтобы изучить объекты микромира, мы&nbsp;используем
                те&nbsp;же методы. Ускоритель частиц&nbsp;&mdash; аналог
                источника излучения. Мишень, как правило, макроскопический
                объект (например, пластинка, фольга). Детектор&nbsp;&mdash;
                аналог приемника, регистрирует&nbsp;то, что происходит после
                взаимодействия частиц с&nbsp;мишенью.
              </Paragraph>
              <Paragraph>
                Схема проведения типичного эксперимента показана
                на&nbsp;рисунке. Пучок заряженных частиц (несколько частиц
                сразу) разгоняют до&nbsp;очень высокой скорости,
                и&nbsp;направляют его на&nbsp;мишень, с&nbsp;которой частицы
                сталкиваются. В&nbsp;результате взаимодействия частиц пучка
                с&nbsp;частицами мишени из&nbsp;мишени вылетают различные
                частицы, которые регистрируются с&nbsp;помощью детектора.
                И&nbsp;этот результат изучают.
              </Paragraph>
              <Paragraph>
                Современные ускорители умеют формировать пучки различных частиц
                (p, e, &pi;, K, &nu;&nbsp;и&nbsp;др.) и&nbsp;ускорять частицы
                до&nbsp;энергии нескольких ТэВ (1&nbsp;ТэВ приблизительно равен
                кинетической энергии летящего комара или энергии, выделяющейся
                при падении маленькой капли воды диаметром в&nbsp;1&nbsp;мм
                с&nbsp;высоты 3&nbsp;см).
              </Paragraph>
            </Section>

            <Section>
              <SectionTitle mb="32px">
                Отличие физики микромира от физики классических объектов.
              </SectionTitle>
              <Paragraph>
                При столкновении двух частиц, размером много меньше атома,
                взаимодействие между ними может произойти, а&nbsp;может
                и&nbsp;нет. Мы&nbsp;не&nbsp;можем точно предсказать результат
                столкновения, можем только оценить вероятность того или иного
                исхода. Таким образом, на&nbsp;сверхмалых расстояниях
                мы&nbsp;оперируем понятиями вероятности событий.
              </Paragraph>
              <Paragraph>
                Это вероятностное, а&nbsp;не&nbsp;строго определенное знание
                (или предсказание) того или иного события отличает физику
                микромира от&nbsp;физики классических объектов.
              </Paragraph>
            </Section>

            <Section>
              <SectionTitle mb="32px">Про типы ускорителей</SectionTitle>
              <Paragraph>
                Как мы&nbsp;уже частично разобрали, ускоритель
                частиц&nbsp;&mdash; это устройство, которое ускоряет субатомные
                частицы до&nbsp;высоких скоростей, используя электромагнитные
                поля. Он&nbsp;генерирует пучок заряженных частиц, который
                используется в&nbsp;многочисленных исследовательских целях.
                Ускорители условно, с&nbsp;точки зрения траектории,
                по&nbsp;которой частицы двигаются в&nbsp;процессе ускорения,
                можно разбить на&nbsp;два класса&nbsp;&mdash; линейные (или
                прямого действия) и&nbsp;циклические.
              </Paragraph>

              <Figure>
                <Image
                  src="/article/uskoritel-v-protvino/f3.png"
                  width="760"
                  height="450"
                  alt=""
                />
              </Figure>
            </Section>

            <Section>
              <SectionTitle mb="32px">Ускорители</SectionTitle>
              <Paragraph>
                Как следует из&nbsp;самих названий, в&nbsp;линейных ускорителях
                частицы в&nbsp;процессе ускорения двигаются прямолинейно,
                а&nbsp;в&nbsp;циклических&nbsp;&mdash; либо по&nbsp;одной
                и&nbsp;той&nbsp;же замкнутой траектории
                (по&nbsp;кругу)&nbsp;&mdash; синхротроны, либо
                по&nbsp;траектории, напоминающей раскручивающуюся
                спираль&nbsp;&mdash; циклотроны, микротроны. Мы&nbsp;подробнее
                поговорим про Синхротрон&nbsp;&mdash; кольцевой циклический
                ускоритель заряженных частиц. Потому что именно таким типом
                ускорителя является У-70&nbsp;в Протвино. Он&nbsp;позволяет
                ускорять как лёгкие заряженные частицы (электроны, позитроны),
                так и&nbsp;тяжёлые (протоны, антипротоны, ионы) до&nbsp;самых
                больших энергий.
              </Paragraph>
              <Paragraph>
                В&nbsp;синхротронах магнитное поле переменное, и&nbsp;частицы
                двигаются по&nbsp;одной и&nbsp;той&nbsp;же замкнутой траектории,
                многократно проходя прямолинейные промежутки с&nbsp;ускоряющим
                электрическим полем радиочастотного диапазона (рис.2). Магнитная
                система является важнейшим звеном в&nbsp;ускорителе. Она состоит
                из&nbsp;2-х типов чередующихся кольцевых магнитов: отклоняющих
                и&nbsp;фокусирующих. Отклоняющие (двухполюсные или дипольные)
                удерживают частицы на&nbsp;орбите: частицы увеличивают свою
                энергию под действием электрического поля, которое направлено
                вдоль импульса частицы, и&nbsp;удерживаются
                на&nbsp;фиксированной орбите с&nbsp;помощью нарастающего поля
                мощных отклоняющих кольцевых магнитов. Фокусирующие магниты
                (четырёх-полюсные или квадрупольные) интегрированы
                в&nbsp;систему, чтобы собирать частицы в&nbsp;узкий пучок (как
                линзы свет). Название &laquo;синхротрон&raquo; обусловлено тем,
                что частицы в&nbsp;нем двигаются за&nbsp;счёт того, что темп
                нарастания их&nbsp;энергии в&nbsp;ускоряющих промежутках
                синхронизован со&nbsp;скоростью нарастания магнитного поля
                на&nbsp;орбите неизменного радиуса. По&nbsp;достижении
                максимального магнитного поля ускоренные частицы либо
                направляются на&nbsp;неподвижную мишень, либо
                (в&nbsp;коллайдерах) сталкиваются со&nbsp;встречным пучком,
                после чего цикл ускорения повторяется.
              </Paragraph>

              <Figure>
                <Image
                  src="/article/uskoritel-v-protvino/f1.png"
                  width="760"
                  height="450"
                  alt=""
                />
              </Figure>
            </Section>

            <Section>
              <SectionTitle mb="32px">Ускоритель в Протвино</SectionTitle>
              <Paragraph>
                Ускоритель протонов на&nbsp;энергию 70&nbsp;ГэВ ввели
                в&nbsp;действие в&nbsp;1967&nbsp;г. В&nbsp;течение пяти лет
                он&nbsp;оставался крупнейшей в&nbsp;мире ускорительной
                установкой и&nbsp;до&nbsp;сих пор действует и&nbsp;остается
                самым высокоэнергетичным ускорителем России. Сейчас
                Ускорительный комплекс У-70 включает в&nbsp;себя два линейных
                ускорителя И-100 и&nbsp;УРАЛ-30 и&nbsp;два кольцевых ускорителя:
                У-1,5 и&nbsp;протонный синхротрон У-70. Ускорительный комплекс
                постоянно совершенствуется.
              </Paragraph>
            </Section>

            <S.Card>
              <S.CardTitle>
                Периметр У-70 — около 1,5 км. Общий вес магнитной системы —
                свыше 20 000 т.  Комплекс работает в импульсном режиме следующим
                образом: 
              </S.CardTitle>
              <ol>
                <li>
                  Протоны ускоряются до 30 МэВ в линейном ускорителе УРАЛ-30
                  и инжектируются в бустерный синхротрон У-1.5 периметром 100 м.
                </li>
                <li>
                  Там они ускоряются до энергии 1,32 ГэВ, после чего
                  перепускаются в У-70. 
                </li>
                <li>
                  Далее в течение ~ 9с следует цикл ускорения до максимальной
                  энергии 76 ГэВ, и пучок используется для формирования
                  различных вторичных пучков частиц.
                </li>
              </ol>
            </S.Card>

            <Figure>
              <Image
                src="/article/uskoritel-v-protvino/f5.png"
                width="760"
                height="450"
                alt=""
              />
            </Figure>

            <Section>
              <SectionTitle mb="32px">Открытия</SectionTitle>
              <Paragraph>
                Ученые-теоретики ИФВЭ изучают процессы взаимодействия
                элементарных частиц при высоких энергиях, физику тяжелых
                кварков, проблемы квантовой теории поля, теорию гравитации.
              </Paragraph>
              <Paragraph>
                Эксперименты были ориентированы на&nbsp;поиск
                и&nbsp;исследование новых физических явлений при энергиях,
                недоступных ранее на&nbsp;ускорителях: полные сечения
                взаимодействий адронов, сечения упругого рассеяния на&nbsp;малые
                углы, поиск частиц с&nbsp;дробным зарядов кварков, поиск новых
                короткоживущих частиц, ядер антиматерии.
              </Paragraph>
              <Paragraph>
                На&nbsp;ускорителе ИФВЭ сделан ряд фундаментальных открытий
                и&nbsp;получены научные результаты, обогатившие мировую науку.
                Учеными ИФВЭ обнаружены более 20&nbsp;частиц с&nbsp;уникальными
                свойствами (принципиально новый тип материи, многокварковые
                состояния, высокие спины), редкие моды распада легких мезонов,
                определены электромагнитная и&nbsp;кварковая структуры адронов,
                разработана и&nbsp;реализована высокочастотная квадрупольная
                фокусировка и&nbsp;многое многое другое.
              </Paragraph>
            </Section>

            <S.Card>
              8&nbsp;открытий зарегистрировано в&nbsp;Государственном реестре
              Российской Федерации:
              <ul>
                <li>
                  Экспериментальное установление неизвестного ранее явления
                  образования антигелия-3&nbsp;&mdash; антиядра с&nbsp;числом
                  антипротонов больше единицы, обусловленного сильным
                  взаимодействием между антинуклонами (за
                  &#8470;&nbsp;104&nbsp;с приоритетом от&nbsp;28&nbsp;января
                  1970&nbsp;г.);
                </li>
                <li>
                  Закономерность в&nbsp;энергетической зависимости полных
                  сечений (Серпуховский эффект) (за &#8470;&nbsp;137&nbsp;с
                  приоритетом от&nbsp;24&nbsp;мая 1971&nbsp;г.);
                </li>
                <li>
                  Закономерность масштабной инвариантности сечений образования
                  адронов (за &#8470;&nbsp;228&nbsp;с приоритетом
                  от&nbsp;5&nbsp;марта 1969&nbsp;г.)
                </li>
                <li>
                  Закономерность изменения радиуса сильного взаимодействия
                  протонов при высоких энергиях (за &#8470;&nbsp;244&nbsp;с
                  приоритетом от&nbsp;22&nbsp;июля 1969г.);
                </li>
                <li>
                  Явление потенциального рассеяния протонов высоких энергий (за
                  &#8470;&nbsp;246&nbsp;с приоритетом от&nbsp;10&nbsp;июля
                  1963&nbsp;г.);
                </li>
                <li>
                  Явление образования элементарной частицы h-мезона (за
                  &#8470;&nbsp;275&nbsp;с приоритетом от&nbsp;13&nbsp;июня
                  1975&nbsp;г.);
                </li>
                <li>
                  Явление фокусировки пучка заряженных частиц в&nbsp;однородном
                  вдоль оси пучка переменном электрическом поле (за
                  &#8470;&nbsp;350&nbsp;с приоритетом от&nbsp;25&nbsp;марта
                  1969&nbsp;г.);
                </li>
                <li>
                  Явление изменения знака поляризации протонов при
                  их&nbsp;упругом рассеянии на&nbsp;протонах при высоких
                  энергиях (за &#8470;&nbsp;387&nbsp;с приоритетом
                  от&nbsp;9&nbsp;июля 1975&nbsp;г.).
                </li>
              </ul>
            </S.Card>

            <Section>
              <SectionTitle mb="32px">
                О проекте УНК (Ускорительно-накопительный комплекс)
              </SectionTitle>
              <Paragraph>
                В&nbsp;1983 году начали разрабатывать проект протон-протонного
                коллайдера на&nbsp;сверхпроводящих магнитах на&nbsp;энергию
                3&nbsp;ТэВ, который стал&nbsp;бы самым мощным в&nbsp;мире.
              </Paragraph>
              <Paragraph>
                В&nbsp;проекте УНК предполагались две ступени: одна должна была
                принять из&nbsp;У-70 пучок протонов с&nbsp;энергией 70&nbsp;ГэВ
                и&nbsp;поднять ее&nbsp;до&nbsp;промежуточного значения
                400&ndash;600&nbsp;ГэВ. Во&nbsp;втором кольце (вторая ступень)
                энергия протонов поднималась&nbsp;бы до&nbsp;максимальной
                величины.
              </Paragraph>
              <Paragraph>
                Обе ступени УНК должны были разместиться в&nbsp;одном кольцевом
                тоннеле, размерами превосходящем кольцевую линию Московского
                метрополитена.
              </Paragraph>
              <Paragraph>
                Длина основного кольца УНК составляет 21&nbsp;км, внутренний
                диаметр&nbsp;&mdash; 5&nbsp;метров. Для сравнения длина
                основного кольца Большого Адронного Коллайдера (ЦЕРН, Швейцария)
                равна 26,7&nbsp;км.
              </Paragraph>
              <Paragraph>
                Комплекс сооружений общей стоимостью около 950 млн долларов
                практически был достроен (освоено&nbsp;80% бюджета): закончена
                проходка подземного тоннеля диаметром 5,1&nbsp;м и&nbsp;длиной
                около 21&nbsp;км, подготовлены системы, закуплено оборудование.
                В&nbsp;1994 году строители осуществили сбойку последнего
                и&nbsp;самого сложного по&nbsp;гидрогеологическим условиям
                (из-за грунтовых вод) участка 21-километрового тоннеля.
              </Paragraph>
              <Paragraph>
                Но, к&nbsp;сожалению, из-за развала СССР и&nbsp;прекращения
                финансирования ни&nbsp;заказывать оборудование, ни&nbsp;платить
                зарплаты рабочим стало невозможно. Ситуацию усугубил кризис
                1998&nbsp;года. Проект пришлось остановить. А&nbsp;после того,
                как было принято решение участвовать в&nbsp;запуске Большого
                адронного коллайдера, от&nbsp;завершения УНК отказались
                окончательно. Сейчас он&nbsp;находится в&nbsp;законсервированном
                состоянии.
              </Paragraph>
            </Section>
          </Container>
        </ArticleContainer>
      </Layout>
    </>
  );
}
