import PropTypes from "prop-types";

import * as S from "./Pill.styles";

export function Pill({ data, context }) {
  return (
    <S.Pill className="pill">
      <span className="data">{data}</span>
      <span className="context">{context}</span>
    </S.Pill>
  );
}

Pill.propTypes = {
  data: PropTypes.string.isRequired,
  context: PropTypes.string.isRequired,
};
