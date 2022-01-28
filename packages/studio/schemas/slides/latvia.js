import React from "react";

import Thumbnail from "../../assets/slide-thumbs/Latvia-Slide.jpg";
import brandColorsList from "../data/brandColorsList";
import { copy, image } from "../data/fields";

const spotDesc = "The colour of one set of spots";

export default {
  name: "latvia",
  title: "Slide — Latvia",
  type: "object",
  fields: [
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
  ],
  preview: {
    select: {
      title: "smallHeadline",
    },
    prepare: ({ title }) => ({
      title,
      subtitle: "Slide Type: Latvia",
      media: (
        <img src={Thumbnail} alt="Latvia Slide" style={{ objectFit: "cover" }} />
      ),
    }),
  },
};
