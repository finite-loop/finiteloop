import React from "react";
// import getYouTubeId from "get-youtube-id";
// import YouTube from "react-youtube";
import InstagramEmbed from "react-instagram-embed";

const Preview = ({ value }) => {
  const { url } = value;
  //const id = getYouTubeId(url);
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <InstagramEmbed
        url={url}
        maxWidth="100%"
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>
  );
};

export default {
  name: "instagram",
  type: "object",
  title: "Add Instagam post",
  fields: [
    {
      name: "url",
      type: "url",
      title: "Instagram post URL"
    }
  ],
  preview: {
    select: {
      url: "url"
    },
    component: Preview
  }
};
