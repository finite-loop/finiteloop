export default {
  type: "document",
  title: "Initiatives",
  name: "initiatives",

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
