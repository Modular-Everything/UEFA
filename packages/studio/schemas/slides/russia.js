import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Russia-Slide.jpg";
import { headline, copy, image } from "../data/fields";
import { color, label } from "../data/navFields";

export default {
  name: "russia",
  title: "Slide — Russia",
  type: "object",
  fieldsets: [
    { name: "nav", title: "Navigation", options: { collapsible: true } },
  ],
  fields: [
    headline,
    copy,
    {
      name: "charts",
      title: "Charts",
      type: "array",
      of: [
        {
          name: "chart",
          title: "Chart",
          type: "image",
          options: {
            accept: ".svg",
          },
        },
      ],
      validation: (Rule) => Rule.required().max(3),
    },
    image,
    color,
    label,
  ],
  preview: {
    select: {
      title: "headline",
      navColor: "navColor",
      navLabel: "navLabel",
      charts: "charts.length",
      media: "charts.0.asset.url",
    },
    prepare: ({ title, navColor, navLabel, charts, media }) => ({
      title: `${title ? `${title} | ` : ""} ${charts ? charts : 0} Chart(s)`,
      subtitle: `${navLabel ? `${navLabel} |` : ""} Slide Type: Russia`,
      media: (
        <img
          src={Thumbnail}
          alt="Russia Slide"
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
