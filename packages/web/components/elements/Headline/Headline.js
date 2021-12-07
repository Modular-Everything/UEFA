import { gsap } from "gsap";
import PropTypes from "prop-types";
import { useEffect } from "react";


import * as S from "./Headline.styles";

export function Headline({ data }) {
  return (
    <S.Headline className="headline font--heavy-extended">
      {data?.headline}
    </S.Headline>
  );
}

Headline.propTypes = {
  data: PropTypes.shape({
    headline: PropTypes.string.isRequired,
  }),
};
