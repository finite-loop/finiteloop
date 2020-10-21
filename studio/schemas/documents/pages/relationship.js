export default {
  type: "document",
  title: "Relationship Page",
  name: "relationship",

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
      type: "simplePortableText"
    }
  ]
};
