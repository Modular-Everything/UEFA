import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Kazakhstan-Slide.jpg";
import { color, label } from "../data/navFields";

export default {
  name: "kazakhstan",
  title: "Slide — Kazakhstan",
  type: "object",
  fieldsets: [{ name: "nav", title: "Navigation" }, color, label],
  fields: [
    {
      name: "video",
      title: "Slide Video",
      type: "url",
      description: "A link to a Vimeo video",
    },
  ],
  preview: {
    select: {
      navColor: "navColor",
      navLabel: "navLabel",
    },
    prepare: ({ navColor, navLabel, title }) => ({
      title: "Embedded Video",
      subtitle: `${navLabel ? `${navLabel} |` : ""} Slide Type: Kazakhstan`,
      media: (
        <img
          src={Thumbnail}
          alt="Kazakhstan Slide"
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
