import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Romania-Slide.jpg";
import { headline, image } from "../data/fields";

export default {
  name: "romania",
  title: "Slide — Romania",
  type: "object",
  fields: [headline, image],
  preview: {
    select: {
      title: "headline",
    },
    prepare: ({ title }) => ({
      title,
      subtitle: "Slide Type: Romania",
      media: (
        <img src={Thumbnail} alt="Romania Slide" style={{ objectFit: "cover" }} />
      ),
    }),
  },
};
