import PropTypes from "prop-types";

import { Pill } from "../Pill";
import * as S from "./Pills.styles";

export function Pills({ pills, colors }) {
  return (
    <S.Pills>
      {pills?.map((pill) => {
        console.log("pill", pill);
        return (
          <Pill
            key={pill?._key}
            data={pill?.data}
            context={pill?.context}
            colors={colors}
          />
        );
      })}
    </S.Pills>
  );
}

Pills.propTypes = {
  pills: PropTypes.arrayOf({
    data: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
  }),
  colors: PropTypes.shape({
    data: PropTypes.string,
    context: PropTypes.string,
  }),
};

Pills.defaultProps = {
  colors: {
    data: null,
    context: null,
  },
};
