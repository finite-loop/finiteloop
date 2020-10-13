export default {
  type: "object",
  title: "Content with Image",
  name: "contentAndImage",
  fieldsets: [
    {
      name: "content",
      title: "Content and Image",
      options: {
        collapsible: true,
        collapsed: true
      }
    }
  ],

  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      fieldset: "content"
    },
    {
      title: "Main image",
      name: "mainImage",
      type: "figure",
      fieldset: "content"
    },
    {
      title: "Content",
      name: "content",
      type: "text",
      rows: "5",
      fieldset: "content"
    }
  ]
};
