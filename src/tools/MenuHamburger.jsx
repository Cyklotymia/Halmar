import React, { useState } from "react";
import CategoryPopup from "./CategoryPopup";

function MenuHamburger() {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const changeAciveHandler = () => {
    setIsHamburgerActive(!isHamburgerActive);
  };
  return (
    <>
      <div
        onClick={(e) => {
          changeAciveHandler();
        }}
        className="menu__hamburger menu__list-element"
      >
        <div className="menu__hamburger-container">
          <span className="menu__hamburger-element"></span>
          <span className="menu__hamburger-element"></span>
          <span className="menu__hamburger-element"></span>
        </div>
        <span className="menu__list-title bold">KATEGORIE</span>
        <i className="halmar-icon_30 menu__icon"></i>
      </div>
      {isHamburgerActive && <CategoryPopup />}
    </>
  );
}

export default MenuHamburger;
