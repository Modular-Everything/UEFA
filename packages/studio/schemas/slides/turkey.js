import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Turkey-Slide.jpg";
import { headline, image } from "../data/fields";
import { color, label } from "../data/navFields";

export default {
  name: "turkey",
  title: "Slide — Turkey",
  type: "object",
  fieldsets: [
    { name: "nav", title: "Navigation", options: { collapsible: true } },
  ],
  fields: [headline, image, color, label],
  preview: {
    select: {
      navColor: "navColor",
      navLabel: "navLabel",
      title: "headline",
    },
    prepare: ({ navColor, navLabel, title }) => ({
      title,
      subtitle: `${navLabel ? `${navLabel} |` : ""} Slide Type: Turkey`,
      media: (
        <img
          src={Thumbnail}
          alt="Turkey Slide"
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
