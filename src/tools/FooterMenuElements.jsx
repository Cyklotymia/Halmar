import React from "react";
import footer from "../assets/data/footer";
import { Link } from "react-router-dom";


function FooterMenuElements() {

 
  const footerElements = footer.map((footerElement) => {
    const footerLinks = footerElement.links.map((link) => {
      return (
        <Link
          key={link.name}
          to={link.link}
          className="footer__menu-element--link"
        >
          {link.name}
        </Link>
      );
    });
    return (
      <div key ={Math.random()} className="footer__menu-element">
        <div  onClick={(e)=>{
            e.target.closest(".footer__menu-element").classList.toggle("active")
          }} className="footer__menu-element--header">
          {footerElement.header}
          <i className="halmar-icon_30 footer__menu-element--icon"></i>
        </div>
        <div className={`footer__menu-element--links`}>{footerLinks}</div>
      </div>
    );
  });

  return <div className="footer__menu-content">{footerElements}</div>;
}

export default FooterMenuElements;
