import { MdImage } from "react-icons/lib/md";

export default {
  name: "figure",
  title: "Image",
  type: "image",
  icon: MdImage,
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: "Caption",
      name: "caption",
      type: "string",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      validation: (Rule) =>
        Rule.error("You have to fill out the alternative text.").required(),
      description: "Important for SEO and accessiblity.",
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "caption",
    },
  },
};
