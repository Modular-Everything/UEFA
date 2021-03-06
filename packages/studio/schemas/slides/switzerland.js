import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Switzerland-Slide.jpg";
import { headline, bullets, copy } from "../data/fields";
import { color, label } from "../data/navFields";

export default {
  name: "switzerland",
  title: "Slide — Switzerland",
  type: "object",
  fieldsets: [
    { name: "nav", title: "Navigation", options: { collapsible: true } },
  ],
  fields: [
    headline,
    copy,
    bullets,
    {
      name: "mediaType",
      title: "Media Type",
      type: "string",
      description:
        "You can use an image or a Vimeo video, but you need to set which one you want to use here first.",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Slide Image",
      type: "image",
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
      hidden: ({ parent }) =>
        !parent?.mediaType || parent?.mediaType === "video",
    },
    {
      name: "video",
      title: "Slide Video",
      type: "url",
      description: "A link to a Vimeo video",
      hidden: ({ parent }) =>
        !parent?.mediaType || parent?.mediaType === "image",
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
      subtitle: `${navLabel ? `${navLabel} |` : ""} Slide Type: Switzerland`,
      media: (
        <img
          src={Thumbnail}
          alt="Switzerland Slide"
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
