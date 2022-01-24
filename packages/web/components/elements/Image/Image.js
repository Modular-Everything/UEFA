import NextImage from "next/image";

import { getImgUrl } from "../../../helpers/getImgUrl";

export function Image({ src, override, layout, modifiers, ...rest }) {
  const image = override || getImgUrl(src);
  // eslint-disable-next-line no-unused-vars
  const [assetType, _id, dimensions, filetype] = src.asset._ref.split("-");
  const [width, height] = dimensions.split("x");

  return (
    <NextImage
      src={image.url()}
      placeholder="blur"
      blurDataURL={image.blur().url()}
      layout={layout}
      width={layout === "fill" ? null : width}
      height={layout === "fill" ? null : height}
      {...rest}
    />
  );
}
