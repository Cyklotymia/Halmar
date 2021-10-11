import React ,{useEffect,useState} from "react";
import SliderMakerArrows from "./sliders/SliderMakerArrows";
import SliderMakerNav from "./sliders/SliderMakerNav";
import { SliderMakerSlides } from "./sliders/SliderMakerSlides";
import useHover from "./customHooks/useHover";
import { prevIndex,nextIndex,clickIndex } from "../redux/mainSlider";
import { useDispatch, useSelector } from "react-redux";

function MainSlider() {
    const [hoverRef, isHovered] = useHover();
    const dispatch = useDispatch();

  
    
    useEffect(()=>{
        if (!isHovered) {
            const interval= setInterval(()=>{
                dispatch(nextIndex())
            },5000)
            
            return ()=>clearInterval(interval)
        }
      
    },[isHovered])
  
    
    return ( 
        <section ref={hoverRef} className={`MainSlider ${isHovered?"active":"unActive"}`}>
            <SliderMakerSlides/>
            <SliderMakerArrows/>
            <SliderMakerNav/>
        </section>
     );
}

export default MainSlider;