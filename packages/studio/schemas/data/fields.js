import React from "react";

import brandColorsList from "./brandColorsList";
import iconsList from "./iconsList";

export const headline = {
  name: "headline",
  title: "Headline",
  type: "string",
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
          validation: (Rule) => Rule.required(),
        },
        {
          name: "context",
          title: "Context",
          type: "string",
          description:
            'The context for the data, for example "Facebook interactions"',
          validation: (Rule) => Rule.required(),
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

export const icons = {
  name: "icons",
  title: "Icon Picker",
  type: "string",
  options: {
    list: iconsList,
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
          validation: (Rule) => Rule.required(),
        },
        {
          name: "bulletColor",
          title: "Bullet Colour",
          type: "string",
          initialValue: "#1e1e28",
          options: {
            list: brandColorsList,
          },
          validation: (Rule) => Rule.required(),
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
          validation: (Rule) => Rule.required(),
        },
        {
          name: "value",
          title: "Value",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "barColor",
          title: "Bar Colour",
          type: "string",
          initialValue: "#749baa",
          options: {
            list: brandColorsList,
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: "progress",
          title: "Bar Progress",
          type: "number",
          initialValue: 0,
          description: "Controls the width (10 being 100%) of the bar colour",
          validation: (Rule) => Rule.required().min(0).max(10),
        },
      ],
      preview: {
        select: {
          title: "label",
          value: "value",
          color: "barColor",
          progress: "progress",
        },
        prepare: ({ title, value, progress, color }) => ({
          title: `${title} — ${value ? value : 0}`,
          subtitle: `${progress ? progress * 10 : 0}%`,
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
