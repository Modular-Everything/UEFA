import PropTypes from "prop-types";
import { useRef } from "react";

import { useActiveSlide } from "../../../hooks/useActiveSlide";
import { Image } from "../../elements/Image";
import { RepeatedText } from "../../elements/RepeatedText/RepeatedText";
import * as S from "./Turkey.styles";

export function Turkey({ data, index, activeIndex }) {
  const el = useRef();
  const inView = useActiveSlide(activeIndex, index);

  return (
    <S.Turkey ref={el}>
      <div className="content">
        <RepeatedText text={data?.headline} />
      </div>

      <div className="image">
        <Image
          src={data?.image}
          saturate={data?.image?.saturate}
          blur={data?.image?.blur}
          skrimOpacity={data?.image?.opacity}
          alt=""
          layout="fill"
          objectFit="contain"
          quality={95}
          className="Turkey__image"
        />
      </div>
    </S.Turkey>
  );
}

Turkey.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
