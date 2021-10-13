import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  moveRight,
  moveLeft,
  updateSlidesRight,
} from "../../redux/productSliderRedux";

function SliderArrows() {
  const dispatch = useDispatch();
  const { data } = useSelector(
    (state) => state.productSliderRedux
  );
  // console.log(data);
  const arrowHandler = (e) => {
    if (e.target.closest(".arrowRight__container") ) {
      dispatch(moveRight());
      setTimeout(() => {
        dispatch(updateSlidesRight());
      }, 300);
    } else if (e.target.closest(".arrowLeft__container")) {
      dispatch(moveLeft());
    }
  };
  return (
    <>
      {data.arrowLeft && (
        <div
          onClick={(e) => {
            arrowHandler(e);
          }}
          className="arrowLeft__container arrow__container"
        >
          <i className={data.arrowLeft}></i>
        </div>
      )}
      {data.arrowRight && (
        <div
          onClick={(e) => {
            arrowHandler(e);
          }}
          className="arrowRight__container  arrow__container"
        >
          <i className={data.arrowLeft}></i>
        </div>
      )}
    </>
  );
}

export default SliderArrows;
