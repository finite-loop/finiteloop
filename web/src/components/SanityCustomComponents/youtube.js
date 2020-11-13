import React from "react"
// import getYouTubeId from "get-youtube-id";
// import YouTube from "react-youtube";

const Youtube = props => {
  const url = props.node.url

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "15px",
      }}
    >
      <iframe
        width="560"
        height="315"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={`video ${url}`}
      ></iframe>
    </div>
  )
}

export default Youtube
