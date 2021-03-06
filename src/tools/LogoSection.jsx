import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoSectionRouter from "./LogoSectionRouter";
import logo from "../assets/images/logo.svg";
import HamburgerPopup from "./HamburgerPopup";
import { useDispatch, useSelector } from "react-redux";
import { activeHamburger } from "../redux/activeHamburger";

function LogoSection() {
  const [searchingValue, setSearchingValue] = useState("");
  const dispatch = useDispatch();
  const { isActiveHamburger } = useSelector((state) => state.activeHamburger);

  const handleSearchingPhase = (e) => {
    e.preventDefault();
    setSearchingValue("");
  };

  return (
    <div className="logoSection">
      <div
        onClick={() => {
          dispatch(activeHamburger("toggle"));
        }}
        className={`hamburger ${isActiveHamburger ? "active" : "unActive"}`}
      >
        <span className="hamburger__element"></span>
        <span className="hamburger__element"></span>
        <span className="hamburger__element"></span>
      </div>
      <HamburgerPopup />
      <Link to="/" className="logoSection__logo-container">
        <img src={logo} alt="logo" className="logoSection__logo" />
      </Link>
      <form
        onSubmit={(e) => {
          handleSearchingPhase(e);
        }}
        className="logoSection__form"
      >
        <input
          onChange={(e) => {
            setSearchingValue(e.target.value);
          }}
          value={searchingValue}
          type="text"
          placeholder="Wpisz czego szukasz?"
          className="logoSection__input"
        />
        <button className="logoSection__button">
          <i className="logoSection__button-icon halmar-icon_01"></i>
        </button>
      </form>
      <LogoSectionRouter />
    </div>
  );
}

export default LogoSection;
