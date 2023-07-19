import style from "./services.module.scss";
import { Link } from "react-router-dom";
import cards from "../../components/Card/cards";
import Card from "../../components/Card/Card.jsx";
import Person from "../../assets/images/icon_person.svg";
import Business from "../../assets/images/icon_business.svg";
import Vectorright from "../../assets/svg/Vectorright.jsx";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Services() {
  return (
    <>
      <div className={style.container}>
        <div className={style.services__header}>
          <h3>Услуги</h3>
          <ul>
            <li className={style.services__person}>
              <img src={Person} alt="person"></img>
              Для частных лиц
            </li>
            <Link to="/business">
              <li>
                <img src={Business} alt="small suitcase"></img>
                Для бизнеса
              </li>
            </Link>
          </ul>
          <Link to="/services">
            <button type="submit" className={style.button}>
              Смотреть все
              <div className={style.vector}>
                <Vectorright />
              </div>
            </button>
          </Link>
        </div>

        <Splide
          options={{
            perPage: 4,
            perMove: 1,
            rewind: true,
            autoWidth: true,
            height: 560,
            pagination: false,
            arrows: true,
            type: "loop",
          }}
          className={style.custom_splide}
          // className={style.splide}
          aria-label="My Favorite Images"
          onMoved={(splide, newIndex) => {
            // eslint-disable-next-line
            console.log("moved", newIndex);
            // eslint-disable-next-line
            console.log("length", splide.length);
          }}
        >
          {/* <div className={style.slider_container}> */}
          {/* <SplideTrack> */}
          {cards.map((card) => (
            <SplideSlide
              key={card.id}
              style={{
                display: "flex",
                justifyContent: "center",
                columnGap: 20,
                alignItems: "center",
              }}
            >
              <Card
                icon={card.icon}
                title={card.title}
                text={card.text}
                price={card.price}
              ></Card>
            </SplideSlide>
          ))}
          {/* </div> */}
          {/* </SplideTrack> */}
        </Splide>

        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">Prev</button>
          <button className="splide__arrow splide__arrow--next">Next</button>
        </div>
      </div>
    </>
  );
}
