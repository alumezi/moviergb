import React, { Component } from "react";
import "./App.scss";
import Landing from "./ui/landing";
import Core from "./core/coreComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: true,
      url: ""
    };
  }

  onRouteChange = (route, url) => {
    this.setState({ route, url });
  };

  render() {
    return (
      <div className="main">
        {this.state.route ? (
          <Landing onRouteChange={this.onRouteChange} />
        ) : (
          <Core onRouteChange={this.onRouteChange} url={this.state.url} />
        )}
      </div>
    );
  }
}

export default App;
