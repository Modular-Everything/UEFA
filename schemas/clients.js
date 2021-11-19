export default {
  name: "clients",
  title: "Clients",
  type: "document",
  fields: [
    {
      name: "clientId",
      title: "Client Identifier",
      type: "string",
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
