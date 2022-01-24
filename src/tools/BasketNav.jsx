import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function BasketNav() {

  
  const { numberOfProducts } = useSelector((state) => state.storeAcc);
  

  return (
    <div className="basket">
      <div className="basket__icon-container halmar__number-relative">
          <span className="basket__icon-number halmar__number">{numberOfProducts}</span>
        <i className="basket__icon halmar-icon_05"></i>
      </div>
      <div className="basket__price-container">
        <div className="basket__info">
          <span className="basket__info-text">twój koszyk</span>
          <span className="basket__info-price">{`${"sram"} zł`}</span>
        </div>
        <div className="basket__info-icon--container">
          <i className="basket__info-icon halmar-icon_30"></i>
        </div>
      </div>
    </div>
  );
}

export default BasketNav;
