import React from "react";

const Highlight = props => {
  console.log(props);
  return <span style={{ backgroundColor: "#E4FC5B" }}>{props.children}</span>;
};

export default Highlight;
