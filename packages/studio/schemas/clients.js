export default {
  name: "clients",
  title: "Clients",
  type: "document",
  fields: [
    {
      name: "clientName",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Client Identifier",
      type: "slug",
      validation: (Rule) => Rule.required(),
      description: "Must be unique (use the generate button).",
      options: {
        source: "clientName",
      },
    },
    {
      name: "slides",
      title: "Slides",
      type: "array",
      of: [
        {
          name: "colorBlock",
          title: "Color Block",
          type: "string",
        },
      ],
    },
  ],
};
