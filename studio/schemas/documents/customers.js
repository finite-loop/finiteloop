export default {
  name: "customers",
  type: "document",
  title: "Customers",
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
      title: "Customers",
      name: "customersList",
      type: "array",
      of: [{ type: "contentAndImage" }]
    }
  ]
};
