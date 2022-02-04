import PropTypes from "prop-types";

import * as S from "./SimpleCopy.styles";

export function SimpleCopy({ children, inView }) {
  return (
    <S.SimpleCopy className={`simpleCopy ${inView ? "visible" : "hidden"}`}>
      {children}
    </S.SimpleCopy>
  );
}

SimpleCopy.propTypes = {
  children: PropTypes.node.isRequired,
};
