import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Spain-Slide.jpg";
import { headline } from "../data/fields";

export default {
  name: "spain",
  title: "Slide — Spain",
  type: "object",
  fields: [
    headline,
    {
      name: "matrix",
      title: "Matrix",
      type: "array",
      description: "Maximum 15 items.",
      of: [
        {
          name: "logo",
          title: "Logo",
          type: "image",
          description: "Provide a logo preferably as an SVG or PNG.",
        },
        {
          name: "title",
          title: "Title",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              description: "A short title",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "headline",
    },
    prepare: ({ title }) => ({
      title,
      subtitle: "Slide Type: Spain",
      media: (
        <img src={Thumbnail} alt="Spain Slide" style={{ objectFit: "cover" }} />
      ),
    }),
  },
};
