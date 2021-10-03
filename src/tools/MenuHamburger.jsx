import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { activeCategories } from "../redux/activeNav";
import CategoryPopup from "./CategoryPopup";


function MenuHamburger() {
  const {isActiveCategories}=useSelector(state=>state.activeNav)
  const dispatch = useDispatch()
  return (
    <>
      <div
        onClick={() => {
         dispatch(activeCategories())
        }}
        className={`menu__hamburger menu__list-element menu__popup ${isActiveCategories?"active":null}`}
      >
        <div className="menu__hamburger-container">
          <span className="menu__hamburger-element"></span>
          <span className="menu__hamburger-element"></span>
          <span className="menu__hamburger-element"></span>
        </div>
        <span className="menu__list-title bold">KATEGORIE</span>
        <i className="halmar-icon_30 menu__icon"></i>
      </div>
      {isActiveCategories && <CategoryPopup  />}
    </>
  );
}

export default MenuHamburger;
