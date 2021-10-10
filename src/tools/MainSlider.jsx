import React from "react";
import SliderMakerArrows from "./sliders/SliderMakerArrows";
import SliderMakerNav from "./sliders/SliderMakerNav";
import { SliderMakerSlides } from "./sliders/SliderMakerSlides";
import useHover from "./customHooks/useHover";
function MainSlider() {
    const [hoverRef, isHovered] = useHover();
    
    return ( 
        <section ref={hoverRef} className={`MainSlider ${isHovered?"active":"unActive"}`}>
            <SliderMakerSlides/>
            <SliderMakerArrows/>
            <SliderMakerNav/>
        </section>
     );
}

export default MainSlider;