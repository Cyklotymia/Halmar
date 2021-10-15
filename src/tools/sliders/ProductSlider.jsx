import React, { useRef, useEffect, useState } from "react";
import CreatorElements from "./CreatorElements";
import SliderArrows from "./SliderArrows";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { moveRight, updateSlidesRight } from "../../redux/productSliderRedux";
import useHover from "../customHooks/useHover";

function ProductSlider({ data }) {
  

  const { className } = data;
  const { activeIndex, slides, transitionRight, transitionLeft, click } =
    useSelector((state) => state.productSliderRedux);
  const dispatch = useDispatch();
  const [allSliders, setAllSliders] = useState([]);
  const [styles, setStyles] = useState({ transition: ".5s" });
  const addSliders = (slider) => {
    if (slider && !allSliders.includes(slider)) {
      setAllSliders([...allSliders, slider].reverse());
    }
  };
  
  const [hoverRef, isHovered] = useHover();

  
  useEffect(() => {

    if (!isHovered) {
      const interval = setInterval(() => {
        dispatch(moveRight());
        setTimeout(() => {
          dispatch(updateSlidesRight());
        }, 300);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const sliderElements = slides.map((slide) => {
    return (
      <Link
        ref={addSliders}
        id={slide.id}
        to={`${slide.link ? slide.link : "/"}`}
        key={slide.id}
        className={`${className}__element ${
          activeIndex === slide.id ? "active" : "unActive"
        }`}
      >
        <CreatorElements elements={slide.elements} />
      </Link>
    );
  });

  useEffect(() => {
    if (allSliders.length === sliderElements.length) {
      if (click === "right") {
        if (!transitionRight) {
          setStyles({
            transform: `translateX(-${
              allSliders[activeIndex].offsetWidth * activeIndex
            }px)`,
            transition: `0s`,
          });
        } else if (transitionRight) {
          setStyles({
            transform: `translateX(-${
              allSliders[activeIndex].offsetWidth * activeIndex
            }px)`,
            transition: `0.3s linear`,
          });
        }
      } else if (click === "left") {
       
        if (!transitionLeft) {
          setStyles({
            transform: `translateX(-${
              allSliders[activeIndex].offsetWidth * activeIndex
            }px)`,
            transition: `0s`,
          });
        } else if (transitionLeft) {
          setStyles({
            transform: `translateX(-${
              allSliders[activeIndex].offsetWidth * activeIndex
            }px)`,
            transition: `0.3s linear`,
          });
        }
        
      }
    }
  }, [transitionLeft, transitionRight]);
  return (
    <div ref={hoverRef} className={className}>
      <div style={styles} className="productSlider__container">
        {sliderElements}
      </div>
      <SliderArrows slidersFunc={setAllSliders} slidersDOM={allSliders} />
    </div>
  );
}

export default ProductSlider;
