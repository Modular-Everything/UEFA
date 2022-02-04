import { gsap } from "gsap";
import { useLayoutEffect } from "react";

export function useAnimateIn(el, inView) {
  useLayoutEffect(() => {
    const anims = [...el.current.querySelectorAll(".animated")];
    anims.forEach((elem, index) => {
      gsap.set(elem, {
        opacity: 0,
        x: -50,
      });

      gsap.to(
        elem,
        {
          opacity: 1,
          x: 0,
        },
        index * 0.5
      );
    });
  }, [el, inView]);
}
