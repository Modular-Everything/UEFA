import PropTypes from "prop-types";

import * as S from "./Headline.styles";

export function Headline({ data }) {
  return (
    <S.Headline className="font--heavy-extended">{data?.headline}</S.Headline>
  );
}

Headline.propTypes = {
  data: PropTypes.shape({
    headline: PropTypes.string.isRequired,
  }),
};
