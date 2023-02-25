import Image from 'next/image';
import React from 'react';

import s from './styles.module.scss';

export default function polyclinic() {
  return (
    <div className={s.post__container}>
      <article className={s.post}>
        <h1 className={s.post__title}>
          Поликлиника или архитектурный памятник
        </h1>
        <span className={s.post__author}>
          <p>АВТОР: АННА МЕДВЕДКОВА</p>
        </span>

        <h2 className={s.post__subtitle}>
          «Говорящая архитектура» — что это такое?
        </h2>

        <p className={s.post__paragraph}>
          Главный американский постмодернист Роберт Вентури разделил современную
          архитектуру на «сараи» (абстрактные объемы с декоративными фасадами) и
          «утки» (объекты, своей формой сообщающие о назначении — например,
          гигантский пончик у придорожного кафе). «Утки» — и есть перемена
          вектора от самодостаточности модернизма к говорящей архитектуре.
        </p>

        <p className={`${s.post__paragraph_indent} ${s.post__paragraph_bold}`}>
          Выражение{' '}
          <span className={s.post__paragraph_accent}>
            architecture parlante
          </span>{' '}
          («говорящая архитектура») относится к зданиям, внешняя форма которых
          максимально выражает свою функцию или художественную идею,
          предложенную архитектором.
        </p>

        <p className={s.post__paragraph}>
          В этой статье мы поговорим про яркие примеры советской архитектурной
          мысли и их истоки в искусстве. Первый пример: здание аптеки в типовом
          жилом микрорайоне Москвы Борисово. Тут само здание является
          собственной вывеской и превращается в архитектурный артефакт.
          Источником вдохновения для авторов аптеки служило творчество Казимира
          Малевича.
        </p>
        <figure className={s.post__image}>
          <Image
            src="https://res.cloudinary.com/propromedia/image/upload/v1674498115/articles/policlinic/image_3_1_ipsui5.webp"
            width={660}
            height={388}
            alt="Архитекторы: А.Ларин, Е.Асс, Л.Волчек, 1973 год"
          />
          <figcaption className={s.post__image_caption}>
            Архитекторы: А.Ларин, Е.Асс, Л.Волчек, 1973 год{' '}
          </figcaption>
        </figure>
        <div className={s.post__part}>
          <h3 className={s.post__subtitle}>Малевич, дух и форма</h3>
          <p className={`${s.post__paragraph_indent} ${s.post__paragraph}`}>
            Малевич, дух и форма Малевич создал беспредметное искусство. Он
            считал, что живопись самоценна, что форма и чистый цвет способны
            выразить духовное ощущение художника. И создав новое направление в
            живописи – супрематизм, он предложил новое восприятие формы.
          </p>
          <p className={`${s.post__paragraph_indent} ${s.post__paragraph}`}>
            Супрематизм (от лат.supremus — превосходный) — на начальном этапе
            этот термин, восходивший к латинскому корню – «supremus», означал
            доминирование, превосходство цвета над всеми остальными свойствами
            живописи. В основание художник положил три формы: квадрат, крест и
            круг. Из этих форм рождаются все отношения в супрематической
            композиции.
          </p>

          <p className={s.post__paragraph}>
            И в архитектуре Малевич дал толчок новым идеям. «Черный крест»
            1915-го года трансформировался в его концепцию архитектонов. Это
            объемные композиции из гипса, которые создавал художник. Они были
            составлены из супрематических «блоков», которые врезались друг в
            друга под прямым углом. Блоки – бруски, кубы, параллелепипеды,
            которые в свою очередь, являлись объемными аналогами супрематических
            фигур ‒ квадратов и прямоугольников.
          </p>

          <div className={s.post__collage}>
            <figure className={s.post__image}>
              <Image
                src="https://res.cloudinary.com/propromedia/image/upload/v1674499073/articles/policlinic/image_2_1_kwz9jz.webp"
                width={462}
                height={440}
                alt="К. С. Малевич, “Чёрный крест”, 1915"
              />
              <figcaption className={s.post__image_caption}>
                К. С. Малевич, “Чёрный крест”, 1915
              </figcaption>
            </figure>
            <figure className={s.post__image}>
              <Image
                src="https://res.cloudinary.com/propromedia/image/upload/v1674499186/articles/policlinic/image_14_xq2poo.webp"
                width={260}
                height={451}
                alt="Композиция из гипса"
              />
            </figure>
            <figure className={s.post__image}>
              <Image
                src="https://res.cloudinary.com/propromedia/image/upload/v1674499186/articles/policlinic/image_34_mlavlb.webp"
                width={360}
                height={286}
                alt="Композиция из гипса"
              />
            </figure>
          </div>
          <div className={s.post__greenfigures}>
            <p className={s.post__paragraph}>
              C помощью этой концепции художник предлагал переосмыслить
              принципы, по которым люди придают форму зданиям. Малевич называл
              архитектоны «чистой архитектурой», так как эти конструкции
              оперировали архитектурными категориями: массой, объемом,
              тектоникой, масштабом.
            </p>
            <p className={s.post__paragraph}>
              Архитектоны как таковые не имели утилитарного назначения и не
              проектировались для реальной городской среды. Их цель заключалась
              в создании принципиально новой эстетики, «супрематического
              ордера», который, по мнению Малевича, должен был быть положен в
              основу современной архитектуры.
            </p>
          </div>

          <figure className={s.post__image}>
            <Image
              src="https://res.cloudinary.com/propromedia/image/upload/v1674499764/articles/policlinic/image_1_1_khobnx.webp"
              width={628}
              height={437}
              alt="К.С. Малевич. Архитектон «Альфа», 1920. Гипс."
            />
            <figcaption className={s.post__image_caption}>
              К.С. Малевич. Архитектон «Альфа», 1920. Гипс.
            </figcaption>
          </figure>

          <p className={s.post__paragraph}>
            В набросках Ильи Чашника (ученика Малевича), который работал над
            проектированием «чистой архитектуры», фронтальные изображения
            архитектонов демонстрируют осмысление пространственных
            супрематических конструкций как полноценных архитектурных
            сооружений. Он варьировал пропорциональные соотношения элементов
            и использовал цветовые контрасты, добиваясь тем самым динамического
            равновесия и монументальности архитектурной конструкции.
          </p>
        </div>
        <div className={s.post__part}>
          <h3 className={s.post__subtitle}>Поликлиника Протвино</h3>
          <p className={`${s.post__paragraph_indent} ${s.post__paragraph}`}>
            Скоро стало ясно, что архитекторы приняли эти идеи. Мы видим это
            в том числе на примере архитектурных объектов, которые нас окружают.
            Вероятно, концепцией архитектонов в том числе вдохновлялись и авторы
            проекта поликлиники в Протвино. Архитектура поликлиники насыщена
            разными элементами, например, ребристым украшением при виде с улицы,
            свойственным модернизму, огромным крестом-кубом на фасаде и так
            далее. А если посмотреть на общий объем здания, прослеживается связь
            с архитектонами.
          </p>

          <div className={s.post__collageRow}>
            <figure className={s.post__image}>
              <Image
                src="https://res.cloudinary.com/propromedia/image/upload/v1674500032/articles/policlinic/image_1_2_jwokez.webp"
                width={460}
                height={316}
                alt="Поликлиника фасад"
              />
            </figure>
            <figure className={s.post__image}>
              <Image
                src="https://res.cloudinary.com/propromedia/image/upload/v1674500019/articles/policlinic/image_4_1_zijeto.webp"
                width={435}
                height={317}
                alt="Чашник Илья «Архитектон» 1925-1926. Гипс"
              />
              <figcaption className={s.post__image_caption}>
                Чашник Илья «Архитектон» 1925-1926. Гипс
              </figcaption>
            </figure>
          </div>

          <p className={s.post__paragraph}>
            Сама поликлиника спроектирована очень удобно для посетителей: левое
            крыло – детская поликлиника, правое крыло – взрослая поликлиника.
            Между собой они соединены проходом между лифтовыми холлами. Вход по
            парадной лестнице со 2-го этажа к регистратурам, на первом этаже –
            аптека. Причем войти можно и с первого этажа и подняться на лифте на
            нужный, что удобно для женщин с колясками и пенсионеров.
          </p>

          <div className={s.post__collage}>
            <p className={s.post__paragraph}>
              Что в этом уникального, скажет читатель, например, в Зеленограде,
              тоже есть поликлиника с похожим замыслом:
            </p>
            <figure className={s.post__image}>
              <Image
                src="https://res.cloudinary.com/propromedia/image/upload/v1674500033/articles/policlinic/image_5_1_ijcjfw.webp"
                width={361}
                height={266}
                alt="Поликлиника в Зеленограде"
              />
            </figure>
          </div>

          <p className={s.post__paragraph}>
            Замысел похож, но здание Протвинской поликлиники далеко от
            типичного. Посмотрите на фасад, что вы видите? «Черный крест»
            Малевича в кубе! А также графичные лестницы, свойственные парадным
            входам зданий совмода.
          </p>

          <figure className={s.post__image}>
            <Image
              src="https://res.cloudinary.com/propromedia/image/upload/v1674500033/articles/policlinic/image_37_c5ecmu.webp"
              width={455}
              height={321}
              alt="Поликлиника фасад"
            />
            <figcaption className={s.post__image_caption}>
              Чашник Илья «Архитектон» 1925-1926. Гипс
            </figcaption>
          </figure>

          <p className={s.post__paragraph}>
            Сама поликлиника состоит из двух объемов: непосредственно здание
            поликлиники (детская и взрослая) и МСЧ № 57 (корпус для сотрудников
            ИФВЭ). Между ними надземный закрытый переход, а также зона парковки
            скорой помощи.
          </p>
          <p className={s.post__paragraph}>
            С обратной стороны (стороны МСЧ) поликлиника расположена на
            Т-образном перекрестке. Центральная часть с ребристым декором, а по
            бокам окна 2-х этажного здания выполнены таким образом, что мы видим
            два ряда красных крестов.
          </p>
          <div>crosses</div>

          <figure className={s.post__image}>
            <Image
              src="https://res.cloudinary.com/propromedia/image/upload/q_auto:best/v1674500034/articles/policlinic/image_6_1_rszwy4.jpg"
              width={960}
              height={615}
              alt="Поликлиника фасад"
            />
            <figcaption className={s.post__image_caption}>
              Чашник Илья «Архитектон» 1925-1926. Гипс
            </figcaption>
          </figure>

          <p className={s.post__paragraph}>
            Примечательно, что объем поликлиники вписан в единый ансамбль с
            рядом стоящими зданиями общежитий по улице Ленина. А с другой
            стороны своей плоской частью вписывается в параллель с главной
            пешеходной улицей города.
          </p>
          <p className={s.post__paragraph}>
            Цвета поликлиники: белый кирпич и светлая каменная штукатурка с
            добавлением крошки декоративного камня, за счет которого поверхность
            сверкает на солнце. Для цветовых акцентов выбран натуральный
            терракотовый цвет. Сочетание этих материалов и цветов первоначально
            задумано архитектором Д.И. Кориным при проектировании Протвино. 
            Подобные решения мы можем видеть на других зданиях города:
            Музыкальная школа, теоретический корпус ИФВЭ, Дом Ученых, Школа №3 и
            другие.
          </p>
          <p className={s.post__paragraph}>
            Что касается внутреннего убранства: как и во всем Протвино,
            использованы натуральные материалы – дерево, натуральный камень.
          </p>

          <figure className={s.post__image}>
            <Image
              src="https://res.cloudinary.com/propromedia/image/upload/v1674500033/articles/policlinic/image_3_2_zfkzqn.webp "
              width={359}
              height={245}
              alt="Флюгер и поликлиника"
            />
          </figure>
          <p className={s.post__paragraph}>
            Еще одним памятником той эпохи являются металлические вывески –
            яркий пример советского леттеринга этого периода.
          </p>

          <div className={s.post__collage}>
            <figure className={s.post__image}>
              <Image
                src="https://res.cloudinary.com/propromedia/image/upload/v1674500033/articles/policlinic/image_11_wpfwo6.webp"
                width={403}
                height={264}
                alt="Поликлиника фасад"
              />
            </figure>
            <figure className={s.post__image}>
              <Image
                src="https://res.cloudinary.com/propromedia/image/upload/v1674500033/articles/policlinic/image_10_tn3snc.webp"
                width={418}
                height={264}
                alt="Поликлиника фасад"
              />
            </figure>
          </div>
        </div>
        <div className={s.post__part}>
          <h3 className={s.post__subtitle}>Настоящее и будущее</h3>
          <p className={s.post__paragraph}>
            В новую эпоху гуманистический подтекст лечебных заведений померк —
            знаменитую аптеку в Москве перекрасили, а потом переделали в
            продуктовый. С нашей же поликлиники сняли родные вывески, по
            официальной информации от администрации поликлиники они безвозвратно
            утеряны.
          </p>
          <p className={s.post__paragraph}>
            Фасад здания в рамках капитального ремонта на данный момент покрашен
            в желто-коричневый цвет. Вместо 2-х вывесок будет одна типовая синяя
            вывеска «Моя поликлиника».
          </p>

          <figure className={s.post__image}>
            <Image
              src="https://res.cloudinary.com/propromedia/image/upload/v1674500033/articles/policlinic/image_9_1_qqj0yz.webp"
              width={542}
              height={406}
              alt="Поликлиника перекрашенный фасад"
            />
          </figure>

          <p className={s.post__paragraph}>
            Как мы видим на этом примере, современная администрация не видит
            архитектурной ценности исторических зданий и не воспринимает город
            как единое целое. Результат этого печальный: город стремительно
            теряет свой облик.
          </p>
          <p className={s.post__paragraph}>
            Корень проблемы лежит в первую очередь в отсутствии позиции
            архитектора и контроля этого вопроса на уровне города.
          </p>
          <p className={s.post__paragraph}>
            Мы надеемся, что это ошибочное решение будет исправлено и
            поликлинике вернут её «родной», задуманный архитекторами, цвет.
          </p>
        </div>
      </article>
    </div>
  );
}
