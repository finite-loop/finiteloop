export default {
  type: "object",
  title: "Content with Image",
  name: "contentAndImage",

  fields: [
    {
      title: "Name",
      name: "name",
      type: "string"
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
