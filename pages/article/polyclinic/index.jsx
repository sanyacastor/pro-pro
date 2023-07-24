import React from 'react';
import { CldImage } from 'next-cloudinary';

import 'react-tooltip/dist/react-tooltip.css';

import {
  PostContainer,
  PostGrid,
  PostHero,
  PostTitle,
  PostSubtitle,
  PostAuthor,
  PostImage,
  PoliclinicCollage,
  Tooltip,
  Paragraph,
  ItalicAccent,
  SectionTitle,
  CirceSquareCross,
  ParagraphWithBackground,
  SquareFigure,
  Cross,
  RedCrosses,
} from '../../../components/UI/Article';
import { Layout } from '../../../components/Layout';

export default function Polyclinic() {
  return (
    <Layout>
      <PostHero>
        <PostContainer>
          <PostTitle>
            Поликлиника <br /> или архитектурный <br /> памятник
          </PostTitle>
          <PostAuthor>АВТОР: АННА МЕДВЕДКОВА</PostAuthor>
        </PostContainer>
      </PostHero>
      <PostContainer>
        <PostGrid>
          <PostSubtitle>
            «Говорящая архитектура» — <br /> что это такое?
          </PostSubtitle>
          <Tooltip id="robert" />
          <Paragraph>
            Главный американский постмодернист{' '}
            <a
              data-tooltip-id="robert"
              data-tooltip-content="Роберт Вентури (англ. Robert Venturi, 25 июня 1925 — 18 сентября
            2018) — американский архитектор, лауреат Притцкеровской премии, один
            из родоначальников постмодернизма."
            >
              Роберт Вентури
            </a>{' '}
            разделил современную архитектуру на&nbsp;&laquo;сараи&raquo;
            (абстрактные объемы с&nbsp;декоративными фасадами)
            и&nbsp;&laquo;утки&raquo; (объекты, своей формой сообщающие
            о&nbsp;назначении&nbsp;&mdash; например, гигантский пончик
            у&nbsp;придорожного кафе). &laquo;Утки&raquo;&nbsp;&mdash;
            и&nbsp;есть перемена вектора от&nbsp;самодостаточности модернизма
            к&nbsp;говорящей архитектуре.
          </Paragraph>

          <Paragraph $indent={2} $size={28} $mt={56}>
            Выражение <ItalicAccent>architecture parlante</ItalicAccent>{' '}
            (&laquo;говорящая архитектура&raquo;) относится к&nbsp;зданиям,
            внешняя форма которых максимально выражает свою функцию или
            художественную идею, предложенную архитектором.
          </Paragraph>

          <Paragraph $mt={32}>
            В&nbsp;этой статье мы&nbsp;поговорим про яркие примеры советской
            архитектурной мысли и&nbsp;их&nbsp;истоки в&nbsp;искусстве. Первый
            пример: здание аптеки в&nbsp;типовом жилом микрорайоне Москвы
            Борисово. Тут само здание является собственной вывеской
            и&nbsp;превращается в&nbsp;архитектурный артефакт. Источником
            вдохновения для авторов аптеки служило творчество Казимира Малевича.
          </Paragraph>

          <PostImage $mt={64} $indent={2}>
            <CldImage
              src="/articles/policlinic/image_3_1_ipsui5"
              width={660}
              height={388}
              alt="Архитекторы: А.Ларин, Е.Асс, Л.Волчек, 1973 год"
              quality={70}
            />
            <figcaption>
              Архитекторы: А.Ларин, Е.Асс, Л.Волчек, 1973 год{' '}
            </figcaption>
          </PostImage>

          <SectionTitle>Малевич, дух и форма</SectionTitle>
          <Paragraph $mt={32} $indent={1}>
            Малевич, дух и форма Малевич создал беспредметное искусство. Он
            считал, что живопись самоценна, что форма и чистый цвет способны
            выразить духовное ощущение художника. И создав новое направление в
            живописи – супрематизм, он предложил новое восприятие формы.
          </Paragraph>
          <Paragraph $mt={32} $indent={1}>
            Супрематизм (от лат.supremus — превосходный) — на начальном этапе
            этот термин, восходивший к латинскому корню – «supremus», означал
            доминирование, превосходство цвета над всеми остальными свойствами
            живописи. В основание художник положил три формы: квадрат, крест и
            круг. Из этих форм рождаются все отношения в супрематической
            композиции.
          </Paragraph>
          <ParagraphWithBackground $mt={38}>
            <Paragraph>
              И&nbsp;в&nbsp;архитектуре Малевич дал толчок новым идеям.
              &laquo;Черный крест&raquo; 1915-го года трансформировался
              в&nbsp;его концепцию архитектонов. Это объемные композиции
              из&nbsp;гипса, которые создавал художник. Они были составлены
              из&nbsp;супрематических &laquo;блоков&raquo;, которые врезались
              друг в&nbsp;друга под прямым углом. Блоки&nbsp;&mdash; бруски,
              кубы, параллелепипеды, которые в&nbsp;свою очередь, являлись
              объемными аналогами супрематических фигур ‒ квадратов
              и&nbsp;прямоугольников.
            </Paragraph>
            <CirceSquareCross />
          </ParagraphWithBackground>
          <PoliclinicCollage>
            <figure>
              <CldImage
                src="/articles/policlinic/image_2_1_kwz9jz"
                width={462}
                height={440}
                alt="К. С. Малевич, “Чёрный крест”, 1915"
                quality={70}
              />
              <figcaption>К. С. Малевич, “Чёрный крест”, 1915</figcaption>
            </figure>
            <figure>
              <CldImage
                src="/articles/policlinic/image_14_xq2poo"
                width={260}
                height={451}
                alt="Композиция из гипса"
                quality={70}
              />
            </figure>
            <figure>
              <CldImage
                src="/articles/policlinic/image_34_mlavlb"
                width={360}
                height={286}
                alt="Композиция из гипса"
                quality={70}
              />
            </figure>
          </PoliclinicCollage>
          <ParagraphWithBackground $mt={38}>
            <Paragraph $indent={2}>
              С&nbsp;помощью этой концепции художник предлагал переосмыслить
              принципы, по&nbsp;которым люди придают форму зданиям. Малевич
              называл архитектоны &laquo;чистой архитектурой&raquo;, так как эти
              конструкции оперировали архитектурными категориями: массой,
              объемом, тектоникой, масштабом.
            </Paragraph>
            <SquareFigure />
          </ParagraphWithBackground>
          <ParagraphWithBackground $mt={38}>
            <Paragraph $indent={2}>
              Архитектоны как таковые не&nbsp;имели утилитарного назначения
              и&nbsp;не&nbsp;проектировались для реальной городской среды.
              Их&nbsp;цель заключалась в&nbsp;создании принципиально новой
              эстетики, &laquo;супрематического ордера&raquo;, который,
              по&nbsp;мнению Малевича, должен был быть положен в&nbsp;основу
              современной архитектуры.
            </Paragraph>
            <Cross />
          </ParagraphWithBackground>

          <PostImage $mt={64}>
            <CldImage
              src="/articles/policlinic/image_1_1_khobnx"
              width={628}
              height={437}
              alt="К.С. Малевич. Архитектон «Альфа», 1920. Гипс."
            />
            <figcaption>
              К.С. Малевич. Архитектон «Альфа», 1920. Гипс.
            </figcaption>
          </PostImage>

          <Paragraph $mt={64}>
            В&nbsp;набросках Ильи Чашника (ученика Малевича), который работал
            над проектированием &laquo;чистой архитектуры&raquo;, фронтальные
            изображения архитектонов демонстрируют осмысление пространственных
            супрематических конструкций как полноценных архитектурных
            сооружений. Он&nbsp;варьировал пропорциональные соотношения
            элементов и&nbsp;использовал цветовые контрасты, добиваясь тем самым
            динамического равновесия и&nbsp;монументальности архитектурной
            конструкции.
          </Paragraph>

          <SectionTitle>Поликлиника Протвино</SectionTitle>
          <Paragraph $mt={32} $indent={1}>
            Скоро стало ясно, что архитекторы приняли эти идеи. Мы&nbsp;видим
            это в&nbsp;том числе на&nbsp;примере архитектурных объектов, которые
            нас окружают. Вероятно, концепцией архитектонов в&nbsp;том числе
            вдохновлялись и&nbsp;авторы проекта поликлиники в&nbsp;Протвино.
            Архитектура поликлиники насыщена разными элементами, например,
            ребристым украшением при виде с&nbsp;улицы, свойственным модернизму,
            огромным крестом-кубом на&nbsp;фасаде и&nbsp;так далее. А&nbsp;если
            посмотреть на&nbsp;общий объем здания, прослеживается связь
            с&nbsp;архитектонами.
          </Paragraph>

          <PostImage $mt={64}>
            <CldImage
              src="/articles/policlinic/image_1_2_jwokez"
              width={460}
              height={316}
              alt="Поликлиника фасад"
            />

            <CldImage
              src="/articles/policlinic/image_4_1_zijeto"
              width={435}
              height={317}
              alt="Чашник Илья «Архитектон» 1925-1926. Гипс"
            />
            <figcaption>Чашник Илья «Архитектон» 1925-1926. Гипс</figcaption>
          </PostImage>

          <Paragraph $mt={64}>
            Сама поликлиника спроектирована очень удобно для посетителей: левое
            крыло&nbsp;&mdash; детская поликлиника, правое крыло&nbsp;&mdash;
            взрослая поликлиника. Между собой они соединены проходом между
            лифтовыми холлами. Вход по&nbsp;парадной лестнице со&nbsp;2-го этажа
            к&nbsp;регистратурам, на&nbsp;первом этаже&nbsp;&mdash; аптека.
            Причем войти можно и&nbsp;с&nbsp;первого этажа и&nbsp;подняться
            на&nbsp;лифте на&nbsp;нужный, что удобно для женщин с&nbsp;колясками
            и&nbsp;пенсионеров.
          </Paragraph>

          <Paragraph $mt={32}>
            Что в&nbsp;этом уникального, скажет читатель, например,
            в&nbsp;Зеленограде, тоже есть поликлиника с&nbsp;похожим замыслом:
          </Paragraph>

          <PostImage $mt={64} $indent={1}>
            <CldImage
              src="/articles/policlinic/image_5_1_ijcjfw"
              width={460}
              height={339}
              alt="Поликлиника в Зеленограде"
            />
          </PostImage>

          <Paragraph $mt={32}>
            Замысел похож, но&nbsp;здание Протвинской поликлиники далеко
            от&nbsp;типичного. Посмотрите на&nbsp;фасад, что вы&nbsp;видите?
            &laquo;Черный крест&raquo; Малевича в&nbsp;кубе! А&nbsp;также
            графичные лестницы, свойственные парадным входам зданий совмода.
          </Paragraph>

          <PostImage $mt={64}>
            <CldImage
              src="/articles/policlinic/image_37_c5ecmu"
              width={455}
              height={321}
              alt="Поликлиника фасад"
            />
            <figcaption>Чашник Илья «Архитектон» 1925-1926. Гипс</figcaption>
          </PostImage>

          <Paragraph $mt={64} $indent={1}>
            Сама поликлиника состоит из&nbsp;двух объемов: непосредственно
            здание поликлиники (детская и&nbsp;взрослая) и&nbsp;МСЧ
            &#8470;&nbsp;57&nbsp;(корпус для сотрудников ИФВЭ). Между ними
            надземный закрытый переход, а&nbsp;также зона парковки скорой
            помощи.
          </Paragraph>
          <Paragraph $mt={32} $indent={1}>
            С&nbsp;обратной стороны (стороны МСЧ) поликлиника расположена
            на&nbsp;Т-образном перекрестке. Центральная часть с&nbsp;ребристым
            декором, а&nbsp;по&nbsp;бокам окна двухэтаж-ного здания выполнены
            таким образом, что мы&nbsp;видим два ряда красных крестов.
          </Paragraph>
          <RedCrosses />
          <PostImage $mt={64}>
            <CldImage
              src="/articles/policlinic/image_6_1_rszwy4.jpg"
              width={960}
              height={615}
              alt="Поликлиника фасад"
            />
            <figcaption>Чашник Илья «Архитектон» 1925-1926. Гипс</figcaption>
          </PostImage>
          <Paragraph $mt={64} $indent={1}>
            Примечательно, что объем поликлиники вписан в&nbsp;единый ансамбль
            с&nbsp;рядом стоящими зданиями общежитий по&nbsp;улице Ленина.
            А&nbsp;с&nbsp;другой стороны своей плоской частью вписывается
            в&nbsp;параллель с&nbsp;главной пешеходной улицей города.
          </Paragraph>
          <Paragraph $mt={32} $indent={1}>
            Цвета поликлиники: белый кирпич и&nbsp;светлая каменная штукатурка
            с&nbsp;добавлением крошки декоративного камня, за&nbsp;счет которого
            поверхность сверкает на&nbsp;солнце. Для цветовых акцентов выбран
            натуральный терракотовый цвет. Сочетание этих материалов
            и&nbsp;цветов первоначально задумано архитектором Д.И. Кориным при
            проектировании Протвино. Подобные решения мы&nbsp;можем видеть
            на&nbsp;других зданиях города: Музыкальная школа, теоретический
            корпус ИФВЭ, Дом Ученых, Школа &#8470;&nbsp;3&nbsp;и&nbsp;другие.
          </Paragraph>
          <Paragraph $mt={32} $indent={1}>
            Что касается внутреннего убранства: как и&nbsp;во&nbsp;всем
            Протвино, использованы натуральные материалы&nbsp;&mdash; дерево,
            натуральный камень.
          </Paragraph>
          <PostImage $mt={64}>
            <CldImage
              config={{
                quality: 100,
              }}
              src="/articles/policlinic/image_1_eyaz43.jpg"
              width={359}
              height={479}
              alt="Лестничные марши рядом с лифтами"
            />
            <CldImage
              src="/articles/policlinic/image_km6rtk"
              quality={100}
              width={359}
              height={479}
              alt="Oткрытые пространства напротив окон дневного света."
              config={{
                quality: 100,
              }}
            />
            <figcaption>
              Лестничные марши рядом с лифтами, открытые пространства напротив
              окон дневного света.
            </figcaption>
          </PostImage>
          <PostImage $mt={64}>
            <CldImage
              quality={100}
              src="/articles/policlinic/image_2_2_xkf0yo"
              width={960}
              height={598}
              alt="Переход между зданиями поликлиники и МСЧ-57"
            />
            <figcaption>Переход между зданиями поликлиники и МСЧ-57</figcaption>
          </PostImage>
          <Paragraph $mt={64}>
            Еще одним памятником той эпохи являются металлические
            вывески&nbsp;&mdash; яркий пример советского леттеринга этого
            периода.
          </Paragraph>
          <PostImage $mt={64}>
            <CldImage
              src="/articles/policlinic/image_11_wpfwo6"
              width={403}
              height={264}
              alt="Поликлиника фасад"
            />
            <CldImage
              src="/articles/policlinic/image_10_tn3snc"
              width={418}
              height={264}
              alt="Поликлиника фасад"
            />
          </PostImage>

          <SectionTitle>Настоящее и будущее</SectionTitle>
          <Paragraph $mt={32} $indent={1}>
            В&nbsp;новую эпоху гуманистический подтекст лечебных заведений
            померк&nbsp;&mdash; знаменитую аптеку в&nbsp;Москве перекрасили,
            а&nbsp;потом переделали в&nbsp;продуктовый. С&nbsp;нашей&nbsp;же
            поликлиники сняли родные вывески, по&nbsp;официальной информации
            от&nbsp;администрации поликлиники они безвозвратно утеряны.
          </Paragraph>
          <Paragraph $mt={32} $indent={1}>
            Фасад здания в&nbsp;рамках капитального ремонта на&nbsp;данный
            момент покрашен в&nbsp;желто-коричневый цвет. Вместо двух вывесок
            будет одна типовая синяя вывеска &laquo;Моя поликлиника&raquo;.
          </Paragraph>

          <PostImage $mt={64}>
            <CldImage
              src="/articles/policlinic/image_9_1_l0o0ds"
              width={960}
              height={419}
              alt="Поликлиника перекрашенный фасад"
            />
          </PostImage>

          <Paragraph $mt={64}>
            Как мы&nbsp;видим на&nbsp;этом примере, современная администрация
            не&nbsp;видит архитектурной ценности исторических зданий
            и&nbsp;не&nbsp;воспринимает город как единое целое. Результат этого
            печальный: город стремительно теряет свой облик.
          </Paragraph>
          <Paragraph $mt={32}>
            Корень проблемы лежит в&nbsp;первую очередь в&nbsp;отсутствии
            позиции архитектора и&nbsp;контроля этого вопроса на&nbsp;уровне
            города. Мы&nbsp;надеемся, что это ошибочное решение будет исправлено
            и&nbsp;поликлинике вернут её&nbsp;&laquo;родной&raquo;, задуманный
            архитекторами, цвет.
          </Paragraph>
        </PostGrid>
      </PostContainer>
    </Layout>
  );
}
