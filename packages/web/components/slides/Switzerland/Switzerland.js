import BlockContent from "@sanity/block-content-to-react";
import PropTypes from "prop-types";
import { useRef } from "react";

import { useActiveSlide } from "../../../hooks/useActiveSlide";
import { Bullets } from "../../elements/Bullets";
import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import { Image } from "../../elements/Image";
import { SimpleCopy } from "../../elements/SimpleCopy";
import { VideoPlayer } from "../../elements/VideoPlayer";
import * as S from "./Switzerland.styles";

export function Switzerland({ data, index, activeIndex }) {
  const el = useRef();
  const inView = useActiveSlide(activeIndex, index);

  return (
    <S.Switzerland ref={el}>
      <Content>
        <div className="copy">
          <div className="meta">
            {data?.headline && (
              <Headline data={{ headline: data.headline }} inView={inView} />
            )}
            {data?.copy && (
              <SimpleCopy inView={inView}>
                <BlockContent blocks={data.copy} />
              </SimpleCopy>
            )}
          </div>

          {data?.bullets && <Bullets bullets={data.bullets} inView={inView} />}
        </div>

        {data?.mediaType === "video" && (
          <VideoPlayer className="media" video={data?.video} inView={inView} />
        )}
      </Content>

      {data?.mediaType === "image" && (
        <div className={`media image ${inView ? "visible" : "hidden"}`}>
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
