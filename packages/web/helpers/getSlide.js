import { createElement } from "react";

import { Italy, Wales, ColorBlock, Scotland } from "../components/slides";

export function getSlide(slide, index) {
  const id = slide._type;
  const slides = {
    italy: <Italy />,
    wales: <Wales />,
    scotland: <Scotland />,
    colorBlock: <ColorBlock />,
  };
  return slides[id] && createElement(slides[id].type, { data: slide, index });
}
