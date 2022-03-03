import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Andorra-Slide.jpg";
import { image } from "../data/fields";
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
    {
      name: "backIndex",
      title: "Back Index",
      type: "number",
      description: "The slide number that the back button should return you to",
    },
    image,
    {
      name: "imageLayout",
      title: "Image Layout",
      type: "string",
      initialValue: "contain",
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
      backIndex: "backIndex",
      navColor: "navColor",
      navLabel: "navLabel",
    },
    prepare: ({ backIndex, navColor, navLabel }) => ({
      title: "Embedded Image",
      subtitle: `${navLabel ? `${navLabel} |` : ""} Slide Type: Andorra ${
        backIndex ? `[🔙 ${backIndex}]` : ""
      }`,
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
