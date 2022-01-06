import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRef } from "react";

import { sanityConfig } from "../../../lib/config";
import { RepeatedText } from "../../elements/RepeatedText/RepeatedText";
import * as S from "./Turkey.styles";

export function Turkey({ data, index }) {
  const imageProps = useNextSanityImage(sanityConfig, data?.image);
  const el = useRef();

  return (
    <S.Turkey ref={el}>
      <div className="content">
        <RepeatedText text={data?.headline} />
      </div>

      <div className="image">
        <Image
          {...imageProps}
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
