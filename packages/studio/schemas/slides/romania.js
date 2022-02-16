import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Romania-Slide.jpg";
import { headline, image, copy } from "../data/fields";
import { color, label } from "../data/navFields";

export default {
  name: "romania",
  title: "Slide — Romania",
  type: "object",
  fieldsets: [
    { name: "nav", title: "Navigation", options: { collapsible: true } },
  ],
  fields: [headline, copy, image, color, label],
  preview: {
    select: {
      navColor: "navColor",
      navLabel: "navLabel",
      title: "headline",
    },
    prepare: ({ navColor, navLabel, title }) => ({
      title,
      subtitle: `${navLabel ? `${navLabel} |` : ""} Slide Type: Romania`,
      media: (
        <img
          src={Thumbnail}
          alt="Romania Slide"
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
