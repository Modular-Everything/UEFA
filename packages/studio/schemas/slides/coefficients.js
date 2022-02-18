import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Coefficients-Slide.jpg";
import brandColorsList from "../data/brandColorsList";
import { headline, copy } from "../data/fields";
import { color, label } from "../data/navFields";

export default {
  name: "coefficients",
  title: "Slide — Coefficients",
  type: "object",
  fieldsets: [
    { name: "nav", title: "Navigation" },
    { name: "slide", title: "Slide Content" },
  ],
  fields: [
    headline,
    copy,
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
        "The colours for the flag. 1–3 are the flag colours, 4 is the EURO 2024 colour, 5 is the headline colour and 6 is the headline divider colour. 4–6 can be left blank if desired. Phew!",
      validation: (Rule) => Rule.min(3).max(6),
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
      subtitle: `${navLabel ? `${navLabel} |` : ""} Slide Type: Coefficients`,
      media: (
        <img
          src={Thumbnail}
          alt="Coefficients Slide"
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
