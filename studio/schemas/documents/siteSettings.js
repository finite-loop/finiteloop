export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",

  fields: [
    {
      title: "Site Title",
      name: "siteTitle",
      type: "string",
    },
    {
      title: "Site Long Title",
      name: "siteLongTitle",
      type: "text",
    },
    {
      title: "Site Url",
      name: "siteUrl",
      type: "url",
    },
    {
      title: "Site Description",
      name: "siteDesc",
      type: "text",
      rows: "5",
    },
    {
      title: "Logo",
      name: "logo",
      type: "figure",
    },
    {
      title: "Trademark",
      name: "trademark",
      type: "text",
      rows: "2",
    },
    {
      title: "Intro Text",
      name: "introText",
      type: "text",
      rows: "5",
    },
    {
      title: "Intro Text 2",
      name: "introText2",
      type: "text",
      rows: "5",
    },
    {
      title: "Services",
      name: "services",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "Offering Text",
      name: "offeringText",
      type: "text",
      rows: "5",
    },
    {
      title: "Linkedin Profile",
      name: "linkedin",
      type: "url",
    },
    {
      title: "Twitter Handle",
      name: "twitter",
      type: "url",
    },
    {
      title: "Github Profile",
      name: "github",
      type: "url",
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
  ],
};
