import PropTypes from "prop-types";

import * as S from "./Content.styles";

export function Content({ children }) {
  return <S.Content className="content">{children}</S.Content>;
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
};
