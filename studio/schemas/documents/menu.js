import MdMenu from "react-icons/lib/md/menu";
export default {
  name: "menu",
  type: "document",
  title: "Menu",
  icon: MdMenu,
  fields: [
    {
      title: "Menu Name",
      name: "name",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",

      description:
        "Some frontend will require a slug to be set to be able to show the menu",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      title: "Responsiveness",
      name: "responsiveness",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "radio",
        list: [
          { title: "Desktop", value: "desktop" },
          { title: "Tablet", value: "tablet" },
          { title: "Mobile", value: "mobile" },
        ],
      },
    },
    {
      title: "Sub Menu",
      name: "submenu",
      type: "array",
      of: [{ type: "submenu" }],
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
