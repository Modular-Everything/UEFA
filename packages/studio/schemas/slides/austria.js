import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Austria-Slide.jpg";
import { headline, copy, bullets, bars } from "../data/fields";

export default {
  name: "austria",
  title: "Slide — Austria",
  type: "object",
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
  ],
  preview: {
    select: {
      title: "headline",
    },
    prepare: ({ title }) => ({
      title,
      subtitle: "Slide Type: Austria",
      media: (
        <img
          src={Thumbnail}
          alt="Austria Slide"
          style={{ objectFit: "cover" }}
        />
      ),
    }),
  },
};
