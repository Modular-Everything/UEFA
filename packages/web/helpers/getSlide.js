import { createElement } from "react";

import {
  Austria,
  ColorBlock,
  Denmark,
  England,
  France,
  Germany,
  Greece,
  Italy,
  Norway,
  Poland,
  Romania,
  Russia,
  Scotland,
  Spain,
  Switzerland,
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
    denmark: <Denmark />,
    england: <England />,
    france: <France />,
    germany: <Germany />,
    greece: <Greece />,
    italy: <Italy />,
    norway: <Norway />,
    poland: <Poland />,
    romania: <Romania />,
    russia: <Russia />,
    scotland: <Scotland />,
    spain: <Spain />,
    switzerland: <Switzerland />,
    title: <Title />,
    turkey: <Turkey />,
    wales: <Wales />,
  };

  return (
    slides[id] &&
    createElement(slides[id].type, { data: slide, index, deck, client })
  );
}
