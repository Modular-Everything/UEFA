import imageUrlBuilder from "@sanity/image-url";

import { sanityConfig } from "../lib/config";

const builder = imageUrlBuilder(sanityConfig);

export function getImgUrl(source) {
  return builder.image(source);
}
