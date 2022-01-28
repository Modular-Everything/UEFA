import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Turkey-Slide.jpg";
import { headline, image } from "../data/fields";

export default {
  name: "turkey",
  title: "Slide — Turkey",
  type: "object",
  fields: [headline, image],
  preview: {
    select: {
      title: "headline",
    },
    prepare: ({ title }) => ({
      title,
      subtitle: "Slide Type: Turkey",
      media: (
        <img
          src={Thumbnail}
          alt="Turkey Slide"
          style={{ objectFit: "cover" }}
        />
      ),
    }),
  },
};
