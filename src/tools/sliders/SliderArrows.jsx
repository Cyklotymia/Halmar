import React from "react";

function SliderArrows({ dataArrows }) {
  const { data } = dataArrows;
  console.log(data);
  return (
    <>
      {data.arrowLeft && (
        <div className="arrowLeft__container arrow__container">
          <i className={data.arrowLeft}></i>
        </div>
      )}
       {data.arrowRight && (
        <div className="arrowRight__container  arrow__container">
          <i className={data.arrowLeft}></i>
        </div>
      )}
    </>
  );
}

export default SliderArrows;
