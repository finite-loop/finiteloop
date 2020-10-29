export default {
  name: "home",
  type: "document",
  title: "Home",
  fields: [
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
