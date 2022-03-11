import contrast from "contrast";
import { useKeenSlider } from "keen-slider/react";
import { useRouter } from "next/router";
import "keen-slider/keen-slider.min.css";
import PropTypes from "prop-types";

import { WheelControls } from "../../../helpers/KeenWheelControls";
import * as S from "./NavItems.styles";

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) {
            mainRef.current.moveToIdx(idx);
          }
        });
      });
    }
    addClickEvents();
  };
}

export function NavItems({ navOpen, slides, instanceRef }) {
  const [thumbnailRef] = useKeenSlider(
    {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: "auto",
        spacing: 16,
      },
    },
    [WheelControls, ThumbnailPlugin(instanceRef)]
  );

  const router = useRouter();

  return (
    <S.NavItems isOpen={navOpen}>
      {slides && (
        <ol ref={thumbnailRef} className="keen-slider">
          {slides?.map((slide, index) => {
            const slideIndex = index + 1;
            const activeSlide = router.asPath.includes(`#${slideIndex}`);

            return (
              <li key={slide._key} className="keen-slider__slide">
                <button
                  type="button"
                  style={{
                    backgroundColor: slide.navColor || "var(--white)",
                    border: activeSlide
                      ? "2px solid var(--uefa-yellow)"
                      : "none",
                    color:
                      contrast(slide?.navColor || "#fff") === "dark"
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
          <li className="keen-slider__slide empty">
            <button type="button" aria-label="Print" />
          </li>
        </ol>
      )}
    </S.NavItems>
  );
}

NavItems.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};
