export default {
  type: "object",
  title: "Projects List and Category",
  name: "projectAndCategory",
  fields: [
    {
      title: "Catrgory Name",
      name: "category",
      type: "string"
    },
    {
      title: "Projects",
      name: "field_projects",
      type: "array",
      of: [{ type: "reference", to: [{ type: "projects" }] }]
    }
  ]
};
