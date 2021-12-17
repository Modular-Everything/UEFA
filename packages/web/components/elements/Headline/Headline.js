import PropTypes from "prop-types";

import * as S from "./Headline.styles";

export function Headline({ data, dividerColor }) {
  return (
    <S.Headline
      className="headline font--heavy-extended"
      dividerColor={dividerColor}
    >
      {data?.headline}
    </S.Headline>
  );
}

Headline.propTypes = {
  data: PropTypes.shape({
    headline: PropTypes.string.isRequired,
  }),
  dividerColor: PropTypes.string,
};

Headline.defaultProps = {
  dividerColor: null,
};
