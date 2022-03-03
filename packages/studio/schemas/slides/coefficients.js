import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Coefficients-Slide.jpg";
import brandColorsList from "../data/brandColorsList";
import { headline, copy, image } from "../data/fields";
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
        "The colours for the flag. 1–3 are the flag colours, 4 is the EURO 2024 colour, 5 is the headline colour, 6 is the headline divider colour and 7 is the copy colour. 4–7 can be left blank if you don't need them and defaults will be used. Phew!",
      validation: (Rule) => Rule.min(3).max(7),
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
