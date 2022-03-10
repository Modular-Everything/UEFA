import BlockContent from "@sanity/block-content-to-react";
import PropTypes from "prop-types";
import { useRef } from "react";

import { useActiveSlide } from "../../../hooks/useActiveSlide";
import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import { Image } from "../../elements/Image";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./Romania.styles";
import { Pattern } from "./RomaniaPattern";

export function Romania({ data, index, activeIndex }) {
  const el = useRef();
  const inView = useActiveSlide(activeIndex, index);

  return (
    <S.Romania
      ref={el}
      style={{
        backgroundColor: data?.brandColors,
      }}
    >
      <Content>
        {data?.headline && (
          <Headline data={{ headline: data.headline }} inView={inView} />
        )}

        {data?.copy && (
          <SimpleCopy inView={inView}>
            <BlockContent blocks={data.copy} />
          </SimpleCopy>
        )}
      </Content>

      <Pattern />

      {data?.image && (
        <div className="bg">
          <Image
            src={data?.image}
            saturate={data?.image?.saturate}
            blur={data?.image?.blur}
            skrimOpacity={data?.image?.opacity}
            alt=""
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      )}
    </S.Romania>
  );
}

Romania.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
