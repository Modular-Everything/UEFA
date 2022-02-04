import React from "react";

import Thumbnail from "../../assets/slide-thumbs/England-Slide.jpg";
import { headline, copy, image, number } from "../data/fields";
import { color, label } from "../data/navFields";

export default {
  name: "england",
  title: "Slide — England",
  type: "object",
  fieldsets: [{ name: "nav", title: "Navigation", options: {collapsible: true} }],
  fields: [number, headline, copy, image, color, label],
  preview: {
    select: {
      navColor: "navColor",
      navLabel: "navLabel",
      title: "headline",
    },
    prepare: ({ navColor, navLabel, title }) => ({
      title,
      subtitle: `${navLabel ? `${navLabel} |` : ""} Slide Type: England`,
      media: (
        <img
          src={Thumbnail}
          alt="England Slide"
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
