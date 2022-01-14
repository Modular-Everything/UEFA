import { useState } from "react";

import { NavDot } from "../NavDot";
import { NavItems } from "../NavItems";
import { NavLabel } from "../NavLabel";
import * as S from "./NavBar.styles";

export function NavBar({ slideIndex, slides, moveTo }) {
  const [navOpen, setNavOpen] = useState(false);

  // document.addEventListener("keydown", (e) => {
  //   if (e.key === "M") {
  //     setNavOpen(true);
  //   }
  //   if (e.key === "Escape") {
  //     setNavOpen(false);
  //   }
  // });

  return (
    <>
      <S.NavBar isOpen={navOpen}>
        <NavDot navOpen={navOpen} setNavOpen={setNavOpen} />
        <NavLabel navOpen={navOpen} returnTo="All Presentations" />
        <NavItems
          navOpen={navOpen}
          slideIndex={slideIndex}
          slides={slides}
          moveTo={moveTo}
        />
      </S.NavBar>

      <S.Skrim navOpen={navOpen} onClick={() => navOpen && setNavOpen(false)} />
    </>
  );
}
