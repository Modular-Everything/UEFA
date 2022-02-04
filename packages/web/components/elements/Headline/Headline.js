import PropTypes from "prop-types";

import * as S from "./Headline.styles";

export function Headline({ data, dividerColor, inView, delay }) {
  return (
    <S.Headline
      className={`headline font--heavy-extended ${
        inView ? "visible" : "hidden"
      }`}
      delay={delay}
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
