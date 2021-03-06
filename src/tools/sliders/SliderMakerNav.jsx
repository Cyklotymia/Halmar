import React from "react";
import mainSliderData from "../../assets/data/mainSlider";
import { prevIndex,nextIndex,clickIndex } from "../../redux/mainSlider";
import { useDispatch, useSelector } from "react-redux";

function SliderMakerNav() {
   
    const dispatch = useDispatch();
    const { indexOfShowedSlider } = useSelector((state) => state.mainSlider);
  const nav = mainSliderData.data.nav;

  const navHandler=(e)=>{
    
   if (e.target.id || e.target.closest('.slider__nav--container').id) {
     const index = e.target.id ||e.target.closest('.slider__nav--container').id
      dispatch(clickIndex(parseInt(index)))
   }else{
     return
   }
  }
  const navElements=mainSliderData.slides.map(slides=>{
      return(
      <div onClick={(e)=>{navHandler(e)}}id={slides.id} key= {slides.id}className={`slider__nav--container ${indexOfShowedSlider===parseInt(slides.id)?"active":"unActive"}`}>
          <span className="slider__nav--element"></span>
      </div>
      )
  })
  return <>{nav && <div className="slider__nav">
      {navElements}</div>}</>;
}

export default SliderMakerNav;
