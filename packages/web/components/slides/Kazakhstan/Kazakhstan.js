import getVideoId from "get-video-id";
import PropTypes from "prop-types";
import { useRef } from "react";

import * as S from "./Kazakhstan.styles";

export function Kazakhstan({ data, index }) {
  const el = useRef();

  return (
    <S.Kazakhstan ref={el}>
      <div className="video">
        {data?.video && (
          <iframe
            src={`https://player.vimeo.com/video/${
              getVideoId(data?.video).id
            }?muted=1&autoplay=1`}
            title="Vimeo"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay;"
            allowFullScreen
          />
        )}
      </div>
    </S.Kazakhstan>
  );
}

Kazakhstan.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
