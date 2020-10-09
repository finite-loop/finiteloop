import React from "react";

const FontSans = props => {
  console.log(props);
  return <span style={{ fontFamily: "sans-serif" }}>{props.children}</span>;
};

export default FontSans;
