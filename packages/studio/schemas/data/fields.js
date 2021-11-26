export const headline = {
  name: "headline",
  title: "Headline",
  type: "string",
  validation: (Rule) => Rule.required(),
  description: "Automatically CAPITALISED",
};

export const copy = {
  name: "copy",
  title: "Copy",
  type: "array",
  of: [
    {
      type: "block",
      styles: [],
      lists: [],
      marks: {
        annotations: [],
        decorators: [],
      },
    },
  ],
};

export const image = {
  name: "image",
  title: "Slide Image",
  type: "image",
};
