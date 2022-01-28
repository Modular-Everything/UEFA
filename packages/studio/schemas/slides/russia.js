import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Russia-Slide.jpg";
import { image } from "../data/fields";

export default {
  name: "russia",
  title: "Slide — Russia",
  type: "object",
  fields: [
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
  ],
  preview: {
    select: {
      charts: "charts.length",
      media: "charts.0.asset.url",
    },
    prepare: ({ charts, media }) => ({
      title: `${charts ? charts : 0} Chart(s)`,
      subtitle: "Slide Type: Russia",
      media: (
        <img
          src={Thumbnail}
          alt="Russia Slide"
          style={{ objectFit: "cover" }}
        />
      ),
    }),
  },
};
