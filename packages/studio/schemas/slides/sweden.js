import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Sweden-Slide.jpg";
import { copy } from "../data/fields";
import { color, label } from "../data/navFields";

export default {
  name: "sweden",
  title: "Slide — Sweden",
  type: "object",
  fieldsets: [
    { name: "nav", title: "Navigation", options: { collapsible: true } },
  ],
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
    color,
    label,
  ],
  preview: {
    select: {
      navColor: "navColor",
      navLabel: "navLabel",
      titleA: "titleA",
      titleB: "titleB",
    },
    prepare: ({ navColor, navLabel, titleA, titleB }) => ({
      title: `${titleA} ${titleB}`,
      subtitle: `${navLabel ? `${navLabel} |` : ""} Slide Type: Sweden`,
      media: (
        <img
        src={Thumbnail}
        alt="Sweden Slide"
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
