import BlockContent from "@sanity/block-content-to-react";
import PropTypes from "prop-types";
import { useRef } from "react";

import { useActiveSlide } from "../../../hooks/useActiveSlide";
import { Content } from "../../elements/Content";
import { Image } from "../../elements/Image";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./Latvia.styles";
import { LatviaPatternA, LatviaPatternB } from "./LatviaPatterns";

export function Latvia({ data, index, activeIndex }) {
  const el = useRef();
  const inView = useActiveSlide(activeIndex, index);

  const colors = [
    data?.spotColorA,
    data?.spotColorB,
    data?.spotColorC,
    data?.spotColorD,
  ];

  return (
    <S.Latvia ref={el}>
      <Content>
        <div className="copy">
          {data?.smallHeadline && (
            <h3 className={`smallHeadline ${inView ? "visible" : "hidden"}`}>
              {data.smallHeadline}
            </h3>
          )}
          {data?.copy && (
            <SimpleCopy inView={inView}>
              <BlockContent blocks={data.copy} />
            </SimpleCopy>
          )}
        </div>
      </Content>

      <div className="pattern patternA">
        <LatviaPatternA colors={colors} />
      </div>

      <div className="pattern patternB">
        <LatviaPatternB colors={colors} />
      </div>

      {data?.image && (
        <div className="bg">
          <Image
            src={data?.image}
            alt={data?.headline}
            layout="fill"
            objectFit="cover"
            quality={95}
          />
        </div>
      )}
    </S.Latvia>
  );
}

Latvia.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
