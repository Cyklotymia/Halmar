import React from 'react'
import mainSliderData from '../../assets/data/mainSlider'
import { prevIndex,nextIndex,clickIndex } from "../../redux/mainSlider";
import { useDispatch, useSelector } from "react-redux";


function SliderMakerArrows() {
    const arrowLeft=mainSliderData.data.arrowsIconLeft
    const arrowRight=mainSliderData.data.arrowsIconRight
    const dispatch = useDispatch();
    // const { indexOfShowedSlider } = useSelector((state) => state.mainSlider);
 
    return (
        <>
        {arrowLeft && <div onClick={()=>{dispatch(prevIndex())}}className= " slider__arrow-container slider__arrow-container--left">
            <i className={`${mainSliderData.data.arrowsIconLeft} slider__arrow`}></i>
            </div>}
        {arrowRight && <div onClick={()=>{dispatch(nextIndex())}}className= " slider__arrow-container slider__arrow-container--right">
            <i className={`${mainSliderData.data.arrowsIconRight} slider__arrow`}></i>
            </div>}
        </>
        );
}

export default SliderMakerArrows;