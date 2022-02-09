import PropTypes from "prop-types";

import * as S from "./Bullets.styles";

export function Bullets({ bullets, inView }) {
  return (
    <S.Bullets className={bullets.length > 6 ? "two-col" : "one-col"}>
      {bullets?.map((bullet, index) => (
        <S.Bullet
          key={bullet._key}
          delay={index}
          className={`${inView ? "visible" : "hidden"}`}
        >
          <span
            className="bullet"
            style={{ backgroundColor: bullet.bulletColor }}
          />
          <span className="label">{bullet.label}</span>
        </S.Bullet>
      ))}
    </S.Bullets>
  );
}

Bullets.propTypes = {
  bullets: PropTypes.arrayOf(PropTypes.object).isRequired,
};
