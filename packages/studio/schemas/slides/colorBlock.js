import { headline } from "../data/fields";

export default {
  name: "colorBlock",
  title: "Slide — Colour Block",
  type: "object",
  fields: [headline, { name: "color", title: "Colour", type: "string" }],
  preview: {
    select: {
      title: "headline",
    },
    prepare: ({ title }) => ({
      title,
      subtitle: "Slide Type: Colour Block",
    }),
  },
};
