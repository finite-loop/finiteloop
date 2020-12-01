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
      validation: Rule => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Some frontend will require a slug to be set to be able to show the project",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },

    {
      name: "publishedAt",
      title: "Published at",
      description:
        "You can use this field to schedule projects where you show them",
      type: "datetime",
      validation: Rule => Rule.required()
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "simplePortableText"
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "team" },
      validation: Rule => Rule.required()
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "read_time",
      title: "Time to read(in minutes)",
      type: "number",
      validation: Rule => Rule.required()
    },
    {
      name: "startedAt",
      title: "Started at",
      type: "datetime"
    },
    {
      name: "endedAt",
      title: "Ended at",
      type: "datetime"
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "figure",
      validation: Rule => Rule.required()
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
      title: "Link the video"
    },
    {
      name: "body",
      title: "Body",
      type: "blogPortableText"
    },
    {
      name: "relatedProjects",
      title: "Related projects",
      type: "array",
      of: [{ type: "reference", to: { type: "projects" } }]
    }
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      slug: "slug",
      media: "mainImage"
    },
    prepare({ title = "No title", author, slug = {}, media }) {
      //const dateSegment = format(publishedAt, "YYYY/MM");
      //const path = `/${dateSegment}/`;
      // var day = publishedAt.getDate();
      // var month = publishedAt.getMonth();
      // var year = publishedAt.getFullYear();
      // var publishDate = day + "-" + month + "-" + year;
      return {
        title,
        media,
        subtitle: author ? author : " "
      };
    }
  }
};
