import PropTypes from "prop-types";
import { useRef } from "react";

import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import * as S from "./Greece.styles";
import { Pattern } from "./GreecePattern";

export function Greece({ data, index }) {
  const el = useRef();

  return (
    <S.Greece
      ref={el}
      style={{
        backgroundColor: data?.brandColors,
      }}
    >
      <Content>
        {data?.headline && <Headline data={{ headline: data.headline }} />}
      </Content>

      <Pattern />
    </S.Greece>
  );
}

Greece.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
