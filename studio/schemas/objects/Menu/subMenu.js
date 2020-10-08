export default {
  type: "object",
  name: "submenu",
  title: "Sub Menu",
  fields: [
    {
      title: "Sub-Menu-Title",
      name: "menus",
      type: "titleslug",
      // of: [{ type: "titleslug" }]
    },
    {
      name: "secondarysubmenu",
      title: "Secondary Sub Menu",
      type: "array",
      of: [{ type: "secondarysubmenu" }],
    },
  ],
  preview: {
    select: {
      menus: "menus",
    },
    prepare(data) {
      return {
        title: data.menus.title,
        subtitle: data.menus.slug,
      };
    },
  },
};
