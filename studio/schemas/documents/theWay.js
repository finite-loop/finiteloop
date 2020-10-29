export default {
  name: "theWay",
  type: "document",
  title: "The Way",
  fields: [
    {
      title: "Page Title",
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
      title: "Header",
      name: "header",
      type: "text",
      rows: "5"
    },
    {
      title: "Footer",
      name: "footer",
      type: "text",
      rows: "5"
    },
    {
      title: "Spaces",
      name: "spaces",
      type: "array",
      of: [{ type: "theWayObject" }]
    }
  ]
};
