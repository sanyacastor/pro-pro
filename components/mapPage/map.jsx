import mapboxgl from "mapbox-gl";
import { useState, useEffect, useRef } from "react";

import "mapbox-gl/dist/mapbox-gl.css";
import s from "../../styles/map/map.module.css";
import AsideInfo from "./asideInfo";

function MapboxMap({ places }) {
  const [myMap, setMap] = useState();
  const [tags, setTags] = useState();

  const [currentPoint, setCurrentPoint] = useState({});
  const [currentLayer, setCurrentLayer] = useState({});
  const [asideVisible, setAsideVisible] = useState(false);

  const colors = {
    kids: "rgb(255,69,0)", //) OrangeRed
    arch: "rgb(32,178,170)", // LightSeaGreen
    art: "rgb(160,82,45)", // Sienna
    culture: "rgb(255,20,147)", // DeepPink
    sport: "rgb(0,206,209) ", // DarkTurquoise
    tourism: "rgb(128,128,0) ", // Olive
    lost: "rgb(240,128,128) ", // Coral
    orbit: "rgb(219,112,147) ", // PaleVioletRed
    ninety: "rgb(107,142,35) ", //	OliveDrab
  };

  const layersDescription = {
    kids: "Мы выделили детские площадки, которые были построены в Протвино во времена СССР в 1960-1980е года, в отдельный слой, так как считаем, что они заслуживают внимания. Интересен и сам подход проектирования площадок, например, различные тематики - морское дно, космос, народные сказки и зодчество, и материалы, формы и в целом масштаб, которые сейчас редко можно встретить в строительстве подобных объектов - монолитный бетон, гнутый металл (много металла), цельные деревья, кирпичи и прочее.",
    arch: "Протвино проектировали с нуля, этим занималась команда московских архитекторов из Государственного специализированного проектного института (ГСПИ). Главный архитектором города и создателем генерального плана строительства был Д.М. Корин. В городе мало типовых жилых зданий, некоторые построены по переботанным проектам стран соцлагеря. Также среди нежилых объектов есть много интересных с архитектурной точки зрения. Мы отметили на карте все,  на что по нашему мнению нужно обратить внимание.",
    art: "Для оформления жилых и нежилых архитектурных форм в Протвино привлекались художники-монументалисты, скульпторы и многие другие. Над внешним обликом города потрудилось множество профессионалов, чтобы сама среда в городе вдохновляла. На слое Арт мы показываем артефакты, которые формируют неповторимое пространство города.", // Sienna
    culture: "",
    sport: "",
    tourism:
      "На этот слой мы вынесли интересные места, которые стоит посетить в окрестностях Протвино. Все их можно обойти за несколько часов в рамках прогулочного маршрута", // Olive
    lost: "Малые архитектурные формы Протвино (универсамы, магазины, парикмахерские и т.д.) были построены в едином ключе, свойственном архитектуре советского модернизма: большие витрины, натуральные материалы, стилизованные вывески. Некоторые были спроектированы в определенном стиле, например, Русь с отсылками к русскому зодчеству как снаружи, так и в интерьерах. В настоящее время торговые помещения отданы под аренду сетевым ритейлерам, ограничений по изменению облика нет, поэтому магазины потеряли свою идентичность и, как правило, замурованы пластиком релевантного ритейлеру цвета. Редакция нашего сайта осуждает такое варварское отношение к архитектуре, для полноты картины мы представляем фото в формате было-стало, чтобы вы самостоятельно смогли оценить изменения.", // Coral
    orbit:
      "Кафе 'Орбита'  было открыто в 1965 г. на улице Победы,  здесь принимали и обслуживали представителей иностранных делегаций из разных стран, проводили праздничные события для сотрудников ИФВЭ, в частности праздновали историческое событие – запуск Ускорителя. Одноименная кондитерская 'Орбита' работает с до сих пор и обеспечивает город своими кондитерскими изделиями. В сети киосков можно купить торты, эклеры, шу, буше, и многое другое. Самые популярные, можно сказать, фирменные блюда - торт 'Медовик' и эклеры. Кто ни разу не пробовал Протвинские эклеры, ищите на карте ближайшую точку и вперед!",
    ninety:
      "Иван Найнти родился и живёт в городе Протвино. По образованию инженер-программист и графический дизайнер. \n\n Начал свой путь в искусстве с классического граффити в 2007 году и плёночной фотографии. В настоящее время сконцентрирован на создании муралов и живописи, основанной на собственных бумажных и цифровых коллажах. \n \n Иван работает с разными медиа и текстурами, соединяя абстракцию и фигуратив в своих работах. Его произведения наполнены чувством ностальгии. Главные темы в творчестве Ивана Найнти о воспоминаниях мест и людей, различных человеческих чувств и состояний, темах детства и красоты природы. Вдохновляясь старыми технологиями печати фотографии, его работы обычно выполнены в монохромных палитрах, в эстетике цианотипии, сепии и чёрно-белой фотографии.\n \n Иван принимал участие в различных фестивалях, мероприятиях и выставках, посвящённых теме уличного искусства. Его муралы вы можете встретить во многих городах России (Протвино, Москва, Тула, Калининград, Апатиты, Нижний Новгород, Астрахань, Альметьевск, Екатеринбург, Тюмень, Новосибирск, Шерегеш и остров Сахалин). Также у Ивана есть международный опыт в Польше (Лодз) в 2017, и в Бразилии (Рио-де-Жанейро) в 2018. \n \n Работы Ивана Найнти хранятся в коллекциях у друзей и коллекционеров из России, Чехии, Нидерландов, Германии, Англии, Израиля, Пуэрто-Рико и Бразилии.",
  };

  const layersTitles = {
    kids: "детские площадки",
    arch: "архитектура",
    art: "Арт",
    culture: "",
    sport: "C",
    tourism: "Туризм",
    lost: "Утрачено",
    orbit: "Кафе «Орбита» ",
    ninety: "Иван Найнти",
  };

  const mapNode = useRef(null);

  const types = Array.from(
    new Set(places.features.map((p) => p.properties.type))
  );

  useEffect(() => {
    const node = mapNode.current;
    const tagObj = {};

    types.forEach((t) => (tagObj[t] = true));
    setTags(tagObj);

    if (typeof window === "undefined" || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/light-v10",
      center: [37.215213, 54.872224],
      zoom: 13,
    });

    mapboxMap.once("load", (e) => {
      e.target.resize();
      setMap(mapboxMap);

      places.features.map((p) => {
        const t1 = p.geometry.coordinates[0];
        const t2 = p.geometry.coordinates[1];

        const newPoint = { ...p };
        newPoint.geometry.coordinates = [t2, t1];
        return newPoint;
      });

      types.map((type) => {
        const filteredPoints = places.features.filter((p) => {
          return p.geometry.coordinates[0] && p.properties.type === type;
        });

        mapboxMap.addSource(`${type}-src`, {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: filteredPoints,
          },
        });

        mapboxMap.addLayer({
          id: type,
          type: "circle",
          source: `${type}-src`,
          layout: {
            visibility: "none",
          },
          paint: {
            "circle-radius": 8,
            "circle-color": colors[type],
          },
        });
      });
    });

    types.map((tag) => {
      mapboxMap.on("click", tag, (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        setCurrentPoint({
          title: e.features[0].properties.title,
          description: e.features[0].properties.description,
          image: e.features[0].properties.image,
        });

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        setAsideVisible(true);
      });

      mapboxMap.on("mouseenter", tag, () => {
        mapboxMap.getCanvas().style.cursor = "pointer";
      });

      mapboxMap.on("mouseleave", tag, () => {
        mapboxMap.getCanvas().style.cursor = "";
      });
    });

    return () => {
      mapboxMap.remove();
    };
  }, []);

  const filterPoints = (name) => {
    const visibility =
      myMap.getLayoutProperty(name, "visibility") === "none"
        ? "visible"
        : "none";

    myMap.setLayoutProperty(name, "visibility", visibility);

    const updatedTags = { ...tags };
    updatedTags[name] = visibility === "visible" ? false : true;

    setTags(updatedTags);

    if (!updatedTags[name]) {
      setCurrentPoint({
        title: layersTitles[name],
        description: layersDescription[name],
        type: name,
      });
      setAsideVisible(true);
    }

    if (asideVisible && updatedTags[name]) {
      setAsideVisible(false);
    }
  };

  return (
    <>
      <AsideInfo
        title={currentPoint.title}
        description={currentPoint.description}
        onClose={() => setAsideVisible(false)}
        visible={asideVisible}
        image={currentPoint.image}
        bgColor={colors[currentPoint.type]}
      />
      <div className={s.mapToolBar}>
        <div className={s.mapToolBarTagList}>
          {types.map((name) => (
            <span
              className={`${s.mapToolBarTag} ${
                tags && tags[name] ? "" : s.active
              }`}
              key={name}
              style={
                tags && tags[name]
                  ? { borderColor: colors[name] }
                  : { background: colors[name] }
              }
              onClick={() => filterPoints(name)}
            >
              {layersTitles[name]}
            </span>
          ))}
        </div>
      </div>
      <section className={s.mapWrapper}>
        <div ref={mapNode} className={s.mapContainer} />
      </section>
    </>
  );
}

export default MapboxMap;
