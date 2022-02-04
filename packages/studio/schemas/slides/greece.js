import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Greece-Slide.jpg";
import { headline, brandColors } from "../data/fields";
import { color, label } from "../data/navFields";

export default {
  name: "greece",
  title: "Slide — Greece",
  type: "object",
  fieldsets: [{ name: "nav", title: "Navigation", options: {collapsible: true} }],
  fields: [headline, brandColors, color, label],
  preview: {
    select: {
      navColor: "navColor",
      navLabel: "navLabel",
      title: "headline",
    },
    prepare: ({ navColor, navLabel, title }) => ({
      title,
      subtitle: `${navLabel ? `${navLabel} |` : ""} Slide Type: Greece`,
      media: (
        <img
          src={Thumbnail}
          alt="Greece Slide"
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
