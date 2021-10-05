import React, { useState } from "react";
import hamburgerList from "../assets/data/hamburgerList";
import { Link } from "react-router-dom";
import NextLvlPopup from "./NextLvlPopup";

function HamburgerPopup({ isActive, isActiveFunction }) {
  const [searchingValue, setSearchingValue] = useState("");
  const [generatePopup, setGeneratePopup] = useState("");
  const [categoryActive, setCategoryActive] = useState(false)
  const [roomsActive, setRoomsActive] = useState(false)
  
  

  const handleSearchingPhase = (e) => {
    e.preventDefault();
    setSearchingValue("");
  };
  const hamburgerCat = hamburgerList.map((hambElement) => {
    return (
      <li key={hambElement.name} className="hamburgerPopup__element">
        <Link
          onClick={() => {
            if (!hambElement.iconAfter) {
              isActiveFunction((state) => !state);

            } else {
              setGeneratePopup(hambElement.name)
              setCategoryActive(true)
            }
          }}
          className="hamburgerPopup__link"
          to={hambElement.link ?? "#"}
        >
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
          isActiveFunction((state) => !state);
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
      <ul className="hamburgerPopup__list">{generatePopup&&<NextLvlPopup isActiveFunction={isActiveFunction} name={generatePopup} categoryActive={categoryActive} setCategoryActive={setCategoryActive}/>}{hamburgerCat}</ul>
    </div>
  );
}

export default HamburgerPopup;
