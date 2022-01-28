import React from "react";

import Thumbnail from "../../assets/slide-thumbs/England-Slide.jpg";
import { headline, copy, image, number } from "../data/fields";

export default {
  name: "england",
  title: "Slide — England",
  type: "object",
  fields: [number, headline, copy, image],
  preview: {
    select: {
      title: "headline",
    },
    prepare: ({ title }) => ({
      title,
      subtitle: "Slide Type: England",
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
