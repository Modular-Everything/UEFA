import PropTypes from "prop-types";

import * as S from "./NavItems.styles";

export function NavItems({ navOpen }) {
  return (
    <S.NavItems isOpen={navOpen}>
      <ol>
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ol>
    </S.NavItems>
  );
}

NavItems.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};
