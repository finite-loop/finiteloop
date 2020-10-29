import React from "react";

const FontSerif = props => {
  console.log(props);
  return <span style={{ fontFamily: "Times New Roman" }}>{props.children}</span>;
};

export default FontSerif;
