import PropTypes from "prop-types";
import { useRef } from "react";

import { useActiveSlide } from "../../../hooks/useActiveSlide";
import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import { Image } from "../../elements/Image";
import { LargeOutlinedText } from "../../elements/LargeOutlinedText";
import * as S from "./Norway.styles";

export function Norway({ data, index, activeIndex }) {
  const el = useRef();
  const inView = useActiveSlide(activeIndex, index);

  return (
    <S.Norway ref={el}>
      <Content>
        {data?.headline && (
          <Headline data={{ headline: data.headline }} inView={inView} />
        )}
      </Content>

      {data?.outlinedTextA && data?.outlinedTextB && (
        <LargeOutlinedText one={data.outlinedTextA} two={data.outlinedTextB} />
      )}

      {data?.image && (
        <div className="bg">
          <Image
            src={data?.image}
            saturate={data?.image?.saturate}
            blur={data?.image?.blur}
            skrimOpacity={data?.image?.opacity}
            alt={data?.headline}
            layout="fill"
            objectFit="cover"
            quality={95}
          />
        </div>
      )}
    </S.Norway>
  );
}

Norway.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
