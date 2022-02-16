import BlockContent from "@sanity/block-content-to-react";
import PropTypes from "prop-types";
import { useRef } from "react";

import { useActiveSlide } from "../../../hooks/useActiveSlide";
import { Bars } from "../../elements/Bars";
import { Bullets } from "../../elements/Bullets";
import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import { Image } from "../../elements/Image";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./Belgium.styles";

export function Belgium({ data, index, activeIndex }) {
  const el = useRef();
  const inView = useActiveSlide(activeIndex, index);

  return (
    <S.Belgium
      ref={el}
      style={{
        backgroundColor: data?.brandColors,
      }}
    >
      <Content>
        <div className="copy">
          {data?.headline && (
            <Headline
              data={{ headline: data.headline }}
              inView={inView}
              dividerColor="var(--uefa-lt-green)"
            />
          )}
          {data?.copy && (
            <SimpleCopy inView={inView}>
              <BlockContent blocks={data.copy} />
              {data?.source && <cite>Source: {data.source}</cite>}
            </SimpleCopy>
          )}
          {data?.bullets && <Bullets bullets={data.bullets} inView={inView} />}
        </div>

        <div className="chart">{data?.bars && <Bars bars={data.bars} />}</div>
      </Content>

      <div className="image">
        <Image
          src={data?.image}
          alt=""
          layout="fill"
          objectFit="cover"
          saturate
          quality={98}
          className="Belgium__image"
        />
      </div>
    </S.Belgium>
  );
}

Belgium.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
