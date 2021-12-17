import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRef } from "react";

import { sanityConfig } from "../../../lib/config";
import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import * as S from "./Romania.styles";
import { Pattern } from "./RomaniaPattern";

export function Romania({ data, index }) {
  const imageProps = useNextSanityImage(sanityConfig, data?.image);
  const el = useRef();

  return (
    <S.Romania
      ref={el}
      style={{
        backgroundColor: data?.brandColors,
      }}
    >
      <Content>
        {data?.headline && <Headline data={{ headline: data.headline }} />}
      </Content>

      <Pattern />

      {data?.image && (
        <div className="bg">
          <Image
            {...imageProps}
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
