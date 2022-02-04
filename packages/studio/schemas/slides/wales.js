import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Wales-Slide.jpg";
import { headline, copy } from "../data/fields";
import { color, label } from "../data/navFields";

export default {
  name: "wales",
  title: "Slide — Wales",
  type: "object",
  fieldsets: [
    { name: "nav", title: "Navigation", options: { collapsible: true } },
  ],
  fields: [headline, copy, color, label],
  preview: {
    select: {
      navColor: "navColor",
      navLabel: "navLabel",
      title: "headline",
    },
    prepare: ({ navColor, navLabel, title }) => ({
      title,
      subtitle: `${navLabel ? `${navLabel} |` : ""} Slide Type: Wales`,
      media: (
        <img
          src={Thumbnail}
          alt="Wales Slide"
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
