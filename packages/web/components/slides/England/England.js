import BlockContent from "@sanity/block-content-to-react";
import PropTypes from "prop-types";
import { useRef } from "react";

import { useActiveSlide } from "../../../hooks/useActiveSlide";
import { Headline } from "../../elements/Headline";
import { Image } from "../../elements/Image";
import { Number } from "../../elements/Number";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./England.styles";
import { Pattern } from "./EnglandPattern";

export function England({ data, index, activeIndex }) {
  const el = useRef();
  const inView = useActiveSlide(activeIndex, index);

  return (
    <S.England ref={el}>
      <div className="content">
        <div className="container">
          <div className="top">
            <Number
              inView={inView}
              value={
                data?.customNumber >= 10
                  ? data.customNumber
                  : `0${data.customNumber}`
              }
            />

            {data?.copy && (
              <SimpleCopy inView={inView}>
                <BlockContent blocks={data.copy} />
              </SimpleCopy>
            )}
          </div>

          <div className="bottom">
            {data?.headline && (
              <Headline data={{ headline: data.headline }} inView={inView} />
            )}
          </div>
        </div>

        <Pattern />
      </div>

      <div className="image">
        <Image
          src={data?.image}
          saturate={data?.image?.saturate}
          blur={data?.image?.blur}
          skrimOpacity={data?.image?.opacity}
          alt=""
          layout="fill"
          objectFit="cover"
          quality={95}
          className="England__image"
        />
      </div>
    </S.England>
  );
}

England.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
