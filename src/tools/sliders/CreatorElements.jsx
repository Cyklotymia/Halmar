import React from "react";
import GeneratorInsides from "./GeneratorInsides";

function CreatorElements({ elements }) {
  const sliderElements = elements.map((element) => {
    const { tag, className, text,inside } = element;
    const sliderElement = React.createElement(
      `${tag}`,
      { className: `${className}`, key: `${text}` },
      [
      <GeneratorInsides elements={inside} key={"jakiskey"}/>
        ],
      `${text ?? ""}`
    );

    return sliderElement;
  });
  return <>{sliderElements}</>;
}

export default CreatorElements;
