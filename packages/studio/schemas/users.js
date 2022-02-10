export default {
  name: "users",
  title: "Users",
  type: "document",
  fields: [
    {
      name: "email",
      title: "User Email Address",
      type: "string",
      description:
        "This must match the email address the user will later authenticate with",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "superuser",
      title: "Access All Areas",
      type: "boolean",
      validation: (Rule) => Rule.required(),
      initialValue: false,
      description:
        "This will allow the user to access everything (and should only be used for admins)",
    },
    {
      name: "accessRoles",
      title: "Client Area Access",
      description:
        "This will give the user access to the client area and all nested",
      type: "reference",
      to: [{ type: "client" }],
      hidden: ({ parent }) => parent?.superuser,
    },
  ],
};
