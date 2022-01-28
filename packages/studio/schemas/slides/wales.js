import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Wales-Slide.jpg";
import { headline, copy } from "../data/fields";

export default {
  name: "wales",
  title: "Slide — Wales",
  type: "object",
  fields: [headline, copy],
  preview: {
    select: {
      title: "headline",
    },
    prepare: ({ title }) => ({
      title,
      subtitle: "Slide Type: Wales",
      media: (
        <img src={Thumbnail} alt="Wales Slide" style={{ objectFit: "cover" }} />
      ),
    }),
  },
};
