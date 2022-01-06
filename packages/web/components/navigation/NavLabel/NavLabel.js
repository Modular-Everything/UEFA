import PropTypes from "prop-types";

import * as S from "./NavLabel.styles";

export function NavLabel({ navOpen, returnTo }) {
  return (
    <S.NavLabel isOpen={navOpen}>
      <span>Return to</span>
      <p>{returnTo}</p>
    </S.NavLabel>
  );
}

NavLabel.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  returnTo: PropTypes.string.isRequired,
};
