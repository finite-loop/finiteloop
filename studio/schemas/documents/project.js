export default {
  type: "document",
  name: "projects",
  title: "Projects",
  fieldsets: [
    {
      name: "content",
      title: "Content and Image",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      title: "Project Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      description:
        "Some frontend will require a slug to be set to be able to show the project",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: "Client",
      name: "client",
      type: "string",
    },
    {
      title: "Industry",
      name: "industry",
      type: "string",
    },
    {
      title: "Members",
      name: "members",
      type: "array",
      of: [{ type: "projectMember" }],
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "Impact",
      name: "impact",
      type: "simplePortableText",
    },
    {
      title: "Intend",
      name: "intend",
      type: "simplePortableText",
    },
    {
      title: "Approach",
      name: "approach",
      type: "simplePortableText",
    },
    {
      title: "Problem Statement",
      name: "problemStatement",
      type: "simplePortableText",
    },
    {
      title: "Outcome",
      name: "outcome",
      type: "simplePortableText",
    },
    {
      title: "Competency",
      name: "competency",
      type: "contentAndImage",
    },
    {
      title: "Context of Relationship",
      name: "context",
      type: "contentAndImage",
    },
    {
      title: "Process",
      name: "process",
      type: "contentAndImage",
    },
    {
      title: "Geographies",
      name: "geographies",
      type: "contentAndImage",
    },
    {
      title: "Tools",
      name: "tools",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "Started at",
      name: "startedAt",
      type: "datetime",
    },
    {
      title: "Ended at",
      name: "endedAt",
      type: "datetime",
    },
    {
      title: "Related projects",
      name: "relatedProjects",
      type: "array",
      of: [{ type: "reference", to: { type: "projects" } }],
    },
  ],
};
