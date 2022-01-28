import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Denmark-Slide.jpg";
import { headline, copy, image } from "../data/fields";

export default {
  name: "denmark",
  title: "Slide — Denmark",
  type: "object",
  fields: [headline, copy, image],
  preview: {
    select: {
      title: "headline",
    },
    prepare: ({ title }) => ({
      title,
      subtitle: "Slide Type: Denmark",
      media: (
        <img
          src={Thumbnail}
          alt="Denmark Slide"
          style={{ objectFit: "cover" }}
        />
      ),
    }),
  },
};
