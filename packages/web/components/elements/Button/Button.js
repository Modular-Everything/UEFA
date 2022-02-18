import PropTypes from "prop-types";

import * as S from "./Button.styles";

export function ButtonLink({ label, to }) {
  return (
    <S.ButtonWrap className="button">
      <S.ButtonLink href={to}>
        <a>{label}</a>
      </S.ButtonLink>
    </S.ButtonWrap>
  );
}

ButtonLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export function ButtonEl({ label, ...rest }) {
  return (
    <S.ButtonWrap className="button">
      <S.ButtonEl {...rest}>{label}</S.ButtonEl>
    </S.ButtonWrap>
  );
}
ButtonEl.propTypes = {
  label: PropTypes.string.isRequired,
};
