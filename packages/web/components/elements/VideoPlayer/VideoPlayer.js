import PropTypes from "prop-types";
import { useState } from "react";
import ReactPlayer from "react-player/vimeo";

import * as S from "./VideoPlayer.styles";

export function VideoPlayer({ video, inView, className, width, height }) {
  const [playing, setPlaying] = useState(false);
  return (
    <S.VideoPlayer
      className={`video ${className} ${inView ? "visible" : "hidden"}`}
    >
      {video && (
        <>
          <button
            className={`skrim ${playing ? "inactive" : "active"}`}
            type="button"
            aria-label="Play Video"
            onClick={() => setPlaying(true)}
          />
          <ReactPlayer
            url={video}
            controls
            onPause={() => setPlaying(false)}
            playing={playing}
            width={width}
            height={height}
          />
        </>
      )}
    </S.VideoPlayer>
  );
}

VideoPlayer.propTypes = {
  video: PropTypes.string,
  inView: PropTypes.bool,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

VideoPlayer.defaultProps = {
  video: null,
  inView: true,
  className: null,
  width: "100%",
  height: "100%",
};
