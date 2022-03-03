import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Latvia-Slide.jpg";
import brandColorsList from "../data/brandColorsList";
import { headline, copy, image } from "../data/fields";
import { color, label } from "../data/navFields";

const spotDesc = "The colour of one set of spots";

export default {
  name: "latvia",
  title: "Slide — Latvia",
  type: "object",
  fieldsets: [
    { name: "nav", title: "Navigation", options: { collapsible: true } },
  ],
  fields: [
    headline,
    {
      name: "smallHeadline",
      title: "Small Title",
      type: "string",
      description: "A small title above the copy.",
    },
    copy,
    {
      name: "spotColorA",
      title: "Spot Colour A",
      type: "string",
      description: spotDesc,
      options: {
        list: brandColorsList,
      },
    },
    {
      name: "spotColorB",
      title: "Spot Colour B",
      type: "string",
      description: spotDesc,
      options: {
        list: brandColorsList,
      },
    },
    {
      name: "spotColorC",
      title: "Spot Colour C",
      type: "string",
      description: spotDesc,
      options: {
        list: brandColorsList,
      },
    },
    {
      name: "spotColorD",
      title: "Spot Colour D",
      type: "string",
      description: spotDesc,
      options: {
        list: brandColorsList,
      },
    },
    image,
    color,
    label,
  ],
  preview: {
    select: {
      navColor: "navColor",
      navLabel: "navLabel",
      title: "smallHeadline",
    },
    prepare: ({ navColor, navLabel, title }) => ({
      title,
      subtitle: `${navLabel ? `${navLabel} |` : ""} Slide Type: Latvia`,
      media: (
        <img
          src={Thumbnail}
          alt="Latvia Slide"
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
