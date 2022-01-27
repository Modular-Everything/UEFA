import getVideoId from "get-video-id";
import PropTypes from "prop-types";
import { useRef } from "react";

import { Bullets } from "../../elements/Bullets";
import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import { Image } from "../../elements/Image";
import * as S from "./Switzerland.styles";

export function Switzerland({ data, index }) {
  const el = useRef();

  return (
    <S.Switzerland ref={el}>
      <Content>
        <div className="copy">
          {data?.headline && <Headline data={{ headline: data.headline }} />}
          {data?.bullets && <Bullets bullets={data.bullets} />}
        </div>

        {data?.mediaType === "video" && (
          <div className="media video">
            <iframe
              src={`https://player.vimeo.com/video/${
                getVideoId(data?.video).id
              }?h=0f405f633e&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;&amp;app_id=122963`}
              title="Vimeo"
              width="1920"
              height="1080"
              frameBorder="0"
              allow="autoplay;"
              allowFullScreen
            />
          </div>
        )}
      </Content>

      {data?.mediaType === "image" && (
        <div className="media image">
          <Image
            src={data?.image}
            alt={data?.headline}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      )}
    </S.Switzerland>
  );
}

Switzerland.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
