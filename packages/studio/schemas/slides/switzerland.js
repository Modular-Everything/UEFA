import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Germany-Slide.jpg";
import { headline, bullets } from "../data/fields";

export default {
  name: "switzerland",
  title: "Slide — Switzerland",
  type: "object",
  fields: [
    headline,
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
  ],
  preview: {
    select: {
      title: "headline",
    },
    prepare: ({ title }) => ({
      title,
      subtitle: "Slide Type: Switzerland",
      media: (
        <img
          src={Thumbnail}
          alt="Switzerland Slide"
          style={{ objectFit: "cover" }}
        />
      ),
    }),
  },
};
