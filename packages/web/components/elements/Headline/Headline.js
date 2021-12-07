import PropTypes from "prop-types";

import * as S from "./Headline.styles";

export function Headline({ data }) {
  return (
    <S.Headline className="Headline font--heavy-extended">
      {data?.headline}
    </S.Headline>
  );
}

Headline.propTypes = {
  data: PropTypes.shape({
    headline: PropTypes.string.isRequired,
  }),
};
