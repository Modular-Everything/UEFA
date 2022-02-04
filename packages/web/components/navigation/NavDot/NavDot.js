import { useRouter } from "next/router";
import PropTypes from "prop-types";

import { Arrow } from "../../icons/Arrow";
import * as S from "./NavDot.styles";

export function NavDot({ navOpen, setNavOpen }) {
  const router = useRouter();
  const client = router?.query?.client;

  function handleMenuOpen() {
    setNavOpen(true);
  }

  function handleMenuNavigate() {
    router.push(`/clients/${client}`);
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
