import BlockContent from "@sanity/block-content-to-react";
import PropTypes from "prop-types";
import { useRef } from "react";

import { useActiveSlide } from "../../../hooks/useActiveSlide";
import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import { Image } from "../../elements/Image";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./Andorra.styles";

export function Andorra({ data, index, activeIndex, fullpageApi }) {
  const el = useRef();
  const inView = useActiveSlide(activeIndex, index);

  return (
    <S.Andorra ref={el} className="andorra">
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

      <div className={`image ${inView ? "visible" : "hidden"}`}>
        <Image
          src={data?.image}
          saturate={data?.image?.saturate}
          blur={data?.image?.blur}
          skrimOpacity={data?.image?.opacity}
          quality={98}
          layout={data?.imageLayout === "cover" ? "fill" : "intrinsic"}
          objectFit={data?.imageLayout === "cover" ? "cover" : "contain"}
          className="Andorra__image"
        />
      </div>
    </S.Andorra>
  );
}

Andorra.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
