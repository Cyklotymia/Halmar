import React from "react";
import imgSrc from "../assets/images/inspiracja.jpg";
import imgSrc1 from "../assets/images/slider_01.jpg";
import imgSrc2 from "../assets/images/slider_02.jpg";
import InspirationsHovers from "./InspirationsHovers";
import { useDispatch, useSelector } from "react-redux";
import { changeIndex } from "../redux/pinsSliderData";
import pinsLocation from "../assets/data/pinsLocation";
import useHover from "./customHooks/useHover";

function InspirationsPhoto() {
    const [hoverRef, isHovered] = useHover();
  const imgs = [imgSrc, imgSrc1, imgSrc2];
  const dispatch = useDispatch();
  const { indexOfSlider, data } = useSelector((state) => state.pinsSliderData);

const pins = pinsLocation.map((pin,index)=>{
    if (index===indexOfSlider) {
       

        const pinLoc=pin.location.map(location=>{
           
            return(
                <InspirationsHovers key={location.code} location={location}/>

            )
        })
        return pinLoc
        
    }
   
})

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
          {pins}
        </>
      );
    }
  });


  return (
    <div ref={hoverRef} className="inspirations__photo">
      {sliderPhoto}
      {indexOfSlider > 0 && (
        <div
          onClick={() => {
            dispatch(changeIndex("decrease"));
          }}
          className={`inspirations__photo-arrow inspirations__photo-arrow--left ${isHovered?"active":"unActive"}`}
        >
          <i className="inspirations__photo-arrowIcon halmar-icon_30"></i>
        </div>
      )}
      {indexOfSlider < data.length - 1 && (
        <div
          onClick={() => {
            dispatch(changeIndex("inscrease"));
          }}
          className={`inspirations__photo-arrow inspirations__photo-arrow--right ${isHovered?"active":"unActive"}`}
        >
          <i className="inspirations__photo-arrowIcon halmar-icon_30"></i>
        </div>
      )}
    </div>
  );
}

export default InspirationsPhoto;
