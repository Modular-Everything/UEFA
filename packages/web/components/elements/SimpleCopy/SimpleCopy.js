import PropTypes from "prop-types";

import * as S from "./SimpleCopy.styles";

export function SimpleCopy({ children }) {
  return <S.SimpleCopy>{children}</S.SimpleCopy>;
}

SimpleCopy.propTypes = {
  children: PropTypes.node.isRequired,
};
