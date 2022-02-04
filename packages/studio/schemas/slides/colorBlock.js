import { headline } from "../data/fields";
import { color, label } from "../data/navFields";

export default {
  name: "colorBlock",
  title: "Slide — Colour Block",
  type: "object",
  fieldsets: [{ name: "nav", title: "Navigation", options: {collapsible: true} }],
  fields: [
    headline,
    { name: "color", title: "Colour", type: "string" },
    color,
    label,
  ],
  preview: {
    select: {
      color: "color",
      label: "label",

      title: "headline",
    },
    prepare: ({ color, label, title }) => ({
      title,
      subtitle: "Slide Type: Colour Block",
    }),
  },
};
