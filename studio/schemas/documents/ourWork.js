export default {
  name: "ourWork",
  type: "document",
  title: "Our Work",
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
      title: "Main image",
      name: "mainImage",
      type: "figure"
    },
    {
      title: "Main Content",
      name: "mainContent",
      type: "text",
      rows: "5"
    },
    {
      title: "Link",
      name: "link",
      type: "url"
    },
    {
      name: "details",
      title: "Details",
      type: "blogPortableText"
    }
  ]
};
