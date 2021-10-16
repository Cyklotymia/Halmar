import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import exampleImg from "../assets/images/produkt.jpg";

function ProductsElements() {
  const { products, choosedProducts } = useSelector((state) => state.products);
  const { isUserLogged } = useSelector((state) => state.account);

  const productsElement = products.map((product) => {
    if (choosedProducts === product.name) {
      const item = product.items.map((element) => {
        const { id, code, info, otherCategory, link } = element;
        const name =
          element.name.length < 27
            ? element.name
            : element.name.slice(0, 27) + "...";

        const category = otherCategory.map((category) => {
          return (
            <span key={category} className="products__element-category">
              {category}
            </span>
          );
        });
        const moreInfo = () => {
          return (
            <span className="products__element-text--infoLog">
              Po więcej informacji musisz się{" "}
              <Link className="products__element-text--infoLogLink"className=""to="/account">zalogować</Link>
            </span>
          );
        };

        return (
          <div className="products__element" key={id}>
            {category}
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
                  <i className="hamlar-icon_03 products__element-fav--icon"></i>
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

  return <div className="products__container">{productsElement}</div>;
}

export default ProductsElements;
