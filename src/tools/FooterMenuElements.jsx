import React from "react";
import footer from "../assets/data/footer";
import { Link } from "react-router-dom";

function FooterMenuElements() {
  console.log(footer);
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
      <div className="footer__menu-element">
        <div className="footer__menu-element--header">
          {footerElement.header}
        </div>
        <div className="footer__menu-element--links">{footerLinks}</div>
      </div>
    );
  });

  return <div className="footer__menu-content">{footerElements}</div>;
}

export default FooterMenuElements;
