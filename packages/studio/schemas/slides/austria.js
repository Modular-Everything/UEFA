import { headline, copy, bullets, bars } from "../data/fields";

export default {
  name: "austria",
  title: "Slide — Austria",
  type: "object",
  fields: [
    headline,
    copy,
    bullets,
    bars,
    {
      name: "caption",
      title: "Bars Caption",
      type: "string",
      description: "Automatically CAPITALISED.",
    },
  ],
  preview: {
    select: {
      title: "headline",
    },
    prepare: ({ title }) => ({
      title,
      subtitle: "Slide Type: Austria",
    }),
  },
};
