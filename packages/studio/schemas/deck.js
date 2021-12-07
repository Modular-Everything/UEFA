import slides from "./data/slides";

export default {
  name: "deck",
  title: "Deck",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Deck Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "The title of the deck.",
    },
    {
      name: "slug",
      title: "Deck Identity",
      type: "slug",
      validation: (Rule) => Rule.required(),
      description: "Must be unique (use the generate button).",
      options: {
        source: "title",
        maxLength: 200,
      },
    },
    {
      name: "slides",
      title: "Slides",
      type: "array",
      of: slides,
      options: {
        editModal: "fullscreen",
      },
    },
  ],
};
