import React from "react";
import SliderMakerArrows from "./sliders/SliderMakerArrows";
import SliderMakerNav from "./sliders/SliderMakerNav";
import { SliderMakerSlides } from "./sliders/SliderMakerSlides";
function MainSlider() {
    return ( 
        <div className="MainSlider">
            <SliderMakerSlides/>
            <SliderMakerArrows/>
            <SliderMakerNav/>
        </div>
     );
}

export default MainSlider;