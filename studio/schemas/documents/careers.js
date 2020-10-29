export default {
  name: "careers",
  type: "document",
  title: "Careers",
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
      title: "Current Openings",
      name: "openings",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      title: "Apply",
      name: "apply",
      type: "string"
    },
    {
      title: "Qualities Title",
      name: "qualitiesTitle",
      type: "string"
    },
    {
      title: "Qualities",
      name: "qualities",
      type: "array",
      of: [{ type: "contentAndHeading" }]
    }
  ]
};
