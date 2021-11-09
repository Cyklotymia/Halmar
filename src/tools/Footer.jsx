import React from "react";
import FooterMenuElements from "./FooterMenuElements";
import imgSrc from "../assets/images/indeks.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="wrapper">
      <div className="footer__content">
        <div className="footer__menu">
          <FooterMenuElements />
        </div>
        <div className="footer__contact">
          <div className="footer__menu-element--header footer__menu-element--header--last">masz pytanie <i className="halmar-icon_30 footer__menu-element--icon"></i></div>
          <div className="footer__contact-content">
            <div className="footer__contact-icon--container">
              <img src={imgSrc} alt="" className="footer__contact-icon" />
            </div>
            <div className="footer__contact-info">
              <span className="footer__contact-info--number">
                +48 <b>15 843 28 10</b>
              </span>
              <span className="footer__contact-info--text">
                Pn. - Pt. 9:00-17:00, sob. - niedz. Nieczynne
              </span>
              <span className="footer__contact-info--text">
                hurtownia@halmar.pl
              </span>
              <span className="footer__contact-info--text">
                Centralnego Okręgu Przemysłowego 2
              </span>
              <span className="footer__contact-info--text">
                37-450 Stalowa Wola
              </span>
              <Link
                to="/formularz-kontaktowy"
                className="footer__conatct-info--button halmar__button"
              >
                formularz kontaktowy
              </Link>
            </div>
          </div>
        </div>
        <div className="footer__icons--container">
            <Link to="idk" className="footer__icon--conatainer">
                <i className="footer__icon halmar-icon_24"></i>
            </Link>
            <Link to="idk" className="footer__icon--conatainer">
                <i className="footer__icon halmar-icon_25"></i>
            </Link>
            <Link to=" idk" className="footer__icon--conatainer">
                <i className="footer__icon halmar-icon_26"></i>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
