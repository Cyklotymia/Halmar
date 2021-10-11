import React from "react";
import CreatorElements from "./CreatorElements";

function ProductSlider({ data }) {
  const { className, slides } = data;

  const sliderElements = slides.map((slide) => {
    return (
      <div key={slide.id} className={`${className}__element`}>
        <CreatorElements elements={slide.elements} />
      </div>
    );
  });

  return <div className={className}>{sliderElements}</div>;
}

export default ProductSlider;
