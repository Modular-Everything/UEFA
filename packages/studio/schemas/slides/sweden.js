import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Sweden-Slide.jpg";
import { copy } from "../data/fields";

export default {
  name: "sweden",
  title: "Slide — Sweden",
  type: "object",
  fields: [
    {
      name: "titleA",
      title: "Title (Line 1)",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "titleAImage",
      title: "Image (Line 1)",
      type: "image",
      validation: (Rule) => Rule.required(),
      description: (
        <span>
          Consider compressing your images before uploading them. We recommend{" "}
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
    {
      name: "titleB",
      title: "Title (Line 2)",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "titleBImage",
      title: "Image (Line 2)",
      type: "image",
      validation: (Rule) => Rule.required(),
      description: (
        <span>
          Consider compressing your images before uploading them. We recommend{" "}
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
    copy,
  ],
  preview: {
    select: {
      titleA: "titleA",
      titleB: "titleB",
    },
    prepare: ({ titleA, titleB }) => ({
      title: `${titleA} ${titleB}`,
      subtitle: "Slide Type: Sweden",
      media: (
        <img
          src={Thumbnail}
          alt="Sweden Slide"
          style={{ objectFit: "cover" }}
        />
      ),
    }),
  },
};
