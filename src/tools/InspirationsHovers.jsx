import React from "react";
import useHover from "./customHooks/useHover";
import { Link } from "react-router-dom";
import img from "../assets/images/produkt.jpg"

function InspirationsHover({ location }) {
  const [hoverRef, isHovered] = useHover();
  const { top, left, code, link } = location;
  const name =
    location.name.length < 27
      ? location.name
      : location.name.slice(0, 27) + "...";
  return (
    <>
      <div
        ref={hoverRef}
        key={code}
        style={{ top: `${top}%`, left: `${left}%`, animation: "opacity 1s" }}
        className="insporations__photo-info"
      ></div>
      {
        <div className={`hoveredItem ${isHovered ? "active" : "unActive"}`}>
          <div className="hoveredItem__img--container">
            <img src={img} alt="" className="hoveredItem__img" />
          </div>
          <div className="hoveredItem__info">
            <h4 className="hoveredItem__header">{name}</h4>
            <span className="hoberedItem__code">{` Kod towaru: ${code}`}</span>
            <Link to={link} className="halmar__button">
              więcej
            </Link>
          </div>
        </div>
      }
    </>
  );
}

export default InspirationsHover;
