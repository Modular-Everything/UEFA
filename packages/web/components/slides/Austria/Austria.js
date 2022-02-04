import BlockContent from "@sanity/block-content-to-react";
import PropTypes from "prop-types";
import { useRef } from "react";

import { useActiveSlide } from "../../../hooks/useActiveSlide";
import { Bars } from "../../elements/Bars";
import { Bullets } from "../../elements/Bullets";
import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./Austria.styles";

export function Austria({ data, index, activeIndex }) {
  const el = useRef();
  const inView = useActiveSlide(activeIndex, index);

  return (
    <S.Austria
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
            </SimpleCopy>
          )}
          {data?.bullets && <Bullets bullets={data.bullets} />}
        </div>

        <div className="chart">{data?.bars && <Bars bars={data.bars} />}</div>
      </Content>
    </S.Austria>
  );
}

Austria.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
