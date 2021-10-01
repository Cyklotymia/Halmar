
import React  from "react";
import { Link } from "react-router-dom";
import LogoSectionRouter from "./LogoSectionRouter";
import logo from "../assets/images/logo.svg"

function LogoSection() {
  return (
    <div className="logoSection">
      <Link to="/" className="logoSection__logo-img">
        <img src={logo} alt="" className="logoSection__logo" />
      </Link>
      <form className="logoSection__form">
        <input type="text" className="logoSection__input" />
        <button className="logoSection__button">
          <i className="logoSection__button-icon halmar-icon_01"></i>
        </button>
      </form>
     <LogoSectionRouter/>
     </div>
  );
}

export default LogoSection;
