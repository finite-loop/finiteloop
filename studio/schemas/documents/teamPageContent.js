export default {
  type: "document",
  title: "Team Page Content",
  name: "teamPageContent",

  fields: [
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      title: "Content",
      name: "content",
      type: "text",
      rows: "5"
    }
  ]
};
