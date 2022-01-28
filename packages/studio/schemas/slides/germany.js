import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Germany-Slide.jpg";
import { headline, copy, image, pills } from "../data/fields";

export default {
  name: "germany",
  title: "Slide — Germany",
  type: "object",
  fields: [headline, copy, image, pills],
  preview: {
    select: {
      title: "headline",
    },
    prepare: ({ title }) => ({
      title,
      subtitle: "Slide Type: Germany",
      media: (
        <img
          src={Thumbnail}
          alt="Germany Slide"
          style={{ objectFit: "cover" }}
        />
      ),
    }),
  },
};
