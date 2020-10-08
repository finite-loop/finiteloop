export default {
  type: "object",
  name: "secondarysubmenu",
  title: "Secondary Sub Menu",
  fields: [
    {
      title: "Sub-Menu-Title",
      name: "menus",
      type: "titleslug",
      // of: [{ type: "titleslug" }]
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
