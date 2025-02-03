import React from 'react';
import Image from 'next/image';

import {
  ArticleSubtitle,
  ArticleTitle,
  PostAuthor,
  PostHero,
  Tooltip,
} from '../../../components/UI/Article';

import { ArticleHeadMeta } from '../../../components/';

import {
  Container,
  ArticleContainer,
  Figure,
  ImageContainer,
  AudioFigure,
} from '../../../components/UI/Generic';

import { Paragraph, SubSection } from '../../../components/Typography';
import { Layout } from '../../../components/Layout';

import { SwiperSlide } from 'swiper/react';
import { Slider } from '../../../components/UI/Slider/Slider';

import 'react-tooltip/dist/react-tooltip.css';

export default function Article() {
  return (
    <>
      <ArticleHeadMeta
        title="Музыкальный гараж"
        ogDescription="Музыкальный гараж Глеба"
      />
      <Layout>
        <PostHero cover="url(/article/gleb-garage/thumbnail-header.jpeg)">
          <ArticleTitle>
            МУЗЫКАЛЬНЫЙ ГАРАЖ <br /> разговор с Глебом Маккартни
          </ArticleTitle>
          <PostAuthor>АВТОР: Анна Медведкова</PostAuthor>
        </PostHero>
        <ArticleContainer>
          <Container>
            <ArticleSubtitle>Музыкальный гараж</ArticleSubtitle>
            <Paragraph>
              Протвино окружен гаражами с&nbsp;трех сторон: АЗС, Дружба
              и&nbsp;Очистные. Череда разноцветных, обаятельных
              и&nbsp;не&nbsp;очень дверей. В&nbsp;этой рубрике мы&nbsp;хотим
              исследовать пространство гаража, узнать, что происходит
              за&nbsp;металлическими дверями.
            </Paragraph>
            <Paragraph>
              <Tooltip id="olivia" data-tooltip-place="top-end" />
              <a
                data-tooltip-id="olivia"
                data-tooltip-content="Оливия Эрлангер, исследовательница гаражной культуры как символа
                контркультуры и модных стартапов в США"
              >
                Современный гараж шире стен, что его держат.
              </a>
              &nbsp; Джeфф Безос создал в&nbsp;своем гараже Amazon, одну
              из&nbsp;самых крупных компаний в&nbsp;мире. Уолт Дисней
              с&nbsp;братом оборудовали свою Disney Brothers Cartoon Studio
              в&nbsp;небольшом деревянном гараже своего дяди. Легенда гласит,
              что и&nbsp;свой первый макинтош Стив Джобс со&nbsp;Стивом Возняком
              собрали в&nbsp;гараже. Youtube&nbsp;&mdash; такая&nbsp;же история,
              и&nbsp;это только известные истории на&nbsp;весь мир.
            </Paragraph>
            <Paragraph>
              Гараж уже давно перестал быть просто местом для стоянки
              автомобиля. Мы, редакция полным составом, любим гаражи
              и&nbsp;ничего не&nbsp;можем с&nbsp;этим поделать
              (и&nbsp;не&nbsp;хотим). Мы&nbsp;рассматриваем его как
              альтернативное поле экспериментов, территорию творчества, где нет
              социальных рамок и&nbsp;норм, где каждый может создать что-то
              свое.
            </Paragraph>
            <Paragraph>
              Слово <i>garage</i>, появившееся в&nbsp;английском языке
              в&nbsp;1902&nbsp;году, происходит от&nbsp;французского слова
              garer, означающего убежище. И&nbsp;кажется, что для многих гараж
              становится тем пространством, куда сбегают от&nbsp;будничной
              рутины, создавая там свой маленький интимный мирок. Местом,
              в&nbsp;котором зарождается творчество.
            </Paragraph>
            <Paragraph>
              Надеемся, что эта статья станет первой в&nbsp;серии,
              а&nbsp;начинаем с&nbsp;вдохновляющей истории о&nbsp;музыке, дружбе
              и&nbsp;о&nbsp;пути от&nbsp;гаража к&nbsp;большой сцене.
            </Paragraph>

            <ImageContainer>
              <Image
                src="/article/gleb-garage/hero.jpg"
                width="1440"
                height="759"
                alt="Глеб Сорокин - Владелец гаража"
              />
            </ImageContainer>

            <Paragraph>
              В&nbsp;этом материале говорим с&nbsp;Глебом Сорокиным. Сейчас Глеб
              играет в&nbsp;двух музыкальных коллективах&nbsp;&mdash; The
              BeatLove, официальном российском трибьюте группы{' '}
              <a href="https://beatlove.net/" target="_blank" rel="noreferrer">
                The Beatles
              </a>
              , и&nbsp;столичной инди-поп группе &laquo;
              <a
                href="https://vk.com/lavmusicru?ysclid=m5vleq0a2b148378429"
                target="_blank"
                rel="noreferrer"
              >
                ЛАВ
              </a>
              &raquo;. Концертную деятельность Глеб умудряется сочетать
              с&nbsp;работой на&nbsp;полный день в&nbsp;банке,
              а&nbsp;в&nbsp;свободное от&nbsp;работы, концертов и&nbsp;прочих
              увлечений время является владельцем &laquo;музыкального
              гаража&raquo;.
            </Paragraph>

            <SubSection>
              <ArticleSubtitle>С чего все начиналось</ArticleSubtitle>
              <Paragraph>
                У&nbsp;меня был некоторый музыкальный бэкграунд: я&nbsp;окончил
                музыкальную школу по&nbsp;классу фортепиано, по-дворовому освоил
                гитару в&nbsp;формате дачно-костровых посиделок. Идея играть
                и&nbsp;записывать музыку в&nbsp;гараже родилась случайно. Как-то
                накануне моего дня рождения двоюродный брат предложил :
                &laquo;Слушай, я&nbsp;тебя сколько знаю, ты&nbsp;каждую
                свободную минуту &bdquo;настукиваешь&ldquo;, давай на&nbsp;день
                рождения купим тебе барабаны. У&nbsp;тебя&nbsp;же есть
                гараж&raquo;.
              </Paragraph>

              <Paragraph>
                Это был момент, когда я&nbsp;подумал: &laquo;Классная идея!
                Почему она не&nbsp;пришла мне раньше?&raquo; Меня всегда тянуло
                к&nbsp;барабанам, хоть фортуна и&nbsp;шанс попасть барабанщиком
                в&nbsp;школьный ансамбль от&nbsp;меня в&nbsp;свое время нелепым
                образом отвернулись. В&nbsp;2013 году я&nbsp;уже работал
                и&nbsp;мог позволить себе купить барабаны. Так на&nbsp;Авито
                была приобретена весьма бюджетная барабанная установка,
                получившая прописку в&nbsp;гараже. Он&nbsp;был еще совсем
                &laquo;голый&raquo;&nbsp;&mdash; я&nbsp;продолжал загонять сюда
                свою машину и&nbsp;обслуживал ее&nbsp;тут&nbsp;же.
                Но&nbsp;с&nbsp;появлением ударной установки во&nbsp;мне
                проснулась непреодолимая тяга и&nbsp;стремление сюда приходить
                и&nbsp;что-то играть.
              </Paragraph>
            </SubSection>

            <ImageContainer>
              <Slider>
                <SwiperSlide>
                  <Image
                    src="/article/gleb-garage/garage_2.jpg"
                    width="1200"
                    height="675"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/article/gleb-garage/garage_1.jpg"
                    width="1200"
                    height="675"
                    alt=""
                  />
                </SwiperSlide>
              </Slider>
            </ImageContainer>

            <SubSection>
              <ArticleSubtitle>
                Создание гаражного коллектива и первые концерты
              </ArticleSubtitle>

              <Paragraph>
                Коллектив собрался по&nbsp;цепочке. Как только у&nbsp;меня
                появились барабаны, я&nbsp;оповестил своего одноклассника
                и&nbsp;хорошего друга Сережу Козлова, у&nbsp;которого уже была
                электрогитара. Ранее мы&nbsp;с&nbsp;ним неоднократно обсуждали
                идею собираться и&nbsp;музицировать вместе. Серега был
                в&nbsp;тесном контакте с&nbsp;еще одним нашим одноклассником
                Серегой Глазковым, у&nbsp;которого тоже была электрогитара.
                И&nbsp;что не&nbsp;менее важно, у&nbsp;него была жена
                с&nbsp;клавишами, Даша. Еще одним участником намечавшегося бэнда
                стал Костик,с которым оба Сергея играли в&nbsp;теннис
                и&nbsp;тоже хорошо знали друг друга.
              </Paragraph>
              <Paragraph>
                Так мы&nbsp;все собрались и&nbsp;с&nbsp;конца 2013-го года
                начали предпринимать отчаянные попытки что-то складное играть.
                Надо признаться, по-началу у&nbsp;нас получалось не&nbsp;очень
                хорошо. Мы&nbsp;попробовали репетировать и&nbsp;поняли, что это
                все как &laquo;лебедь, рак и&nbsp;щука&raquo;. Другими словами,
                есть такое понятие как сыгранность и&nbsp;у&nbsp;нас&nbsp;ее,
                разумеется, не&nbsp;было. Как ее&nbsp;добиться, с&nbsp;чего
                начать, чтобы ансамбль зазвучал вместе, было непонятно.
                Но&nbsp;долгие часы по&nbsp;вечерам в&nbsp;гараже и&nbsp;наш
                огромный энтузиазм постепенно начали приносить плоды. Чем больше
                мы&nbsp;играли, тем лучше стало получаться.
              </Paragraph>
              <Paragraph>
                С&nbsp;первых репетиций мы&nbsp;стали играть The Beatles, потому
                что я&nbsp;битломан, Серега Глазков тоже большой знаток
                творчества ливерпульской четверки, остальные вскоре разделили
                нашу страсть. The Beatles были и&nbsp;остаются тем идеальным,
                на&nbsp;мой взгляд, материалом, который легко учить
                и&nbsp;достаточно легко воспроизвести. Песни
                доступные&nbsp;&mdash; простые по&nbsp;звучанию, красивые
                и&nbsp;не&nbsp;требуют больших материальных вложений.
                Мы&nbsp;долго раздумывали, какие еще песни взять
                в&nbsp;сет-лист, и&nbsp;со&nbsp;временем расширили свой
                репертуар, включив туда и&nbsp;Led Zeppelin, и&nbsp;Radiohead,
                и&nbsp;еще позже Tame Impala, и&nbsp;что-то еще.
              </Paragraph>

              <ImageContainer>
                <Image
                  src="/article/gleb-garage/jazz-do-it.png"
                  width="760"
                  height="471"
                  alt=""
                />
              </ImageContainer>

              <Paragraph>
                Назвались мы&nbsp;JazzDoIt. Вообще мы&nbsp;не&nbsp;придавали
                особого значения названию, просто нужно было как-то назваться.
                Jazz&nbsp;&mdash; потому что для человека, далекого
                от&nbsp;музыки, это сумбурная музыка, где никто друг
                в&nbsp;друга не&nbsp;попадает, все кое-как звучат,&nbsp;&mdash;
                и&nbsp;нас это характеризовало как нельзя удачно.
              </Paragraph>
              <Paragraph>
                Сначала играли для себя, но&nbsp;как только скилл окреп,
                возникло желание показать себя публике. Мы&nbsp;начали искать
                такую возможность, и&nbsp;через полгода у&nbsp;нас состоялся
                первый концерт. Это было в&nbsp;Высокиничах на&nbsp;даче моих
                друзей. Мы&nbsp;приехали туда со&nbsp;всей аппаратурой,
                инструментами, колонками, расположились в&nbsp;доме
                и&nbsp;устроили концерт из&nbsp;трех отделений.
              </Paragraph>
            </SubSection>

            <ImageContainer>
              <Slider>
                <SwiperSlide>
                  <Image
                    src="/article/gleb-garage/jazz-do-it-dacha_1.jpg"
                    width="1280"
                    height="720"
                    alt=""
                  />
                </SwiperSlide>
                {/* <SwiperSlide>
                <Image
                  src="/article/gleb-garage/jazz-do-it-dacha_2.jpg"
                  width="1024"
                  height="680"
                  alt=""
                />
              </SwiperSlide> */}
                <SwiperSlide>
                  <Image
                    src="/article/gleb-garage/jazz-do-it-dacha_3.jpg"
                    width="1280"
                    height="720"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/article/gleb-garage/jazz-do-it-dacha_4.jpg"
                    width="1280"
                    height="720"
                    alt=""
                  />
                </SwiperSlide>
              </Slider>
            </ImageContainer>

            <Paragraph>
              Потом кто-то подсказал, что в&nbsp;парке Дракино
              в&nbsp;определенные дни есть свободный микрофон для желающих
              артистов. И&nbsp;мы&nbsp;такие &laquo;Вау, отлично! Это наш шанс.
              Мы&nbsp;сыграем, мы&nbsp;там понравимся. Они нас будут каждый
              выходной звать.&raquo; Это было необычно. Там была сцена возле
              фонтанчика, скучающий звукорежиссер, в&nbsp;основном никакой
              активности. Редко на&nbsp;сцене какой-нибудь ребенок что-то пел
              к&nbsp;умилению родителей. И&nbsp;тут приезжает целая группа,
              с&nbsp;кучей оборудования, которое они все несут и&nbsp;несут
              на&nbsp;сцену&nbsp;&mdash; гитары, барабаны, комбики.
            </Paragraph>

            <ImageContainer>
              <Image
                src="/article/gleb-garage/drakino.jpg"
                width="1280"
                height="850"
                alt=""
              />
            </ImageContainer>

            <Paragraph>
              Мы&nbsp;вышли, спели три песни. Я&nbsp;очень переживал, голос
              дрожал, казалось вообще ничего не&nbsp;мог. Сейчас пересматриваю
              видео, а&nbsp;мне там из&nbsp;зала кричат &laquo;Давай потише,
              парень, орешь!&raquo; Но&nbsp;мы&nbsp;остались довольны,
              чувствовали необычайный подъем, что мы&nbsp;смогли. На&nbsp;этой
              эйфории мы&nbsp;продолжили маршрут из&nbsp;Дракино к&nbsp;Костику
              на&nbsp;дачу. Вот этот кадр сделан ровно в&nbsp;тот день. Это уже
              вечером на&nbsp;даче, мы&nbsp;отдыхаем, расслабились, вечерняя
              программа у&nbsp;нас, вечернее отделение. Это памятное фото висит
              тут в&nbsp;гараже.
            </Paragraph>

            <ImageContainer>
              <Slider>
                <SwiperSlide>
                  <Image
                    src="/article/gleb-garage/kostik-dacha_1.jpg"
                    width="1200"
                    height="768"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/article/gleb-garage/kostik-dacha_2.jpg"
                    width="1200"
                    height="768"
                    alt=""
                  />
                </SwiperSlide>
              </Slider>
            </ImageContainer>

            <Paragraph>
              Потом еще играли в&nbsp;&laquo;Сказке&raquo; раза три,
              в&nbsp;Абриколе, в&nbsp;АнгелРоме, в&nbsp;гостинице Протва. Просто
              приходили и&nbsp;спрашивали, можно&nbsp;ли у&nbsp;вас играть живую
              музыку. Никто не&nbsp;отказывал, спасибо местным заведениям.
              В&nbsp;Абриколе до&nbsp;сих пор часто играет живая музыка, хозяева
              хорошие и&nbsp;отзывчивые, всегда рады принять музыкантов.
            </Paragraph>

            <ImageContainer>
              <Slider>
                <SwiperSlide>
                  <Image
                    src="/article/gleb-garage/skazka.jpg"
                    width="760"
                    height="471"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/article/gleb-garage/angel-rom.jpg"
                    width="760"
                    height="471"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/article/gleb-garage/protva.jpg"
                    width="760"
                    height="471"
                    alt=""
                  />
                </SwiperSlide>
              </Slider>
            </ImageContainer>

            <Paragraph>
              На&nbsp;концерт обычно уезжает добрая половина оборудования
              гаража, потом сюда возвращается, мучительно долго расставляется,
              и&nbsp;мы&nbsp;играем ту&nbsp;же программу для себя. Это сложилось
              в&nbsp;такую необычную практику, не&nbsp;помню, чтобы
              мы&nbsp;отступали от&nbsp;нее. Потому что если концерт хороший,
              у&nbsp;тебя такой мощный прилив дофамина, что его хочется как-то
              продлить.
            </Paragraph>
            <Paragraph>
              И&nbsp;вот с&nbsp;нашей гаражной группой JazzDoIt с&nbsp;2014-го
              до&nbsp;2017-го года мы&nbsp;три года активно выступали.
              В&nbsp;2018 отыграли последний концерт на&nbsp;дне города
              в&nbsp;Сказке, и&nbsp;с&nbsp;тех пор не&nbsp;собирались.
            </Paragraph>

            <SubSection>
              <ArticleSubtitle>
                Как стены гаража вывели на большую сцену
              </ArticleSubtitle>

              <Paragraph>
                В&nbsp;2018 году у&nbsp;нас стало меньше активностей,
                и&nbsp;к&nbsp;тому времени уже пару раз приезжали ребята
                из&nbsp;группы ЛАВ, просто играли для своих музыку
                в&nbsp;гараже. У&nbsp;ЛАВ тогда ушел басист, и&nbsp;Паша
                Алексеев предложил мне к&nbsp;ним присоединиться. Паша очень
                техничный и&nbsp;талантливый музыкант из&nbsp;Протвино,
                мы&nbsp;знакомы еще со&nbsp;школьных времен. Как гитарист
                он&nbsp;уже успел поиграть в&nbsp;различных московских инди
                коллективах. Каждый раз, когда он&nbsp;приезжал сюда, это был
                небольшой праздник. Паша играл соло, импровизировал, было очень
                круто. Приходил он&nbsp;нечасто, но&nbsp;метко. Разумеется, Паша
                тоже битломан.
              </Paragraph>

              <Paragraph>
                С&nbsp;Beatlove история такая. Играя каверы на&nbsp;Битлз,
                узнать о&nbsp;существовании профессиональных групп, занимающихся
                тем&nbsp;же было лишь вопросом времени. В&nbsp;Москве регулярно
                проводились битловские музыкальные вечеринки. Еще студентом
                я&nbsp;несколько раз бывал на&nbsp;таких концертах, где
                выступали The Beatween, Dans Ramblers и&nbsp;другие. И&nbsp;тут
                Даша наткнулась на&nbsp;московскую трибьют группу под названием
                TheBeatLove. Их&nbsp;фишкой, как трибьюта, было не&nbsp;только
                звучание, близкое к&nbsp;оригиналу, но&nbsp;и&nbsp;костюмы,
                прически, юмор&nbsp;&mdash; все как у&nbsp;настоящих Битлз. Это
                не&nbsp;могло нас не&nbsp;заинтриговать. Мы&nbsp;сходили
                на&nbsp;шоу, все очень понравилось&nbsp;&mdash; костюмы,
                профессиональное исполнение&nbsp;&mdash; &laquo;круто!
                вот&nbsp;бы и&nbsp;нам!&raquo;. Следуя примеру,
                мы&nbsp;обзавелись одинаковыми шерстяными жилетками
                на&nbsp;белые рубашки и&nbsp;дали пару концертов с&nbsp;таким
                луком.
              </Paragraph>
              <Paragraph>
                Потом как-то раз Даша прислала мне ссылку на&nbsp;пост
                ВКонтакте, в&nbsp;котором сообщалось, что The BeatLove ищут себе
                нового музыканта на&nbsp;роль Пола Маккартни. В&nbsp;объявлении
                красочно расписывались перспективы: регулярные концерты
                по&nbsp;всей&nbsp;РФ и&nbsp;не&nbsp;только, теле-
                и&nbsp;радиоэфиры, съемки и&nbsp;фотосессии, наконец,
                благодарность и&nbsp;любовь поклонников. Одним словом,
                возможность примерить жизнь настоящего битла!
              </Paragraph>
              <Paragraph>
                Для меня как битломана и&nbsp;музыканта все это было слишком
                соблазнительно, чтобы не&nbsp;попробовать. Я&nbsp;откликнулся,
                прошел небольшое прослушивание, познакомился с&nbsp;группой.
                Затем уже на&nbsp;их&nbsp;концерте исполнил с&nbsp;ними пару
                песен, после чего мне было предложено присоединиться
                к&nbsp;Beatlove. Но&nbsp;после недельных раздумий в&nbsp;итоге
                пришлось отказать, потому что очень много гастрольных дней
                выпадало на&nbsp;будни. Это значит, мне нужно брать
                на&nbsp;основной работе отпуск, я&nbsp;посчитал, прикинул, что
                не&nbsp;смогу вынести такую нагрузку одними отпусками.
                У&nbsp;меня их&nbsp;всего 28&nbsp;дней в&nbsp;году. Но&nbsp;был
                найден компромисс: мне предложили играть, когда могу,
                а&nbsp;когда не&nbsp;могу, меня&nbsp;бы меняли на&nbsp;дублера.
                И&nbsp;я&nbsp;согласился.
              </Paragraph>

              <ImageContainer>
                <Slider>
                  <SwiperSlide>
                    <Image
                      src="/article/gleb-garage/beatlove_1.jpeg"
                      width="1280"
                      height="853"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="/article/gleb-garage/beatlove_2.jpeg"
                      width="1280"
                      height="853"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="/article/gleb-garage/gleb-piano.jpeg"
                      width="847"
                      height="561"
                      alt=""
                    />
                  </SwiperSlide>
                </Slider>
              </ImageContainer>

              <Paragraph>
                Ту&nbsp;же роль что сейчас исполняю в&nbsp;BeatLove&nbsp;&mdash;
                ее&nbsp;репетировал и&nbsp;осваивал в&nbsp;стенах гаража. Играл
                те&nbsp;же самые песни и&nbsp;на&nbsp;том&nbsp;же инструменте.
                Правда я&nbsp;играл на&nbsp;праворукой гитаре, а&nbsp;потом
                переучился на&nbsp;леворукую. Я&nbsp;левша от&nbsp;природы,
                в&nbsp;гараже играл как правша, так как гитара была праворукий
                бас. А&nbsp;в&nbsp;BeatLove они полностью повторяют как играли
                The Beatles, а&nbsp;Пол Маккартни, чью роль я&nbsp;исполняю,
                тоже был левша, так что теперь играю на&nbsp;леворуком
                инструменте.
              </Paragraph>
            </SubSection>

            <SubSection>
              <ArticleSubtitle>
                Гаражные мероприятия, концерты, ивенты
              </ArticleSubtitle>

              <Paragraph>
                Не&nbsp;смотря на&nbsp;то, что наш первоначальный протвинский
                коллектив давно распался, гараж продолжает жить своей жизнью.
                Когда мы&nbsp;оформились как коллектив, потихоньку стали
                знакомиться с&nbsp;другими группами города, сюда стали
                захаживать другие музыканты. Выступали не&nbsp;только
                на&nbsp;сценах, но&nbsp;и&nbsp;в&nbsp;гараже тоже были
                концерты&nbsp;&mdash; приходили люди, открывали двери
                и&nbsp;играли. В&nbsp;основном если были события, то&nbsp;для
                своего узкого круга. Например, приехали музыканты, с&nbsp;ними
                кто-то пришел, ты&nbsp;кому-то позвонил тоже, другу-приятелю,
                небольшой компанией закрылись и&nbsp;играете.
              </Paragraph>
              <Paragraph>
                Во&nbsp;времена JazzDoIt были один или два концерта
                в&nbsp;теплое время года, когда мы&nbsp;открывали ворота
                и&nbsp;играли для своих родителей, друзей, приходили семьи
                с&nbsp;детьми, ставили столики, но&nbsp;это тоже был узкий круг.
              </Paragraph>
              <Paragraph>
                В&nbsp;2022-м был первый раз, когда гараж открыл двери для
                широкой аудитории. Это было мероприятие для архитекторов
                из&nbsp;Москвы, для них был организован 3-х дневный интенсив
                в&nbsp;Протве. И&nbsp;в&nbsp;рамках развлекательной программы
                в&nbsp;один из&nbsp;дней мы&nbsp;с&nbsp;группой ЛАВ дали
                концерт. Это было конечно круто. Гордость и&nbsp;радость
                распирала: хотелось этим со&nbsp;всеми делиться, как у&nbsp;нас
                тут классно. Было здорово, что людям хорошо, а&nbsp;место еще
                напитается энергиями, добрыми эмоциями новых людей, потому что
                столько новых приятных лиц пришло.
              </Paragraph>

              <ImageContainer>
                <SwiperSlide>
                  <Image
                    src="/article/gleb-garage/love_concert.jpg"
                    width="760"
                    height="471"
                    alt=""
                  />
                </SwiperSlide>
              </ImageContainer>

              <Paragraph>
                Интересно, что несмотря на&nbsp;то, что были в&nbsp;основном
                московские студенты-архитекторы и&nbsp;это было
                их&nbsp;мероприятие, мне кажется, это дало импульс и&nbsp;другим
                именно местным гаражным вечеринкам. Вот туда уже стали приходить
                новые протвинцы, и&nbsp;всех, мне кажется, интересовал уже
                именно гараж, как определенное место, музыкальная площадка.
              </Paragraph>
              <Paragraph>
                В&nbsp;этом направлении в&nbsp;первую очередь заслуга Даши как
                организатора и&nbsp;одного из&nbsp;&laquo;управляющих&raquo;
                этого места. Она, так сказать, стояла у&nbsp;истоков&nbsp;и,
                влившись в&nbsp;сообщество протвинского самодеятельного
                активизма, начала гараж использовать еще и&nbsp;таким
                образом&nbsp;&mdash; для мероприятий. Что я&nbsp;вообще обеими
                руками поддерживаю и&nbsp;рад и&nbsp;помочь, и&nbsp;сам
                участвовать.
              </Paragraph>
              <Figure>
                <Image
                  src="/article/gleb-garage/dasha.png"
                  width="760"
                  height="471"
                  alt=""
                />
              </Figure>
              <Paragraph>
                Этим летом мы&nbsp;провели первый концерт на&nbsp;широкую
                аудиторию&nbsp;&mdash; играли The Beatles. Собрали уличную
                мебель, натянули свет, баннеры и&nbsp;дали объявления
                в&nbsp;общественных группах города&nbsp;&mdash; позвали всех,
                кому интересно. Это было немного экспромтом, играли смешанным
                составом, местами очень сыро, но&nbsp;весело. Все было уютно
                оформлено, пришло много людей разных возрастов, танцевали
                и&nbsp;слушали музыку до&nbsp;последнего. Я&nbsp;чувствовал
                радость и&nbsp;эстетически, и&nbsp;музыкально.
              </Paragraph>
              <ImageContainer>
                <Slider>
                  <SwiperSlide>
                    <Image
                      src="/article/gleb-garage/garage-public-concert.png"
                      width="760"
                      height="471"
                      alt=""
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image
                      src="/article/gleb-garage/garage-public-concert-inside.png"
                      width="760"
                      height="471"
                      alt=""
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image
                      src="/article/gleb-garage/van.png"
                      width="760"
                      height="471"
                      alt=""
                    />
                  </SwiperSlide>
                </Slider>
              </ImageContainer>
            </SubSection>

            <SubSection>
              <ArticleSubtitle>Инстументы и аппаратура</ArticleSubtitle>
              <Paragraph>
                Первоначально гараж был очень гулким, потому что стены
                и&nbsp;само помещение были пустые. Да&nbsp;и&nbsp;вообще
                с&nbsp;непривычки играть громкую музыку и&nbsp;слышать барабаны
                для нас было некоторым стрессом. Мы&nbsp;подумали, как решить
                эту задачку. Было несколько подходов.
              </Paragraph>

              <Paragraph>
                Сперва появился старый икеевский ковёр на&nbsp;стене. Затем
                пришла идея соорудить так называемый Drum Shield, то&nbsp;есть
                перегородку для барабанов. Просто потому что наши уши пока еще
                не&nbsp;привыкли к&nbsp;громкому звучанию акустической установки
                в&nbsp;столь малом помещении.
              </Paragraph>
              <ImageContainer>
                <Slider>
                  <SwiperSlide>
                    <Image
                      src="/article/gleb-garage/construction-craft.jpg"
                      width="760"
                      height="471"
                      alt=""
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image
                      src="/article/gleb-garage/construction-mount.jpg"
                      width="760"
                      height="471"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="/article/gleb-garage/construction-test.jpg"
                      width="760"
                      height="471"
                      alt=""
                    />
                  </SwiperSlide>
                </Slider>
              </ImageContainer>

              <Paragraph>
                Обычно в&nbsp;фабричном исполнении это такое оргстекло, которое
                отгораживает барабанщика и&nbsp;всю его установку.
                Мы&nbsp;сделали нечто подобное, просто сколотив рамки, заложив
                минвату и&nbsp;обшив их&nbsp;оргалитом. Собрали, ничего
                не&nbsp;получилось, не&nbsp;возымело никакого эффекта. Разобрали
                конструкцию, пустили ее&nbsp;на&nbsp;стеновые акустические
                панели. И&nbsp;это было правильным решением.
              </Paragraph>

              <Paragraph>
                Потом кто-то из&nbsp;местных музыкантов нам подсказал, что
                неплохо&nbsp;бы положить больше ковров на&nbsp;пол,
                и&nbsp;теперь их&nbsp;целая мозаика тут лежит. Один из&nbsp;этих
                ковров нам из&nbsp;какого-то другого музыкального гаража
                притащил Сергей Борзенко, известный протвинский басист. Еще
                я&nbsp;придумал повесить повесить басовые ловушки в&nbsp;углах.
                В&nbsp;итоге гараж наполнился вещами без сильного ущерба
                полезной площади, и&nbsp;звук в&nbsp;помещении стал комфортнее.
              </Paragraph>

              <Figure>
                <Image
                  src="/article/gleb-garage/gleb-on-drums.png"
                  width="760"
                  height="471"
                  alt=""
                />
              </Figure>

              <Paragraph>
                Когда ребята из&nbsp;Beatlove сюда первый раз приехали,
                им&nbsp;очень понравилось. А&nbsp;они поиграли на&nbsp;массе
                площадок и&nbsp;репетиционных баз в&nbsp;Москве, будучи
                профессиональными музыкантами. Сказали, что звук комфортный
                и&nbsp;что ещё не&nbsp;встречали в&nbsp;Москве такой базы, как
                здесь всё звучит. Тут и&nbsp;плотный звук, и&nbsp;себя слышишь,
                и&nbsp;всех остальных слышишь, и&nbsp;кайфуешь.
              </Paragraph>

              <Paragraph>
                По&nbsp;аппаратуре какой-то постоянный апгрейд проходил:
                микрофоны, звуковые карты, колонки, комбики, гитарные
                процессоры, коммутация, усилители для наушников, наушники, еще
                что-то, чтобы можно было музыку писать.
              </Paragraph>

              <Figure>
                <Image
                  src="/article/gleb-garage/mixer.png"
                  width="760"
                  height="471"
                  alt=""
                />
              </Figure>

              <Paragraph>
                Одним из&nbsp;последних приобретений стал цифровой микшер.
                Помимо того, чтобы управлять общим звуком из&nbsp;колонок,
                к&nbsp;нему можно подключать ноутбук и&nbsp;записывать музыку
                по&nbsp;отдельным дорожкам. Например, не&nbsp;так давно
                мы&nbsp;записали Вальс Протон, который написал Паша Алексеев.
              </Paragraph>

              <Figure>
                <Image
                  src="/article/gleb-garage/pasha.png"
                  width="760"
                  height="471"
                  alt=""
                />
                <AudioFigure>
                  <audio controls src="/article/gleb-garage/proton.wav"></audio>
                </AudioFigure>
              </Figure>

              <Paragraph>
                Количество коммутаций росло, и&nbsp;моя музыкальная деятельность
                развивалась одновременно с&nbsp;интересом ко&nbsp;всякому
                оборудованию. Во&nbsp;мне открылась страсть к&nbsp;изготовлению
                приборов, музыкальных примочек. Например, вот собственноручно
                сделанный ламповый предусилитель.
              </Paragraph>

              <ImageContainer>
                <Slider>
                  <SwiperSlide>
                    <Image
                      src="/article/gleb-garage/lamp-amp.png"
                      width="1280"
                      height="720"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="/article/gleb-garage/pedal.png"
                      width="1280"
                      height="720"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="/article/gleb-garage/adapteres-mangement.png"
                      width="1280"
                      height="720"
                      alt=""
                    />
                  </SwiperSlide>
                </Slider>
              </ImageContainer>
              <Paragraph>
                Еще одна работа: у&nbsp;меня была ретро радиола Rigonda
                в&nbsp;нерабочем состоянии, нужно было сделать профилактику.
                Я&nbsp;целый месяц ее&nbsp;паял и&nbsp;переделал в&nbsp;еще один
                гитарный комбик и еще немного его достроил.
              </Paragraph>

              <Figure>
                <Image
                  src="/article/gleb-garage/radiola.jpg"
                  width="760"
                  height="471"
                  alt=""
                />
              </Figure>
            </SubSection>
            <Paragraph>
              <b>
                Какой сетап аппаратуры ты&nbsp;должен иметь, чтобы играть
                гаражную музыку?
              </b>
            </Paragraph>
            <Paragraph>
              Это отличный вопрос! Все зависит от&nbsp;того, какую музыку
              ты&nbsp;хочешь играть. Если это классический гаражный рок,
              то&nbsp; начать стоит и инстументов: акустические барабаны,
              гитара, бас, микрофон. Чтобы все это звучало, нужны комбики для
              гитар и колонки для вокалиста. Плюсом будет наличие микшера, но на
              первых порах можно обоийтись и без него. Ну&nbsp;а&nbsp;если
              ты&nbsp;электронный музыкант или диджей, тебе не&nbsp;нужны
              барабаны, не&nbsp;нужен гитарный комбик, тебе достаточно
              компьютера и&nbsp;колонок. Это разные направления.
            </Paragraph>

            <SubSection>
              <ArticleSubtitle>Атмосфера</ArticleSubtitle>

              <Paragraph>
                Как я уже упоминал ранее, первоначально это был обычный
                автомобильный гараж, который использвался по&nbsp;прямому
                назначению. После репетиций мы&nbsp;расставляли все что там было
                вдоль&nbsp;стен и&nbsp;загоняли машину обратно. Последний раз
                это было в&nbsp;2014-м, с&nbsp;тех пор автомобиль тут
                не&nbsp;парковался ни&nbsp;разу.
              </Paragraph>

              <Figure>
                <Image
                  src="/article/gleb-garage/mirror.jpg"
                  width="760"
                  height="471"
                  alt=""
                />
              </Figure>

              <Paragraph>
                Современный облик гаража вырисовывался постепенно. Постеры делал
                еще мой отец, сначала они висели у&nbsp;нас в&nbsp;квартире,
                потом перекочевали на&nbsp;дачу, а&nbsp;потом сюда. Другие
                баннеры делал я&nbsp;сам. У&nbsp;мамы в&nbsp;магазине был
                рекламный постер на&nbsp;световом коробе, я&nbsp;взял этот короб
                и&nbsp;заказал для него новые изображения.
              </Paragraph>

              <Figure>
                <Image
                  src="/article/gleb-garage/light-box.jpg"
                  width="760"
                  height="471"
                  alt=""
                />
              </Figure>

              <Paragraph>
                Вот эта доска появилась первой. Она тожде переехала из магазина
                моей мамы, после того как он закрылся. Когда она только
                появилась на&nbsp;ней ничего не&nbsp;было нарисовано, потом
                Костик прислонил к&nbsp;ней фломастер и&nbsp;он&nbsp;потек,
                получился желтый подтек с&nbsp;ножками&nbsp;&mdash; человечек
                и&nbsp;черная доска. Потом мы&nbsp;пририсовали глазки и ножки.
                Потом Сережа написал &laquo;весна&raquo;, потому что была весна.
                Даша спросила: &laquo;А&nbsp;какая весна?&raquo;, я&nbsp;сказал:
                &laquo;Какая угодно&raquo;, и&nbsp;она это подписала.
              </Paragraph>

              <Figure>
                <Image
                  src="/article/gleb-garage/board.png"
                  width="760"
                  height="471"
                  alt=""
                />
              </Figure>

              <Paragraph>
                Эту лампу мне подарил протвинец, она светит разными цветами
                и&nbsp;задает атмосферу. Рядом наша первая Афиша, 2018&nbsp;год,
                концерт на&nbsp;день Битлз в&nbsp;Абриколе, который был
                организовывали совместно с&nbsp;Просвет. Приезжали
                профессиональные музыканты из&nbsp;Тулы, а&nbsp;мы были первым
                отделением.
              </Paragraph>

              <Figure>
                <Image
                  src="/article/gleb-garage/lamp.png"
                  width="760"
                  height="471"
                  alt=""
                />
              </Figure>

              <Paragraph>
                Я&nbsp;чувствую, что каждая вещь и&nbsp;предмет в&nbsp;этом
                гараже содержит определенную энергетику, влияющую на&nbsp;общую
                атмосферу&nbsp;&mdash; тут уже сформировалась своя аура
                и&nbsp;гармония, в&nbsp;том числе ради нее хочется сюда
                возвращаться.
              </Paragraph>
            </SubSection>
          </Container>
        </ArticleContainer>
      </Layout>
    </>
  );
}
