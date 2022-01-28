import React from "react";

import { headline, image } from "../data/fields";

export default {
  name: "poland",
  title: "Slide — Poland",
  type: "object",
  fields: [
    headline,
    {
      name: "outlinedTextA",
      title: "Outlined Text (Line 1)",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "outlinedTextB",
      title: "Outlined Text (Line 2)",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    image,
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description: (
        <span>
          Automatically blurred. Consider compressing your images before
          uploading them. We recommend{" "}
          <a
            href="https://squoosh.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Squoosh App
          </a>{" "}
          for this.
        </span>
      ),
    },
  ],
  preview: {
    select: {
      title: "headline",
    },
    prepare: ({ title }) => ({
      title,
      subtitle: "Slide Type: Poland",
    }),
  },
};
