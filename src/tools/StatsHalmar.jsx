import React from "react";
import StatsElement from "./StatsElement";
import img3 from "../assets/images/fotos-31.png";
import img2 from "../assets/images/fotos-32.png";
import img1 from "../assets/images/fotos-33.png";
import imgBck from "../assets/images/banner_o_firmie.jpg";
import { Link } from "react-router-dom";

import useScroll from './customHooks/useScroll';
function StatsHalmar() {
  const [scrollRef, isScrolled] = useScroll();
  
  return (
    <div  ref={scrollRef}className="stats">
      <img className="stats__background" src={imgBck} alt="" />
      <div className="stats__filter"></div>
      <div className="wrapper">
        <div className="stats__content">
          <div className="stats__text">
            <div className="halmar__header stats__header">
              dlaczego
              <div className="halmar__header--bold stats__header--bold">
                halmar
              </div>
            </div>
            <p className="stats__text-info">
              Produkt najwyżej jakości, wyróżniający się designem i
              praktycznością.
            </p>
            <Link to="/about" className="halmar__button stats__button">
              zobacz więcej
            </Link>
    
           
       
          </div>
          <StatsElement
              img={img1}
              number={22000}
              unit={"m2"}
              text={"POWIERZCHNIA BAZYLOGISTYCZNEJ"}
              isScrolled={isScrolled}
            />
            <StatsElement
              img={img2}
              number={1300}
              unit={"+"}
              text={"KLIENTÓW HURTOWYCH"}
              isScrolled={isScrolled}

            />
            <StatsElement
              img={img3}
              number={1695}
              unit={" "}
              text={"PRODUKTÓW W OFERCIE KATALOGOWEJ"}
              isScrolled={isScrolled}

            />
        </div>
      </div>
    </div>
  );
}

export default StatsHalmar;
