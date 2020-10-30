import React from "react";

const HorizontalLine = props => {
  const height = props.node.height;

  console.log(props);

  return (
    <hr
      style={{
        height: { height }
      }}
    />
  );
};

export default HorizontalLine;
