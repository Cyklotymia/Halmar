import React from 'react'
import mainSliderData from '../../assets/data/mainSlider'

function SliderMakerArrows() {
    const arrowLeft=mainSliderData.data.arrowsIconLeft
    const arrowRight=mainSliderData.data.arrowsIconRight
    return (
        <>
        {arrowLeft && <div className= "slider__arrow-container">
            <i className={mainSliderData.data.arrowsIconLeft}></i>
            </div>}
        {arrowRight && <div className= "slider__arrow-container">
            <i className={mainSliderData.data.arrowsIconRight}></i>
            </div>}
        </>
        );
}

export default SliderMakerArrows;