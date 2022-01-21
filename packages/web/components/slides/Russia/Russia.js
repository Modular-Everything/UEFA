import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRef } from "react";

import { sanityConfig } from "../../../lib/config";
import { Content } from "../../elements/Content";
import * as S from "./Russia.styles";

function saturateImage(imageUrlBuilder) {
  return imageUrlBuilder.saturation(-100);
}

export function Russia({ data, index }) {
  const imageProps = useNextSanityImage(sanityConfig, data?.image, {
    imageBuilder: saturateImage,
  });
  const el = useRef();

  return (
    <S.Russia ref={el}>
      <Content>
        <div className="charts">
          {data?.charts?.map((chart) => {
            // const imageProps = useNextSanityImage(sanityConfig, chart);
            return (
              <div key={chart._key} className="chart">
                <img src="https://picsum.photos/350/350" alt="" />
              </div>
            );
          })}
        </div>
      </Content>

      <div className="image">
        <Image
          {...imageProps}
          alt=""
          layout="fill"
          objectFit="cover"
          quality={95}
          className="Russia__image"
        />
      </div>
    </S.Russia>
  );
}

Russia.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
