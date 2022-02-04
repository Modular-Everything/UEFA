import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Denmark-Slide.jpg";
import { headline, copy, image } from "../data/fields";
import { color, label } from "../data/navFields";

export default {
  name: "denmark",
  title: "Slide — Denmark",
  type: "object",
  fieldsets: [{ name: "nav", title: "Navigation", options: {collapsible: true} }],
  fields: [headline, copy, image, color, label],
  preview: {
    select: {
      navColor: "navColor",
      navLabel: "navLabel",
      title: "headline",
    },
    prepare: ({ navColor, navLabel, title }) => ({
      title,
      subtitle: `${navLabel ? `${navLabel} |` : ""} Slide Type: Denmark`,
      media: (
        <img
          src={Thumbnail}
          alt="Denmark Slide"
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
