import BlockContent from "@sanity/block-content-to-react";
import PropTypes from "prop-types";
import { useRef } from "react";

import { useActiveSlide } from "../../../hooks/useActiveSlide";
import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import { Image } from "../../elements/Image";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./Coefficients.styles";
import { Pattern } from "./CoefficientsPattern";

export function Coefficients({ data, index, activeIndex }) {
  const el = useRef();
  const inView = useActiveSlide(activeIndex, index);

  return (
    <S.Coefficients
      headlineColor={(data?.patternColors && data.patternColors[4]) || "#fff"}
    >
      <Content>
        {data?.headline && (
          <Headline
            data={{ headline: data.headline }}
            inView={inView}
            dividerColor={
              (data?.patternColors && data.patternColors[5]) || "#ffcb00"
            }
          />
        )}

        {data?.copy && (
          <SimpleCopy inView={inView}>
            <BlockContent blocks={data.copy} />
          </SimpleCopy>
        )}
      </Content>

      <Pattern
        colorA={(data?.patternColors && data.patternColors[0]) || "#03bb5d"}
        colorB={(data?.patternColors && data.patternColors[1]) || "#fe0000"}
        colorC={(data?.patternColors && data.patternColors[2]) || "#fe0000"}
        colorD={(data?.patternColors && data.patternColors[3]) || "#c80000"}
      />
    </S.Coefficients>
  );
}

Coefficients.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
