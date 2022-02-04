import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Norway-Slide.jpg";
import { headline, image } from "../data/fields";
import { color, label } from "../data/navFields";

export default {
  name: "norway",
  title: "Slide — Norway",
  type: "object",
  fieldsets: [{ name: "nav", title: "Navigation", options: {collapsible: true} }],
  fields: [
    headline,
    {
      name: "outlinedTextA",
      title: "Outlined Text (Line 1)",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "outlinedTextB",
      title: "Outlined Text (Line 2)",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
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
      subtitle: `${navLabel ? `${navLabel} |` : ""} Slide Type: Norway`,
      media: (
        <img
          src={Thumbnail}
          alt="Norway Slide"
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
