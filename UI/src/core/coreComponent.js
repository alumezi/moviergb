import React, { Component } from "react";
import "../style/coreStyle.css";
import Color from "./color";
import MainPoster from "./mainPoster";

class App extends Component {
  constructor() {
    super();
    this.state = {
      arrayOfColors: [
        "rgb(34,34,34)",
        "rgb(84,34,34)",
        "rgb(34,54,34)",
        "rgb(34,34,311)",
        "white",
        "black",
        "aquamarine",
        "brown",
        "green",
        "teal"
      ]
    };
  }

  render() {
    return (
      <div className="ui">
        <MainPoster
          props={this.props.url}
          onRouteChange={this.props.onRouteChange}
        />

        <div className="colorContainer">
          {this.state.arrayOfColors.map(item => {
            return <Color props={item} key={item} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
