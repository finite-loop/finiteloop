export default {
  type: "document",
  title: "Initiatives",
  name: "initiatives",

  fields: [
    {
      title: "Name",
      name: "name",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug"
    },
    {
      title: "Main image",
      name: "mainImage",
      type: "figure"
    },
    {
      title: "Header",
      name: "header",
      type: "string"
    },
    {
      title: "Content",
      name: "content",
      type: "text",
      rows: "5"
    },
    {
      title: "Events",
      name: "events",
      type: "string"
    },
    {
      title: "Events Heading",
      name: "eventsHeading",
      type: "string"
    },
    {
      title: "Events content",
      name: "eventsContent",
      type: "text",
      rows: "5"
    },
    {
      title: "Events Video",
      name: "eventsVideo",
      type: "url"
    },
    {
      title: "Projects",
      name: "projects",
      type: "string"
    },

    {
      title: "Projects content",
      name: "projectsContent",
      type: "text",
      rows: "5"
    },
    {
      title: "Categories",
      name: "categories",
      type: "array",
      of: [{ type: "projectAndCategory" }]
    },
    {
      title: "Open source",
      name: "openSource",
      type: "string"
    },
    {
      title: "Open Source Heading",
      name: "openSourceHeading",
      type: "string"
    },
    {
      title: "Open Source content",
      name: "openSourceContent",
      type: "text",
      rows: "5"
    },
    {
      title: "content",
      name: "check",
      type: "array",
      of: [{ type: "contentAndHeading" }]
    },
    {
      title: "Buy From Us",
      name: "buy",
      type: "string"
    },

    {
      title: "Buy From Us content",
      name: "buycontent",
      type: "text",
      rows: "5"
    }
  ]
};
