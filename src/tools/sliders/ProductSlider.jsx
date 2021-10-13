import React, { useRef, useEffect, useState } from "react";
import CreatorElements from "./CreatorElements";
import SliderArrows from "./SliderArrows";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetIndex } from "../../redux/productSliderRedux";

function ProductSlider({ data }) {
  const { className} = data;
  const { activeIndex,slides,transition} = useSelector((state) => state.productSliderRedux);
const dispatch = useDispatch()
  const [allSliders, setAllSliders] = useState([]);
  const [styles, setStyles] = useState({transition:".3s"});
  const addSliders = (slider) => {
    if (slider && !allSliders.includes(slider)) {
    setAllSliders([...allSliders, slider].reverse());
  }
};



const sliderElements = slides.map((slide) => {
  return (
    <Link
    ref={addSliders}
    id={slide.id}
    to={`${slide.link ? slide.link : "/"}`}
    key={slide.id}
    className={`${className}__element ${activeIndex===slide.id?"active":"unActive"}`}
    >
        <CreatorElements elements={slide.elements} />
      </Link>
    );
  });


useEffect(() => {
if (allSliders.length===sliderElements.length) {

  if (!transition) {
    setStyles({
      transform:`translateX(-${allSliders[activeIndex].offsetWidth*activeIndex}px)`,
      transition:`0s`
      
    })
  }else{

    setStyles({
      transform:`translateX(-${allSliders[activeIndex].offsetWidth*activeIndex}px)`,
      transition:`.4s`
      
    })
  }
  
 
 

}
}, [transition])
  return (
    <div className={className}>
      <div style={styles}
      
      
      className="productSlider__container">{sliderElements}</div>
      <SliderArrows slidersFunc={setAllSliders} slidersDOM={allSliders} />
     
    </div>
  );
}

export default ProductSlider;
