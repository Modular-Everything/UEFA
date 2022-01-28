import React from "react";

import Thumbnail from "../../assets/slide-thumbs/France-Slide.jpg";
import { headline, image, copy } from "../data/fields";

export default {
  name: "france",
  title: "Slide — France",
  type: "object",
  fields: [headline, copy, image],
  preview: {
    select: {
      title: "headline",
    },
    prepare: ({ title }) => ({
      title,
      subtitle: "Slide Type: France",
      media: (
        <img
          src={Thumbnail}
          alt="England Slide"
          style={{ objectFit: "cover" }}
        />
      ),
    }),
  },
};
