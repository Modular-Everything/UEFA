import BlockContent from "@sanity/block-content-to-react";
import PropTypes from "prop-types";
import { useRef } from "react";

import { useActiveSlide } from "../../../hooks/useActiveSlide";
import { Content } from "../../elements/Content";
import { Image } from "../../elements/Image";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./France.styles";
import { Pattern } from "./FrancePattern";

export function France({ data, index, activeIndex }) {
  const el = useRef();
  const inView = useActiveSlide(activeIndex, index);

  console.log(data);

  return (
    <S.France
      ref={el}
      style={{
        backgroundColor: data?.brandColors,
      }}
    >
      <Content>
        {data?.copy && (
          <SimpleCopy inView={inView}>
            <BlockContent blocks={data.copy} />
          </SimpleCopy>
        )}
      </Content>

      <Pattern
        colorA={data?.patternColors[0] || "#EFF4F8"}
        colorB={data?.patternColors[1] || "#FE0000"}
        colorC={data?.patternColors[2] || "#052992"}
      />

      {data?.image && (
        <div className="bg">
          <Image
            src={data?.image}
            alt=""
            layout="fill"
            objectFit="cover"
            quality={90}
          />
        </div>
      )}
    </S.France>
  );
}

France.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
