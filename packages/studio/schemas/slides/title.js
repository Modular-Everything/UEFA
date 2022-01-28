import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Title-Slide.jpg";
import { headline } from "../data/fields";

export default {
  name: "title",
  title: "Slide — Title",
  type: "object",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
      description:
        "The logo as it appears above the headline. This should be an SVG in white.",
    },
    headline,
  ],
  preview: {
    select: {
      title: "headline",
    },
    prepare: ({ title }) => ({
      title,
      subtitle: "Slide Type: Title",
      media: (
        <img src={Thumbnail} alt="Title Slide" style={{ objectFit: "cover" }} />
      ),
    }),
  },
};
