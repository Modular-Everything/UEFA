import { headline, image } from "../data/fields";

export default {
  name: "norway",
  title: "Slide — Norway",
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
  ],
  preview: {
    select: {
      title: "headline",
    },
    prepare: ({ title }) => ({
      title,
      subtitle: "Slide Type: Norway",
    }),
  },
};