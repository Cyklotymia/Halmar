import { Link } from "react-router-dom";
import React from "react";
function LogoSectionRouter() {
  return (
    <div className="logoSection__account">
      <Link to="/catalog" className="logoSection__element">
        <i className="halmar-icon_02"></i>
        <span className="logoSection__element-text">KATALOG</span>
      </Link>
      <Link to="/closet" className="logoSection__element">
        <i className="halmar-icon_03"></i>
        <span className="logoSection__element-text">SCHOWEK</span>
      </Link>
      <Link to="/account" className="logoSection__element">
        <i className="halmar-icon_04"></i>
        <span className="logoSection__element-text">MOJE KONTO</span>
      </Link>
    </div>
  );
}

export default LogoSectionRouter;
