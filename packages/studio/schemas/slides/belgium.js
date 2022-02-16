import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Belgium-Slide.jpg";
import { headline, copy, image, bars, bullets } from "../data/fields";
import { color, label } from "../data/navFields";

export default {
  name: "belgium",
  title: "Slide — Belgium",
  type: "object",
  fieldsets: [
    { name: "nav", title: "Navigation" },
    { name: "slide", title: "Slide Content" },
  ],
  fields: [
    headline,
    copy,
    {
      name: "source",
      title: "Data Source",
      type: "string",
      description: "Appears below copy.",
    },
    bars,
    bullets,
    image,
    color,
    label,
  ],
  preview: {
    select: {
      navColor: "navColor",
      navLabel: "navLabel",
      title: "headline",
    },
    prepare: ({ navColor, navLabel, title }) => ({
      title,
      subtitle: `${navLabel ? `${navLabel} |` : ""} Slide Type: Belgium`,
      media: (
        <img
          src={Thumbnail}
          alt="Belgium Slide"
          style={{
            boxSizing: "border-box",
            objectFit: "cover",
            border: `4px solid ${navColor || "transparent"}`,
          }}
        />
      ),
    }),
  },
};
