import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
      initialValue: "normal",
      options: {
        list: [
          {
            title: "Top",
            value: "top",
          },
          {
            title: "Normal",
            value: "normal",
          },
        ],
      },
    }),
    defineField({
      name: "details",
      title: "Details",
      type: "blockContent",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "urls",
      type: "array",
      title: "Urls",
      of: [
        defineArrayMember({
          type: "object",
          name: "Website",
          fields: [{ type: "string", name: "url" }],
        }),
        defineArrayMember({
          type: "object",
          name: "Github",
          fields: [{ type: "string", name: "url" }],
        }),
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "icon",
    },
  },
});

export type Project = {
  _id: string;
  title: string;
  slug: any;
  thumbnail: any;
  icon: any;
  publishedAt: any;
  tag: string;
  details: any;
  url: string;
  urls: any;
  description: string;
};
