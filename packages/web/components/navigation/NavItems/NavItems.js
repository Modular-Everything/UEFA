import contrast from "contrast";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import PropTypes from "prop-types";

import * as S from "./NavItems.styles";

export function NavItems({ navOpen, slides, moveTo }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: "auto",
      spacing: 16,
    },
  });

  return (
    <S.NavItems isOpen={navOpen}>
      <ol ref={sliderRef} className="keen-slider">
        {slides?.map((slide, index) => {
          const slideIndex = index + 1;

          return (
            <li key={slide._key} className="keen-slider__slide">
              <button
                type="button"
                onClick={() => moveTo(slideIndex)}
                style={{
                  backgroundColor: slide.navColor || "var(--white)",
                  color:
                    contrast(slide.navColor) === "dark"
                      ? "var(--white)"
                      : "var(--uefa-black)",
                }}
              >
                <span>{index >= 9 ? slideIndex : `0${slideIndex}`}</span>
                <span>{slide.navLabel || null}</span>
              </button>
            </li>
          );
        })}
        <li className="keen-slider__slide" />
      </ol>
    </S.NavItems>
  );
}

NavItems.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};
