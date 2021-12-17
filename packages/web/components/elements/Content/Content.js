import PropTypes from "prop-types";

import * as S from "./Content.styles";

export function Content({ children, textColor }) {
  return (
    <S.Content className="content" style={{ color: textColor }}>
      {children}
    </S.Content>
  );
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
  textColor: PropTypes.string,
};

Content.defaultProps = {
  textColor: null,
};
