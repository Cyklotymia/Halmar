import React from "react";

function MenuHamburger() {
  return (
    <div className="menu__hamburger menu__list-element">
      <div className="menu__hamburger-container">
        <span className="menu__hamburger-element"></span>
        <span className="menu__hamburger-element"></span>
        <span className="menu__hamburger-element"></span>
      </div>
      <span className="menu__list-title bold">KATEGORIE</span>{" "}
      <i className="halmar-icon_30 menu__icon"></i>
    </div>
  );
}

export default MenuHamburger;
