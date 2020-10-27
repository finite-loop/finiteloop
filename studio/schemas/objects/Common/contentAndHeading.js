export default {
  type: "object",
  title: "Content with Heading",
  name: "contentAndHeading",
  fieldsets: [
    {
      name: "content",
      title: "Content and Heading",
      options: {
        collapsible: true,
        collapsed: true
      }
    }
  ],

  fields: [
    {
      title: "Heading",
      name: "heading",
      type: "string",
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
