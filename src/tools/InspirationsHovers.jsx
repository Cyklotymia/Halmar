import React from "react";
import useHover from "./customHooks/useHover";
import { Link } from "react-router-dom";
import img from "../assets/images/produkt.jpg"


function InspirationsHover({ location }) {
  const [hoverRef, isHovered] = useHover();
  const { top, left, code, link } = location;
  const name =
    location.name.length < 20
      ? location.name
      : location.name.slice(0, 16) + "...";
  return (
    <>
      <div
        // ref={hoverRef}
        key={code}
        style={{ top: `${top}%`, left: `${left}%`, animation: `opacity 1s ${isHovered?",size .5s both":" "}`,transform:"translate(-50%,-50%)" }}
        className="insporations__photo-info"
      ></div>
      {
        <div ref={hoverRef} style={{ top: `${top}%`, left: `${left}%`, animation: `${isHovered?"opacity 1s both":null}`,transform:"translate(-45%,-130%)" }} className={`hoveredItem ${isHovered ? "active" : "unActive"}`}>
          <div className="hoveredItem__container">

          <div className="hoveredItem__img--container">
            <img src={img} alt="" className="hoveredItem__img" />
          </div>
          <div className="hoveredItem__info">
            <h4 className="hoveredItem__header">{name}</h4>
            <span className="hoveredItem__code">{` Kod towaru: ${code}`}</span>
            <Link to={link} className="halmar__button hoveredItem__button">
              więcej
            </Link>
          </div>
          </div>
        </div>
      }
    </>
  );
}

export default InspirationsHover;
