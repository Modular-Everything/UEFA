import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Andorra-Slide.jpg";
import { headline, copy, image } from "../data/fields";
import { color, label } from "../data/navFields";

export default {
  name: "andorra",
  title: "Slide — Andorra",
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
      name: "imageLayout",
      title: "Image Layout",
      type: "string",
      initialValue: "contain",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Cover", value: "cover" },
          { title: "Contain", value: "contain" },
        ],
      },
    },
    color,
    label,
  ],
  preview: {
    select: {
      navColor: "navColor",
      navLabel: "navLabel",
    },
    prepare: ({ navColor, navLabel }) => ({
      title: "Embedded Image",
      subtitle: `${navLabel ? `${navLabel} |` : ""} Slide Type: Andorra`,
      media: (
        <img
          src={Thumbnail}
          alt="Andorra Slide"
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
