import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { arrowHandler } from "../redux/products";
import exampleImg from "../assets/images/produkt.jpg";
import { addProduct, removeProduct } from "../redux/storeAcc";

function ProductsElements() {
  const {
    products,
    choosedProducts,
    length,
    maxIndexOfProducts,
    numberOfVisibleElements,
  } = useSelector((state) => state.products);

  const { isUserLogged } = useSelector((state) => state.account);
  const { choosedFavProducts } = useSelector((state) => state.storeAcc);

  const dispatch = useDispatch();

  const productsElement = products.map((product) => {
    if (choosedProducts === product.name) {
      const item = product.items.map((element, index) => {
        if (index > maxIndexOfProducts) return;
        if (index <= maxIndexOfProducts - numberOfVisibleElements) return;
        const { id, code, info, otherCategory, link } = element;
        const name =
          element.name.length < 27
            ? element.name
            : element.name.slice(0, 27) + "...";

        let intrested = element.intrested;
        choosedFavProducts.forEach((product) => {
          if (product === code) return (intrested = true);
        
        });
        console.log(intrested);

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
              <Link
                className="products__element-text--infoLogLink"
                to="/account"
              >
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
                <Link
                  onClick={(e) => {
                    if (!choosedFavProducts.length) {
                      intrested = true;
                    } else {
                      choosedFavProducts.forEach((product) => {
                        if (product === code) return (intrested = false);
                        return (intrested = true);
                      });
                    }
                    console.log(intrested);

                    e.target
                      .closest(".products__element-fav")
                      .classList.toggle("active");
                    const isActive = e.target
                      .closest(".products__element-fav")
                      .classList.contains("active");
                    if (isActive) {
                      dispatch(addProduct(code));
                    } else {
                      dispatch(removeProduct(code));
                    }
                  }}
                  to={"/"}
                  className={`products__element-fav ${
                    intrested ? "active" : "unActive"
                  }`}
                >
                  <i className="halmar-icon_03 products__element-fav--icon"></i>
                </Link>
              </div>
            </div>
          </div>
        );
      });
      return item;
    } else {
      return;
    }
  });

  return (
    <div className="products__container">
      {productsElement}
      {length > maxIndexOfProducts && (
        <div
          onClick={() => {
            dispatch(arrowHandler("right"));
          }}
          className="products__container-arrow--right products__container-arrow"
        >
          <i className="halmar-icon_30 products__arrow-icon"></i>
        </div>
      )}
      {maxIndexOfProducts > numberOfVisibleElements && (
        <div
          onClick={() => {
            dispatch(arrowHandler("left"));
          }}
          className="products__container-arrow--left products__container-arrow"
        >
          <i className="halmar-icon_30 products__arrow-icon"></i>
        </div>
      )}
    </div>
  );
}

export default ProductsElements;
