import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../redux/storeAcc";
import items from "../assets/data/products2";
import exampleImg from "../assets/images/produkt.jpg";
import { Link } from "react-router-dom";

function StoreElement() {
  const dispatch = useDispatch();
  console.log(items);
  const { numberOfProducts, choosedFavProducts } = useSelector(
    (state) => state.storeAcc
  );
  console.log(numberOfProducts, choosedFavProducts);
  const generateElements = choosedFavProducts.map((code) => {
    const favItem = items.map((intrestedItem) => {
      if (intrestedItem.code === code) {
        console.log(intrestedItem);
        const { link, name, id } = intrestedItem;
        const price = intrestedItem.price
          .toFixed(2)
          .toString()
          .replace(".", ",");

       
        return (
          <div className="store__fav-item" key={id}>
            <img className="store__fav-item-img" src={exampleImg} alt="" />
            <div className="store__fav-item--content">
              <div className="store__fav-item--info">
                <Link to={link} className="store__fav-item--header">{name}</Link>
                <span className="store__fav-item--price">{price}zł</span>
              </div>
              <div className="store__fav-item--buttons">
               
                <span className="store__fav-item--basket">
                  <i className="halmar-icon_05 store__fav-item--basketIcon"></i>
                </span>
                <span className="store__fav-item--delate">
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
  return <div className="store__fav">{generateElements}</div>;
}

export default StoreElement;
