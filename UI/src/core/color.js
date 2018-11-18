import React from "react";
import "../style/coreStyle.css";

const mainPoster = props => {
  let divStyle = {
    backgroundColor: props.props
  };

  return <div style={divStyle} className="color" />;
};

export default mainPoster;
