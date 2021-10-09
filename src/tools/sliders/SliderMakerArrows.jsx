import React from 'react'
import mainSliderData from '../../assets/data/mainSlider'

function SliderMakerArrows() {
    const arrowLeft=mainSliderData.data.arrowsIconLeft
    const arrowRight=mainSliderData.data.arrowsIconRight
    return (
        <>
        {arrowLeft && <div className= " slider__arrow-container slider__arrow-container--left">
            <i className={`${mainSliderData.data.arrowsIconLeft} slider__arrow`}></i>
            </div>}
        {arrowRight && <div className= " slider__arrow-container slider__arrow-container--right">
            <i className={`${mainSliderData.data.arrowsIconRight} slider__arrow`}></i>
            </div>}
        </>
        );
}

export default SliderMakerArrows;