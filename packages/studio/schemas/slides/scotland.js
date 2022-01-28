import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Scotland-Slide.jpg";
import { headline, copy, brandColors } from "../data/fields";

export default {
  name: "scotland",
  title: "Slide — Scotland",
  type: "object",
  fields: [headline, copy, brandColors],
  preview: {
    select: {
      title: "headline",
    },
    prepare: ({ title }) => ({
      title,
      subtitle: "Slide Type: Scotland",
      media: (
        <img src={Thumbnail} alt="Scotland Slide" style={{ objectFit: "cover" }} />
      ),
    }),
  },
};
