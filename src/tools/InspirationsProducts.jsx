import React, { Children } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import allProducts from "../assets/data/products2";
import exampleImg from "../assets/images/produkt.jpg";

function InspirationsProducts() {
  const { indexOfSlider, data } = useSelector((state) => state.pinsSliderData);
  const { isUserLogged } = useSelector((state) => state.account);

  let pins = data[indexOfSlider].pins ?? [];

  const items = pins.map((pin) => {
    if (pin.code) {
      const productsToShow = allProducts.filter((product) => {
        
        if (parseInt(product.code) === pin.code) {
          return product;
        }
      });
      const { id, code, info, otherCategory, link } = productsToShow[0];
      const name =
        productsToShow[0].name.length < 27
          ? productsToShow[0].name
          : productsToShow[0].name.slice(0, 27) + "...";
      const category = otherCategory.map((category) => {
        let color;
        switch (category) {
          case "promocja":
            color = "#fa182a";
            break;
          case "bestseller":
            color = "#e31519";
            break;
          case "nowość":
            color = "#80b61a";
            break;

          default:
            break;
        }
        return (
          <span
            style={{ backgroundColor: `${color}` }}
            key={category}
            className="products__element-category"
          >
            {category}
          </span>
        );
      });
      const moreInfo = () => {
        return (
          <span className="products__element-text--infoLog">
            Po więcej informacji musisz się{" "}
            <Link className="products__element-text--infoLogLink" to="/account">
              zalogować
            </Link>
          </span>
        );
      };

      return (
        <div className="products__element" key={id}>
          <div className="products__element-category--container">
            {category}
          </div>

          <Link className="products__element-img--container" to={link}>
            <img src={exampleImg} alt="" className="products__element-img" />
          </Link>

          <div className="products__element-text--container">
            <Link className="products__element-header--container" to={link}>
              <h4 className="products__element-header">{name}</h4>
            </Link>
            <span className="products__element-text">Kod towaru: {code}</span>
            <p className="products__element-text--info">
              {isUserLogged ? info : moreInfo()}
            </p>
            <div className="products__element-links--container">
              <Link
                className="products__element-button halmar__button"
                to={link}
              >
                więcej
              </Link>
              <Link to={"/"} className="products__element-fav">
                <i className="halmar-icon_03 products__element-fav--icon"></i>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  });

  const noItems = () => {
    return (
      <div className="empty">Nie znaleziono produktów dla szukanej flagi.</div>
    );
  };

  return (
    <div className="inspirationsProducts">
      <Link
        to="/inspirations"
        className=" inspirationsProducts__header halmar__header"
      >
        produkty z{" "}
        <span className=" inspirationsProducts__header--bold halmar__header--bold">
          inspiracji
        </span>
      </Link>
      <div className="products__container">
        {data[indexOfSlider].pins && items}
        {!data[indexOfSlider].pins && noItems()}
      </div>
    </div>
  );
}

export default InspirationsProducts;
