export default {
  type: "document",
  title: "Work",
  name: "work",

  fields: [
    {
      title: "Name",
      name: "name",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug"
    },
    {
      title: "Main image",
      name: "mainImage",
      type: "figure"
    },
    {
      title: "Content",
      name: "content",
      type: "text",
      rows: "5"
    }
  ]
};
