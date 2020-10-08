import React from "react";
// import getYouTubeId from "get-youtube-id";
// import YouTube from "react-youtube";

const Preview = ({ value }) => {
  const { height } = value;
  //const id = getYouTubeId(url);
  return (
    <hr
      style={{
        height: { height }
      }}
    />
  );
};

export default {
  name: "line",
  type: "object",
  title: "Horizontal Line",
  fields: [
    {
      name: "height",
      type: "string",
      title: "Line Height"
    }
  ],
  preview: {
    select: {
      height: "height"
    },
    component: Preview
  }
};
