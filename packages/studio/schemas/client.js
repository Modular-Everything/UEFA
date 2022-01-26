export default {
  name: "client",
  title: "Client",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Client Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "The title of the client.",
    },
    {
      name: "slug",
      title: "Client Identity",
      type: "slug",
      validation: (Rule) => Rule.required(),
      description: "Must be unique (use the generate button).",
      options: {
        source: "title",
        maxLength: 200,
      },
    },
    {
      name: "decks",
      title: "Client Decks",
      type: "array",
      of: [
        {
          name: "deck",
          title: "Select a Deck",
          type: "reference",
          to: [{ type: "deck" }],
        },
      ],
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      validation: (Rule) => Rule.required(),
      description:
        "The logo as it appears across the decks. This should be an SVG in white.",
    },
  ],
};
