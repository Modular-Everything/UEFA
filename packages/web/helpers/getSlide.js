import { createElement } from "react";

import { Italy, ColorBlock } from "../components/slides";

export function getSlide(slide, index) {
  const id = slide._type;
  const slides = {
    italy: <Italy />,
    colorBlock: <ColorBlock />,
  };
  return (
    slides[id] &&
    createElement(slides[id].type, { data: slide, index })
  );
}
