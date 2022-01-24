import PropTypes from "prop-types";
import { useRef } from "react";

import { Image } from "../../elements/Image";
import { RepeatedText } from "../../elements/RepeatedText/RepeatedText";
import * as S from "./Turkey.styles";

export function Turkey({ data, index }) {
  const el = useRef();

  return (
    <S.Turkey ref={el}>
      <div className="content">
        <RepeatedText text={data?.headline} />
      </div>

      <div className="image">
        <Image
          src={data?.image}
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
