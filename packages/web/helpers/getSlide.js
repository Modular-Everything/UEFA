import { createElement } from "react";

import {
  Andorra,
  Belgium,
  Coefficients,
  ColorBlock,
  Denmark,
  England,
  France,
  Germany,
  Greece,
  Italy,
  Kazakhstan,
  Latvia,
  Norway,
  Poland,
  Romania,
  Russia,
  Scotland,
  Spain,
  Sweden,
  Switzerland,
  Title,
  Turkey,
  Wales,
} from "../components/slides";

export function getSlide(
  slide,
  index,
  activeIndex,
  setViaSpainLink,
  instanceRef,
  deck,
  client,
  preview
) {
  const id = slide._type;

  const slides = {
    andorra: <Andorra />,
    belgium: <Belgium />,
    coefficients: <Coefficients />,
    colorBlock: <ColorBlock />,
    denmark: <Denmark />,
    england: <England />,
    france: <France />,
    germany: <Germany />,
    greece: <Greece />,
    italy: <Italy />,
    kazakhstan: <Kazakhstan />,
    latvia: <Latvia />,
    norway: <Norway />,
    poland: <Poland />,
    romania: <Romania />,
    russia: <Russia />,
    scotland: <Scotland />,
    spain: <Spain />,
    sweden: <Sweden />,
    switzerland: <Switzerland />,
    title: <Title />,
    turkey: <Turkey />,
    wales: <Wales />,
  };

  return (
    slides[id] &&
    createElement(slides[id].type, {
      data: slide,
      index,
      activeIndex,
      setViaSpainLink,
      instanceRef,
      deck,
      client,
      preview,
    })
  );
}
