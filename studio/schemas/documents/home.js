export default {
  name: "home",
  type: "document",
  title: "Home",
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
      title: "Offerings",
      name: "offeringsList",
      type: "array",
      of: [{ type: "contentAndImage" }]
    },
    {
      title: "Our Work",
      name: "ourWork",
      type: "array",
      of: [{ type: "contentAndImage" }]
    }
  ]
};
