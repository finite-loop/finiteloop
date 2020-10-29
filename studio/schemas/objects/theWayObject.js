export default {
  name: "theWayObject",
  type: "object",
  title: "The Way Space",
  fields: [
    {
      title: "Parent Title",
      name: "parentTitle",
      type: "string"
    },

    {
      title: "Children",
      name: "children",
      type: "array",
      of: [{ type: "contentAndImage" }]
    }
  ]
};
