import PropTypes from "prop-types";

import * as S from "./LargeOutlinedText.styles";

export function LargeOutlinedText({ one, two, colorA, colorB }) {
  return (
    <S.LargeOutlinedText colorA={colorA} colorB={colorB}>
      <span>{one}</span>
      <span>{two}</span>
    </S.LargeOutlinedText>
  );
}

LargeOutlinedText.propTypes = {
  one: PropTypes.string.isRequired,
  two: PropTypes.string.isRequired,
  colorA: PropTypes.string.isRequired,
  colorB: PropTypes.string.isRequired,
};
