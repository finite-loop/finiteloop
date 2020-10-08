import React from "react";
// import getYouTubeId from "get-youtube-id";
// import YouTube from "react-youtube";
import { FaYoutube } from "react-icons/lib/fa";
const Preview = ({ value }) => {
  const { url } = value;
  //const id = getYouTubeId(url);
  return (
    <iframe
      width="560"
      height="315"
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default {
  name: "youtube",
  type: "object",
  title: "YouTube Embed",
  icon: FaYoutube,
  fields: [
    {
      name: "url",
      type: "url",
      title: "YouTube video URL"
    }
  ],
  preview: {
    select: {
      url: "url"
    },
    component: Preview
  }
};
