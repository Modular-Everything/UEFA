import PropTypes from "prop-types";
import { useRef } from "react";

import { useActiveSlide } from "../../../hooks/useActiveSlide";
import { VideoPlayer } from "../../elements/VideoPlayer";
import * as S from "./Kazakhstan.styles";

export function Kazakhstan({ data, index, activeIndex }) {
  const el = useRef();
  const inView = useActiveSlide(activeIndex, index);

  return (
    <S.Kazakhstan ref={el}>
      <VideoPlayer
        video={data?.video}
        inView={inView}
        width="90%"
        height="90%"
      />
    </S.Kazakhstan>
  );
}

Kazakhstan.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
