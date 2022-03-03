import PropTypes from "prop-types";

import * as S from "./Pill.styles";

export function Pill({ data, context, colors, className }) {
  return (
    <S.Pill
      className={`pill ${className}`}
      dataColor={colors?.data}
      contextColor={colors?.context}
    >
      <span className="data">{data}</span>
      <span className="context">{context}</span>
    </S.Pill>
  );
}

Pill.propTypes = {
  data: PropTypes.string.isRequired,
  context: PropTypes.string.isRequired,
  colors: PropTypes.shape({
    dataColor: PropTypes.string,
    contextColor: PropTypes.string,
  }),
};

Pill.defaultProps = {
  colors: {
    dataColor: null,
    contextColor: null,
  },
};
