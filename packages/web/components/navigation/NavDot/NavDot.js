import PropTypes from "prop-types";

import { Arrow } from "../../icons/Arrow";
import * as S from "./NavDot.styles";

export function NavDot({ navOpen, setNavOpen }) {
  function handleMenuOpen() {
    setNavOpen(true);
  }

  function handleMenuNavigate() {
    setNavOpen(false);
  }

  return (
    <S.NavDot
      className={navOpen ? "active" : "inactive"}
      onClick={navOpen ? handleMenuNavigate : handleMenuOpen}
    >
      {navOpen && <Arrow />}
    </S.NavDot>
  );
}

NavDot.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  setNavOpen: PropTypes.func.isRequired,
};
