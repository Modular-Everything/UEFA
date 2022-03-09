import { useState } from "react";

import { NavDot } from "../NavDot";
import { NavItems } from "../NavItems";
import { NavLabel } from "../NavLabel";
import * as S from "./NavBar.styles";

export function NavBar({ slides, instanceRef }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <S.NavBar isOpen={navOpen}>
        <NavDot navOpen={navOpen} setNavOpen={setNavOpen} />
        <NavLabel navOpen={navOpen} returnTo="All Presentations" />
        <NavItems navOpen={navOpen} slides={slides} instanceRef={instanceRef} />
      </S.NavBar>

      <S.Skrim navOpen={navOpen} onClick={() => navOpen && setNavOpen(false)} />
    </>
  );
}
