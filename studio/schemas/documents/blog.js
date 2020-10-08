import { format } from "date-fns";

export default {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Give the blog some title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Some frontend will require a slug to be set to be able to show the project",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "publishedAt",
      title: "Published at",
      description:
        "You can use this field to schedule projects where you show them",
      type: "datetime",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "simplePortableText",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "team" },
    },
    {
      name: "startedAt",
      title: "Started at",
      type: "datetime",
    },
    {
      name: "endedAt",
      title: "Ended at",
      type: "datetime",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "figure",
    },
    // {
    //   name: "categories",
    //   title: "Categories",
    //   type: "array",
    //   of: [{ type: "reference", to: { type: "category" } }],
    // },
    {
      name: "videolink",
      type: "string",
      title: "Link the video",
    },
    {
      name: "body",
      title: "Body",
      type: "blogPortableText",
    },
    {
      name: "relatedProjects",
      title: "Related projects",
      type: "array",
      of: [{ type: "reference", to: { type: "projects" } }],
    },
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      slug: "slug",
      media: "mainImage",
    },
    prepare({ title = "No title", publishedAt, slug = {}, media }) {
      const dateSegment = format(publishedAt, "YYYY/MM");
      const path = `/${dateSegment}/${slug.current}/`;
      return {
        title,
        media,
        subtitle: publishedAt ? path : "Missing publishing date",
      };
    },
  },
};
