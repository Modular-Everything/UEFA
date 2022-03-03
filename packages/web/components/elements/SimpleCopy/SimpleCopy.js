import PropTypes from "prop-types";

import * as S from "./SimpleCopy.styles";

export function SimpleCopy({ children, inView, ...rest }) {
  return (
    <S.SimpleCopy
      className={`simpleCopy ${inView ? "visible" : "hidden"}`}
      {...rest}
    >
      {children}
    </S.SimpleCopy>
  );
}

SimpleCopy.propTypes = {
  children: PropTypes.node.isRequired,
};
