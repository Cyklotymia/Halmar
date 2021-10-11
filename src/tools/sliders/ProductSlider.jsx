import React from "react";
import CreatorElements from "./CreatorElements";
import SliderArrows from "./SliderArrows";

function ProductSlider({ data }) {
  const { className, slides } = data;

  const sliderElements = slides.map((slide) => {
    return (
      <div key={slide.id} className={`${className}__element`}>
        <CreatorElements elements={slide.elements} />
      </div>
    );
  });

  return (
    <div className={className}>
        <div className="productSlider__container">
      {sliderElements}

        </div>
      <SliderArrows dataArrows={data} />
    </div>
  );
}

export default ProductSlider;
