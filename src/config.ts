export const SITE_URL = "https://pro-pro.ru";

export const COVERS = {
  domUchenykh: "/article/dom-uchenykh/cover.webp",
  domUchenykhMobile: "/article/dom-uchenykh/cover-mobile.webp",
  glebGarage: "/article/gleb-garage/thumbnail.jpg",
  istoriiVybora: "/article/istorii_vybora/thumbnail.png",
  policlinic:
    "https://res.cloudinary.com/propromedia/image/upload/articles/policlinic/Vector_sp1h7k.webp",
  chtoTakoeSovetskyModernizm:
    "https://res.cloudinary.com/propromedia/image/upload/v1690884306/articles/chto-takoe-sovetsky-modernizm/sovmod_preview_z4f4fw.webp",
};

export const HERO = {
  image: COVERS.domUchenykh,
  imageMobile: COVERS.domUchenykhMobile,
  link: "/article/dom-uchenykh",
  title: "ЭКСКУРСИЯ<br/> В ДОМ УЧЕНЫХ",
  author: "Аня Медведкова",
};

export const SOCIAL = {
  instagram: "https://www.instagram.com/pro.protvino",
  telegram: "https://t.me/propromedia",
  youtube: "https://www.youtube.com/@eclair.canonique",
};

export const NAV_LINKS = [
  { href: "/", label: "статьи", key: "article" },
  { href: "/map", label: "карта", key: "map" },
  { href: "/gurtour", label: "гуртур", key: "gurtour" },
  { href: "/about-us", label: "о проекте", key: "about-us" },
];

export const ARTICLE_INDEX = [
  {
    slug: "gleb-garage",
    title: "Гаражане: в&nbsp;гостях у&nbsp;Глеба Маккартни",
    description:
      "музыкант, который играет в&nbsp;The BeatLove и&nbsp;&laquo;ЛАВ&raquo;, а&nbsp;репетирует в&nbsp;протвинском гараже",
    author: "Аня Медведкова",
    bgColor: "#2F4FD6",
    textColor: "#ffffff",
    imageUrl: "/article/gleb-garage/preview.webp",
  },
  {
    slug: "school-number-two",
    title: "Новая старая школа",
    description: "как построить разные школы по&nbsp;одному проекту",
    author: "Аня Медведкова",
    bgColor: "#565FC3",
    textColor: "#ffffff",
    imageUrl: "/article/school-number-two/thumbnail.jpg",
  },
  {
    slug: "dobrocake",
    title: "Семейная кофейня доброкейк: ",
    description:
      "все началось с того, что я заказала маме на день рождения торт",
    author: "Аня Медведкова",
    bgColor: "#D8CBFF",
    textColor: "#171F2E",
    imageUrl: "/article/dobrocake/thumbnail.png",
  },
  {
    slug: "polyclinic",
    title: "Поликлиника или архитектурный памятник",
    description:
      "черный крест Малевича, архитектоны, утки и сараи – что это и при чем тут наша поликлиника?",
    author: "Аня Медведкова",
    bgColor: "#F3815A",
    textColor: "#fff",
    imageUrl: "/images/posts/preview_section_polyclinic.jpg",
  },
] as const;
