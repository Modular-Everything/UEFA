import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Germany-Slide.jpg";
import { headline, copy, image, pills } from "../data/fields";
import { color, label } from "../data/navFields";

export default {
  name: "germany",
  title: "Slide — Germany",
  type: "object",
  fieldsets: [{ name: "nav", title: "Navigation", options: {collapsible: true} }],
  fields: [headline, copy, image, pills, color, label],
  preview: {
    select: {
      navColor: "navColor",
      navLabel: "navLabel",
      title: "headline",
    },
    prepare: ({ navColor, navLabel, title }) => ({
      title,
      subtitle: `${navLabel ? `${navLabel} |` : ""} Slide Type: Germany`,
      media: (
        <img
          src={Thumbnail}
          alt="Germany Slide"
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
