import React from "react";
import { FaPaperclip } from "react-icons/lib/fa";

const highlightIcon = () => <span style={{ fontWeight: "bold" }}>H</span>;
const highlightRender = (props) => (
  <span style={{ backgroundColor: "yellow" }}>{props.children}</span>
);

const fontIcon = () => <span style={{ fontWeight: "bold" }}>Font-sans</span>;
const fontRender = (props) => (
  <span style={{ fontFamily: "sans-serif" }}>{props.children}</span>
);

const fontSerifIcon = () => (
  <span style={{ fontWeight: "bold" }}>Font-Serif</span>
);
const fontSerifRender = (props) => (
  <span style={{ fontFamily: "Times New Roman" }}>{props.children}</span>
);

export default {
  title: "Blog Portable Text",
  name: "blogPortableText",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        { title: "H6", value: "h6" },
        { title: "Quote", value: "blockquote" },
      ],

      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          {
            title: "Highlight",
            value: "highlight",
            blockEditor: {
              icon: highlightIcon,
              render: highlightRender,
            },
          },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
          { title: "Code", value: "code" },
          {
            title: "Font-sans",
            value: "fontsans",
            blockEditor: {
              icon: fontIcon,
              render: fontRender,
            },
          },
          {
            title: "Font-serif",
            value: "fontserif",
            blockEditor: {
              icon: fontSerifIcon,
              render: fontSerifRender,
            },
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
          {
            name: "internalLink",
            type: "object",
            title: "Internal link",
            blockEditor: {
              icon: FaPaperclip,
            },
            fields: [
              {
                name: "reference",
                type: "reference",
                to: [
                  { type: "post" },
                  // other types you may want to link to
                ],
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: "youtube",
    },
    {
      type: "figure",
    },
    {
      type: "line",
    },
    {
      type: "tweet",
    },
    {
      type: "instagram",
    },
    {
      type: "code",
    },
  ],
};
