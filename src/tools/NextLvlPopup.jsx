import React ,{useState}from "react";
import categoryPopupData from "../assets/data/categoryPopupData.js";
import { Link } from "react-router-dom";

function NextLvlPopup({ name,isActiveFunction,categoryActive, setCategoryActive}) {
  let categoryList;

  if (name === "Kategorie") {
    
    categoryList = categoryPopupData.map((hambElement) => {
      return(
      <li key={hambElement.name} className="hamburgerPopup__element">
        <Link
          onClick={() => {
            if (!hambElement.iconAfter) {
              isActiveFunction((state) => !state);
            } else {
              setGeneratePopup(hambElement.name);
            }
          }}
          className="hamburgerPopup__link"
          to={hambElement.link ?? "#"}
        >
         
          <span className="hambPopup__text">{hambElement.name}</span>
          
        </Link>
      </li>)
    })
  }
  return (
    <div className={`hamburgerPopup__lvl1 ${categoryActive?"active":null}`}>
      <div className="hamburgerPopup__nav">
        <span onClick={()=>{
            if (name==="Kategorie") {
                setCategoryActive(false)
            }
        }} className="hamburgerPopup__back">Powrót</span>
        <span className="hamburgerPopup__cat">{name}</span>
      </div>
      <ul className="hamburgerPopup__list">{categoryList}</ul>
    </div>
  );
}

export default NextLvlPopup;
