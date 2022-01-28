import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Greece-Slide.jpg";
import { headline, brandColors } from "../data/fields";

export default {
  name: "greece",
  title: "Slide — Greece",
  type: "object",
  fields: [headline, brandColors],
  preview: {
    select: {
      title: "headline",
    },
    prepare: ({ title }) => ({
      title,
      subtitle: "Slide Type: Greece",
      media: (
        <img src={Thumbnail} alt="Greece Slide" style={{ objectFit: "cover" }} />
      ),
    }),
  },
};
