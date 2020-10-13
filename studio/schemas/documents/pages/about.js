export default {
  type: "document",
  title: "About",
  name: "about",
  fieldsets: [
    {
      title: "Hero Section",
      name: "hero",
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    {
      title: "Studio Culture Section",
      name: "studioCulture",
      options: {
        collapsible: true,
        collapsed: false
      }
    }
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      default: "About Page Contents"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug"
    },
    {
      title: "Hero Content",
      name: "heroContent",
      type: "text",
      rows: "5",
      fieldset: "hero"
    },
    {
      title: "Main image",
      name: "heroMainImage",
      type: "figure",
      fieldset: "hero"
    },
    {
      title: "Buttons",
      name: "heroButtons",
      type: "array",
      of: [{ type: "string" }],
      fieldset: "hero"
    },
    {
      title: "Studio Culture Content",
      name: "studioCultureLeft",
      type: "text",
      rows: "5",
      fieldset: "studioCulture"
    },
    {
      title: "Studio Culture Description",
      name: "studioCultureRight",
      type: "text",
      rows: "5",
      fieldset: "studioCulture"
    }
  ],
  preview: {
    select: {
      title: "title"
    },
    prepare({ title = "" }) {
      return {
        title
      };
    }
  }
};
