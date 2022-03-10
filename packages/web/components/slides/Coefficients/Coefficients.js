import BlockContent from "@sanity/block-content-to-react";
import PropTypes from "prop-types";
import { useRef } from "react";

import { useActiveSlide } from "../../../hooks/useActiveSlide";
import { Headline } from "../../elements/Headline";
import { Image } from "../../elements/Image";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./Coefficients.styles";

export function Coefficients({ data, index, activeIndex }) {
  const el = useRef();
  const inView = useActiveSlide(activeIndex, index);

  return (
    <S.Coefficients
      headlineColor={(data?.patternColors && data.patternColors[4]) || "#fff"}
      style={{
        backgroundColor:
          (data?.patternColors && data.patternColors[0]) || "#03bb5d",
      }}
    >
      {data?.image && (
        <div className="flag__image">
          <Image
            src={data?.image}
            saturate={data?.image?.saturate}
            blur={data?.image?.blur}
            skrimOpacity={data?.image?.opacity}
            alt=""
            layout="fill"
            objectFit="cover"
            quality={95}
          />
        </div>
      )}

      <S.Flag>
        <div
          className="flag"
          style={{
            backgroundColor:
              (data?.patternColors && data.patternColors[0]) || "#03bb5d",
          }}
        >
          <div className="flag__content">
            {data?.headline && (
              <Headline
                data={{ headline: data.headline }}
                inView={inView}
                dividerColor={
                  (data?.patternColors && data.patternColors[5]) || "#ffcb00"
                }
              />
            )}
          </div>
        </div>

        <div
          className="flag"
          style={{
            backgroundColor:
              (data?.patternColors && data.patternColors[1]) || "#fe0000",
          }}
        >
          <div className="flag__content">
            {data?.copy && (
              <SimpleCopy
                inView={inView}
                style={{
                  color:
                    (data?.patternColors && data.patternColors[6]) || "#fff",
                }}
              >
                <BlockContent blocks={data.copy} />
              </SimpleCopy>
            )}
          </div>
        </div>

        <div
          className="flag"
          style={{
            backgroundColor:
              (data?.patternColors && data.patternColors[2]) || "#fe0000",
          }}
        />
      </S.Flag>
    </S.Coefficients>
  );
}

Coefficients.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
