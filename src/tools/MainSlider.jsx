import React from "react";
import SliderMakerArrows from "./sliders/SliderMakerArrows";
import SliderMakerNav from "./sliders/SliderMakerNav";
import { SliderMakerSlides } from "./sliders/SliderMakerSlides";
function MainSlider() {
    return ( 
        <section className="MainSlider">
            <SliderMakerSlides/>
            <SliderMakerArrows/>
            <SliderMakerNav/>
        </section>
     );
}

export default MainSlider;