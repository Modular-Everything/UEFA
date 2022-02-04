import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Title-Slide.jpg";
import { headline } from "../data/fields";
import { color, label } from "../data/navFields";

export default {
  name: "title",
  title: "Slide — Title",
  type: "object",
  fieldsets: [{ name: "nav", title: "Navigation", options: {collapsible: true} }],
  fields: [
    headline,
    {
      name: "logo",
      title: "Logo",
      type: "image",
      description:
        "The logo as it appears above the headline. This should be an SVG in white.",
    },
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
      subtitle: `${navLabel ? `${navLabel} |` : ""} Slide Type: Title`,
      media: (
        <img
          src={Thumbnail}
          alt="Title Slide"
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
