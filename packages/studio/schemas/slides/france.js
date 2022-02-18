import React from "react";

import Thumbnail from "../../assets/slide-thumbs/France-Slide.jpg";
import brandColorsList from "../data/brandColorsList";
import { headline, image, copy } from "../data/fields";
import { color, label } from "../data/navFields";

export default {
  name: "france",
  title: "Slide — France",
  type: "object",
  fieldsets: [
    { name: "nav", title: "Navigation", options: { collapsible: true } },
  ],
  fields: [
    headline,
    copy,
    image,
    {
      name: "patternColors",
      title: "Flag Colours",
      type: "array",
      of: [
        {
          name: "color",
          title: "Colour",
          type: "string",
          options: {
            list: brandColorsList,
          },
          validation: (Rule) => Rule.required(),
        },
      ],
      description:
        "Pick 3 colours for the flag. You can reuse colours to create one- or two-colour flag designs.",
      validation: (Rule) => Rule.length(3),
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
      subtitle: `${navLabel ? `${navLabel} |` : ""} Slide Type: France`,
      media: (
        <img
          src={Thumbnail}
          alt="France Slide"
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
