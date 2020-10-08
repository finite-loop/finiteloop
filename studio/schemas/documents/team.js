import MdPerson from "react-icons/lib/md/person";

export default {
  type: "document",
  name: "team",
  title: "Team",
  icon: MdPerson,
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      title: "Role",
      name: "role",
      type: "string",
    },
    {
      title: "Experience",
      name: "experience",
      type: "string",
    },
    {
      title: "Projects",
      name: "projects",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "Image",
      name: "image",
      type: "figure",
    },
    {
      title: "Bio",
      name: "bio",
      type: "bioPortableText",
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
      title: "Facebook Profile",
      name: "facebook",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "image",
    },
  },
};
