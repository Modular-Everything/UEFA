import { createElement } from "react";

import {
  Italy,
  Wales,
  ColorBlock,
  Scotland,
  Romania,
  Germany,
  England,
  Greece,
  Turkey,
  France,
} from "../components/slides";

export function getSlide(slide, index) {
  const id = slide._type;
  const slides = {
    italy: <Italy />,
    wales: <Wales />,
    scotland: <Scotland />,
    romania: <Romania />,
    germany: <Germany />,
    england: <England />,
    greece: <Greece />,
    turkey: <Turkey />,
    france: <France />,
    colorBlock: <ColorBlock />,
  };
  return slides[id] && createElement(slides[id].type, { data: slide, index });
}
