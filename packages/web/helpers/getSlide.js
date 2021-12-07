import { createElement } from "react";

import { Italy } from "../components/slides";

export function getSlide(slide, timeline) {
  const id = slide._type;
  const slides = {
    italy: <Italy />,
  };
  return (
    slides[id] &&
    createElement(slides[id].type, { data: slide, timeline })
  );
}
