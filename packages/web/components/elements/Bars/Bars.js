import PropTypes from "prop-types";

import * as S from "./Bars.styles";

export function Bars({ bars }) {
  return (
    <S.Bars squash={bars.length > 4}>
      {bars?.map((bar) => (
        <li key={bar._key}>
          <span
            className="progress"
            style={{
              backgroundColor: bar.barColor,
              width: `${bar.progress * 10}%`,
            }}
          />

          <div className="meta">
            <span className="label">{bar.label}</span>
            <span className="value">{bar.value}</span>
          </div>
        </li>
      ))}
    </S.Bars>
  );
}

Bars.propTypes = {
  bars: PropTypes.arrayOf(PropTypes.object).isRequired,
};
