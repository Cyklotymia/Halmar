import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import BasketNav from "./BasketNav";
function LogoSectionRouter() {
 
    const { isUserLogged } = useSelector((state) => state.account);
    const { numberOfProducts } = useSelector((state) => state.storeAcc);
    console.log(numberOfProducts);

  return (
    <div className="logoSection__account">
      <Link to="/catalog" className="logoSection__element">
        <i className="halmar-icon_02 logoSection__element-icon"></i>
        <span className="logoSection__element-text">KATALOG</span>
      </Link>
      <Link to="/closet" className="logoSection__element halmar__number-relative">
        {isUserLogged&& <span className=" ogoSection__element--number halmar__number">{numberOfProducts}</span>}
        <i className="halmar-icon_03 logoSection__element-icon"></i>
        <span className="logoSection__element-text">SCHOWEK</span>
      </Link>
      <Link to="/account" className="logoSection__element logoSection__element--acc">
        <i className="halmar-icon_04 logoSection__element-icon"></i>
        <span className="logoSection__element-text">MOJE KONTO</span>
      </Link>
      {isUserLogged&&
      <Link to="/basket" className="logoSection__element logoSection__element--basket  halmar__number-relative">
        <span className=" logoSection__element--number halmar__number">{numberOfProducts}</span>
        <i className="halmar-icon_05 logoSection__element-icon"></i>
        <span className="logoSection__element-text">KOSZYK</span>
      </Link>}
     {isUserLogged&& <BasketNav/>}
    </div>
  );
}

export default LogoSectionRouter;
