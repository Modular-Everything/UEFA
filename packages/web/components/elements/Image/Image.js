import NextImage from "next/image";
import PropTypes from "prop-types";

import { getImgUrl } from "../../../helpers/getImgUrl";
import * as S from "./Image.styles";

export function Image({ src, saturate, layout, blur, skrimOpacity, ...rest }) {
  if (!src || !src.asset) {
    return null;
  }

  let image;
  if (blur) {
    image = getImgUrl(src).blur(85);
  } else {
    image = getImgUrl(src);
  }
  // eslint-disable-next-line no-unused-vars
  const [assetType, _id, dimensions, filetype] = src.asset._ref.split("-");
  const [width, height] = dimensions.split("x");

  return (
    <S.Image>
      {skrimOpacity && (
        <div
          className="apply-skrim"
          style={{
            opacity: skrimOpacity === null ? 0.9 : skrimOpacity / 100,
          }}
        />
      )}
      {saturate && <div className="apply-saturation" />}
      <NextImage
        src={image.url()}
        placeholder="blur"
        blurDataURL={image.blur().url()}
        layout={layout}
        width={layout === "fill" ? null : width}
        height={layout === "fill" ? null : height}
        loading="eager"
        {...rest}
      />
    </S.Image>
  );
}

Image.propTypes = {
  src: PropTypes.object,
  layout: PropTypes.string,
  saturate: PropTypes.bool,
  blur: PropTypes.bool,
  skrimOpacity: PropTypes.number,
};

Image.defaultProps = {
  src: null,
  layout: null,
  saturate: false,
  blur: false,
  skrimOpacity: null,
};
