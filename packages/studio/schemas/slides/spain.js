import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Spain-Slide.jpg";
import { headline, copy, icons, brandColors } from "../data/fields";
import { color, label } from "../data/navFields";

export default {
  name: "spain",
  title: "Slide — Spain",
  type: "object",
  fieldsets: [
    { name: "nav", title: "Navigation", options: { collapsible: true } },
  ],
  fields: [
    headline,
    copy,
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
            {
              name: "anchor",
              title: "Link to slide",
              type: "number",
              description: "The index number of a slide you'd like to link to",
            },
            icons,
            brandColors,
          ],
        },
      ],
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
      subtitle: `${navLabel ? `${navLabel} |` : ""} Slide Type: Spain`,
      media: (
        <img
          src={Thumbnail}
          alt="Spain Slide"
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
