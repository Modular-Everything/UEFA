import { createElement } from "react";

import {
  Austria,
  ColorBlock,
  England,
  France,
  Germany,
  Greece,
  Italy,
  Romania,
  Russia,
  Scotland,
  Spain,
  Title,
  Turkey,
  Wales,
} from "../components/slides";
import { Belgium } from "../components/slides/Belgium/Belgium";

export function getSlide(slide, index, deck, client) {
  const id = slide._type;

  const slides = {
    austria: <Austria />,
    belgium: <Belgium />,
    colorBlock: <ColorBlock />,
    england: <England />,
    france: <France />,
    germany: <Germany />,
    greece: <Greece />,
    italy: <Italy />,
    romania: <Romania />,
    russia: <Russia />,
    scotland: <Scotland />,
    spain: <Spain />,
    title: <Title />,
    turkey: <Turkey />,
    wales: <Wales />,
  };

  return (
    slides[id] &&
    createElement(slides[id].type, { data: slide, index, deck, client })
  );
}
