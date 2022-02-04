import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Poland-Slide.jpg";
import { headline, image } from "../data/fields";
import { color, label } from "../data/navFields";

export default {
  name: "poland",
  title: "Slide — Poland",
  type: "object",
  fieldsets: [{ name: "nav", title: "Navigation", options: {collapsible: true} }],
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
      subtitle: `${navLabel ? `${navLabel} |` : ""} Slide Type: Poland`,
      media: (
        <img
          src={Thumbnail}
          alt="Poland Slide"
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
