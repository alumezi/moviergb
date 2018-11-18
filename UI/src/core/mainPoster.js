import React from "react";
import "../style/coreStyle.css";

const mainPoster = props => {
  return (
    <div className="mainPoster">
      <button onClick={() => props.onRouteChange(true, "")}>Back</button>
      <img alt="moviePoster" src={props.props} />
    </div>
  );
};

export default mainPoster;
