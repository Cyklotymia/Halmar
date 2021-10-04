import React, { useState } from "react";
import hamburgerList from "../assets/data/hamburgerList";
import { Link } from "react-router-dom";

function HamburgerPopup({ isActive }) {
  const [searchingValue, setSearchingValue] = useState("");

  const handleSearchingPhase = (e) => {
    e.preventDefault();
    setSearchingValue("");
  };
  const hamburgerCat = hamburgerList.map((hambElement) => {
    return (
      <li key={hambElement.name} className="hamburgerPopup__element">
        <Link className="hamburgerPopup__link"to={hambElement.link ?? "#"}>
          {hambElement.iconBefore && (
            <i
              className={`hamburgerPopup__icon--b ${hambElement.iconBefore}`}
            ></i>
          )}
          <span className="hambPopup__text">{hambElement.name}</span>
          {hambElement.iconAfter && (
            <i
              className={`hamburgerPopup__icon--a ${hambElement.iconAfter}`}
            ></i>
          )}
        </Link>
      </li>
    );
  });
  return (
    <div className={`hamburgerPopup ${isActive ? "active" : null}`}>
      <form
        onSubmit={(e) => {
          handleSearchingPhase(e);
        }}
        className="hamburgerPopup__form"
      >
        <input
          onChange={(e) => {
            setSearchingValue(e.target.value);
          }}
          value={searchingValue}
          type="text"
          placeholder="Wpisz czego szukasz?"
          className="hamburgerPopup__input"
        />
        <button className="hamburgerPopup__button">
          <i className="hamburgerPopup__button-icon halmar-icon_01"></i>
        </button>
      </form>
      <ul className="hamburgerPopup__list">{hamburgerCat}</ul>
    </div>
  );
}

export default HamburgerPopup;
