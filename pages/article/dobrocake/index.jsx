import Image from 'next/image';

import { ArticleHeadMeta } from '../../../components';
import { Layout } from '../../../components/Layout';
import { Paragraph, SubSection } from '../../../components/Typography';
import { ArticleTitle, PostHero } from '../../../components/UI';
import { ImageContainer, Container } from '../../../components/UI/Generic';

import {
  ArticleContainer,
  ArticleSubtitle,
  FullWidthImage,
  HeroContainer,
  ImagesGridOfFour,
  ImagesRow,
  Intro,
} from './styles';

export default function Article() {
  return (
    <>
      <ArticleHeadMeta
        title="Семейная кондитерская 'Доброкейк'"
        ogDescription=""
      />
      <Layout>
        <PostHero cover="url(/article/dobrocake/dobrocake_header.png)">
          <HeroContainer>
            <ArticleTitle>Семейная кондитерская доброкейк:</ArticleTitle>
            <ArticleSubtitle>
              все началось с того, что я заказала маме на день рождения торт
            </ArticleSubtitle>
          </HeroContainer>
        </PostHero>
        <ArticleContainer>
          <Container>
            <Intro>
              Иметь свое дело&nbsp;&mdash; особый вызов. От&nbsp;редакции
              мы&nbsp;желаем Протвино побольше предприимчивых людей
              со&nbsp;здоровым фанатизмом к&nbsp;качеству своей работы
              и&nbsp;уважительным подходом к&nbsp;людям. Нам интересно узнать
              про путь, трудности, радости и&nbsp;просто будни таких людей.
              Мы&nbsp;поговорили с&nbsp;Надей, владелицей кофейни-кондитерской
              Доброкейк, и&nbsp;рады поделиться этим с&nbsp;вами.
            </Intro>
          </Container>

          <FullWidthImage>
            <ImageContainer>
              <Image
                quality={100}
                src="/article/dobrocake/dobrocake_hero.jpg"
                width="1280"
                height="854"
                alt="Надя Федюнина - Владелец кондитерской 'Доброкейк'"
              />
            </ImageContainer>
          </FullWidthImage>

          <Container>
            <Paragraph>
              Доброкейк&nbsp;&mdash; протвинская семейная кондитерская, которая
              переросла в&nbsp;кофейню. Здесь можно купить кофе, другие напитки
              и&nbsp;десерты&nbsp;&mdash; как с&nbsp;витрины, так
              и&nbsp;на&nbsp;заказ. Основная цель владельца Нади Федюниной, как
              говорит она сама, делать что-то хорошее и&nbsp;доброе для людей,
              чтобы они это хорошее передавали дальше.
            </Paragraph>

            <SubSection>
              <ArticleSubtitle>История</ArticleSubtitle>
              <ImageContainer>
                <Image
                  quality={100}
                  src="/article/dobrocake/dobrocake_2.jpg"
                  width="1280"
                  height="854"
                  alt="Кондитерская Доброкейк - интерьер кофейни"
                />
              </ImageContainer>
              <Paragraph>
                По&nbsp;профессии я&nbsp;инженер по&nbsp;качеству
                и&nbsp;работала всю жизнь в&nbsp;этой области. Вне зависимости
                от&nbsp;сферы применения, в&nbsp;этой специальности развивается
                такое качество, что ты&nbsp;просто не&nbsp;можешь делать плохо.
              </Paragraph>
              <Paragraph>
                Меня тогда все называли технологом, я&nbsp;обижалась. Забегая
                вперед, потом мне пришлось отучиться именно на&nbsp;технолога
                кондитерского производства. И&nbsp;теперь я&nbsp;наоборот гордо
                говорю, что я&nbsp;технолог.
              </Paragraph>
              <Paragraph>
                Кондитерское дело началось с&nbsp;того, что я&nbsp;заказала маме
                на&nbsp;день рождения торт. И&nbsp;такого торта
                я&nbsp;до&nbsp;этого никогда не&nbsp;ела. Мне очень захотелось
                узнать все про&nbsp;то, как это делается. Это был муссовый торт
                манго-маракуйя. Наверное, и&nbsp;сейчас это один из&nbsp;любимых
                вкусов, хотя с&nbsp;тех пор сам десерт несколько изменился.
              </Paragraph>

              <ImageContainer>
                <ImagesGridOfFour>
                  <Image
                    quality={100}
                    src="/article/dobrocake/dobrocake_6.jpg"
                    width="378"
                    height="252"
                    alt="Десерты кондитерской Доброкейк"
                  />
                  <Image
                    quality={100}
                    src="/article/dobrocake/dobrocake_7.jpg"
                    width="378"
                    height="252"
                    alt="Десерты кондитерской Доброкейк"
                  />
                  <Image
                    quality={100}
                    src="/article/dobrocake/dobrocake_5.jpg"
                    width="378"
                    height="252"
                    alt="Десерты кондитерской Доброкейк"
                  />
                  <Image
                    quality={100}
                    src="/article/dobrocake/dobrocake_8.jpg"
                    width="378"
                    height="252"
                    alt="Десерты кондитерской Доброкейк"
                  />
                </ImagesGridOfFour>
              </ImageContainer>

              <Paragraph>
                На&nbsp;тот момент я&nbsp;не&nbsp;думала и&nbsp;не&nbsp;мечтала
                о&nbsp;своем деле, бизнесе. В&nbsp;принципе мне очень нравится
                работать на&nbsp;кого-то, это намного проще, чем работать
                на&nbsp;себя. Я&nbsp;решила пойти учиться, но&nbsp;делать
                тортики на&nbsp;дому не&nbsp;хотела, потому что мозг инженера
                по&nbsp;качеству не&nbsp;позволяет работать дома. Сначала
                я&nbsp;стала работать в&nbsp;кондитерском цехе в&nbsp;Серпухове,
                позднее там открыли кондитерскую. Потом так сложились
                обстоятельства, что я&nbsp;оттуда ушла. Через какое-то время тут
                в&nbsp;Протвино появилось помещение, в&nbsp;котором
                мы&nbsp;стали работать.
              </Paragraph>

              <Paragraph>
                С&nbsp;помещением очень интересный момент. Когда-то
                я&nbsp;путешествовала по&nbsp;Европе, я&nbsp;уже работала
                в&nbsp;кондитерском цехе на&nbsp;тот момент. Зайдя
                в&nbsp;какую-то кофейню-кондитерскую, мне очень понравилось вот
                это состояние, когда снизу люди работают, а&nbsp;сверху живут.
                Этот образ осел у&nbsp;меня в&nbsp;голове. Я&nbsp;даже хотела
                уехать в&nbsp;Тарусу, искала дом, чтобы снизу иметь кофейню,
                а&nbsp;на&nbsp;втором этаже жить. Но&nbsp;не&nbsp;сложилось,
                а&nbsp;сложилось так, что появилось помещение тут, и,
                собственно, именно в&nbsp;доме, где я&nbsp;живу.
              </Paragraph>
            </SubSection>

            <SubSection>
              <ArticleSubtitle>Цели</ArticleSubtitle>
              <Paragraph>
                На&nbsp;самом деле я&nbsp;не&nbsp;очень люблю оформлять торты
                и&nbsp;делать такую работу, которая первым делом приходит
                в&nbsp;голову, когда мы&nbsp;слышим о&nbsp;десертах
                на&nbsp;заказ. У&nbsp;меня основная идея всегда была в&nbsp;том,
                чтобы оптимизировать процессы. Да, мне нравится налаживать
                процесс, нравится, как сделать много за&nbsp;маленький
                промежуток времени, как сделать качественно, без каких-то
                химических добавок и&nbsp;вредности. И&nbsp;на&nbsp;данный
                момент у&nbsp;меня мысль о&nbsp;том, что это такая отправная
                точка к&nbsp;тому, что мне очень хочется&nbsp;&mdash; именно
                большому производству, которое будет автоматизировано. Основная
                идея в&nbsp;этом, инженерная такая.
              </Paragraph>
            </SubSection>

            <ImageContainer>
              <ImagesRow>
                <Image
                  quality={100}
                  src="/article/dobrocake/dobrocake_10.jpg"
                  width="378"
                  height="567"
                  alt="Десерты кондитерской Доброкейк"
                />
                <Image
                  quality={100}
                  src="/article/dobrocake/dobrocake_9.jpg"
                  width="378"
                  height="567"
                  alt="Десерты кондитерской Доброкейк"
                />
              </ImagesRow>
            </ImageContainer>

            <SubSection>
              <ArticleSubtitle>
                Что нужно знать при выборе десерта
              </ArticleSubtitle>

              <Paragraph>
                Во-первых, важно хорошо поесть и&nbsp;только потом есть сладкое.
                Любой мастер-класс с&nbsp;детьми у&nbsp;меня начинается
                с&nbsp;вопроса: дети, вы&nbsp;знаете, что в&nbsp;принципе
                сладкое это вредно? И&nbsp;я&nbsp;всем всегда рассказываю
                о&nbsp;том, что как минимум вы&nbsp;должны есть десерты после
                еды, чтобы в&nbsp;организме не&nbsp;было резких скачков
                инсулина. Еще, так как сама делаю десерты, я&nbsp;обращаю
                внимание других на&nbsp;то, что там должны быть не&nbsp;только
                углеводы, но&nbsp;еще и&nbsp;белки, жиры, пищевые волокна,
                клетчатка. Например, это могут быть фрукты, орехи, ягоды,
                аллюлоза, инулин. Последнее это волокна, клетчатка. Да, названия
                страшные, но&nbsp;на&nbsp;самом деле это полезно для организма.
                Когда волокна идут в&nbsp;составе с&nbsp;сахаром или заменяют
                сахар, это намного лучше, чем ты&nbsp;будешь есть чистый сахар.
                Надо правда оговориться, что в&nbsp;десертах, производимых
                в&nbsp;промышленных масштабах, вы&nbsp;нигде не&nbsp;увидите
                клетчатку или пищевые волокна.
              </Paragraph>

              <ImageContainer>
                <Image
                  quality={100}
                  src="/article/dobrocake/dobrocake_1.jpg"
                  width="760"
                  height="506"
                  alt="Десерты кондитерской Доброкейк"
                />
              </ImageContainer>

              <Paragraph>
                Второй важный момент это непосредственно, чтобы использовались
                нормальные продукты. Не&nbsp;здорово, когда есть разные замены
                жирам, маргарин итд.
              </Paragraph>

              <Paragraph>
                Ну&nbsp;и&nbsp;еще хорошо, когда десерты имеют сами по&nbsp;себе
                насыщенный вкус без, например, молочных жиров. Мы&nbsp;много где
                не&nbsp;используем сливки, потому что они перебивают вкус живого
                фрукта.
              </Paragraph>

              <Paragraph>
                Если подвести итог, то&nbsp;лучше пользоваться нерафинированными
                сахарами, либо клетчатками, которые имеют сладковатый вкус,
                и&nbsp;обращать внимание на&nbsp;количество углеводов
                в&nbsp;составе десерта в&nbsp;процентном отношении, чтобы это
                было не&nbsp;100%.
              </Paragraph>
            </SubSection>

            <SubSection>
              <ArticleSubtitle>Открытия в профессии</ArticleSubtitle>

              <Paragraph>
                В&nbsp;прошлом году я&nbsp;ездила учиться к&nbsp;испанскому
                шефу, он&nbsp;преподавал как с&nbsp;нуля создавать десерт.
                Я&nbsp;узнала, что на&nbsp;самом деле это все просто математика.
                Чтобы десерт был стабильным, чтобы он&nbsp;не&nbsp;нес вред
                человеку, это можно элементарно просчитать. Ты&nbsp;можешь
                сделать любой десерт, не&nbsp;имея перед глазами рецептуры, зная
                эту базу. Для меня это было большим открытием, это перевернуло
                мое восприятие.
              </Paragraph>
            </SubSection>

            <SubSection>
              <ArticleSubtitle>Стандартный день</ArticleSubtitle>

              <Paragraph>
                Во-первых, когда ты&nbsp;работаешь сам на&nbsp;себя,
                ты&nbsp;в&nbsp;целом работаешь круглосуточно.
                А&nbsp;мы&nbsp;работаем по&nbsp;сути всей семьей: мама
                и&nbsp;муж очень помогают. Всего нас здесь уже работает
                6&nbsp;человек.
              </Paragraph>

              <Paragraph>
                Если у&nbsp;меня свободный день от&nbsp;семейных забот,
                я&nbsp;целый день здесь и&nbsp;на&nbsp;работе в&nbsp;цеху.
                А&nbsp;так день достаточно стандартный: я&nbsp;собираю детей
                в&nbsp;школу и&nbsp;садик и&nbsp;тут&nbsp;же иду сюда
                на&nbsp;работу. Работаю целый день практически все время здесь.
                В&nbsp;основном почти каждый день так. Иногда в&nbsp;обед
                ко&nbsp;мне приходят дети, они могут в&nbsp;соседней комнате
                сидеть и&nbsp;делать уроки. И, собственно, вечер&nbsp;&mdash;
                это с&nbsp;семьей дома.
              </Paragraph>

              <Paragraph>
                Ключевое&nbsp;&mdash; мне это нравится, иногда семье меня
                приходится буквально отсюда меня вытаскивать.
                Но&nbsp;я&nbsp;взяла за&nbsp;правило обязательно раз
                в&nbsp;неделю делать выходной.
              </Paragraph>
            </SubSection>

            <ImageContainer>
              <Image
                quality={100}
                src="/article/dobrocake/dobrocake_4.jpg"
                width="760"
                height="506"
                alt="Кондитерская Доброкейк - рабочий процесс"
              />
            </ImageContainer>

            <SubSection>
              <ArticleSubtitle>Про трудности</ArticleSubtitle>
              <Paragraph>
                Ключевое как и&nbsp;везде&nbsp;&mdash; это взять ответственность
                за&nbsp;свою жизнь, за&nbsp;себя и&nbsp;за&nbsp;других людей.
                Помимо этого много нюансов&nbsp;и, конечно, это всё непросто.
                Если хочешь делать свое дело, тут решение одно&nbsp;&mdash;
                просто брать и&nbsp;делать, делать&nbsp;&mdash; единственный
                инструмент.
              </Paragraph>
            </SubSection>

            <SubSection>
              <ArticleSubtitle>Про Протвино</ArticleSubtitle>
              <Paragraph>
                Я&nbsp;очень люблю Протвино. Я&nbsp;здесь родилась и&nbsp;почти
                всю жизнь здесь, за&nbsp;исключением периодов, пока ездила
                учиться. Сначала думала, как и&nbsp;все тогда, что уеду
                и&nbsp;больше никогда не&nbsp;вернусь, но&nbsp;сейчас нет. Мне
                очень нравится здесь: тут живут очень классные люди, все
                пытаются друг другу помочь.
              </Paragraph>

              <Paragraph>
                Любимое место наверно карьер, потому что там круглый год
                здорово&nbsp;&mdash; красиво и&nbsp;летом, и&nbsp;зимой.
              </Paragraph>

              <Paragraph>
                Хочется, чтобы город развивался, чтобы люди приезжали сюда,
                чтобы они видели, какой у&nbsp;нас замечательный город весь
                в&nbsp;соснах.
              </Paragraph>
            </SubSection>
          </Container>
        </ArticleContainer>
      </Layout>
    </>
  );
}
