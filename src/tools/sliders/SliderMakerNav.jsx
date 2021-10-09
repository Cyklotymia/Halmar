import React from "react";
import mainSliderData from "../../assets/data/mainSlider";

function SliderMakerNav() {
  const nav = mainSliderData.data.nav;
  const navElements=mainSliderData.slides.map(slides=>{
      return(
      <span key= {slides.id}className="slider__nav--element"></span>
      )
  })
  return <>{nav && <div className="slider__nav">
      {navElements}</div>}</>;
}

export default SliderMakerNav;
