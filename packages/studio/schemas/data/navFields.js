import brandColorsListSimple from "./brandColorsListSimple";

export const color = {
  name: "navColor",
  title: "Colour Key",
  type: "string",
  fieldset: "nav",
  description: "Use this to add a custom colour to this slide.",
  options: {
    list: brandColorsListSimple,
  },
};

export const label = {
  name: "navLabel",
  title: "Label",
  type: "string",
  fieldset: "nav",
  validation: (Rule) => Rule.max(24),
  description: "Use this to annotate your slide for easier navigation.",
};
