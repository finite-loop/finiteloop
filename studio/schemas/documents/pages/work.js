export default {
  type: "document",
  title: "Work",
  name: "work",

  fields: [
    {
      title: "Name",
      name: "name",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96
      }
    },
    {
      title: "Main image",
      name: "mainImage",
      type: "figure"
    },
    {
      title: "Content",
      name: "content",
      type: "text",
      rows: "5"
    },
    {
      title: "Field/Area",
      name: "field",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          // "Technology",
          // "Design",
          // "Data Science"
          { title: "Technology", value: "technology" },
          { title: "Design", value: "design" },
          { title: "Data Science", value: "data_science" }
        ]
      }
    },
    {
      title: "Projects",
      name: "field_projects",
      type: "array",
      of: [{ type: "projects" }]
    },
    {
      title: "Field content",
      name: "field_content",
      type: "text",
      rows: "5"
    },
    {
      title: "work image",
      name: "workImage",
      type: "figure"
    },
    {
      title: "Work Image content",
      name: "work_content",
      type: "text",
      rows: "5"
    }
  ]
};
