import React from "react";
import imgSrc from "../assets/images/inspiracja.jpg";
import imgSrc1 from "../assets/images/jadalnia.jpg";
import imgSrc2 from "../assets/images/ogrod.jpg";
import InspirationsHovers from "./InspirationsHovers";
import { useDispatch, useSelector } from "react-redux";
import { changeIndex } from "../redux/pinsSliderData";

function InspirationsPhoto() {
  const imgs = [imgSrc, imgSrc1, imgSrc2];
  const dispatch = useDispatch();
  const { indexOfSlider, data } = useSelector((state) => state.pinsSliderData);

  const sliderPhoto = data.map((slider) => {
    if (slider.id === indexOfSlider) {
      return (
        <>
          <img
            key={imgs[indexOfSlider]}
            src={imgs[indexOfSlider]}
            alt=""
            className="inspirations__photo-img"
            style={{animation:"opacity 1s"}}
          />
          <div key={indexOfSlider} className="insporations__photo-pin"></div>
          <InspirationsHovers  />
        </>
      );
    }
  });


  return (
    <div className="inspirations__photo">
      {sliderPhoto}
      {indexOfSlider > 0 && (
        <div
          onClick={() => {
            dispatch(changeIndex("decrease"));
          }}
          className="inspirations__photo-arrow inspirations__photo-arrow--left"
        >
          <i className="inspirations__photo-arrowIcon halmar-icon_30"></i>
        </div>
      )}
      {indexOfSlider < data.length - 1 && (
        <div
          onClick={() => {
            dispatch(changeIndex("inscrease"));
          }}
          className="inspirations__photo-arrow inspirations__photo-arrow--right"
        >
          <i className="inspirations__photo-arrowIcon halmar-icon_30"></i>
        </div>
      )}
    </div>
  );
}

export default InspirationsPhoto;
