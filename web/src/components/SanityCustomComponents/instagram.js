import React from "react";
import InstagramEmbed from "react-instagram-embed";

const Instagram = props => {
  const url = props.node.url;

  console.log();

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

export default Instagram;
