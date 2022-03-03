import PropTypes from "prop-types";

import * as S from "./Number.styles";

export function Number({ value, as, className, inView }) {
  return (
    <S.Number
      as={as}
      className={`${className} ${inView ? "visible" : "hidden"}`}
    >
      {value}
    </S.Number>
  );
}

Number.propTypes = {
  value: PropTypes.string.isRequired,
  as: PropTypes.string,
  className: PropTypes.string,
};

Number.defaultProps = {
  as: null,
  className: null,
};
