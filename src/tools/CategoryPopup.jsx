import React from "react";
import { Link } from "react-router-dom";
import specialOffer from "../assets/data/categoryPopupSpecialOffer.js";

import categoryPopupData from "../assets/data/categoryPopupData.js";

const CategoryPopup = () => {
  const categoryPopupList = categoryPopupData.map((data) => {
    return (
      <Link to={data.link} className="categoryPopup__element" key={data.name}>
        <i className={`${data.icon} categoryPopup__icon`}></i>
        <span className="categoryPopup__link" >
          {data.name}
        </span>
      </Link>
    );
  });
  return (
    <div className="categoryPopup">
      <div className="wrapper">
        <div className="categoryPopup__container">
      <ul className="categoryPopup__list">{categoryPopupList}</ul>
      <Link to={specialOffer.link} className="categoryPopup__image-container">
          <span className="categoryPopup__image-name">{specialOffer.name}</span>
          <span className="categoryPopup__image-company">{specialOffer.company}</span>
        
      </Link>
      </div>

        </div>
    </div>
  );
};

export default CategoryPopup;
