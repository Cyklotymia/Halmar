import React, { useRef } from "react";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

import { useContainerDimensions } from "../customHooks/resize";
import { useSelector } from "react-redux";


// import mainSlider, { slides } from "../../redux/mainSlider";

import mainSliderData from "../../assets/data/mainSlider";
///imgs
import sliderImg1 from "../../assets/images/slider_01.jpg";
import sliderImg2 from "../../assets/images/slider_02.jpg";

export const SliderMakerSlides = () => {
  const { indexOfShowedSlider } = useSelector((state) => state.mainSlider);
  const componentRef = useRef();
  const { width } = useContainerDimensions(componentRef);
  const imgs = [sliderImg1, sliderImg2];

  const sliderElements = mainSliderData.slides.map((slider) => {
    const link = width < 770 ? slider.link : "/";

    return (
      <Link className={`slider__element ${indexOfShowedSlider===parseInt(slider.id)?"active":"unActive"}`} key={slider.id} to={link}>
        <img className="slider__element--img" src={imgs[slider.id]} />
        <div className="slider__element--cover"></div>
        <div className="slider__element--container">
          <div className="wrapper">
          <h3 className="slider__element--header">
            <span className="slider__element--header-element">{slider.header}</span>
            <span className="slider__element--header-element">{slider.headerTwo}</span>
            </h3>
          <span className="slider__element--text">{slider.text}</span>

          {width > 770 && (
            <button
              className="slider__element--button halmar__button"
              to={slider.link}
            >
              {mainSliderData.data.buttonText}
            </button>
          )}
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="slider" ref={componentRef}>
      {/* <p>width: {width}px</p> */}

      {sliderElements}

      {/* <img src={slider} alt="" /> */}
    </div>
  );
};
