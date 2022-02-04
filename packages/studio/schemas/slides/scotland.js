import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Scotland-Slide.jpg";
import { headline, copy, brandColors } from "../data/fields";
import { color, label } from "../data/navFields";

export default {
  name: "scotland",
  title: "Slide — Scotland",
  type: "object",
  fieldsets: [{ name: "nav", title: "Navigation", options: {collapsible: true} }],
  fields: [headline, copy, brandColors, color, label],
  preview: {
    select: {
      navColor: "navColor",
      navLabel: "navLabel",
      title: "headline",
    },
    prepare: ({ navColor, navLabel, title }) => ({
      title,
      subtitle: `${navLabel ? `${navLabel} |` : ""} Slide Type: Scotland`,
      media: (
        <img
          src={Thumbnail}
          alt="Scotland Slide"
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
