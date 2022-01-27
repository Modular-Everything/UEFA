import PropTypes from "prop-types";

import * as S from "./Bullets.styles";

export function Bullets({ bullets }) {
  return (
    <S.Bullets className={bullets.length > 6 ? "two-col" : "one-col"}>
      {bullets?.map((bullet) => (
        <li key={bullet._key}>
          <span
            className="bullet"
            style={{ backgroundColor: bullet.bulletColor }}
          />
          <span className="label">{bullet.label}</span>
        </li>
      ))}
    </S.Bullets>
  );
}

Bullets.propTypes = {
  bullets: PropTypes.arrayOf(PropTypes.object).isRequired,
};
