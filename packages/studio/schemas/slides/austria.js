import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Austria-Slide.jpg";
import { headline, copy, bullets, bars } from "../data/fields";
import { color, label } from "../data/navFields";

export default {
  name: "austria",
  title: "Slide — Austria",
  type: "object",
  fieldsets: [
    { name: "nav", title: "Navigation" },
    { name: "slide", title: "Slide Content" },
  ],
  fields: [
    headline,
    copy,
    bullets,
    bars,
    {
      name: "caption",
      title: "Bars Caption",
      type: "string",
      description: "Automatically CAPITALISED.",
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
      subtitle: `${navLabel ? `${navLabel} |` : ""} Slide Type: Austria`,
      media: (
        <img
          src={Thumbnail}
          alt="Austria Slide"
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
