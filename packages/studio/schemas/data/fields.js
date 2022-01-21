import React from "react";

import brandColorsList from "./brandColorsList";

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
  description: (
    <span>
      Consider compressing your images before uploading them. We recommend{" "}
      <a href="https://squoosh.app/" target="_blank" rel="noreferrer noopener">
        Squoosh App
      </a>{" "}
      for this.
    </span>
  ),
};

export const pills = {
  name: "pills",
  title: "Data Pills",
  type: "array",
  of: [
    {
      name: "pill",
      title: "Pill",
      type: "object",
      fields: [
        {
          name: "data",
          title: "Data",
          type: "string",
          description: 'The number or value, for example "1.8b", "300m", etc.',
        },
        {
          name: "context",
          title: "Context",
          type: "string",
          description:
            'The context for the data, for example "Facebook interactions"',
        },
      ],
      preview: {
        select: {
          data: "data",
          context: "context",
        },
        prepare: ({ data, context }) => ({
          title: `${data || ""} ${context || ""}`,
        }),
      },
    },
  ],
};

export const brandColors = {
  name: "brandColors",
  title: "Brand Colours",
  type: "string",
  options: {
    list: brandColorsList,
  },
};

export const number = {
  name: "customNumber",
  title: "Number",
  type: "number",
};

export const bullets = {
  name: "bullets",
  title: "Bullets",
  type: "array",
  of: [
    {
      name: "bullet",
      title: "Bullet",
      type: "object",
      fields: [
        {
          name: "label",
          title: "Label",
          type: "string",
        },
        {
          name: "bulletColor",
          title: "Bullet Color",
          type: "string",
          initialValue: "#1e1e28",
          options: {
            list: brandColorsList,
          },
        },
      ],
      preview: {
        select: {
          title: "label",
          color: "bulletColor",
        },
        prepare: ({ title, color }) => ({
          title,
          media: (
            <span
              style={{
                backgroundColor: color,
                width: 10,
                height: 10,
                borderRadius: 100,
              }}
            />
          ),
        }),
      },
    },
  ],
};

export const bars = {
  name: "bars",
  title: "Bars",
  type: "array",
  of: [
    {
      name: "bar",
      title: "Bar",
      type: "object",
      fields: [
        {
          name: "label",
          title: "Label",
          type: "string",
        },
        {
          name: "value",
          title: "Value",
          type: "string",
        },
        {
          name: "barColor",
          title: "Bar Color",
          type: "string",
          initialValue: "#749baa",
          options: {
            list: brandColorsList,
          },
        },
      ],
      preview: {
        select: {
          title: "label",
          color: "barColor",
        },
        prepare: ({ title, color }) => ({
          title,
          media: (
            <span
              style={{
                backgroundColor: color,
                width: 30,
                height: 10,
                borderRadius: 100,
              }}
            />
          ),
        }),
      },
    },
  ],
};
