import { headline, copy, image, bars } from "../data/fields";

export default {
  name: "belgium",
  title: "Slide — Belgium",
  type: "object",
  fields: [
    headline,
    copy,
    {
      name: "source",
      title: "Data Source",
      type: "string",
      description: "Appears below copy.",
    },
    bars,
    image,
  ],
  preview: {
    select: {
      title: "headline",
    },
    prepare: ({ title }) => ({
      title,
      subtitle: "Slide Type: Belgium",
    }),
  },
};