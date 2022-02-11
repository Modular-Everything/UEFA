import PropTypes from "prop-types";

import * as S from "./Button.styles";

export function ButtonLink({ label, to }) {
  return (
    <S.ButtonWrap>
      <S.ButtonLink href={to}>
        <a>{label}</a>
      </S.ButtonLink>
    </S.ButtonWrap>
  );
}

export function ButtonEl({ label, ...rest }) {
  return (
    <S.ButtonWrap>
      <S.ButtonEl {...rest}>{label}</S.ButtonEl>
    </S.ButtonWrap>
  );
}
