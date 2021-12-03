import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../redux/storeAcc";
import { addProduct } from "../redux/basketAcc";
import items from "../assets/data/products2";
import exampleImg from "../assets/images/produkt.jpg";
import { Link } from "react-router-dom";

function StoreElement() {
  const dispatch = useDispatch();
  const [showWaring, setShowWaring] = useState(false);
  const [disableWarning, setDisableWarning] = useState(false);

  const { numberOfProducts, choosedFavProducts } = useSelector(
    (state) => state.storeAcc
  );
  const { basketProducts } = useSelector((state) => state.basketAcc);
  console.log(basketProducts);

  const generateElements = choosedFavProducts.map((code) => {
    const favItem = items.map((intrestedItem) => {
      if (intrestedItem.code === code) {
        const { link, name, id } = intrestedItem;
        const price = intrestedItem.price
          .toFixed(2)
          .toString()
          .replace(".", ",");

        return (
          <div className="store__fav-item" key={id}>
            {showWaring && (
              <div className="warning">
                chcesz usunac
                <span
                  onClick={() => {
                    setDisableWarning(true);
                    dispatch(removeProduct(code));
                    dispatch(addProduct(code));
                    setShowWaring(false)
                  }}
                  className="yes"
                >
                  ta
                </span>
                <span
                  onClick={() => {
                    setShowWaring(false)
                  }}
                  className="no"
                >
                  nie bardzo
                </span>
              </div>
            )}
            <img className="store__fav-item-img" src={exampleImg} alt="" />
            <div className="store__fav-item--content">
              <div className="store__fav-item--info">
                <Link to={link} className="store__fav-item--header">
                  {name}
                </Link>
                <span className="store__fav-item--price">{price}zł</span>
              </div>
              <div className="store__fav-item--buttons">
                <span
                  onClick={() => {
                    // dispatch(addProduct(code));
                    setShowWaring(true);
                  }}
                  className="store__fav-item--basket"
                >
                  {/* <i className="halmar-icon_05 store__fav-item--basketIcon"></i> */}
                  DODAJ DO KOSZYKA
                </span>
                <span
                  onClick={() => {
                    dispatch(removeProduct(code));
                  }}
                  className="store__fav-item--delate"
                >
                  <span className="store__fav-item--delateElement"></span>
                  <span className="store__fav-item--delateElement"></span>
                </span>
              </div>
            </div>
          </div>
        );
      }
    });

    return favItem;
  });
  return (
    <div className="store__fav">
      {generateElements}
      {!numberOfProducts && (
        <div className="empty">Brak produktów w schowku</div>
      )}
    </div>
  );
}

export default StoreElement;
