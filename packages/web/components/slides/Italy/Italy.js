import BlockContent from "@sanity/block-content-to-react";
import PropTypes from "prop-types";
import { useRef } from "react";

import { useActiveSlide } from "../../../hooks/useActiveSlide";
import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import { Image } from "../../elements/Image";
import { Pills } from "../../elements/Pills";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./Italy.styles";
import { Pattern } from "./Pattern";

export function Italy({ data, index, activeIndex }) {
  const el = useRef();
  const inView = useActiveSlide(activeIndex, index);

  return (
    <S.Italy ref={el}>
      <Content>
        {data?.headline && (
          <Headline data={{ headline: data.headline }} inView={inView} />
        )}

        {data?.copy && (
          <SimpleCopy inView={inView}>
            <BlockContent blocks={data.copy} />
          </SimpleCopy>
        )}

        {data?.pills && (
          <Pills
            pills={data.pills}
            colors={{ data: "uefa-blue", context: "uefa-lt-blue" }}
          />
        )}
      </Content>

      <div className="image">
        <Image
          src={data?.image}
          saturate={data?.image?.saturate}
          blur={data?.image?.blur}
          skrimOpacity={data?.image?.opacity}
          quality={95}
          className="Italy__image"
        />
      </div>

      <Pattern />
    </S.Italy>
  );
}

Italy.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
