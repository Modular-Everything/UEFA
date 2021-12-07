import PropTypes from "prop-types";

import { Pill } from "../Pill";
import * as S from "./Pills.styles";

export function Pills({ pills }) {
  return (
    <S.Pills>
      {pills?.map((pill) => (
        <Pill key={pill?._key} data={pill?.data} context={pill?.context} />
      ))}
    </S.Pills>
  );
}

Pills.propTypes = {
  pills: PropTypes.arrayOf({
    data: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
  }),
};
